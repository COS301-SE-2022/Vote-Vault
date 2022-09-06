/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.errors

class JsonParseError(error: String?) : ActionError(
    ERROR_CODE, "Invalid or no JSON passed for command: ${error ?: "No additional info"}"
) {
    companion object {
        private const val ERROR_CODE = 10001
    }
}
