/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import com.scandit.datacapture.core.common.feedback.Feedback
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException

class ActionEmitFeedback(
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val jsonObject = args.getJSONObject(0)
            val feedback = Feedback.fromJson(jsonObject.toString())
            listener.onEmitFeedback(feedback, callbackContext)
        } catch (e: JSONException) {
            listener.onJsonParseError(e, callbackContext)
        } catch (e: RuntimeException) { // TODO [SDC-1851] - fine-catch deserializer exceptions
            listener.onJsonParseError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onEmitFeedback(feedback: Feedback, callbackContext: CallbackContext)
    }
}
