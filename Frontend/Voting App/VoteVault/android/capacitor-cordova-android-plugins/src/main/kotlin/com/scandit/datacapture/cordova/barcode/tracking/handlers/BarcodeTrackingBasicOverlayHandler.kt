/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.tracking.handlers

import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingBasicOverlayListener

class BarcodeTrackingBasicOverlayHandler(
    private val barcodeTrackingBasicOverlayListener: BarcodeTrackingBasicOverlayListener
) {

    var barcodeTrackingBasicOverlay: BarcodeTrackingBasicOverlay? = null
        private set

    fun attachOverlay(overlay: BarcodeTrackingBasicOverlay) {
        if (this.barcodeTrackingBasicOverlay != overlay) {
            disposeCurrent()
            overlay.listener = barcodeTrackingBasicOverlayListener
            barcodeTrackingBasicOverlay = overlay
        }
    }

    fun disposeCurrent() {
        barcodeTrackingBasicOverlay?.listener = null
        barcodeTrackingBasicOverlay = null
    }
}
