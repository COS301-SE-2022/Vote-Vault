/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import com.scandit.datacapture.cordova.core.data.ResizeAndMoveInfo
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException

class ActionViewResizeMove(
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val infoJsonObject = args.getJSONObject(0)
            listener.onResizeAndMoveDataCaptureView(
                ResizeAndMoveInfo(infoJsonObject), callbackContext
            )
        } catch (e: JSONException) {
            listener.onJsonParseError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onResizeAndMoveDataCaptureView(
            info: ResizeAndMoveInfo,
            callbackContext: CallbackContext
        )
    }
}
