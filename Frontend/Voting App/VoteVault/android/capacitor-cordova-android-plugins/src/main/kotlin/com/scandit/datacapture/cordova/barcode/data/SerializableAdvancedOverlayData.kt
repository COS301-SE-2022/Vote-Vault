/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.data

import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import com.scandit.datacapture.core.common.geometry.Anchor
import com.scandit.datacapture.core.common.geometry.AnchorDeserializer
import com.scandit.datacapture.core.common.geometry.PointWithUnit
import com.scandit.datacapture.core.common.geometry.PointWithUnitDeserializer
import org.json.JSONObject

class SerializableFinishAdvancedOverlayViewData(val view: SerializableAdvancedOverlayView?) {

    companion object {
        fun fromJson(json: JSONObject?): SerializableFinishAdvancedOverlayViewData? {
            if (json == null) return null

            return SerializableFinishAdvancedOverlayViewData(
                view = SerializableAdvancedOverlayView.fromJson(json.optJSONObject(FIELD_VIEW))
            )
        }
    }
}

class SerializableFinishAdvancedOverlayOffsetData(val offset: PointWithUnit?) {

    companion object {
        fun fromJson(json: JSONObject?): SerializableFinishAdvancedOverlayOffsetData? {
            if (json == null) return null

            val offset: PointWithUnit? = json.optString(FIELD_OFFSET).let { offsetString ->
                if (offsetString.isEmpty()) {
                    null
                } else {
                    PointWithUnitDeserializer.fromJson(offsetString)
                }
            }
            return SerializableFinishAdvancedOverlayOffsetData(offset)
        }
    }
}

class SerializableFinishAdvancedOverlayAnchorData(val anchor: Anchor?) {

    companion object {
        fun fromJson(json: JSONObject?): SerializableFinishAdvancedOverlayAnchorData? {
            if (json == null) return null

            val anchor: Anchor? = json.optString(FIELD_ANCHOR).let { anchorString ->
                if (anchorString.isEmpty()) {
                    null
                } else {
                    AnchorDeserializer.fromJson(anchorString)
                }
            }
            return SerializableFinishAdvancedOverlayAnchorData(anchor)
        }
    }
}

data class SerializableAdvancedOverlayViewActionData(
    val view: SerializableAdvancedOverlayView?,
    val trackedBarcodeId: Int,
    val sessionFrameSequenceId: Long?
) {

    constructor(json: JSONObject) : this(
        view = SerializableAdvancedOverlayView.fromJson(json.optJSONObject(FIELD_VIEW)),
        trackedBarcodeId = json.getInt(FIELD_TRACKED_BARCODE_ID),
        sessionFrameSequenceId = if (json.has(FIELD_FRAME_SEQUENCE_ID)) {
            json.getLong(FIELD_FRAME_SEQUENCE_ID)
        } else null
    )
}

data class SerializableAdvancedOverlayView(
    val data: String,
    val options: SerializableAdvancedOverlayViewOptions
) {

    constructor(jsonObject: JSONObject) : this(
        data = jsonObject.getString(FIELD_DATA),
        options = SerializableAdvancedOverlayViewOptions.fromJson(
            jsonObject.getJSONObject(FIELD_OPTIONS)
        )
    )

    companion object {
        private const val FIELD_DATA = "data"
        private const val FIELD_OPTIONS = "options"

        fun fromJson(jsonObject: JSONObject?): SerializableAdvancedOverlayView? {
            if (jsonObject == null) return null

            return SerializableAdvancedOverlayView(jsonObject)
        }
    }
}

data class SerializableAdvancedOverlayViewOptions(
    val scale: Float,
    val width: Int,
    val height: Int
) {

    companion object {
        private const val FIELD_WIDTH = "width"
        private const val FIELD_HEIGHT = "height"
        private const val FIELD_SIZE = "size"
        private const val FIELD_SCALE = "scale"

        fun fromJson(json: JSONObject): SerializableAdvancedOverlayViewOptions {
            val scale: Float = json.optDouble(FIELD_SCALE, 1.0).toFloat()

            val size = json.optJSONObject(FIELD_SIZE) ?: JSONObject()
            val width: Int = size.optDouble(FIELD_WIDTH).run {
                if (isNaN()) {
                    WRAP_CONTENT
                } else {
                    (this * scale).toInt()
                }
            }
            val height: Int = size.optDouble(FIELD_HEIGHT).run {
                if (isNaN()) {
                    WRAP_CONTENT
                } else {
                    (this * scale).toInt()
                }
            }

            return SerializableAdvancedOverlayViewOptions(scale, width, height)
        }
    }
}

data class SerializableAdvancedOverlayOffsetActionData(
    val offset: PointWithUnit,
    val trackedBarcodeId: Int,
    val sessionFrameSequenceId: Long?
) {

    constructor(json: JSONObject) : this(
        offset = PointWithUnitDeserializer.fromJson(json.getString(FIELD_OFFSET)),
        trackedBarcodeId = json.getInt(FIELD_TRACKED_BARCODE_ID),
        sessionFrameSequenceId = if (json.has(FIELD_FRAME_SEQUENCE_ID)) {
            json.getLong(FIELD_FRAME_SEQUENCE_ID)
        } else null
    )
}

data class SerializableAdvancedOverlayAnchorActionData(
    val anchor: Anchor,
    val trackedBarcodeId: Int,
    val sessionFrameSequenceId: Long?
) {

    constructor(json: JSONObject) : this(
        anchor = AnchorDeserializer.fromJson(json.getString(FIELD_ANCHOR)),
        trackedBarcodeId = json.getInt(FIELD_TRACKED_BARCODE_ID),
        sessionFrameSequenceId = if (json.has(FIELD_FRAME_SEQUENCE_ID)) {
            json.getLong(FIELD_FRAME_SEQUENCE_ID)
        } else null
    )
}

private const val FIELD_VIEW = "view"
private const val FIELD_OFFSET = "offset"
private const val FIELD_ANCHOR = "anchor"
private const val FIELD_TRACKED_BARCODE_ID = "trackedBarcodeID"
private const val FIELD_FRAME_SEQUENCE_ID = "sessionFrameSequenceID"
