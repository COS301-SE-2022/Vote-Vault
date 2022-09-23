/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.tracking.callbacks

import android.view.View
import android.view.ViewGroup
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import com.scandit.datacapture.barcode.tracking.data.TrackedBarcode
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingAdvancedOverlay
import com.scandit.datacapture.cordova.barcode.data.SerializableAdvancedOverlayView
import com.scandit.datacapture.cordova.barcode.data.SerializableFinishAdvancedOverlayAnchorData
import com.scandit.datacapture.cordova.barcode.data.SerializableFinishAdvancedOverlayOffsetData
import com.scandit.datacapture.cordova.barcode.data.SerializableFinishAdvancedOverlayViewData
import com.scandit.datacapture.cordova.barcode.factories.BarcodeCaptureActionFactory
import com.scandit.datacapture.cordova.barcode.utils.AdvancedOverlayViewPool
import com.scandit.datacapture.cordova.core.callbacks.Callback
import com.scandit.datacapture.cordova.core.handlers.ActionsHandler
import com.scandit.datacapture.cordova.core.utils.bitmapFromBase64String
import com.scandit.datacapture.cordova.core.utils.removeFromParent
import com.scandit.datacapture.cordova.core.workers.BackgroundWorker
import com.scandit.datacapture.cordova.core.workers.Worker
import com.scandit.datacapture.core.common.geometry.Anchor
import com.scandit.datacapture.core.common.geometry.MeasureUnit
import com.scandit.datacapture.core.common.geometry.PointWithUnit
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONObject
import java.util.concurrent.atomic.AtomicReference
import java.util.concurrent.locks.ReentrantLock
import kotlin.concurrent.withLock

class BarcodeTrackingAdvancedOverlayCallback(
    private val actionsHandler: ActionsHandler,
    callbackContext: CallbackContext,
    private val viewPool: AdvancedOverlayViewPool,
    private val uiWorker: Worker,
    private val overlayListenerWorker: Worker = BackgroundWorker(
        "advanced-overlay-listener-queue"
    )
) : Callback(callbackContext) {

    private val lock = ReentrantLock(true)

    private val viewCondition = lock.newCondition()
    private val offsetCondition = lock.newCondition()
    private val anchorCondition = lock.newCondition()
    private val tapCondition = lock.newCondition()

    private val latestViewData = AtomicReference<SerializableFinishAdvancedOverlayViewData?>()
    private val latestOffsetData = AtomicReference<SerializableFinishAdvancedOverlayOffsetData?>()
    private val latestAnchorData = AtomicReference<SerializableFinishAdvancedOverlayAnchorData?>()

    fun viewForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode,
        switchToOverlayWorker: Boolean
    ): View? {
        if (disposed.get()) return null

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                viewForTrackedBarcode(overlay, trackedBarcode)
            }
        } else {
            viewForTrackedBarcode(overlay, trackedBarcode)
        }
        return null
    }

    private fun viewForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode
    ) {
        lock.withLock {
            actionsHandler.addAction(
                BarcodeCaptureActionFactory.SEND_VIEW_FOR_TRACKED_BARCODE,
                JSONArray().apply {
                    put(
                        JSONObject(
                            mapOf(
                                FIELD_TRACKED_BARCODE to trackedBarcode.toJson()
                            )
                        )
                    )
                },
                callbackContext
            )
            lockAndWaitForView()
            onUnlockForView(overlay, trackedBarcode)
        }
    }

    fun offsetForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode,
        switchToOverlayWorker: Boolean
    ): PointWithUnit {
        if (disposed.get()) return PointWithUnit(0f, 0f, MeasureUnit.PIXEL)

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                offsetForTrackedBarcode(overlay, trackedBarcode)
            }
        } else {
            offsetForTrackedBarcode(overlay, trackedBarcode)
        }
        return PointWithUnit(0f, 0f, MeasureUnit.PIXEL)
    }

    private fun offsetForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode
    ) {
        lock.withLock {
            actionsHandler.addAction(
                BarcodeCaptureActionFactory.SEND_OFFSET_FOR_TRACKED_BARCODE,
                JSONArray().apply {
                    put(
                        JSONObject(
                            mapOf(
                                FIELD_TRACKED_BARCODE to trackedBarcode.toJson()
                            )
                        )
                    )
                },
                callbackContext
            )
            lockAndWaitForOffset()
            onUnlockForOffset(overlay, trackedBarcode)
        }
    }

    fun anchorForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode,
        switchToOverlayWorker: Boolean
    ): Anchor {
        if (disposed.get()) return Anchor.CENTER

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                anchorForTrackedBarcode(overlay, trackedBarcode)
            }
        } else {
            anchorForTrackedBarcode(overlay, trackedBarcode)
        }
        return Anchor.CENTER
    }

    private fun anchorForTrackedBarcode(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode
    ) {
        lock.withLock {
            actionsHandler.addAction(
                BarcodeCaptureActionFactory.SEND_ANCHOR_FOR_TRACKED_BARCODE,
                JSONArray().apply {
                    put(
                        JSONObject(
                            mapOf(
                                FIELD_TRACKED_BARCODE to trackedBarcode.toJson()
                            )
                        )
                    )
                },
                callbackContext
            )
            lockAndWaitForAnchor()
            onUnlockForAnchor(overlay, trackedBarcode)
        }
    }

    fun setViewForTrackedBarcode(
        trackedBarcode: TrackedBarcode,
        viewData: SerializableAdvancedOverlayView?,
        overlay: BarcodeTrackingAdvancedOverlay,
        switchToOverlayWorker: Boolean
    ) {
        if (disposed.get()) return

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                setViewForTrackedBarcode(trackedBarcode, viewData, overlay)
            }
        } else {
            setViewForTrackedBarcode(trackedBarcode, viewData, overlay)
        }
    }

    private fun setViewForTrackedBarcode(
        trackedBarcode: TrackedBarcode,
        viewData: SerializableAdvancedOverlayView?,
        overlay: BarcodeTrackingAdvancedOverlay
    ) {
        val image = bitmapFromBase64String(viewData?.data)

        uiWorker.post {
            val imageView = viewPool.getOrCreateView(trackedBarcode.identifier)

            if (imageView.parent != null) {
                imageView.removeFromParent()
            }

            imageView.setOnClickListener {
                onViewForBarcodeTapped(trackedBarcode)
            }
            imageView.setImageBitmap(image)
            imageView.layoutParams = ViewGroup.MarginLayoutParams(
                viewData?.options?.height ?: WRAP_CONTENT,
                viewData?.options?.width ?: WRAP_CONTENT
            )
            overlay.setViewForTrackedBarcode(trackedBarcode, imageView)
        }
    }

    fun onViewForBarcodeTapped(trackedBarcode: TrackedBarcode) {
        if (disposed.get()) return

        lock.withLock {
            actionsHandler.addAction(
                BarcodeCaptureActionFactory.SEND_TAP_VIEW_FOR_TRACKED_BARCODE,
                JSONArray().apply {
                    put(
                        JSONObject(
                            mapOf(
                                FIELD_TRACKED_BARCODE to trackedBarcode.toJson()
                            )
                        )
                    )
                },
                callbackContext
            )
            lockAndWaitForTap()
        }
    }

    fun setOffsetForTrackedBarcode(
        trackedBarcode: TrackedBarcode,
        offset: PointWithUnit?,
        overlay: BarcodeTrackingAdvancedOverlay,
        switchToOverlayWorker: Boolean
    ) {
        if (disposed.get()) return

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                setOffsetForTrackedBarcode(trackedBarcode, offset, overlay)
            }
        } else {
            setOffsetForTrackedBarcode(trackedBarcode, offset, overlay)
        }
    }

    private fun setOffsetForTrackedBarcode(
        trackedBarcode: TrackedBarcode,
        offset: PointWithUnit?,
        overlay: BarcodeTrackingAdvancedOverlay
    ) {
        overlay.setOffsetForTrackedBarcode(
            trackedBarcode, offset ?: PointWithUnit(0f, 0f, MeasureUnit.PIXEL)
        )
    }

    fun setAnchorForTrackedBarcode(
        trackedBarcode: TrackedBarcode,
        anchor: Anchor?,
        overlay: BarcodeTrackingAdvancedOverlay,
        switchToOverlayWorker: Boolean
    ) {
        if (disposed.get()) return

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                setAnchorForTrackedBarcode(trackedBarcode, anchor, overlay)
            }
        } else {
            setAnchorForTrackedBarcode(trackedBarcode, anchor, overlay)
        }
    }

    private fun setAnchorForTrackedBarcode(
        trackedBarcode: TrackedBarcode,
        anchor: Anchor?,
        overlay: BarcodeTrackingAdvancedOverlay
    ) {
        overlay.setAnchorForTrackedBarcode(trackedBarcode, anchor ?: Anchor.CENTER)
    }

    fun clearViews(overlay: BarcodeTrackingAdvancedOverlay, switchToOverlayWorker: Boolean) {
        if (disposed.get()) return

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                clearViews(overlay)
            }
        } else {
            clearViews(overlay)
        }
    }

    private fun clearViews(overlay: BarcodeTrackingAdvancedOverlay) {
        overlay.clearTrackedBarcodeViews()
    }

    private fun lockAndWaitForView() {
        viewCondition.await()
    }

    private fun lockAndWaitForOffset() {
        offsetCondition.await()
    }

    private fun lockAndWaitForAnchor() {
        anchorCondition.await()
    }

    private fun lockAndWaitForTap() {
        tapCondition.await()
    }

    fun forceRelease() {
        lock.withLock {
            viewCondition.signalAll()
            offsetCondition.signalAll()
            anchorCondition.signalAll()
            tapCondition.signalAll()
        }
    }

    private fun onUnlockForView(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode
    ) {
        latestViewData.get()?.let { latestView ->
            setViewForTrackedBarcode(
                trackedBarcode, latestView.view, overlay, switchToOverlayWorker = false
            )
            latestViewData.set(null)
        }
        // If we don't have the latestData, it means no listener is set from js, so we do nothing.
    }

    private fun onUnlockForOffset(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode
    ) {
        latestOffsetData.get()?.let { latestOffset ->
            setOffsetForTrackedBarcode(
                trackedBarcode, latestOffset.offset, overlay, switchToOverlayWorker = false
            )
            latestOffsetData.set(null)
        }
        // If we don't have the latestData, it means no listener is set from js, so we do nothing.
    }

    private fun onUnlockForAnchor(
        overlay: BarcodeTrackingAdvancedOverlay,
        trackedBarcode: TrackedBarcode
    ) {
        latestAnchorData.get()?.let { latestAnchor ->
            setAnchorForTrackedBarcode(
                trackedBarcode, latestAnchor.anchor, overlay, switchToOverlayWorker = false
            )
            latestAnchorData.set(null)
        }
        // If we don't have the latestData, it means no listener is set from js, so we do nothing.
    }

    private fun unlockForView() {
        lock.withLock {
            viewCondition.signal()
        }
    }

    private fun unlockForOffset() {
        lock.withLock {
            offsetCondition.signal()
        }
    }

    private fun unlockForAnchor() {
        lock.withLock {
            anchorCondition.signal()
        }
    }

    private fun unlockForTap() {
        lock.withLock {
            tapCondition.signal()
        }
    }

    fun onFinishViewCallback(data: SerializableFinishAdvancedOverlayViewData?) {
        latestViewData.set(data)
        unlockForView()
    }

    fun onFinishOffsetCallback(data: SerializableFinishAdvancedOverlayOffsetData?) {
        latestOffsetData.set(data)
        unlockForOffset()
    }

    fun onFinishAnchorCallback(data: SerializableFinishAdvancedOverlayAnchorData?) {
        latestAnchorData.set(data)
        unlockForAnchor()
    }

    fun onFinishTapCallback() {
        unlockForTap()
    }

    override fun dispose() {
        super.dispose()
        forceRelease()
    }

    companion object {
        private const val FIELD_TRACKED_BARCODE = "trackedBarcode"
    }
}
