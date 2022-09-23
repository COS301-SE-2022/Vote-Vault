/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.actions

import com.scandit.datacapture.core.source.Camera
import com.scandit.datacapture.core.source.FrameSourceState
import org.apache.cordova.CallbackContext
import org.json.JSONArray

class ActionGetCameraState(
    private val camera: Camera?,
    private val listener: ResultListener
) : Action {

    override fun run(args: JSONArray, callbackContext: CallbackContext) {
        if (camera == null) {
            listener.onNoCameraError(callbackContext)
        } else {
            listener.onGetCameraState(camera.currentState, callbackContext)
        }
    }

    interface ResultListener {
        fun onGetCameraState(cameraState: FrameSourceState, callbackContext: CallbackContext)
        fun onNoCameraError(callbackContext: CallbackContext)
    }
}
