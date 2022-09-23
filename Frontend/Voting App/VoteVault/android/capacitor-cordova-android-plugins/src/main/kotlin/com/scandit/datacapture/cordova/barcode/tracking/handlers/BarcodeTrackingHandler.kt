/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.tracking.handlers

import com.scandit.datacapture.barcode.tracking.capture.BarcodeTracking
import com.scandit.datacapture.barcode.tracking.capture.BarcodeTrackingListener

class BarcodeTrackingHandler(
    private val barcodeTrackingListener: BarcodeTrackingListener
) {
    var barcodeTracking: BarcodeTracking? = null
        private set

    fun attachBarcodeTracking(barcodeTracking: BarcodeTracking) {
        if (this.barcodeTracking != barcodeTracking) {
            disposeCurrent()
            barcodeTracking.addListener(barcodeTrackingListener)
            this.barcodeTracking = barcodeTracking
        }
    }

    fun disposeCurrent() {
        barcodeTracking?.apply {
            removeListener(barcodeTrackingListener)
        }
        barcodeTracking = null
    }
}
