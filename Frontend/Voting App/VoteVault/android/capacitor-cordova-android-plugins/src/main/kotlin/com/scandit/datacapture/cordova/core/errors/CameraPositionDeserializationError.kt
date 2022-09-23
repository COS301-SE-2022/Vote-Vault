/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.errors

class CameraPositionDeserializationError(command: String) : ActionError(
    ERROR_CODE, "Invalid or no JSON passed for command: '$command'"
) {
    companion object {
        private const val ERROR_CODE = 10001
    }
}
