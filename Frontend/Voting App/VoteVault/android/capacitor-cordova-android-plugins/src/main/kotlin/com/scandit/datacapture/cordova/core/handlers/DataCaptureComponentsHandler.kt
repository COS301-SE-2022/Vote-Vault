/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.handlers

import com.scandit.datacapture.core.component.DataCaptureComponent

class DataCaptureComponentsHandler {

    val dataCaptureComponents: List<DataCaptureComponent>
        get() = _dataCaptureComponents ?: emptyList()
    private var _dataCaptureComponents: List<DataCaptureComponent>? = null

    fun attachDataCaptureComponents(components: List<DataCaptureComponent>) {
        if (dataCaptureComponents != components) {
            disposeCurrent()
            _dataCaptureComponents = components
        }
    }

    fun disposeCurrent() {
        _dataCaptureComponents = null
    }
}
