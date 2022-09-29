/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2022- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.actions

import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.actions.ActionJsonParseErrorResultListener
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException

class ActionResetBarcodeCaptureSession(
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            listener.onResetBarcodeCaptureSession(callbackContext)
        } catch (e: JSONException) {
            println(e)
            listener.onJsonParseError(e, callbackContext)
        } catch (e: RuntimeException) {
            println(e)
            listener.onJsonParseError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onResetBarcodeCaptureSession(
            callbackContext: CallbackContext
        )
    }
}
