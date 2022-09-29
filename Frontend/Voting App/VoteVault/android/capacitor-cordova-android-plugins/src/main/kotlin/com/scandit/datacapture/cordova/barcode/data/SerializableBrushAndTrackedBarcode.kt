/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */
package com.scandit.datacapture.cordova.barcode.data

import com.scandit.datacapture.core.ui.style.Brush
import com.scandit.datacapture.core.ui.style.BrushDeserializer
import org.json.JSONObject

class SerializableBrushAndTrackedBarcode(
    val brush: Brush?,
    val trackedBarcodeId: Int,
    val sessionFrameSequenceId: Long?
) {

    constructor(jsonObject: JSONObject) : this(
        brush = if (jsonObject.has(FIELD_BRUSH)) {
            BrushDeserializer.fromJson(jsonObject.getString(FIELD_BRUSH))
        } else null,
        trackedBarcodeId = jsonObject.getInt(FIELD_TRACKED_BARCODE_ID),
        sessionFrameSequenceId = if (jsonObject.has(FIELD_FRAME_SEQUENCE_ID)) {
            jsonObject.getLong(FIELD_FRAME_SEQUENCE_ID)
        } else null
    )

    companion object {
        private const val FIELD_BRUSH = "brush"
        private const val FIELD_TRACKED_BARCODE_ID = "trackedBarcodeID"
        private const val FIELD_FRAME_SEQUENCE_ID = "sessionFrameSequenceID"
    }
}
