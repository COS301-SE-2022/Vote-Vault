/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */
package com.scandit.datacapture.cordova.core.data

import org.json.JSONObject

class SerializableFinishModeCallbackData(val enabled: Boolean) {

    companion object {
        private const val FIELD_ENABLED = "enabled"

        fun fromJson(json: JSONObject?): SerializableFinishModeCallbackData? {
            return json?.let {
                SerializableFinishModeCallbackData(it.optBoolean(FIELD_ENABLED, false))
            }
        }
    }
}
