/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import org.apache.cordova.CallbackContext
import org.json.JSONArray

class ActionSubscribeFrameSource(private val listener: ResultListener) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        listener.onSubscribeFrameSource(callbackContext)
    }

    interface ResultListener {
        fun onSubscribeFrameSource(callbackContext: CallbackContext)
    }
}
