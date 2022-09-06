/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.data.defaults

import com.scandit.datacapture.barcode.capture.BarcodeCaptureSettings
import com.scandit.datacapture.barcode.data.SymbologyDescription
import com.scandit.datacapture.cordova.core.data.SerializableData
import org.json.JSONObject

data class SerializableSymbologySettingsDefaults(
    private val barcodeCaptureSettings: BarcodeCaptureSettings
) : SerializableData {

    override fun toJson(): JSONObject = JSONObject(
        SymbologyDescription.all().associate {
            it.identifier to barcodeCaptureSettings.getSymbologySettings(it.symbology).toJson()
        }
    )
}
