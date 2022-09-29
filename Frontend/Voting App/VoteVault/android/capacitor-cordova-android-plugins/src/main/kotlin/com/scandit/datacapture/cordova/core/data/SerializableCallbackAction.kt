/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.data

import org.json.JSONObject

class SerializableCallbackAction(
    private val callbackName: String,
    private val argument: JSONObject,
    private val finishCallbackId: String? = null,
    private val shouldNotifyWhenFinished: Boolean = false
) : SerializableData {

    override fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_NAME to callbackName,
            FIELD_ARGUMENT to argument,
            FIELD_FINISH_CALLBACK_ID to finishCallbackId,
            FIELD_SHOULD_NOTIFY_WHEN_FINISHED to shouldNotifyWhenFinished
        )
    )

    companion object {
        private const val FIELD_NAME = "name"
        private const val FIELD_ARGUMENT = "argument"
        private const val FIELD_SHOULD_NOTIFY_WHEN_FINISHED = "shouldNotifyWhenFinished"

        const val FIELD_FINISH_CALLBACK_ID = "finishCallbackID"
    }
}
