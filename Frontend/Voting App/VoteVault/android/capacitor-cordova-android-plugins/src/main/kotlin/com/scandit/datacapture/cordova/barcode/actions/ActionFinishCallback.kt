/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.actions

import com.scandit.datacapture.cordova.barcode.data.*
import com.scandit.datacapture.cordova.barcode.utils.FinishCallbackHelper
import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.data.SerializableFinishModeCallbackData
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject

class ActionFinishCallback(
    private val listener: ResultListener,
    private val helper: FinishCallbackHelper
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val data = args.getJSONObject(0)
            // We need the "result" field to exist ( null is also allowed )
            if (!data.has(FIELD_RESULT)) {
                throw JSONException("Missing $FIELD_RESULT field in response json")
            }
            val result: JSONObject? = data.optJSONObject(FIELD_RESULT)
            when {
                helper.isFinishBarcodeCaptureModeCallback(data) ->
                    finishBarcodeCaptureModeCallback(
                        SerializableFinishModeCallbackData.fromJson(result), callbackContext
                    )

                helper.isFinishBarcodeTrackingModeCallback(data) ->
                    finishBarcodeTrackingModeCallback(
                        SerializableFinishModeCallbackData.fromJson(result), callbackContext
                    )

                helper.isFinishBarcodeSelectionModeCallback(data) ->
                    finishBarcodeSelectionModeCallback(
                        SerializableFinishModeCallbackData.fromJson(result), callbackContext
                    )

                helper.isFinishBarcodeTrackingBasicOverlayCallback(data) ->
                    finishBasicOverlayCallback(
                        SerializableFinishBasicOverlayCallbackData.fromJson(result),
                        callbackContext
                    )

                helper.isFinishBarcodeTrackingAdvancedOverlayViewCallback(data) ->
                    finishAdvancedOverlayViewCallback(
                        SerializableFinishAdvancedOverlayViewData.fromJson(result),
                        callbackContext
                    )

                helper.isFinishBarcodeTrackingAdvancedOverlayOffsetCallback(data) ->
                    finishAdvancedOverlayOffsetCallback(
                        SerializableFinishAdvancedOverlayOffsetData.fromJson(result),
                        callbackContext
                    )

                helper.isFinishBarcodeTrackingAdvancedOverlayAnchorCallback(data) ->
                    finishAdvancedOverlayAnchorCallback(
                        SerializableFinishAdvancedOverlayAnchorData.fromJson(result),
                        callbackContext
                    )

                helper.isFinishBarcodeTrackingAdvancedOverlayTapCallback(data) ->
                    finishAdvancedOverlayTapCallback(callbackContext)

                else ->
                    throw JSONException("Cannot recognise finish callback action with data $data")
            }
        } catch (e: JSONException) {
            println(e)
            listener.onJsonParseError(e, callbackContext)
        } catch (e: RuntimeException) {
            println(e)
            listener.onJsonParseError(e, callbackContext)
        }
    }

    private fun finishBarcodeCaptureModeCallback(
        data: SerializableFinishModeCallbackData?,
        callbackContext: CallbackContext
    ) {
        listener.onFinishBarcodeCaptureMode(data, callbackContext)
    }

    private fun finishBarcodeTrackingModeCallback(
        data: SerializableFinishModeCallbackData?,
        callbackContext: CallbackContext
    ) {
        listener.onFinishBarcodeTrackingMode(data, callbackContext)
    }

    private fun finishBarcodeSelectionModeCallback(
        data: SerializableFinishModeCallbackData?,
        callbackContext: CallbackContext
    ) {
        listener.onFinishBarcodeSelectionMode(data, callbackContext)
    }

    private fun finishBasicOverlayCallback(
        data: SerializableFinishBasicOverlayCallbackData?,
        callbackContext: CallbackContext
    ) {
        listener.onFinishBasicOverlay(data, callbackContext)
    }

    private fun finishAdvancedOverlayViewCallback(
        data: SerializableFinishAdvancedOverlayViewData?,
        callbackContext: CallbackContext
    ) {
        listener.onFinishAdvancedOverlayView(data, callbackContext)
    }

    private fun finishAdvancedOverlayOffsetCallback(
        data: SerializableFinishAdvancedOverlayOffsetData?,
        callbackContext: CallbackContext
    ) {
        listener.onFinishAdvancedOverlayOffset(data, callbackContext)
    }

    private fun finishAdvancedOverlayAnchorCallback(
        data: SerializableFinishAdvancedOverlayAnchorData?,
        callbackContext: CallbackContext
    ) {
        listener.onFinishAdvancedOverlayAnchor(data, callbackContext)
    }

    private fun finishAdvancedOverlayTapCallback(callbackContext: CallbackContext) {
        listener.onFinishAdvancedOverlayTap(callbackContext)
    }

    companion object {
        private const val FIELD_RESULT = "result"
    }

    interface ResultListener {
        fun onFinishBarcodeTrackingMode(
            finishData: SerializableFinishModeCallbackData?,
            callbackContext: CallbackContext
        )

        fun onFinishBarcodeCaptureMode(
            finishData: SerializableFinishModeCallbackData?,
            callbackContext: CallbackContext
        )

        fun onFinishBarcodeSelectionMode(
            finishData: SerializableFinishModeCallbackData?,
            callbackContext: CallbackContext
        )

        fun onFinishBasicOverlay(
            finishData: SerializableFinishBasicOverlayCallbackData?,
            callbackContext: CallbackContext
        )

        fun onFinishAdvancedOverlayView(
            finishData: SerializableFinishAdvancedOverlayViewData?,
            callbackContext: CallbackContext
        )

        fun onFinishAdvancedOverlayOffset(
            finishData: SerializableFinishAdvancedOverlayOffsetData?,
            callbackContext: CallbackContext
        )

        fun onFinishAdvancedOverlayAnchor(
            finishData: SerializableFinishAdvancedOverlayAnchorData?,
            callbackContext: CallbackContext
        )

        fun onFinishAdvancedOverlayTap(callbackContext: CallbackContext)
        fun onJsonParseError(error: Throwable, callbackContext: CallbackContext)
    }
}
