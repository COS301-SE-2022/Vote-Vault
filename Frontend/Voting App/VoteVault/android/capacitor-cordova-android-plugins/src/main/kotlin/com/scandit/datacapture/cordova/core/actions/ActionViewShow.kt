/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import org.apache.cordova.CallbackContext
import org.json.JSONArray

class ActionViewShow(private val listener: ResultListener) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        listener.onShowDataCaptureView(callbackContext)
    }

    interface ResultListener {
        fun onShowDataCaptureView(callbackContext: CallbackContext)
    }
}
