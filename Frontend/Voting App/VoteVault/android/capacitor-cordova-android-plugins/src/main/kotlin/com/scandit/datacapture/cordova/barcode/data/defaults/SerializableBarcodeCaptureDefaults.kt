/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.data.defaults

import com.scandit.datacapture.cordova.core.data.SerializableData
import com.scandit.datacapture.cordova.core.data.defaults.SerializableCameraSettingsDefault
import org.json.JSONObject

data class SerializableBarcodeCaptureDefaults(
    private val barcodeCaptureOverlayDefaults: SerializableBarcodeCaptureOverlayDefaults,
    private val barcodeCaptureSettingsDefaults: SerializableBarcodeCaptureSettingsDefaults,
    private val recommendedCameraSettings: SerializableCameraSettingsDefault
) : SerializableData {

    override fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_OVERLAY_DEFAULTS to barcodeCaptureOverlayDefaults.toJson(),
            FIELD_CAPTURE_SETTINGS_DEFAULTS to barcodeCaptureSettingsDefaults.toJson(),
            FIELD_RECOMMENDED_CAMERA_SETTINGS to recommendedCameraSettings.toJson()
        )
    )

    companion object {
        private const val FIELD_OVERLAY_DEFAULTS = "BarcodeCaptureOverlay"
        private const val FIELD_CAPTURE_SETTINGS_DEFAULTS = "BarcodeCaptureSettings"
        private const val FIELD_RECOMMENDED_CAMERA_SETTINGS = "RecommendedCameraSettings"
    }
}
