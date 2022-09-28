/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.tracking.callbacks

import com.scandit.datacapture.barcode.tracking.data.TrackedBarcode
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlay
import com.scandit.datacapture.cordova.barcode.data.SerializableFinishBasicOverlayCallbackData
import com.scandit.datacapture.cordova.barcode.factories.BarcodeCaptureActionFactory
import com.scandit.datacapture.cordova.core.callbacks.Callback
import com.scandit.datacapture.cordova.core.handlers.ActionsHandler
import com.scandit.datacapture.cordova.core.workers.BackgroundWorker
import com.scandit.datacapture.cordova.core.workers.Worker
import com.scandit.datacapture.core.ui.style.Brush
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONObject
import java.util.concurrent.atomic.AtomicReference
import java.util.concurrent.locks.ReentrantLock
import kotlin.concurrent.withLock

class BarcodeTrackingBasicOverlayCallback(
    private val actionsHandler: ActionsHandler,
    callbackContext: CallbackContext,
    private val overlayListenerWorker: Worker = BackgroundWorker("overlay-listener-queue")
) : Callback(callbackContext) {

    private val lock = ReentrantLock(true)
    private val condition = lock.newCondition()

    private val latestStateData = AtomicReference<SerializableFinishBasicOverlayCallbackData?>()

    fun brushForTrackedBarcode(
        overlay: BarcodeTrackingBasicOverlay,
        trackedBarcode: TrackedBarcode,
        switchToOverlayWorker: Boolean
    ): Brush? {
        if (disposed.get()) return null

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                brushForTrackedBarcode(overlay, trackedBarcode)
            }
        } else {
            brushForTrackedBarcode(overlay, trackedBarcode)
        }

        // License compliant brush for non-AR licenses, see https://wiki.scandit.com/x/JwBMCQ
        return Brush(0x00B2CCE5.toInt(), 0x00B2CCE5.toInt(), 0f)
    }

    private fun brushForTrackedBarcode(
        overlay: BarcodeTrackingBasicOverlay,
        trackedBarcode: TrackedBarcode
    ) {
        lock.withLock {
            actionsHandler.addAction(
                BarcodeCaptureActionFactory.SEND_BRUSH_FOR_TRACKED_BARCODE,
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
            lockAndWait()
            onUnlock(overlay, trackedBarcode)
        }
    }

    fun onTrackedBarcodeTapped(
        trackedBarcode: TrackedBarcode,
        switchToOverlayWorker: Boolean
    ) {
        if (disposed.get()) return

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                onTrackedBarcodeTapped(trackedBarcode)
            }
        } else {
            onTrackedBarcodeTapped(trackedBarcode)
        }
    }

    private fun onTrackedBarcodeTapped(
        trackedBarcode: TrackedBarcode
    ) {
        actionsHandler.addAction(
            BarcodeCaptureActionFactory.SEND_DID_TAP_TRACKED_BARCODE,
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
    }

    private fun onUnlock(overlay: BarcodeTrackingBasicOverlay, trackedBarcode: TrackedBarcode) {
        latestStateData.get()?.let { latestData ->
            setBrushForTrackedBarcode(
                trackedBarcode, latestData.brush, overlay, switchToOverlayWorker = false
            )
            latestStateData.set(null)
        } ?: setBrushForTrackedBarcode(
            // If we don't have the latestData, use the overlay default brush.
            trackedBarcode, overlay.brush, overlay, switchToOverlayWorker = false
        )
    }

    fun setBrushForTrackedBarcode(
        trackedBarcode: TrackedBarcode,
        brush: Brush?,
        overlay: BarcodeTrackingBasicOverlay,
        switchToOverlayWorker: Boolean
    ) {
        if (disposed.get()) return

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                overlay.setBrushForTrackedBarcode(trackedBarcode, brush)
            }
        } else {
            overlay.setBrushForTrackedBarcode(trackedBarcode, brush)
        }
    }

    fun clearBrushes(overlay: BarcodeTrackingBasicOverlay, switchToOverlayWorker: Boolean) {
        if (disposed.get()) return

        if (switchToOverlayWorker) {
            overlayListenerWorker.post {
                overlay.clearTrackedBarcodeBrushes()
            }
        } else {
            overlay.clearTrackedBarcodeBrushes()
        }
    }

    private fun lockAndWait() {
        condition.await()
    }

    fun forceRelease() {
        lock.withLock {
            condition.signalAll()
        }
    }

    private fun unlock() {
        lock.withLock {
            condition.signal()
        }
    }

    fun onFinishCallback(data: SerializableFinishBasicOverlayCallbackData?) {
        latestStateData.set(data)
        unlock()
    }

    override fun dispose() {
        super.dispose()
        forceRelease()
    }

    companion object {
        private const val FIELD_TRACKED_BARCODE = "trackedBarcode"
    }
}
