/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core

import android.Manifest
import android.content.pm.PackageManager
import com.scandit.datacapture.cordova.core.actions.ActionConvertPointCoordinates
import com.scandit.datacapture.cordova.core.actions.ActionConvertQuadrilateralCoordinates
import com.scandit.datacapture.cordova.core.actions.ActionCreateContextAndView
import com.scandit.datacapture.cordova.core.actions.ActionDisposeContext
import com.scandit.datacapture.cordova.core.actions.ActionEmitFeedback
import com.scandit.datacapture.cordova.core.actions.ActionGetCameraState
import com.scandit.datacapture.cordova.core.actions.ActionGetIsTorchAvailable
import com.scandit.datacapture.cordova.core.actions.ActionInjectDefaults
import com.scandit.datacapture.cordova.core.actions.ActionSend
import com.scandit.datacapture.cordova.core.actions.ActionSubscribeContext
import com.scandit.datacapture.cordova.core.actions.ActionSubscribeFrameSource
import com.scandit.datacapture.cordova.core.actions.ActionSubscribeView
import com.scandit.datacapture.cordova.core.actions.ActionUpdateContextAndView
import com.scandit.datacapture.cordova.core.actions.ActionViewHide
import com.scandit.datacapture.cordova.core.actions.ActionViewResizeMove
import com.scandit.datacapture.cordova.core.actions.ActionViewShow
import com.scandit.datacapture.cordova.core.callbacks.CoreCallbackContainer
import com.scandit.datacapture.cordova.core.callbacks.DataCaptureContextCallback
import com.scandit.datacapture.cordova.core.callbacks.DataCaptureViewCallback
import com.scandit.datacapture.cordova.core.callbacks.FrameSourceCallback
import com.scandit.datacapture.cordova.core.communication.CameraPermissionGrantedListener
import com.scandit.datacapture.cordova.core.communication.ComponentDeserializersProvider
import com.scandit.datacapture.cordova.core.communication.ModeDeserializersProvider
import com.scandit.datacapture.cordova.core.data.ResizeAndMoveInfo
import com.scandit.datacapture.cordova.core.data.defaults.SerializableCoreDefaults
import com.scandit.datacapture.cordova.core.deserializers.Deserializers
import com.scandit.datacapture.cordova.core.deserializers.DeserializersProvider
import com.scandit.datacapture.cordova.core.errors.CameraPositionDeserializationError
import com.scandit.datacapture.cordova.core.errors.ContextDeserializationError
import com.scandit.datacapture.cordova.core.errors.InvalidActionNameError
import com.scandit.datacapture.cordova.core.errors.JsonParseError
import com.scandit.datacapture.cordova.core.errors.NoCameraAvailableError
import com.scandit.datacapture.cordova.core.errors.NoCameraWithPositionError
import com.scandit.datacapture.cordova.core.errors.NoViewToConvertPointError
import com.scandit.datacapture.cordova.core.errors.NoViewToConvertQuadrilateralError
import com.scandit.datacapture.cordova.core.factories.ActionFactory
import com.scandit.datacapture.cordova.core.factories.CaptureCoreActionFactory
import com.scandit.datacapture.cordova.core.handlers.ActionsHandler
import com.scandit.datacapture.cordova.core.handlers.CameraPermissionsActionsHandlerHelper
import com.scandit.datacapture.cordova.core.handlers.DataCaptureComponentsHandler
import com.scandit.datacapture.cordova.core.handlers.DataCaptureContextHandler
import com.scandit.datacapture.cordova.core.handlers.DataCaptureViewHandler
import com.scandit.datacapture.cordova.core.utils.successAndKeepCallback
import com.scandit.datacapture.cordova.core.workers.UiWorker
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.capture.DataCaptureContextListener
import com.scandit.datacapture.core.capture.serialization.DataCaptureModeDeserializer
import com.scandit.datacapture.core.common.ContextStatus
import com.scandit.datacapture.core.common.feedback.Feedback
import com.scandit.datacapture.core.common.geometry.Point
import com.scandit.datacapture.core.common.geometry.Quadrilateral
import com.scandit.datacapture.core.common.geometry.toJson
import com.scandit.datacapture.core.component.DataCaptureComponent
import com.scandit.datacapture.core.component.serialization.DataCaptureComponentDeserializer
import com.scandit.datacapture.core.json.JsonValue
import com.scandit.datacapture.core.source.Camera
import com.scandit.datacapture.core.source.FrameSource
import com.scandit.datacapture.core.source.FrameSourceListener
import com.scandit.datacapture.core.source.FrameSourceState
import com.scandit.datacapture.core.source.FrameSourceStateDeserializer
import com.scandit.datacapture.core.source.TorchStateDeserializer
import com.scandit.datacapture.core.source.serialization.FrameSourceDeserializer
import com.scandit.datacapture.core.source.serialization.FrameSourceDeserializerListener
import com.scandit.datacapture.core.source.toJson
import com.scandit.datacapture.core.ui.DataCaptureView
import com.scandit.datacapture.core.ui.DataCaptureViewListener
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.apache.cordova.PluginResult
import org.json.JSONArray
import org.json.JSONObject

class ScanditCaptureCore :
    CordovaPlugin(),
    DataCaptureContextListener,
    DataCaptureViewListener,
    CoreActionsListeners,
    DeserializersProvider,
    FrameSourceDeserializerListener,
    FrameSourceListener {

    companion object {
        private const val CODE_CAMERA_PERMISSIONS = 200
        private val PLUGIN_NAMES: MutableSet<String> = mutableSetOf()

        fun addPlugin(name: String) {
            if (name.startsWith("Scandit")) {
                PLUGIN_NAMES.add(name)
            }
        }
    }

    private val uiWorker = UiWorker()

    private val coreCallbacks: CoreCallbackContainer = CoreCallbackContainer()
    private val captureContextHandler = DataCaptureContextHandler(this)
    private val captureComponentsHandler = DataCaptureComponentsHandler()
    private val captureViewHandler = DataCaptureViewHandler(this, uiWorker)

    private var lastFrameSourceState: FrameSourceState = FrameSourceState.OFF

    private var latestFeedback: Feedback? = null

    private val plugins: MutableMap<String, CordovaPlugin?> = mutableMapOf()

    override val deserializers: Deserializers by lazy {
        Deserializers(
            cordova.context,
            retrieveAllModeDeserializers(),
            retrieveAllComponentDeserializers(),
            this
        )
    }
    private val actionFactory: ActionFactory by lazy {
        CaptureCoreActionFactory(
            cordova.context,
            this,
            this,
            captureContextHandler,
            captureComponentsHandler,
            captureViewHandler,
            uiWorker
        )
    }
    private val actionsHandler: ActionsHandler by lazy {
        ActionsHandler(
            actionFactory,
            CameraPermissionsActionsHandlerHelper(actionFactory, ::checkOrRequestCameraPermission)
        )
    }

    private fun retrieveAllModeDeserializers(): List<DataCaptureModeDeserializer> =
        getPlugins().filterIsInstance(ModeDeserializersProvider::class.java)
            .flatMap { it.provideModeDeserializers() }

    private fun retrieveAllComponentDeserializers(): List<DataCaptureComponentDeserializer> =
        getPlugins().filterIsInstance(ComponentDeserializersProvider::class.java)
            .flatMap { it.provideComponentDeserializers() }

    private fun getPlugins(): List<CordovaPlugin> = PLUGIN_NAMES.mapNotNull {
        plugins.getOrPut(it) { webView.pluginManager.getPlugin(it) }
    }

    override fun pluginInitialize() {
        captureViewHandler.attachWebView(webView.view, cordova.activity)
        checkCameraPermission()
    }

    override fun onStop() {
        lastFrameSourceState = captureContextHandler.camera?.desiredState ?: FrameSourceState.OFF
        captureContextHandler.camera?.switchToDesiredState(FrameSourceState.OFF)
        latestFeedback?.release()
    }

    override fun onStart() {
        if (checkCameraPermission()) {
            captureContextHandler.camera?.switchToDesiredState(lastFrameSourceState)
        }
    }

    override fun onReset() {
        captureContextHandler.disposeCurrent()
        captureViewHandler.disposeCurrent()
        captureComponentsHandler.disposeCurrent()
        coreCallbacks.disposeAll()
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

    private fun checkCameraPermission(): Boolean {
        val hasPermission = cordova.hasPermission(Manifest.permission.CAMERA)
        if (hasPermission) actionsHandler.onCameraPermissionGranted()
        return hasPermission
    }

    private fun checkOrRequestCameraPermission() {
        if (checkCameraPermission().not()) {
            cordova.requestPermission(this, CODE_CAMERA_PERMISSIONS, Manifest.permission.CAMERA)
        }
    }

    override fun onRequestPermissionResult(
        requestCode: Int,
        permissions: Array<out String>?,
        grantResults: IntArray?
    ) {
        if (requestCode == CODE_CAMERA_PERMISSIONS) {
            if (grantResults?.firstOrNull() == PackageManager.PERMISSION_GRANTED) {
                actionsHandler.onCameraPermissionGranted()
                notifyCameraPermissionGrantedToPlugins()
            } else {
                actionsHandler.onCameraPermissionDenied()
                notifyCameraPermissionDenied()
            }
        }
    }

    private fun notifyCameraPermissionGrantedToPlugins() {
        getPlugins().filterIsInstance(CameraPermissionGrantedListener::class.java).forEach {
            it.onCameraPermissionGranted()
        }
    }

    private fun notifyCameraPermissionDenied() {
        coreCallbacks.contextCallback?.onStatusChanged(
            JSONObject(
                mapOf(
                    "code" to 1032,
                    "isValid" to true,
                    "message" to "Camera Authorization Required"
                )
            )
        )
    }

    //region FrameSourceDeserializerListener
    override fun onFrameSourceDeserializationFinished(
        deserializer: FrameSourceDeserializer,
        frameSource: FrameSource,
        json: JsonValue
    ) {
        (frameSource as? Camera)?.apply {
            if (json.contains("desiredTorchState")) {
                desiredTorchState = TorchStateDeserializer.fromJson(
                    json.requireByKeyAsString("desiredTorchState")
                )
            }

            if (json.contains("desiredState")) {
                switchToDesiredState(
                    FrameSourceStateDeserializer.fromJson(
                        json.requireByKeyAsString("desiredState")
                    )
                )
            }

            this.addListener(this@ScanditCaptureCore)
        }
    }
    //endregion

    //region FrameSourceListener
    override fun onStateChanged(frameSource: FrameSource, newState: FrameSourceState) {
        coreCallbacks.frameSourceCallback?.onStateChanged(frameSource, newState)
    }
    //endregion

    //region DataCaptureContextListener
    override fun onStatusChanged(
        dataCaptureContext: DataCaptureContext,
        contextStatus: ContextStatus
    ) {
        coreCallbacks.contextCallback?.onStatusChanged(contextStatus)
    }

    override fun onObservationStarted(dataCaptureContext: DataCaptureContext) {
        coreCallbacks.contextCallback?.onObservationStarted(dataCaptureContext)
    }
    //endregion

    //region DataCaptureViewListener
    override fun onSizeChanged(width: Int, height: Int, screenRotation: Int) {
        coreCallbacks.viewCallback?.onSizeChanged(width, height, screenRotation)
    }
    //endregion

    //region Action callbacks
    override fun onJsonParseError(error: Throwable, callbackContext: CallbackContext) {
        JsonParseError(error.message).sendResult(callbackContext)
    }

    override fun onAdditionalActionRequired(
        actionName: String,
        args: JSONArray,
        callbackContext: CallbackContext
    ) {
        execute(actionName, args, callbackContext)
    }

    //region ActionInjectDefaults.ResultListener
    override fun onCoreDefaults(
        defaults: SerializableCoreDefaults,
        callbackContext: CallbackContext
    ) {
        callbackContext.success(defaults.toJson())
    }
    //endregion

    //region ActionCreateContextAndView.ResultListener
    override fun onCreateContextAndView(
        dataCaptureContext: DataCaptureContext,
        dataCaptureView: DataCaptureView?,
        dataCaptureComponents: List<DataCaptureComponent>,
        callbackContext: CallbackContext
    ) {
        captureContextHandler.attachDataCaptureContext(dataCaptureContext)
        dataCaptureView?.let { view ->
            captureViewHandler.attachDataCaptureView(view, cordova.activity)
        }
        captureComponentsHandler.attachDataCaptureComponents(dataCaptureComponents)
        callbackContext.success()
    }

    override fun onCreateContextAndViewError(
        error: Throwable,
        callbackContext: CallbackContext
    ) {
        ContextDeserializationError(error.message).sendResult(callbackContext)
    }
    //endregion

    //region ActionUpdateContextAndView.ResultListener
    override fun onUpdateContextAndView(
        dataCaptureContext: DataCaptureContext,
        dataCaptureView: DataCaptureView?,
        dataCaptureComponents: List<DataCaptureComponent>,
        callbackContext: CallbackContext
    ) {
        captureContextHandler.attachDataCaptureContext(dataCaptureContext)
        dataCaptureView?.let { view ->
            captureViewHandler.attachDataCaptureView(view, cordova.activity)
        }
        captureComponentsHandler.attachDataCaptureComponents(dataCaptureComponents)
        callbackContext.success()
    }

    override fun onUpdateContextAndViewError(
        error: Throwable,
        callbackContext: CallbackContext
    ) {
        ContextDeserializationError(error.message).sendResult(callbackContext)
    }
    //endregion

    //region ActionViewShow.ResultListener
    override fun onShowDataCaptureView(callbackContext: CallbackContext) {
        captureViewHandler.setVisible()
        callbackContext.success()
    }
    //endregion

    //region ActionViewHide.ResultListener
    override fun onHideDataCaptureView(callbackContext: CallbackContext) {
        captureViewHandler.setInvisible()
        callbackContext.success()
    }
    //endregion

    //region ActionViewResizeMove.ResultListener
    override fun onResizeAndMoveDataCaptureView(
        info: ResizeAndMoveInfo,
        callbackContext: CallbackContext
    ) {
        captureViewHandler.setResizeAndMoveInfo(info)
        callbackContext.success()
    }
    //endregion

    //region ActionDisposeContext.ResultListener
    override fun onDisposeDataCaptureContext(callbackContext: CallbackContext) {
        captureContextHandler.disposeCurrent()
        captureComponentsHandler.disposeCurrent()
        callbackContext.success()
    }
    //endregion

    //region ActionSubscribeContext.ResultListener
    override fun onSubscribeToDataCaptureContext(callbackContext: CallbackContext) {
        coreCallbacks.setContextCallback(
            DataCaptureContextCallback(actionsHandler, callbackContext)
        )
        callbackContext.successAndKeepCallback()
    }
    //endregion

    //region ActionSubscribeView.ResultListener
    override fun onSubscribeToDataCaptureView(callbackContext: CallbackContext) {
        coreCallbacks.setViewCallback(
            DataCaptureViewCallback(actionsHandler, callbackContext, uiWorker)
        )
        callbackContext.successAndKeepCallback()
    }
    //endregion

    //region ActionConvertPointCoordinates.ResultListener
    override fun onConvertPointCoordinates(
        point: Point,
        callbackContext: CallbackContext
    ) {
        callbackContext.success(point.toJson())
    }

    override fun onConvertPointCoordinatesNoViewError(callbackContext: CallbackContext) {
        NoViewToConvertPointError().sendResult(callbackContext)
    }
    //endregion

    //region ActionConvertQuadrilateralCoordinates.ResultListener
    override fun onConvertQuadrilateralCoordinates(
        quadrilateral: Quadrilateral,
        callbackContext: CallbackContext
    ) {
        callbackContext.success(quadrilateral.toJson())
    }

    override fun onConvertQuadrilateralCoordinatesNoViewError(callbackContext: CallbackContext) {
        NoViewToConvertQuadrilateralError().sendResult(callbackContext)
    }
    //endregion

    //region ActionGetCameraState.ResultListener
    override fun onGetCameraState(cameraState: FrameSourceState, callbackContext: CallbackContext) {
        callbackContext.success(cameraState.toJson())
    }

    override fun onNoCameraError(callbackContext: CallbackContext) {
        NoCameraAvailableError().sendResult(callbackContext)
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

    //region ActionEmitFeedback.ResultListener
    override fun onEmitFeedback(feedback: Feedback, callbackContext: CallbackContext) {
        latestFeedback?.release()
        feedback.emit()
        latestFeedback = feedback

        callbackContext.success()
    }

    //endregion

    //region ActionGetIsTorchAvailable.ResultListener
    override fun onGetIsTorchAvailable(
        isTorchAvailable: Boolean,
        callbackContext: CallbackContext
    ) {
        callbackContext.sendPluginResult(PluginResult(PluginResult.Status.OK, isTorchAvailable))
    }

    override fun onUnableToDeserializePositionError(
        action: String,
        callbackContext: CallbackContext
    ) {
        CameraPositionDeserializationError(action).sendResult(callbackContext)
    }

    override fun onWrongCameraPositionError(position: String, callbackContext: CallbackContext) {
        NoCameraWithPositionError(position).sendResult(callbackContext)
    }
    //endregion

    //region ActionSubscribeFrameSource.ResultListener
    override fun onSubscribeFrameSource(callbackContext: CallbackContext) {
        coreCallbacks.setFrameSourceCallback(
            FrameSourceCallback(actionsHandler, callbackContext, uiWorker)
        )
        callbackContext.successAndKeepCallback()
    }
    //endregion
    //endregion
}

interface CoreActionsListeners :
    ActionInjectDefaults.ResultListener,
    ActionCreateContextAndView.ResultListener,
    ActionUpdateContextAndView.ResultListener,
    ActionViewShow.ResultListener,
    ActionViewHide.ResultListener,
    ActionViewResizeMove.ResultListener,
    ActionDisposeContext.ResultListener,
    ActionSubscribeContext.ResultListener,
    ActionSubscribeView.ResultListener,
    ActionConvertPointCoordinates.ResultListener,
    ActionConvertQuadrilateralCoordinates.ResultListener,
    ActionGetCameraState.ResultListener,
    ActionSend.ResultListener,
    ActionEmitFeedback.ResultListener,
    ActionGetIsTorchAvailable.ResultListener,
    ActionSubscribeFrameSource.ResultListener
