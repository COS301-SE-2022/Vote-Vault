/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.data

import org.json.JSONObject

data class ResizeAndMoveInfo(
    val top: Int,
    val left: Int,
    val width: Int,
    val height: Int,
    val shouldBeUnderWebView: Boolean
) {

    constructor(json: JSONObject) : this(
        top = json.getInt(KEY_TOP),
        left = json.getInt(KEY_LEFT),
        width = json.getInt(KEY_WIDTH),
        height = json.getInt(KEY_HEIGHT),
        shouldBeUnderWebView = json.getBoolean(KEY_ELEVATION)
    )

    companion object {
        private const val KEY_TOP = "top"
        private const val KEY_LEFT = "left"
        private const val KEY_WIDTH = "width"
        private const val KEY_HEIGHT = "height"
        private const val KEY_ELEVATION = "shouldBeUnderWebView"
    }
}
