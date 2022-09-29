/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import com.scandit.datacapture.cordova.core.utils.dpFromPx
import com.scandit.datacapture.core.common.geometry.Quadrilateral
import com.scandit.datacapture.core.common.geometry.QuadrilateralDeserializer
import com.scandit.datacapture.core.ui.DataCaptureView
import org.apache.cordova.CallbackContext
import org.json.JSONArray

class ActionConvertQuadrilateralCoordinates(
    private val dataCaptureView: DataCaptureView?,
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            if (dataCaptureView == null) {
                listener.onConvertQuadrilateralCoordinatesNoViewError(callbackContext)
            } else {
                val quadrilateral = QuadrilateralDeserializer.fromJson(
                    args.getJSONObject(0).toString()
                )
                val mappedQuadrilateral = dataCaptureView
                    .mapFrameQuadrilateralToView(quadrilateral)
                    .dpFromPx()
                listener.onConvertQuadrilateralCoordinates(mappedQuadrilateral, callbackContext)
            }
        } catch (e: Exception) { // TODO SDC-1851 fine-catch deserializer exceptions
            listener.onJsonParseError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onConvertQuadrilateralCoordinates(
            quadrilateral: Quadrilateral,
            callbackContext: CallbackContext
        )
        fun onConvertQuadrilateralCoordinatesNoViewError(callbackContext: CallbackContext)
    }
}
