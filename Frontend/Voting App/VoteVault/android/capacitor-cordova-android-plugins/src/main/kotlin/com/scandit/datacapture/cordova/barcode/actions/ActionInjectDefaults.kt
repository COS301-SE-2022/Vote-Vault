/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.actions

import com.scandit.datacapture.barcode.capture.BarcodeCapture
import com.scandit.datacapture.barcode.capture.BarcodeCaptureSettings
import com.scandit.datacapture.barcode.data.CompositeTypeDescription
import com.scandit.datacapture.barcode.data.SymbologyDescription
import com.scandit.datacapture.barcode.tracking.capture.BarcodeTracking
import com.scandit.datacapture.barcode.tracking.capture.BarcodeTrackingSettings
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlayStyle
import com.scandit.datacapture.barcode.tracking.ui.overlay.toJson
import com.scandit.datacapture.barcode.ui.overlay.BarcodeCaptureOverlay
import com.scandit.datacapture.barcode.ui.overlay.BarcodeCaptureOverlayStyle
import com.scandit.datacapture.barcode.ui.overlay.toJson
import com.scandit.datacapture.cordova.barcode.data.defaults.*
import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.actions.ActionJsonParseErrorResultListener
import com.scandit.datacapture.cordova.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.cordova.core.data.defaults.SerializableCameraSettingsDefault
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException

class ActionInjectDefaults(
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val captureSettings = BarcodeCaptureSettings()

            val symbologyDescriptions = SymbologyDescription.all()
            val captureCameraSettings = BarcodeCapture.createRecommendedCameraSettings()
            val barcodeCaptureOverlay = BarcodeCaptureOverlay.newInstance(
                BarcodeCapture.forDataCaptureContext(null, captureSettings),
                null
            )
            val barcodeCaptureOverlayStyle = barcodeCaptureOverlay.style.toJson()
            val brush = barcodeCaptureOverlay.brush
            val barcodeTrackingOverlay = BarcodeTrackingBasicOverlay.newInstance(
                BarcodeTracking.forDataCaptureContext(null, BarcodeTrackingSettings()),
                null
            )
            val barcodeTrackingOverlayStyle = barcodeTrackingOverlay.style.toJson()

            val trackingCameraSettings = BarcodeTracking.createRecommendedCameraSettings()

            val defaults = SerializableBarcodeDefaults(
                barcodeCaptureDefaults = SerializableBarcodeCaptureDefaults(
                    barcodeCaptureOverlayDefaults = SerializableBarcodeCaptureOverlayDefaults(
                        brushDefaults = SerializableBrushDefaults(brush = brush),
                        defaultStyle = barcodeCaptureOverlayStyle,
                        styles = BarcodeCaptureOverlayStyle.values()
                    ),
                    barcodeCaptureSettingsDefaults = SerializableBarcodeCaptureSettingsDefaults(
                        codeDuplicateFilter = captureSettings.codeDuplicateFilter.asMillis()
                    ),
                    recommendedCameraSettings = SerializableCameraSettingsDefault(
                        settings = captureCameraSettings
                    )
                ),
                symbologySettingsDefaults = SerializableSymbologySettingsDefaults(
                    barcodeCaptureSettings = captureSettings
                ),
                symbologyDescriptionsDefaults = JSONArray(
                    symbologyDescriptions.map { it.toJson() }
                ),
                barcodeTrackingDefaults = SerializableBarcodeTrackingDefaults(
                    recommendedCameraSettings = SerializableCameraSettingsDefault(
                        settings = trackingCameraSettings
                    ),
                    trackingBasicOverlayDefaults = SerializableTrackingBasicOverlayDefaults(
                        defaultBrush = SerializableBrushDefaults(
                            brush = barcodeTrackingOverlay.brush
                        ),
                        defaultStyle = barcodeTrackingOverlayStyle,
                        styles = BarcodeTrackingBasicOverlayStyle.values()
                    )
                ),
                barcodeSelectionDefaults = SerializableBarcodeSelectionDefaults.create(),
                compositeTypeDescriptions = JSONArray(
                    CompositeTypeDescription.all().map { it.toJson() }
                )
            )
            listener.onBarcodeDefaults(defaults, callbackContext)
        } catch (e: JSONException) {
            println(e)
            listener.onJsonParseError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onBarcodeDefaults(
            defaults: SerializableBarcodeDefaults,
            callbackContext: CallbackContext
        )
    }
}
