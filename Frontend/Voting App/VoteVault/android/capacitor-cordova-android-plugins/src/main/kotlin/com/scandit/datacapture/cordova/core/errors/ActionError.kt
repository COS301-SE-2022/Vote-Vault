/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.errors

import org.apache.cordova.CallbackContext
import org.json.JSONObject

abstract class ActionError(
    private val errorCode: Int,
    private val errorMessage: String
) : Exception(errorMessage) {

    companion object {
        private const val KEY_CODE = "Code"
        private const val KEY_MESSAGE = "Message"
    }

    fun sendResult(callbackContext: CallbackContext) {
        callbackContext.error(serializeContent())
    }

    fun serializeContent(): JSONObject = JSONObject(
        mapOf(
            KEY_CODE to errorCode,
            KEY_MESSAGE to errorMessage
        )
    )
}
