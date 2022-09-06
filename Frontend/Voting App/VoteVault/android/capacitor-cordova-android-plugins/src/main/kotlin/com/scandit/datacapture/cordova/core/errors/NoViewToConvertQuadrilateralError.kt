/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.errors

class NoViewToConvertQuadrilateralError : ActionError(
    ERROR_CODE,
    "There is no view shown, so the quadrilateral cannot be converted into its coordinate space"
) {
    companion object {
        private const val ERROR_CODE = 10032
    }
}
