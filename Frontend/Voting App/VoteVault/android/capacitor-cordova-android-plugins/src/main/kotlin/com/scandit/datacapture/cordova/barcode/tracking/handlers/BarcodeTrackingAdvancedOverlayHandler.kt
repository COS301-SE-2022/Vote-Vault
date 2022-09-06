/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.tracking.handlers

import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingAdvancedOverlay
import com.scandit.datacapture.barcode.tracking.ui.overlay.BarcodeTrackingAdvancedOverlayListener

class BarcodeTrackingAdvancedOverlayHandler(
    private val barcodeTrackingAdvancedOverlayListener: BarcodeTrackingAdvancedOverlayListener
) {

    var barcodeTrackingAdvancedOverlay: BarcodeTrackingAdvancedOverlay? = null
        private set

    fun attachOverlay(overlay: BarcodeTrackingAdvancedOverlay) {
        if (this.barcodeTrackingAdvancedOverlay != overlay) {
            disposeCurrent()
            overlay.listener = barcodeTrackingAdvancedOverlayListener
            barcodeTrackingAdvancedOverlay = overlay
        }
    }

    fun disposeCurrent() {
        barcodeTrackingAdvancedOverlay?.listener = null
        barcodeTrackingAdvancedOverlay = null
    }
}
