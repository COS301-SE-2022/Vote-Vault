/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.capture.serialization.DataCaptureContextDeserializer
import com.scandit.datacapture.core.component.DataCaptureComponent
import com.scandit.datacapture.core.ui.DataCaptureView
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException

class ActionCreateContextAndView(
    private val dataCaptureContextDeserializer: DataCaptureContextDeserializer,
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val jsonString = args.getJSONObject(0).toString()
            val deserializationResult = dataCaptureContextDeserializer.contextFromJson(
                jsonString
            )
            val view = deserializationResult.view
            val dataCaptureContext = deserializationResult.dataCaptureContext
            val dataCaptureComponents = deserializationResult.components

            listener.onCreateContextAndView(
                dataCaptureContext,
                view,
                dataCaptureComponents,
                callbackContext
            )
        } catch (e: JSONException) {
            listener.onJsonParseError(e, callbackContext)
        } catch (e: RuntimeException) { // TODO SDC-1851 fine-catch deserializer exceptions
            listener.onJsonParseError(e, callbackContext)
        } catch (e: Exception) {
            listener.onCreateContextAndViewError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onCreateContextAndView(
            dataCaptureContext: DataCaptureContext,
            dataCaptureView: DataCaptureView?,
            dataCaptureComponents: List<DataCaptureComponent>,
            callbackContext: CallbackContext
        )
        fun onCreateContextAndViewError(error: Throwable, callbackContext: CallbackContext)
    }
}
