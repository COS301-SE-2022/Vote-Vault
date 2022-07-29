/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.callbacks

import com.scandit.datacapture.cordova.core.factories.CaptureCoreActionFactory
import com.scandit.datacapture.cordova.core.handlers.ActionsHandler
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.common.ContextStatus
import com.scandit.datacapture.core.common.toJson
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONObject

class DataCaptureContextCallback(
    private val actionsHandler: ActionsHandler,
    callbackContext: CallbackContext,
    private val serializer: ContextStatusSerializer = ContextStatusSerializer()
) : Callback(callbackContext) {

    fun onStatusChanged(contextStatus: ContextStatus) {
        onStatusChanged(JSONObject(serializer.serialize(contextStatus)))
    }

    fun onStatusChanged(contextStatus: JSONObject) {
        if (disposed.get()) return
        actionsHandler.addAction(
            CaptureCoreActionFactory.SEND_CONTEXT_STATUS_UPDATE_EVENT,
            JSONArray().apply { put(contextStatus) },
            callbackContext
        )
    }

    fun onObservationStarted(@Suppress("UNUSED_PARAMETER") dataCaptureContext: DataCaptureContext) {
        if (disposed.get()) return
        actionsHandler.addAction(
            CaptureCoreActionFactory.SEND_CONTEXT_OBSERVATION_STARTED_EVENT,
            JSONArray(),
            callbackContext
        )
    }

    class ContextStatusSerializer {
        fun serialize(contextStatus: ContextStatus): String = contextStatus.toJson()
    }
}
