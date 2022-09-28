/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.data.defaults

import com.scandit.datacapture.cordova.core.data.SerializableData
import com.scandit.datacapture.core.capture.DataCaptureContext
import org.json.JSONObject

data class SerializableCoreDefaults(
    private val cameraDefaults: SerializableCameraDefaults,
    private val dataCaptureViewDefaults: SerializableDataCaptureViewDefaults,
    private val laserlineViewfinderDefaults: SerializableLaserlineViewfinderDefaults,
    private val rectangularViewfinderDefaults: SerializableRectangularViewfinderDefaults,
    private val spotlightViewfinderDefaults: SerializableSpotlightViewfinderDefaults,
    private val aimerViewfinderDefaults: SerializableAimerViewfinderDefaults,
    private val brushDefaults: SerializableBrushDefaults
) : SerializableData {

    override fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_CAMERA_DEFAULTS to cameraDefaults.toJson(),
            FIELD_DATA_CAPTURE_VIEW_DEFAULTS to dataCaptureViewDefaults.toJson(),
            FIELD_LASERLINE_VIEWFINDER_DEFAULTS to laserlineViewfinderDefaults.toJson(),
            FIELD_RECTANGULAR_VIEWFINDER_DEFAULTS to rectangularViewfinderDefaults.toJson(),
            FIELD_SPOTLIGHT_VIEWFINDER_DEFAULTS to spotlightViewfinderDefaults.toJson(),
            FIELD_AIMER_VIEWFINDER_DEFAULTS to aimerViewfinderDefaults.toJson(),
            FIELD_BRUSH_DEFAULTS to brushDefaults.toJson(),
            FIELD_DEVICE_ID_DEFAULTS to DataCaptureContext.DEVICE_ID
        )
    )

    private companion object {
        const val FIELD_CAMERA_DEFAULTS = "Camera"
        const val FIELD_DATA_CAPTURE_VIEW_DEFAULTS = "DataCaptureView"
        const val FIELD_LASERLINE_VIEWFINDER_DEFAULTS = "LaserlineViewfinder"
        const val FIELD_RECTANGULAR_VIEWFINDER_DEFAULTS = "RectangularViewfinder"
        const val FIELD_SPOTLIGHT_VIEWFINDER_DEFAULTS = "SpotlightViewfinder"
        const val FIELD_AIMER_VIEWFINDER_DEFAULTS = "AimerViewfinder"
        const val FIELD_BRUSH_DEFAULTS = "Brush"
        const val FIELD_DEVICE_ID_DEFAULTS = "deviceID"
    }
}
