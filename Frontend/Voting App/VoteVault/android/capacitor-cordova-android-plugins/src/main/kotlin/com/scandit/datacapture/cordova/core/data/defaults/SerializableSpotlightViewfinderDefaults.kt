/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.data.defaults

import com.scandit.datacapture.cordova.core.data.SerializableData
import org.json.JSONObject

data class SerializableSpotlightViewfinderDefaults(
    private val size: String,
    private val enabledBorderColor: String,
    private val disabledBorderColor: String,
    private val backgroundColor: String
) : SerializableData {

    override fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_SIZE to size,
            FIELD_ENABLED_BORDER_COLOR to enabledBorderColor,
            FIELD_DISABLED_BORDER_COLOR to disabledBorderColor,
            FIELD_BACKGROUND_COLOR to backgroundColor
        )
    )

    companion object {
        private const val FIELD_SIZE = "size"
        private const val FIELD_ENABLED_BORDER_COLOR = "enabledBorderColor"
        private const val FIELD_DISABLED_BORDER_COLOR = "disabledBorderColor"
        private const val FIELD_BACKGROUND_COLOR = "backgroundColor"
    }
}
