/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.handlers

import com.scandit.datacapture.cordova.core.factories.ActionFactory
import java.util.concurrent.atomic.AtomicBoolean

class CameraPermissionsActionsHandlerHelper(
    private val actionFactory: ActionFactory,
    private val permissionRequest: () -> Unit = {}
) {

    private val cameraPermissionsGranted: AtomicBoolean = AtomicBoolean(false)
    private val cameraPermissionsRequested: AtomicBoolean = AtomicBoolean(false)

    fun canBeRun(actionName: String): Boolean =
        actionFactory.canBeRunWithoutCameraPermission(actionName) ||
            cameraPermissionsGranted.get().also {
                if (it.not() && cameraPermissionsRequested.getAndSet(true).not()) {
                    permissionRequest()
                }
            }

    fun onCameraPermissionsGranted() {
        cameraPermissionsGranted.set(true)
        cameraPermissionsRequested.set(false)
    }

    fun onCameraPermissionDenied() {
        cameraPermissionsRequested.set(false)
    }
}
