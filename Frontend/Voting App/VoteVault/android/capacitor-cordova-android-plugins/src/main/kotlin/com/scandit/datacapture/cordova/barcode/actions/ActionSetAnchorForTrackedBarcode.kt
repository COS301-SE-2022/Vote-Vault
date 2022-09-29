/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.actions

import com.scandit.datacapture.cordova.barcode.data.SerializableAdvancedOverlayAnchorActionData
import com.scandit.datacapture.cordova.core.actions.Action
import com.scandit.datacapture.cordova.core.actions.ActionJsonParseErrorResultListener
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import org.json.JSONException

class ActionSetAnchorForTrackedBarcode(
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        try {
            val parsedData = SerializableAdvancedOverlayAnchorActionData(
                args.getJSONObject(0)
            )
            listener.onAnchorForTrackedBarcode(parsedData, callbackContext)
        } catch (e: JSONException) {
            println(e)
            listener.onJsonParseError(e, callbackContext)
        } catch (e: RuntimeException) { // TODO [SDC-1851] - fine-catch deserializer exceptions
            println(e)
            listener.onJsonParseError(e, callbackContext)
        }
    }

    interface ResultListener : ActionJsonParseErrorResultListener {
        fun onAnchorForTrackedBarcode(
            data: SerializableAdvancedOverlayAnchorActionData,
            callbackContext: CallbackContext
        )
    }
}
