/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.utils

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Color
import android.util.Base64
import android.view.View
import android.view.ViewGroup
import com.scandit.datacapture.core.common.geometry.Point
import com.scandit.datacapture.core.common.geometry.Quadrilateral
import com.scandit.datacapture.core.internal.sdk.AppAndroidEnvironment
import org.apache.cordova.CallbackContext
import org.apache.cordova.PluginResult
import org.json.JSONObject
import java.util.*

fun Int.pxFromDp(): Float {
    val context = AppAndroidEnvironment.applicationContext
    val displayDensity = context.resources.displayMetrics.density
    return (this * displayDensity + 0.5f)
}

fun Float.dpFromPx(): Float {
    val context = AppAndroidEnvironment.applicationContext
    val displayDensity = context.resources.displayMetrics.density
    return ((this - 0.5f) / displayDensity)
}

fun Point.dpFromPx(): Point = Point(
    x.dpFromPx(),
    y.dpFromPx()
)

fun Quadrilateral.dpFromPx(): Quadrilateral = Quadrilateral(
    topLeft.dpFromPx(),
    topRight.dpFromPx(),
    bottomRight.dpFromPx(),
    bottomLeft.dpFromPx()
)

fun View.removeFromParent() {
    val parent = parent as? ViewGroup ?: return
    parent.removeView(this)
}

val Enum<*>.camelCaseName: String
    get() = name.toLowerCase(Locale.ROOT)
        .split("_")
        .joinToString(separator = "") { it.capitalize() }
        .decapitalize()

val Int.hexString: String
    get() {
        val hex = String.format(Locale.US, "%08X", this)
        return "#" + // ts is expecting the color in format #RRGGBBAA, we need to move the alpha.
            hex.substring(2) + // RRGGBB
            hex.substring(0, 2) // AA
    }

val String.colorInt: Int
    get() = Color.parseColor(
        // ts is giving the color in format RRGGBBAA, we need to move the alpha and add the #.
        "#" +
            substring(6, 8) +
            substring(0, 6)
    )

fun bitmapFromBase64String(string: String?): Bitmap? {
    string ?: return null

    val index = string.indexOf(",")
    return try {
        val trimmedString = string.removeRange(0, index)
        val bytes = Base64.decode(trimmedString, Base64.DEFAULT)
        BitmapFactory.decodeByteArray(bytes, 0, bytes.size)
    } catch (e: Exception) {
        println(e)
        null
    }
}

fun CallbackContext.successAndKeepCallback() {
    sendPluginResult(
        PluginResult(PluginResult.Status.OK).apply {
            keepCallback = true
        }
    )
}

fun CallbackContext.successAndKeepCallback(message: JSONObject) {
    sendPluginResult(
        PluginResult(PluginResult.Status.OK, message).apply {
            keepCallback = true
        }
    )
}
