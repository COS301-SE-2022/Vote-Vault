/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.errors

class ContextDeserializationError(error: String?) : ActionError(
    ERROR_CODE, "Could not deserialize context: ${error ?: "No additional info"}"
) {
    companion object {
        private const val ERROR_CODE = 10011
    }
}
