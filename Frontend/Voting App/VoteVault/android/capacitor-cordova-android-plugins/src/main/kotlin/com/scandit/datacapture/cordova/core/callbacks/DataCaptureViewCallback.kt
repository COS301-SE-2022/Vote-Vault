/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.callbacks

import com.scandit.datacapture.cordova.core.data.SerializableViewState
import com.scandit.datacapture.cordova.core.factories.CaptureCoreActionFactory
import com.scandit.datacapture.cordova.core.handlers.ActionsHandler
import com.scandit.datacapture.cordova.core.workers.Worker
import com.scandit.datacapture.core.ui.orientation.DeviceOrientationMapper
import com.scandit.datacapture.core.ui.orientation.toJson
import org.apache.cordova.CallbackContext
import org.json.JSONArray

class DataCaptureViewCallback(
    private val actionsHandler: ActionsHandler,
    callbackContext: CallbackContext,
    private val uiWorker: Worker
) : Callback(callbackContext) {

    fun onSizeChanged(
        width: Int,
        height: Int,
        screenRotation: Int
    ) {
        if (disposed.get()) return

        uiWorker.post {
            actionsHandler.addAction(
                CaptureCoreActionFactory.SEND_VIEW_SIZE_CHANGED_EVENT,
                JSONArray().apply {
                    put(
                        SerializableViewState(
                            width,
                            height,
                            DeviceOrientationMapper()
                                .mapRotationToOrientation(screenRotation)
                                .toJson()
                        ).toJson()
                    )
                },
                callbackContext
            )
        }
    }
}
