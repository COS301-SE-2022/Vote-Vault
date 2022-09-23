package com.scandit.datacapture.cordova.core.callbacks

import com.scandit.datacapture.cordova.core.factories.CaptureCoreActionFactory
import com.scandit.datacapture.cordova.core.handlers.ActionsHandler
import com.scandit.datacapture.cordova.core.workers.Worker
import com.scandit.datacapture.core.source.FrameSource
import com.scandit.datacapture.core.source.FrameSourceState
import com.scandit.datacapture.core.source.toJson
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONObject

class FrameSourceCallback(
    private val actionsHandler: ActionsHandler,
    callbackContext: CallbackContext,
    private val uiWorker: Worker
) : Callback(callbackContext) {

    fun onStateChanged(
        @Suppress("UNUSED_PARAMETER") frameSource: FrameSource,
        newState: FrameSourceState
    ) {
        if (disposed.get()) return

        uiWorker.post {
            actionsHandler.addAction(
                CaptureCoreActionFactory.SEND_ON_FRAME_SOURCE_STATE_CHANGED_EVENT,
                JSONArray().apply {
                    put(
                        JSONObject(
                            mapOf(
                                FIELD_NEW_STATE to newState.toJson()
                            )
                        )
                    )
                },
                callbackContext
            )
        }
    }

    companion object {
        private const val FIELD_NEW_STATE = "newState"
    }
}
