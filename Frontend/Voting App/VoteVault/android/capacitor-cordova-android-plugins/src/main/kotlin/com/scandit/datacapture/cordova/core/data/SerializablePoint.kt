/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.data

import com.scandit.datacapture.core.common.geometry.Point
import org.json.JSONException
import org.json.JSONObject

data class SerializablePoint(private val x: Double, private val y: Double) {

    @Throws(JSONException::class)
    constructor(json: JSONObject) : this(json.getDouble(FIELD_X), json.getDouble(FIELD_Y))

    fun toScanditPoint(): Point = Point(x.toFloat(), y.toFloat())

    companion object {
        private const val FIELD_X = "x"
        private const val FIELD_Y = "y"
    }
}
