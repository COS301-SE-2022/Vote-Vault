/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import android.content.Context
import com.scandit.datacapture.cordova.core.data.defaults.SerializableAimerViewfinderDefaults
import com.scandit.datacapture.cordova.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.cordova.core.data.defaults.SerializableCameraDefaults
import com.scandit.datacapture.cordova.core.data.defaults.SerializableCameraSettingsDefault
import com.scandit.datacapture.cordova.core.data.defaults.SerializableCoreDefaults
import com.scandit.datacapture.cordova.core.data.defaults.SerializableDataCaptureViewDefaults
import com.scandit.datacapture.cordova.core.data.defaults.SerializableLaserlineViewfinderDefaults
import com.scandit.datacapture.cordova.core.data.defaults.SerializableRectangularViewfinderDefaults
import com.scandit.datacapture.cordova.core.data.defaults.SerializableSpotlightViewfinderDefaults
import com.scandit.datacapture.cordova.core.utils.hexString
import com.scandit.datacapture.core.source.Camera
import com.scandit.datacapture.core.source.CameraPosition
import com.scandit.datacapture.core.source.CameraSettings
import com.scandit.datacapture.core.source.toJson
import com.scandit.datacapture.core.ui.DataCaptureView
import com.scandit.datacapture.core.ui.style.Brush
import com.scandit.datacapture.core.ui.viewfinder.AimerViewfinder
import com.scandit.datacapture.core.ui.viewfinder.LaserlineViewfinder
import com.scandit.datacapture.core.ui.viewfinder.RectangularViewfinder
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException

class ActionInjectDefaults(
    private val context: Context,
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val cameraSettings = CameraSettings()
            val dataCaptureView = DataCaptureView.newInstance(context, null)
            val laserViewfinder = LaserlineViewfinder()
            val rectangularViewfinder = RectangularViewfinder()
            @Suppress("DEPRECATION")
            val spotlightViewfinder =
                com.scandit.datacapture.core.ui.viewfinder.SpotlightViewfinder()
            val aimerViewfinder = AimerViewfinder()
            val brush = Brush.transparent()
            val availableCameraPositions = listOfNotNull(
                Camera.getCamera(CameraPosition.USER_FACING)?.position,
                Camera.getCamera(CameraPosition.WORLD_FACING)?.position
            )
            val defaults = SerializableCoreDefaults(
                cameraDefaults = SerializableCameraDefaults(
                    cameraSettingsDefault = SerializableCameraSettingsDefault(
                        settings = cameraSettings
                    ),
                    availablePositions = JSONArray(
                        availableCameraPositions.map { it.toJson() }
                    ),
                    defaultPosition = Camera.getDefaultCamera()?.position?.toJson()
                ),
                dataCaptureViewDefaults = SerializableDataCaptureViewDefaults(
                    dataCaptureView
                ),
                laserlineViewfinderDefaults = SerializableLaserlineViewfinderDefaults(
                    laserViewfinder
                ),
                rectangularViewfinderDefaults = SerializableRectangularViewfinderDefaults(
                    rectangularViewfinder
                ),
                spotlightViewfinderDefaults = SerializableSpotlightViewfinderDefaults(
                    size = spotlightViewfinder.sizeWithUnitAndAspect.toJson(),
                    enabledBorderColor = spotlightViewfinder.enabledBorderColor.hexString,
                    disabledBorderColor = spotlightViewfinder.disabledBorderColor.hexString,
                    backgroundColor = spotlightViewfinder.backgroundColor.hexString
                ),
                aimerViewfinderDefaults = SerializableAimerViewfinderDefaults(
                    frameColor = aimerViewfinder.frameColor.hexString,
                    dotColor = aimerViewfinder.dotColor.hexString
                ),
                brushDefaults = SerializableBrushDefaults(
                    brush = brush
                )
            )
            listener.onCoreDefaults(defaults, callbackContext)
        } catch (e: JSONException) {
            listener.onJsonParseError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onCoreDefaults(defaults: SerializableCoreDefaults, callbackContext: CallbackContext)
    }
}
