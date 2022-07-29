/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.data

import org.json.JSONObject

class SerializableViewState(
    private val width: Int,
    private val height: Int,
    private val screenOrientation: String?
) {

    fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_ORIENTATION to screenOrientation,
            FIELD_SIZE to JSONObject(
                mapOf(
                    FIELD_SIZE_WIDTH to width,
                    FIELD_SIZE_HEIGHT to height
                )
            )
        )
    )

    companion object {
        private const val FIELD_ORIENTATION = "orientation"
        private const val FIELD_SIZE = "size"
        private const val FIELD_SIZE_WIDTH = "width"
        private const val FIELD_SIZE_HEIGHT = "height"
    }
}
