/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.tracking.callbacks

import com.scandit.datacapture.barcode.tracking.capture.BarcodeTracking
import com.scandit.datacapture.barcode.tracking.capture.BarcodeTrackingSession
import com.scandit.datacapture.barcode.tracking.data.TrackedBarcode
import com.scandit.datacapture.cordova.barcode.factories.BarcodeCaptureActionFactory
import com.scandit.datacapture.cordova.core.callbacks.Callback
import com.scandit.datacapture.cordova.core.data.SerializableFinishModeCallbackData
import com.scandit.datacapture.cordova.core.handlers.ActionsHandler
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONObject
import java.util.concurrent.atomic.AtomicReference
import java.util.concurrent.locks.ReentrantLock
import kotlin.concurrent.withLock

class BarcodeTrackingCallback(
    private val actionsHandler: ActionsHandler,
    callbackContext: CallbackContext
) : Callback(callbackContext) {

    private val lock = ReentrantLock(true)
    private val condition = lock.newCondition()

    private val latestSession: AtomicReference<BarcodeTrackingSession?> = AtomicReference()
    private val latestStateData = AtomicReference<SerializableFinishModeCallbackData?>(null)

    fun latestSession() = latestSession.get()

    fun onSessionUpdated(
        barcodeTracking: BarcodeTracking,
        session: BarcodeTrackingSession
    ) {
        if (disposed.get()) return

        lock.withLock {
            actionsHandler.addAction(
                BarcodeCaptureActionFactory.SEND_TRACKING_SESSION_UPDATED_EVENT,
                JSONArray().apply {
                    put(
                        JSONObject(
                            mapOf(
                                FIELD_SESSION to session.toJson(),
                                // TODO [SDC-2001] -> add frame data serialization
                                FIELD_FRAME_DATA to JSONObject()
                            )
                        )
                    )
                },
                callbackContext
            )
            latestSession.set(session)
            lockAndWait()
            onUnlock(barcodeTracking)
        }
    }

    private fun onUnlock(barcodeTracking: BarcodeTracking) {
        latestStateData.get()?.let { latestData ->
            barcodeTracking.isEnabled = latestData.enabled
            latestStateData.set(null)
        }
        // If we don't have the latestData, it means no listener is set from js, so we do nothing.
    }

    private fun lockAndWait() {
        condition.await()
    }

    fun onFinishCallback(finishModeCallbackData: SerializableFinishModeCallbackData?) {
        latestStateData.set(finishModeCallbackData)
        unlock()
    }

    fun forceRelease() {
        lock.withLock {
            condition.signalAll()
        }
    }

    fun getTrackedBarcodeFromLatestSession(
        barcodeId: Int,
        frameSequenceId: Long?
    ): TrackedBarcode? {
        val session = latestSession.get() ?: return null
        return if (frameSequenceId == null || session.frameSequenceId == frameSequenceId) {
            session.trackedBarcodes[barcodeId]
        } else null
    }

    private fun unlock() {
        lock.withLock {
            condition.signal()
        }
    }

    override fun dispose() {
        super.dispose()
        forceRelease()
    }

    companion object {
        private const val FIELD_SESSION = "session"
        private const val FIELD_FRAME_DATA = "frameData"
    }
}
