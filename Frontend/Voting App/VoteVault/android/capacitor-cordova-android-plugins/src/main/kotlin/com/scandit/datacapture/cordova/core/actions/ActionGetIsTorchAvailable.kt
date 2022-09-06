/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import com.scandit.datacapture.core.source.Camera
import com.scandit.datacapture.core.source.CameraPositionDeserializer
import com.scandit.datacapture.core.source.toJson
import org.apache.cordova.CallbackContext
import org.json.JSONArray

class ActionGetIsTorchAvailable(
    private val camera: Camera?,
    private val listener: ResultListener
) : Action {
    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        if (camera == null) {
            listener.onNoCameraError(callbackContext)
            return
        }

        val cameraPosition = try {
            CameraPositionDeserializer.fromJson(args[0].toString())
        } catch (e: Exception) {
            println(e)
            listener.onUnableToDeserializePositionError("GetIsTorchAvailable", callbackContext)
            return
        }

        if (cameraPosition != camera.position) {
            listener.onWrongCameraPositionError(cameraPosition.toJson(), callbackContext)
            return
        }

        listener.onGetIsTorchAvailable(camera.isTorchAvailable, callbackContext)
    }

    interface ResultListener {
        fun onGetIsTorchAvailable(isTorchAvailable: Boolean, callbackContext: CallbackContext)
        fun onNoCameraError(callbackContext: CallbackContext)
        fun onUnableToDeserializePositionError(action: String, callbackContext: CallbackContext)
        fun onWrongCameraPositionError(position: String, callbackContext: CallbackContext)
    }
}
