/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.tracking.callbacks

import com.scandit.datacapture.barcode.data.SymbologyDescription
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelection
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionSession
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

class BarcodeSelectionCallback(
    private val actionsHandler: ActionsHandler,
    callbackContext: CallbackContext
) : Callback(callbackContext) {

    private val lock = ReentrantLock(true)
    private val condition = lock.newCondition()

    private val latestSession: AtomicReference<BarcodeSelectionSession?> = AtomicReference()
    private val latestStateData = AtomicReference<SerializableFinishModeCallbackData?>(null)

    fun latestSession() = latestSession.get()

    fun onSelectionUpdated(
        barcodeSelection: BarcodeSelection,
        session: BarcodeSelectionSession
    ) {
        if (disposed.get()) return

        lock.withLock {
            actionsHandler.addAction(
                BarcodeCaptureActionFactory.ACTION_SELECTION_UPDATED,
                JSONArray().apply {
                    put(
                        JSONObject(
                            mapOf(
                                FIELD_SESSION to session.toJson(),
                                FIELD_FRAME_DATA to JSONObject()
                            )
                        )
                    )
                },
                callbackContext
            )
            latestSession.set(session)
            lockAndWait()
            onUnlock(barcodeSelection)
        }
    }

    fun onSessionUpdated(
        barcodeSelection: BarcodeSelection,
        session: BarcodeSelectionSession
    ) {
        if (disposed.get()) return

        lock.withLock {
            actionsHandler.addAction(
                BarcodeCaptureActionFactory.ACTION_SELECTION_SESSION_UPDATED,
                JSONArray().apply {
                    put(
                        JSONObject(
                            mapOf(
                                FIELD_SESSION to session.toJson(),
                                FIELD_FRAME_DATA to JSONObject()
                            )
                        )
                    )
                },
                callbackContext
            )
            latestSession.set(session)
            lockAndWait()
            onUnlock(barcodeSelection)
        }
    }

    private fun onUnlock(barcodeSelection: BarcodeSelection) {
        latestStateData.get()?.let { latestData ->
            barcodeSelection.isEnabled = latestData.enabled
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

    fun getBarcodeCount(
        selectionIdentifier: String
    ): Int {
        val session = latestSession.get() ?: return 0
        val count = session.selectedBarcodes.find {
            (it.data ?: "")
                .plus(SymbologyDescription.create(it.symbology).identifier) == selectionIdentifier
        }?.let {
            session.getCount(it)
        } ?: 0
        return count
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
