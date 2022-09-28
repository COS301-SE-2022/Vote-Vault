/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.tracking.handlers

import com.scandit.datacapture.barcode.selection.capture.BarcodeSelection
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionListener

class BarcodeSelectionHandler(
    private val barcodeSessionListener: BarcodeSelectionListener
) {
    var barcodeSelection: BarcodeSelection? = null
        private set

    fun attachBarcodeSelection(barcodeSelection: BarcodeSelection) {
        if (this.barcodeSelection != barcodeSelection) {
            disposeCurrent()
            barcodeSelection.addListener(barcodeSessionListener)
            this.barcodeSelection = barcodeSelection
        }
    }

    fun disposeCurrent() {
        barcodeSelection?.apply {
            removeListener(barcodeSessionListener)
        }
        barcodeSelection = null
    }
}
