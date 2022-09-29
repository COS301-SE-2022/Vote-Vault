/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.actions

import com.scandit.datacapture.cordova.barcode.data.SerializableBarcodeSelectionSessionData
import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.actions.ActionJsonParseErrorResultListener
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException

class ActionGetCountForBarcodeInBarcodeSelectionSession(
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val parsedData = SerializableBarcodeSelectionSessionData(
                args.getString(0)
            )
            listener.onGetCountForBarcodeInBarcodeSelectionSession(parsedData, callbackContext)
        } catch (e: JSONException) {
            println(e)
            listener.onJsonParseError(e, callbackContext)
        } catch (e: RuntimeException) {
            println(e)
            listener.onJsonParseError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onGetCountForBarcodeInBarcodeSelectionSession(
            data: SerializableBarcodeSelectionSessionData,
            callbackContext: CallbackContext
        )
    }
}
