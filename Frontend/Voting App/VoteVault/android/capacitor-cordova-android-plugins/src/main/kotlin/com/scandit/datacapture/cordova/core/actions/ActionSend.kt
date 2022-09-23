/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import com.scandit.datacapture.cordova.core.data.SerializableCallbackAction
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject

class ActionSend(
    private val actionName: String,
    private val listener: ResultListener,
    private val finishCallbackId: String? = null,
    private val shouldNotifyWhenFinished: Boolean = false
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val message = SerializableCallbackAction(
                actionName,
                args.getJSONObject(0),
                finishCallbackId = finishCallbackId,
                shouldNotifyWhenFinished = shouldNotifyWhenFinished
            ).toJson()
            listener.onSendAction(actionName, message, callbackContext)
        } catch (e: JSONException) {
            listener.onJsonParseError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onSendAction(
            actionName: String,
            message: JSONObject,
            callbackContext: CallbackContext
        )
    }
}
