/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode

import android.Manifest
import android.view.View
import com.scandit.datacapture.barcode.capture.*
import com.scandit.datacapture.barcode.selection.capture.*
import com.scandit.datacapture.barcode.tracking.capture.*
import com.scandit.datacapture.barcode.tracking.data.TrackedBarcode
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingAdvancedOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingAdvancedOverlayListener
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlayListener
import com.scandit.datacapture.cordova.barcode.actions.*
import com.scandit.datacapture.cordova.barcode.callbacks.BarcodeCallbackContainer
import com.scandit.datacapture.cordova.barcode.callbacks.BarcodeCaptureCallback
import com.scandit.datacapture.cordova.barcode.data.*
import com.scandit.datacapture.cordova.barcode.data.defaults.SerializableBarcodeDefaults
import com.scandit.datacapture.cordova.barcode.errors.ErrorTrackedBarcodeNotFound
import com.scandit.datacapture.cordova.barcode.factories.BarcodeCaptureActionFactory
import com.scandit.datacapture.cordova.barcode.handlers.BarcodeCaptureHandler
import com.scandit.datacapture.cordova.barcode.tracking.callbacks.BarcodeSelectionCallback
import com.scandit.datacapture.cordova.barcode.tracking.callbacks.BarcodeTrackingAdvancedOverlayCallback
import com.scandit.datacapture.cordova.barcode.tracking.callbacks.BarcodeTrackingBasicOverlayCallback
import com.scandit.datacapture.cordova.barcode.tracking.callbacks.BarcodeTrackingCallback
import com.scandit.datacapture.cordova.barcode.tracking.handlers.BarcodeSelectionHandler
import com.scandit.datacapture.cordova.barcode.tracking.handlers.BarcodeTrackingAdvancedOverlayHandler
import com.scandit.datacapture.cordova.barcode.tracking.handlers.BarcodeTrackingBasicOverlayHandler
import com.scandit.datacapture.cordova.barcode.tracking.handlers.BarcodeTrackingHandler
import com.scandit.datacapture.cordova.barcode.utils.AdvancedOverlayViewPool
import com.scandit.datacapture.cordova.core.ScanditCaptureCore
import com.scandit.datacapture.cordova.core.actions.ActionSend
import com.scandit.datacapture.cordova.core.communication.CameraPermissionGrantedListener
import com.scandit.datacapture.cordova.core.communication.ModeDeserializersProvider
import com.scandit.datacapture.cordova.core.data.SerializableFinishModeCallbackData
import com.scandit.datacapture.cordova.core.errors.InvalidActionNameError
import com.scandit.datacapture.cordova.core.errors.JsonParseError
import com.scandit.datacapture.cordova.core.factories.ActionFactory
import com.scandit.datacapture.cordova.core.handlers.ActionsHandler
import com.scandit.datacapture.cordova.core.handlers.CameraPermissionsActionsHandlerHelper
import com.scandit.datacapture.cordova.core.utils.successAndKeepCallback
import com.scandit.datacapture.cordova.core.workers.UiWorker
import com.scandit.datacapture.core.capture.serialization.DataCaptureModeDeserializer
import com.scandit.datacapture.core.common.geometry.Anchor
import com.scandit.datacapture.core.common.geometry.MeasureUnit
import com.scandit.datacapture.core.common.geometry.PointWithUnit
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.core.json.JsonValue
import com.scandit.datacapture.core.ui.style.Brush
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.json.JSONArray
import org.json.JSONObject

class ScanditBarcodeCapture :
    CordovaPlugin(),
    BarcodeCaptureListener,
    BarcodeTrackingListener,
    BarcodeSelectionListener,
    BarcodeTrackingBasicOverlayListener,
    BarcodeTrackingAdvancedOverlayListener,
    BarcodeActionsListeners,
    BarcodeCaptureDeserializerListener,
    BarcodeTrackingDeserializerListener,
    BarcodeSelectionDeserializerListener,
    CameraPermissionGrantedListener,
    ModeDeserializersProvider {

    private val actionFactory: ActionFactory = BarcodeCaptureActionFactory(this)
    private val actionsHandler: ActionsHandler = ActionsHandler(
        actionFactory, CameraPermissionsActionsHandlerHelper(actionFactory)
    )

    private val barcodeCallbacks: BarcodeCallbackContainer = BarcodeCallbackContainer()
    private val barcodeCaptureHandler: BarcodeCaptureHandler = BarcodeCaptureHandler(this)
    private val barcodeTrackingHandler: BarcodeTrackingHandler = BarcodeTrackingHandler(this)
    private val barcodeTrackingBasicOverlayHandler = BarcodeTrackingBasicOverlayHandler(this)
    private val barcodeSelectionHandler = BarcodeSelectionHandler(this)
    private val barcodeTrackingAdvancedOverlayHandler = BarcodeTrackingAdvancedOverlayHandler(this)

    private var lastBarcodeCaptureEnabledState: Boolean = false
    private var lastBarcodeTrackingEnabledState: Boolean = false
    private var lastBarcodeSelectionEnabledState: Boolean = false

    private val uiWorker = UiWorker()

    override fun pluginInitialize() {
        super.pluginInitialize()
        ScanditCaptureCore.addPlugin(serviceName)

        if (cordova.hasPermission(Manifest.permission.CAMERA)) {
            onCameraPermissionGranted()
        }
    }

    override fun onStop() {
        barcodeCallbacks.forceRelease()

        lastBarcodeCaptureEnabledState = barcodeCaptureHandler.barcodeCapture?.isEnabled ?: false
        barcodeCaptureHandler.barcodeCapture?.isEnabled = false

        lastBarcodeTrackingEnabledState = barcodeTrackingHandler.barcodeTracking?.isEnabled ?: false
        barcodeTrackingHandler.barcodeTracking?.isEnabled = false

        lastBarcodeSelectionEnabledState =
            barcodeSelectionHandler.barcodeSelection?.isEnabled ?: false
        barcodeSelectionHandler.barcodeSelection?.isEnabled = false
    }

    override fun onStart() {
        barcodeCaptureHandler.barcodeCapture?.isEnabled = lastBarcodeCaptureEnabledState
        barcodeTrackingHandler.barcodeTracking?.isEnabled = lastBarcodeTrackingEnabledState
        barcodeSelectionHandler.barcodeSelection?.isEnabled = lastBarcodeSelectionEnabledState
    }

    override fun onReset() {
        barcodeCaptureHandler.disposeCurrent()
        barcodeTrackingHandler.disposeCurrent()
        barcodeSelectionHandler.disposeCurrent()
        barcodeTrackingBasicOverlayHandler.disposeCurrent()
        barcodeTrackingAdvancedOverlayHandler.disposeCurrent()
        barcodeCallbacks.disposeAll()
    }

    override fun execute(
        action: String,
        args: JSONArray,
        callbackContext: CallbackContext
    ): Boolean {
        return try {
            actionsHandler.addAction(action, args, callbackContext)
        } catch (e: InvalidActionNameError) {
            println(e)
            false
        } catch (e: Exception) {
            println(e)
            true
        }
    }

    //region BarcodeCaptureListener
    override fun onSessionUpdated(
        barcodeCapture: BarcodeCapture,
        session: BarcodeCaptureSession,
        data: FrameData
    ) {
        barcodeCallbacks.barcodeCaptureCallback?.onSessionUpdated(barcodeCapture, session, data)
    }

    override fun onBarcodeScanned(
        barcodeCapture: BarcodeCapture,
        session: BarcodeCaptureSession,
        data: FrameData
    ) {
        barcodeCallbacks.barcodeCaptureCallback?.onBarcodeScanned(barcodeCapture, session, data)
    }
    //endregion

    //region BarcodeTrackingListener
    override fun onSessionUpdated(
        mode: BarcodeTracking,
        session: BarcodeTrackingSession,
        data: FrameData
    ) {
        barcodeCallbacks.barcodeTrackingCallback?.onSessionUpdated(mode, session)
    }
    //endregion

    //region BarcodeTrackingBasicOverlayListener
    override fun brushForTrackedBarcode(
        overlay: BarcodeTrackingBasicOverlay,
        trackedBarcode: TrackedBarcode
    ): Brush? {
        return barcodeCallbacks.barcodeTrackingBasicOverlayCallback?.brushForTrackedBarcode(
            overlay, trackedBarcode, switchToOverlayWorker = true
        )
    }

    override fun onTrackedBarcodeTapped(
        overlay: BarcodeTrackingBasicOverlay,
        trackedBarcode: TrackedBarcode
    ) {
        barcodeCallbacks.barcodeTrackingBasicOverlayCallback?.onTrackedBarcodeTapped(
            trackedBarcode, switchToOverlayWorker = true
        )
    }
    //endregion

    //region BarcodeTrackingAdvancedOverlayListener
    override fun viewForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode
    ): View? {
        return barcodeCallbacks.barcodeTrackingAdvancedOverlayCallback?.viewForTrackedBarcode(
            overlay, trackedBarcode, switchToOverlayWorker = true
        )
    }

    override fun offsetForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode,
        view: View
    ): PointWithUnit {
        return barcodeCallbacks.barcodeTrackingAdvancedOverlayCallback?.offsetForTrackedBarcode(
            overlay, trackedBarcode, switchToOverlayWorker = true
        ) ?: PointWithUnit(0f, 0f, MeasureUnit.PIXEL)
    }

    override fun anchorForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode
    ): Anchor {
        return barcodeCallbacks.barcodeTrackingAdvancedOverlayCallback?.anchorForTrackedBarcode(
            overlay, trackedBarcode, switchToOverlayWorker = true
        ) ?: Anchor.CENTER
    }
    //endregion

    //region CameraPermissionGrantedListener
    override fun onCameraPermissionGranted() {
        actionsHandler.onCameraPermissionGranted()
    }
    //endregion

    //region ModeDeserializersProvider
    override fun provideModeDeserializers(): List<DataCaptureModeDeserializer> = listOf(
        BarcodeCaptureDeserializer().also {
            it.listener = this
        },
        BarcodeTrackingDeserializer().also {
            it.listener = this
        },
        BarcodeSelectionDeserializer().also {
            it.listener = this
        }
    )
    //endregion

    //region BarcodeCaptureDeserializerListener
    override fun onModeDeserializationFinished(
        deserializer: BarcodeCaptureDeserializer,
        mode: BarcodeCapture,
        json: JsonValue
    ) {
        barcodeCaptureHandler.attachBarcodeCapture(mode)
    }
    //endregion

    //region BarcodeTrackingDeserializerListener
    override fun onModeDeserializationFinished(
        deserializer: BarcodeTrackingDeserializer,
        mode: BarcodeTracking,
        json: JsonValue
    ) {
        if (json.contains("enabled")) {
            mode.isEnabled = json.requireByKeyAsBoolean("enabled")
        }
        barcodeTrackingHandler.attachBarcodeTracking(mode)
    }

    //region BarcodeTrackingDeserializerListener
    override fun onModeDeserializationFinished(
        deserializer: BarcodeSelectionDeserializer,
        mode: BarcodeSelection,
        json: JsonValue
    ) {
        if (json.contains("enabled")) {
            mode.isEnabled = json.requireByKeyAsBoolean("enabled")
        }
        barcodeSelectionHandler.attachBarcodeSelection(mode)
    }

    override fun onBasicOverlayDeserializationStarted(
        deserializer: BarcodeTrackingDeserializer,
        overlay: BarcodeTrackingBasicOverlay,
        json: JsonValue
    ) {
        barcodeTrackingBasicOverlayHandler.attachOverlay(overlay)
    }

    override fun onAdvancedOverlayDeserializationStarted(
        deserializer: BarcodeTrackingDeserializer,
        overlay: BarcodeTrackingAdvancedOverlay,
        json: JsonValue
    ) {
        barcodeTrackingAdvancedOverlayHandler.attachOverlay(overlay)
    }
    //endregion

    //region BarcodeSelectionListener
    override fun onSelectionUpdated(
        barcodeSelection: BarcodeSelection,
        session: BarcodeSelectionSession,
        frameData: FrameData?
    ) {
        barcodeCallbacks.barcodeSelectionCallback?.onSelectionUpdated(barcodeSelection, session)
    }

    override fun onSessionUpdated(
        barcodeSelection: BarcodeSelection,
        session: BarcodeSelectionSession,
        frameData: FrameData?
    ) {
        barcodeCallbacks.barcodeSelectionCallback?.onSessionUpdated(barcodeSelection, session)
    }
    //endregion

    //region Action callbacks
    override fun onJsonParseError(error: Throwable, callbackContext: CallbackContext) {
        JsonParseError(error.message).sendResult(callbackContext)
    }

    //region ActionInjectDefaults.ResultListener
    override fun onBarcodeDefaults(
        defaults: SerializableBarcodeDefaults,
        callbackContext: CallbackContext
    ) {
        callbackContext.success(defaults.toJson())
    }
    //endregion

    //region ActionSubscribeBarcodeCapture.ResultListener
    override fun onSubscribeToBarcodeCapture(callbackContext: CallbackContext) {
        barcodeCallbacks.setBarcodeCaptureCallback(
            BarcodeCaptureCallback(actionsHandler, callbackContext)
        )
        callbackContext.successAndKeepCallback()
    }
    //endregion

    //region ActionSubscribeBarcodeTracking.ResultListener
    override fun onSubscribeToBarcodeTracking(callbackContext: CallbackContext) {
        barcodeCallbacks.setBarcodeTrackingCallback(
            BarcodeTrackingCallback(actionsHandler, callbackContext)
        )
        callbackContext.successAndKeepCallback()
    }
    //endregion

    // region ActionSubscribeBarcodeTracking.ResultListener
    override fun onSubscribeToBarcodeSelection(callbackContext: CallbackContext) {
        barcodeCallbacks.setBarcodeSelectionCallback(
            BarcodeSelectionCallback(actionsHandler, callbackContext)
        )
        callbackContext.successAndKeepCallback()
    }
    //endregion

    //region ActionSend.ResultListener
    override fun onSendAction(
        actionName: String,
        message: JSONObject,
        callbackContext: CallbackContext
    ) {
        callbackContext.successAndKeepCallback(message)
    }
    //endregion

    //region ActionFinishCallback.ResultListener
    override fun onFinishBarcodeCaptureMode(
        finishData: SerializableFinishModeCallbackData?,
        callbackContext: CallbackContext
    ) {
        barcodeCallbacks.onFinishBarcodeCaptureAction(finishData)
    }

    override fun onFinishBarcodeTrackingMode(
        finishData: SerializableFinishModeCallbackData?,
        callbackContext: CallbackContext
    ) {
        barcodeCallbacks.onFinishBarcodeTrackingAction(finishData)
    }

    override fun onFinishBarcodeSelectionMode(
        finishData: SerializableFinishModeCallbackData?,
        callbackContext: CallbackContext
    ) {
        barcodeCallbacks.onFinishBarcodeSelectionAction(finishData)
    }

    override fun onFinishBasicOverlay(
        finishData: SerializableFinishBasicOverlayCallbackData?,
        callbackContext: CallbackContext
    ) {
        barcodeCallbacks.onFinishBasicOverlayAction(finishData)
    }

    override fun onFinishAdvancedOverlayView(
        finishData: SerializableFinishAdvancedOverlayViewData?,
        callbackContext: CallbackContext
    ) {
        barcodeCallbacks.onFinishAdvancedOverlayViewAction(finishData)
    }

    override fun onFinishAdvancedOverlayOffset(
        finishData: SerializableFinishAdvancedOverlayOffsetData?,
        callbackContext: CallbackContext
    ) {
        barcodeCallbacks.onFinishAdvancedOverlayOffsetAction(finishData)
    }

    override fun onFinishAdvancedOverlayAnchor(
        finishData: SerializableFinishAdvancedOverlayAnchorData?,
        callbackContext: CallbackContext
    ) {
        barcodeCallbacks.onFinishAdvancedOverlayAnchorAction(finishData)
    }

    override fun onFinishAdvancedOverlayTap(
        callbackContext: CallbackContext
    ) {
        barcodeCallbacks.onFinishAdvancedOverlayTapAction()
    }
    //endregion

    //region ActionSubscribeBasicOverlay.ResultListener
    override fun onSubscribeToBasicOverlay(callbackContext: CallbackContext) {
        barcodeCallbacks.setBarcodeTrackingBasicOverlayCallback(
            BarcodeTrackingBasicOverlayCallback(actionsHandler, callbackContext)
        )
        callbackContext.successAndKeepCallback()
    }
    //endregion

    //region ActionClearTrackedBarcodeBrushes.ResultListener
    override fun onClearTrackedBarcodeBrushes(callbackContext: CallbackContext) {
        val barcodeTrackingBasicOverlayCallback =
            barcodeCallbacks.barcodeTrackingBasicOverlayCallback
                ?: return callbackContext.success()
        val overlay = barcodeTrackingBasicOverlayHandler.barcodeTrackingBasicOverlay
            ?: return callbackContext.success()

        barcodeTrackingBasicOverlayCallback.clearBrushes(overlay, switchToOverlayWorker = true)
        callbackContext.success()
    }
    //endregion

    //region ActionSetBrushForTrackedBarcode.ResultListener
    override fun onBrushForTrackedBarcode(
        data: SerializableBrushAndTrackedBarcode,
        callbackContext: CallbackContext
    ) {
        val overlay = barcodeTrackingBasicOverlayHandler.barcodeTrackingBasicOverlay
            ?: return callbackContext.success()
        val barcodeTrackingCallback = barcodeCallbacks.barcodeTrackingCallback
            ?: return callbackContext.success()
        val barcodeTrackingBasicOverlayCallback =
            barcodeCallbacks.barcodeTrackingBasicOverlayCallback
                ?: return callbackContext.success()

        val trackedBarcode = barcodeTrackingCallback.getTrackedBarcodeFromLatestSession(
            data.trackedBarcodeId, data.sessionFrameSequenceId
        )
        if (trackedBarcode == null) {
            ErrorTrackedBarcodeNotFound().sendResult(callbackContext)
        } else {
            barcodeTrackingBasicOverlayCallback.setBrushForTrackedBarcode(
                trackedBarcode, data.brush, overlay, switchToOverlayWorker = true
            )
            callbackContext.success()
        }
    }

    override fun onGetCountForBarcodeInBarcodeSelectionSession(
        data: SerializableBarcodeSelectionSessionData,
        callbackContext: CallbackContext
    ) {
        callbackContext.success(
            barcodeCallbacks.barcodeSelectionCallback?.getBarcodeCount(
                data.selectionIdentifier
            ) ?: 0
        )
    }

    override fun onUnfreezeCameraInBarcodeSelection(callbackContext: CallbackContext) {
        barcodeSelectionHandler.barcodeSelection?.unfreezeCamera()
        callbackContext.success()
    }

    override fun onResetBarcodeSelection(callbackContext: CallbackContext) {
        barcodeSelectionHandler.barcodeSelection?.reset()
        callbackContext.success()
    }

    override fun onResetBarcodeCaptureSession(callbackContext: CallbackContext) {
        barcodeCallbacks.barcodeCaptureCallback?.latestSession()?.reset()
        callbackContext.success()
    }

    override fun onResetBarcodeTrackingSession(callbackContext: CallbackContext) {
        barcodeCallbacks.barcodeTrackingCallback?.latestSession()?.reset()
        callbackContext.success()
    }

    override fun onResetBarcodeSelectionSession(callbackContext: CallbackContext) {
        barcodeCallbacks.barcodeSelectionCallback?.latestSession()?.reset()
        callbackContext.success()
    }
    //endregion

    //region ActionSubscribeAdvancedOverlay.ResultListener
    override fun onSubscribeToAdvancedOverlay(callbackContext: CallbackContext) {
        barcodeCallbacks.setBarcodeTrackingAdvancedOverlayCallback(
            BarcodeTrackingAdvancedOverlayCallback(
                actionsHandler,
                callbackContext,
                AdvancedOverlayViewPool(cordova.context),
                uiWorker
            )
        )
        callbackContext.successAndKeepCallback()
    }
    //endregion

    //region ActionSetViewForTrackedBarcode.ResultListener
    override fun onViewForTrackedBarcode(
        data: SerializableAdvancedOverlayViewActionData,
        callbackContext: CallbackContext
    ) {
        getAdvancedOverlayActionDoneData()?.let { (overlay, trackingCallback, overlayCallback) ->
            val trackedBarcode = trackingCallback.getTrackedBarcodeFromLatestSession(
                data.trackedBarcodeId, data.sessionFrameSequenceId
            ) ?: return ErrorTrackedBarcodeNotFound().sendResult(callbackContext)

            overlayCallback.setViewForTrackedBarcode(
                trackedBarcode, data.view, overlay, switchToOverlayWorker = true
            )
        }
        callbackContext.success()
    }
    //endregion

    //region ActionSetOffsetForTrackedBarcode.ResultListener
    override fun onOffsetForTrackedBarcode(
        data: SerializableAdvancedOverlayOffsetActionData,
        callbackContext: CallbackContext
    ) {
        getAdvancedOverlayActionDoneData()?.let { (overlay, trackingCallback, overlayCallback) ->
            val trackedBarcode = trackingCallback.getTrackedBarcodeFromLatestSession(
                data.trackedBarcodeId, data.sessionFrameSequenceId
            ) ?: return ErrorTrackedBarcodeNotFound().sendResult(callbackContext)

            overlayCallback.setOffsetForTrackedBarcode(
                trackedBarcode, data.offset, overlay, switchToOverlayWorker = true
            )
        }
        callbackContext.success()
    }
    //endregion

    //region ActionSetAnchorForTrackedBarcode.ResultListener
    override fun onAnchorForTrackedBarcode(
        data: SerializableAdvancedOverlayAnchorActionData,
        callbackContext: CallbackContext
    ) {
        getAdvancedOverlayActionDoneData()?.let { (overlay, trackingCallback, overlayCallback) ->
            val trackedBarcode = trackingCallback.getTrackedBarcodeFromLatestSession(
                data.trackedBarcodeId, data.sessionFrameSequenceId
            ) ?: return ErrorTrackedBarcodeNotFound().sendResult(callbackContext)

            overlayCallback.setAnchorForTrackedBarcode(
                trackedBarcode, data.anchor, overlay, switchToOverlayWorker = true
            )
        }
        callbackContext.success()
    }
    //endregion

    //region ActionClearTrackedBarcodeViews.ResultListener
    override fun onClearTrackedBarcodeViews(callbackContext: CallbackContext) {
        getAdvancedOverlayActionDoneData()?.let { (overlay, _, overlayCallback) ->
            overlayCallback.clearViews(overlay, switchToOverlayWorker = true)
        }
        callbackContext.success()
    }
    //endregion
    //endregion

    private fun getAdvancedOverlayActionDoneData(): Triple<
        BarcodeTrackingAdvancedOverlay,
        BarcodeTrackingCallback,
        BarcodeTrackingAdvancedOverlayCallback>? {
        val overlay = barcodeTrackingAdvancedOverlayHandler.barcodeTrackingAdvancedOverlay
            ?: return null
        val barcodeTrackingCallback = barcodeCallbacks.barcodeTrackingCallback ?: return null
        val overlayCallback = barcodeCallbacks.barcodeTrackingAdvancedOverlayCallback ?: return null

        return Triple(overlay, barcodeTrackingCallback, overlayCallback)
    }
}

interface BarcodeActionsListeners :
    ActionInjectDefaults.ResultListener,
    ActionSubscribeBarcodeCapture.ResultListener,
    ActionSubscribeBarcodeTracking.ResultListener,
    ActionSubscribeBarcodeSelection.ResultListener,
    ActionFinishCallback.ResultListener,
    ActionSubscribeBasicOverlay.ResultListener,
    ActionSubscribeAdvancedOverlay.ResultListener,
    ActionClearTrackedBarcodeBrushes.ResultListener,
    ActionSetBrushForTrackedBarcode.ResultListener,
    ActionGetCountForBarcodeInBarcodeSelectionSession.ResultListener,
    ActionUnfreezeCameraInBarcodeSelection.ResultListener,
    ActionResetBarcodeSelection.ResultListener,
    ActionResetBarcodeCaptureSession.ResultListener,
    ActionResetBarcodeTrackingSession.ResultListener,
    ActionResetBarcodeSelectionSession.ResultListener,
    ActionSend.ResultListener,
    ActionSetViewForTrackedBarcode.ResultListener,
    ActionSetOffsetForTrackedBarcode.ResultListener,
    ActionSetAnchorForTrackedBarcode.ResultListener,
    ActionClearTrackedBarcodeViews.ResultListener
