/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.callbacks

import com.scandit.datacapture.barcode.capture.BarcodeCapture
import com.scandit.datacapture.barcode.capture.BarcodeCaptureSession
import com.scandit.datacapture.cordova.barcode.factories.BarcodeCaptureActionFactory
import com.scandit.datacapture.cordova.core.callbacks.Callback
import com.scandit.datacapture.cordova.core.data.SerializableFinishModeCallbackData
import com.scandit.datacapture.cordova.core.handlers.ActionsHandler
import com.scandit.datacapture.core.data.FrameData
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONObject
import java.util.concurrent.atomic.AtomicReference
import java.util.concurrent.locks.ReentrantLock
import kotlin.concurrent.withLock

class BarcodeCaptureCallback(
    private val actionsHandler: ActionsHandler,
    callbackContext: CallbackContext,
    private val lock: ReentrantLock = ReentrantLock(true)
) : Callback(callbackContext) {

    private val condition = lock.newCondition()

    private val latestSession: AtomicReference<BarcodeCaptureSession?> = AtomicReference()
    private val latestStateData = AtomicReference<SerializableFinishModeCallbackData?>(null)

    fun latestSession() = latestSession.get()

    fun onSessionUpdated(
        barcodeCapture: BarcodeCapture,
        session: BarcodeCaptureSession,
        frameData: FrameData
    ) {
        if (disposed.get()) return

        lock.withLock {
            actionsHandler.addAction(
                BarcodeCaptureActionFactory.SEND_SESSION_UPDATED_EVENT,
                JSONArray().apply {
                    put(
                        JSONObject(
                            mapOf(
                                FIELD_SESSION to session.toJson(),
                                FIELD_FRAME_DATA to serializeFrameData(
                                    frameData
                                ).toString()
                            )
                        )
                    )
                },
                callbackContext
            )
            latestSession.set(session)
            lockAndWait()
            onUnlock(barcodeCapture)
        }
    }

    fun onBarcodeScanned(
        barcodeCapture: BarcodeCapture,
        session: BarcodeCaptureSession,
        frameData: FrameData
    ) {
        if (disposed.get()) return

        lock.withLock {
            actionsHandler.addAction(
                BarcodeCaptureActionFactory.SEND_BARCODE_SCANNED_EVENT,
                JSONArray().apply {
                    put(
                        JSONObject(
                            mapOf(
                                FIELD_SESSION to session.toJson(),
                                // TODO [SDC-2001] -> add frame data serialization
                                FIELD_FRAME_DATA to
                                    serializeFrameData(frameData).toString()
                            )
                        )
                    )
                },
                callbackContext
            )
            latestSession.set(session)
            lockAndWait()
            onUnlock(barcodeCapture)
        }
    }

    private fun onUnlock(barcodeCapture: BarcodeCapture) {
        latestStateData.get()?.let { latestData ->
            barcodeCapture.isEnabled = latestData.enabled
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

    private fun unlock() {
        lock.withLock {
            condition.signal()
        }
    }

    private fun serializeFrameData(
        @Suppress("UNUSED_PARAMETER") frameData: FrameData
    ): JSONObject = JSONObject(
        mapOf(
            FIELD_FRAME_DATA to JSONObject()
        )
    )

    override fun dispose() {
        super.dispose()
        forceRelease()
    }

    companion object {
        private const val FIELD_SESSION = "session"
        private const val FIELD_FRAME_DATA = "frameData"
    }
}
