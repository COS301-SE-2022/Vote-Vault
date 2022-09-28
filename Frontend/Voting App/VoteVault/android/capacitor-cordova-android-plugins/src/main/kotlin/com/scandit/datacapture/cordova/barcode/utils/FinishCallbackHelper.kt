/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.utils

import com.scandit.datacapture.cordova.barcode.factories.BarcodeCaptureActionFactory
import com.scandit.datacapture.cordova.core.data.SerializableCallbackAction
import org.json.JSONObject

class FinishCallbackHelper {

    fun isFinishBarcodeCaptureModeCallback(data: JSONObject): Boolean {
        return checkFinishCallbackIdFieldForValue(
            data, BarcodeCaptureActionFactory.ACTION_BARCODE_SCANNED
        ) || checkFinishCallbackIdFieldForValue(
            data, BarcodeCaptureActionFactory.ACTION_CAPTURE_SESSION_UPDATED
        )
    }

    fun isFinishBarcodeTrackingModeCallback(data: JSONObject): Boolean {
        return checkFinishCallbackIdFieldForValue(
            data, BarcodeCaptureActionFactory.ACTION_TRACKING_SESSION_UPDATED
        )
    }

    fun isFinishBarcodeSelectionModeCallback(data: JSONObject): Boolean {
        return checkFinishCallbackIdFieldForValue(
            data, BarcodeCaptureActionFactory.ACTION_SELECTION_SESSION_UPDATED
        ) || checkFinishCallbackIdFieldForValue(
            data, BarcodeCaptureActionFactory.ACTION_SELECTION_UPDATED
        )
    }

    fun isFinishBarcodeTrackingBasicOverlayCallback(data: JSONObject): Boolean {
        return checkFinishCallbackIdFieldForValue(
            data, BarcodeCaptureActionFactory.ACTION_BRUSH_FOR_TRACKED_BARCODE
        )
    }

    fun isFinishBarcodeTrackingAdvancedOverlayViewCallback(data: JSONObject): Boolean {
        return checkFinishCallbackIdFieldForValue(
            data, BarcodeCaptureActionFactory.ACTION_VIEW_FOR_TRACKED_BARCODE
        )
    }

    fun isFinishBarcodeTrackingAdvancedOverlayOffsetCallback(data: JSONObject): Boolean {
        return checkFinishCallbackIdFieldForValue(
            data, BarcodeCaptureActionFactory.ACTION_OFFSET_FOR_TRACKED_BARCODE
        )
    }

    fun isFinishBarcodeTrackingAdvancedOverlayAnchorCallback(data: JSONObject): Boolean {
        return checkFinishCallbackIdFieldForValue(
            data, BarcodeCaptureActionFactory.ACTION_ANCHOR_FOR_TRACKED_BARCODE
        )
    }

    fun isFinishBarcodeTrackingAdvancedOverlayTapCallback(data: JSONObject): Boolean {
        return checkFinishCallbackIdFieldForValue(
            data, BarcodeCaptureActionFactory.ACTION_TAP_VIEW_FOR_TRACKED_BARCODE
        )
    }

    private fun checkFinishCallbackIdFieldForValue(data: JSONObject, value: String): Boolean {
        return data.has(SerializableCallbackAction.FIELD_FINISH_CALLBACK_ID) &&
            data[SerializableCallbackAction.FIELD_FINISH_CALLBACK_ID] == value
    }
}
