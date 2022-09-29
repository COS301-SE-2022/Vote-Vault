/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.data.defaults

import com.scandit.datacapture.cordova.core.data.SerializableData
import com.scandit.datacapture.core.source.CameraSettings
import com.scandit.datacapture.core.source.toJson
import org.json.JSONObject

data class SerializableCameraSettingsDefault(
    private val prefResolution: String,
    private val zoomFactor: Float,
    private val focusRange: String,
    private val zoomGestureZoomFactor: Float,
    private val focusGestureStrategy: String,
    private val shouldPreferSmoothAutoFocus: Boolean
) : SerializableData {

    constructor(settings: CameraSettings) : this(
        prefResolution = settings.preferredResolution.toJson(),
        zoomFactor = settings.zoomFactor,
        focusRange = "full",
        zoomGestureZoomFactor = settings.zoomGestureZoomFactor,
        focusGestureStrategy = settings.focusGestureStrategy.toJson(),
        shouldPreferSmoothAutoFocus = settings.shouldPreferSmoothAutoFocus
    )

    override fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_PREFERRED_RESOLUTION to prefResolution,
            FIELD_ZOOM_FACTOR to zoomFactor,
            FIELD_FOCUS_RANGE to focusRange,
            FIELD_ZOOM_GESTURE_ZOOM_FACTOR to zoomGestureZoomFactor,
            FIELD_FOCUS_GESTURE_STRATEGY to focusGestureStrategy,
            FIELD_FOCUS_SHOULD_PREFER_SMOOTH_AUTOFOCUS to shouldPreferSmoothAutoFocus
        )
    )

    companion object {
        private const val FIELD_PREFERRED_RESOLUTION = "preferredResolution"
        private const val FIELD_ZOOM_FACTOR = "zoomFactor"
        private const val FIELD_FOCUS_RANGE = "focusRange"
        private const val FIELD_ZOOM_GESTURE_ZOOM_FACTOR = "zoomGestureZoomFactor"
        private const val FIELD_FOCUS_GESTURE_STRATEGY = "focusGestureStrategy"
        private const val FIELD_FOCUS_SHOULD_PREFER_SMOOTH_AUTOFOCUS = "shouldPreferSmoothAutoFocus"
    }
}
