/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.handlers

import com.scandit.datacapture.barcode.capture.BarcodeCapture
import com.scandit.datacapture.barcode.capture.BarcodeCaptureListener

class BarcodeCaptureHandler(
    private val barcodeCaptureListener: BarcodeCaptureListener
) {
    var barcodeCapture: BarcodeCapture? = null
        private set

    fun attachBarcodeCapture(barcodeCapture: BarcodeCapture) {
        if (this.barcodeCapture != barcodeCapture) {
            disposeCurrent()
            barcodeCapture.addListener(barcodeCaptureListener)
            this.barcodeCapture = barcodeCapture
        }
    }

    fun disposeCurrent() {
        barcodeCapture?.apply {
            removeListener(barcodeCaptureListener)
        }
        barcodeCapture = null
    }
}
