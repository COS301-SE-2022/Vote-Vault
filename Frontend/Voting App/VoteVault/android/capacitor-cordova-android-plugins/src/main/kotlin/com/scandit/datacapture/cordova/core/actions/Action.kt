/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import org.apache.cordova.CallbackContext
import org.json.JSONArray

interface Action {
    fun run(args: JSONArray, callbackContext: CallbackContext)
}

interface ActionJsonParseErrorResultListener {
    fun onJsonParseError(error: Throwable, callbackContext: CallbackContext)
}

interface AdditionalActionRequiredResultListener {
    fun onAdditionalActionRequired(
        actionName: String,
        args: JSONArray,
        callbackContext: CallbackContext
    )
}
