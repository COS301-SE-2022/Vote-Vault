/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.data.defaults

import com.scandit.datacapture.cordova.core.data.SerializableData
import com.scandit.datacapture.cordova.core.data.defaults.SerializableCameraSettingsDefault
import org.json.JSONObject

class SerializableBarcodeTrackingDefaults(
    private val recommendedCameraSettings: SerializableCameraSettingsDefault,
    private val trackingBasicOverlayDefaults: SerializableTrackingBasicOverlayDefaults
) : SerializableData {

    override fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_RECOMMENDED_CAMERA_SETTINGS to recommendedCameraSettings.toJson(),
            FIELD_TRACKING_BASIC_OVERLAY to trackingBasicOverlayDefaults.toJson()
        )
    )

    companion object {
        private const val FIELD_RECOMMENDED_CAMERA_SETTINGS = "RecommendedCameraSettings"
        private const val FIELD_TRACKING_BASIC_OVERLAY = "BarcodeTrackingBasicOverlay"
    }
}
