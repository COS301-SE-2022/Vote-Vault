/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.data.defaults

import com.scandit.datacapture.barcode.tracking.capture.BarcodeTracking
import com.scandit.datacapture.barcode.tracking.capture.BarcodeTrackingSettings
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlayStyle
import com.scandit.datacapture.barcode.tracking.ui.overlay.toJson
import com.scandit.datacapture.cordova.core.data.SerializableData
import com.scandit.datacapture.cordova.core.data.defaults.SerializableBrushDefaults
import org.json.JSONObject

class SerializableTrackingBasicOverlayDefaults(
    private val defaultBrush: SerializableBrushDefaults,
    private val defaultStyle: String,
    private val styles: Array<BarcodeTrackingBasicOverlayStyle>
) : SerializableData {

    override fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_BRUSH to defaultBrush.toJson(),
            FIELD_DEFAULT_STYLE to defaultStyle.toLowerCase(),
            FIELD_STYLES to stylesMap(styles)
        )
    )

    private fun stylesMap(styles: Array<BarcodeTrackingBasicOverlayStyle>): JSONObject {
        val map = mutableMapOf<String, Map<String, JSONObject>>()

        styles.forEach {
            map[it.toJson()] = mapOf(
                FIELD_BRUSH to SerializableBrushDefaults(
                    BarcodeTrackingBasicOverlay.newInstance(
                        BarcodeTracking.forDataCaptureContext(
                            null,
                            BarcodeTrackingSettings()
                        ),
                        null,
                        it
                    ).brush
                ).toJSONObject()
            )
        }

        return JSONObject(map as Map<String, Map<String, JSONObject>>)
    }

    companion object {
        private const val FIELD_BRUSH = "DefaultBrush"
        private const val FIELD_DEFAULT_STYLE = "defaultStyle"
        private const val FIELD_STYLES = "styles"
    }
}
