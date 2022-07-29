/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import com.scandit.datacapture.cordova.core.workers.Worker
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.capture.serialization.DataCaptureContextDeserializer
import com.scandit.datacapture.core.component.DataCaptureComponent
import com.scandit.datacapture.core.ui.DataCaptureView
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException

class ActionUpdateContextAndView(
    private val dataCaptureContextDeserializer: DataCaptureContextDeserializer,
    private val dataCaptureContext: DataCaptureContext?,
    private val dataCaptureView: DataCaptureView?,
    private val dataCaptureComponents: List<DataCaptureComponent>,
    private val actionNameCreateContextAndView: String,
    private val listener: ResultListener,
    private val uiWorker: Worker
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            if (dataCaptureContext == null) {
                listener.onAdditionalActionRequired(
                    actionNameCreateContextAndView, args, callbackContext
                )
            } else {
                val jsonString = args.getJSONObject(0).toString()
                uiWorker.post {
                    val deserializationResult =
                        dataCaptureContextDeserializer.updateContextFromJson(
                            dataCaptureContext,
                            dataCaptureView,
                            dataCaptureComponents,
                            jsonString
                        )
                    val view = deserializationResult.view
                    val dataCaptureContext = deserializationResult.dataCaptureContext
                    val dataCaptureComponents = deserializationResult.components

                    listener.onUpdateContextAndView(
                        dataCaptureContext,
                        view,
                        dataCaptureComponents,
                        callbackContext
                    )
                }
            }
        } catch (e: JSONException) {
            listener.onJsonParseError(e, callbackContext)
        } catch (e: RuntimeException) { // TODO SDC-1851 fine-catch deserializer exceptions
            listener.onJsonParseError(e, callbackContext)
        } catch (e: Exception) {
            listener.onUpdateContextAndViewError(e, callbackContext)
        }
    }

    interface ResultListener :
        AdditionalActionRequiredResultListener, ActionJsonParseErrorResultListener {
        fun onUpdateContextAndView(
            dataCaptureContext: DataCaptureContext,
            dataCaptureView: DataCaptureView?,
            dataCaptureComponents: List<DataCaptureComponent>,
            callbackContext: CallbackContext
        )

        fun onUpdateContextAndViewError(error: Throwable, callbackContext: CallbackContext)
    }
}
