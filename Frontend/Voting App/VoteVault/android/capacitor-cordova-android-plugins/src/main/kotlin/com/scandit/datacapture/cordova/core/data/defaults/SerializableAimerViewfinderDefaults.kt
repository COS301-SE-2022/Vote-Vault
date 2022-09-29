/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.data.defaults

import com.scandit.datacapture.cordova.core.data.SerializableData
import org.json.JSONObject

data class SerializableAimerViewfinderDefaults(
    private val frameColor: String,
    private val dotColor: String
) : SerializableData {

    override fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_FRAME_COLOR to frameColor,
            FIELD_DOT_COLOR to dotColor
        )
    )

    companion object {
        private const val FIELD_FRAME_COLOR = "frameColor"
        private const val FIELD_DOT_COLOR = "dotColor"
    }
}
