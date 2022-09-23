/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.errors

class NoCameraWithPositionError(position: String) : ActionError(
    ERROR_CODE, "No camera available with position ($position)"
) {
    companion object {
        private const val ERROR_CODE = 10001
    }
}
