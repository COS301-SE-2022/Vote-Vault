/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.errors

class NoCameraAvailableError : ActionError(
    ERROR_CODE,
    "No camera available or not yet initialized"
) {
    companion object {
        private const val ERROR_CODE = 10042
    }
}
