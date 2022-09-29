/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.handlers

import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.capture.DataCaptureContextListener
import com.scandit.datacapture.core.source.Camera

class DataCaptureContextHandler(
    private val contextListener: DataCaptureContextListener
) {
    // We need to mark as final, otherwise with the kotlin-allopen plugin the private setter
    // would not be allowed.
    final var dataCaptureContext: DataCaptureContext? = null
        private set

    val camera: Camera?
        get() = dataCaptureContext?.frameSource as? Camera

    fun attachDataCaptureContext(dataCaptureContext: DataCaptureContext) {
        if (this.dataCaptureContext != dataCaptureContext) {
            disposeCurrent()
            dataCaptureContext.addListener(contextListener)
            this.dataCaptureContext = dataCaptureContext
        }
    }

    fun disposeCurrent() {
        dataCaptureContext?.apply {
            removeListener(contextListener)
            release()
        }
        dataCaptureContext = null
    }
}
