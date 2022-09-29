/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.callbacks

import com.scandit.datacapture.cordova.barcode.data.*
import com.scandit.datacapture.cordova.barcode.tracking.callbacks.BarcodeSelectionCallback
import com.scandit.datacapture.cordova.barcode.tracking.callbacks.BarcodeTrackingAdvancedOverlayCallback
import com.scandit.datacapture.cordova.barcode.tracking.callbacks.BarcodeTrackingBasicOverlayCallback
import com.scandit.datacapture.cordova.barcode.tracking.callbacks.BarcodeTrackingCallback
import com.scandit.datacapture.cordova.core.data.SerializableFinishModeCallbackData

class BarcodeCallbackContainer {

    var barcodeCaptureCallback: BarcodeCaptureCallback? = null
        private set

    var barcodeTrackingCallback: BarcodeTrackingCallback? = null
        private set

    var barcodeSelectionCallback: BarcodeSelectionCallback? = null
        private set

    var barcodeTrackingBasicOverlayCallback: BarcodeTrackingBasicOverlayCallback? = null
        private set

    var barcodeTrackingAdvancedOverlayCallback: BarcodeTrackingAdvancedOverlayCallback? = null
        private set

    fun setBarcodeCaptureCallback(barcodeCaptureCallback: BarcodeCaptureCallback) {
        disposeBarcodeCaptureCallback()
        this.barcodeCaptureCallback = barcodeCaptureCallback
    }

    fun setBarcodeTrackingCallback(barcodeTrackingCallback: BarcodeTrackingCallback) {
        disposeBarcodeTrackingCallback()
        this.barcodeTrackingCallback = barcodeTrackingCallback
    }

    fun setBarcodeSelectionCallback(barcodeSelectionCallback: BarcodeSelectionCallback) {
        disposeBarcodeSelectionCallback()
        this.barcodeSelectionCallback = barcodeSelectionCallback
    }

    fun setBarcodeTrackingBasicOverlayCallback(
        barcodeTrackingBasicOverlayCallback: BarcodeTrackingBasicOverlayCallback
    ) {
        disposeBarcodeTrackingBasicOverlayCallback()
        this.barcodeTrackingBasicOverlayCallback = barcodeTrackingBasicOverlayCallback
    }

    fun setBarcodeTrackingAdvancedOverlayCallback(
        barcodeTrackingAdvancedOverlayCallback: BarcodeTrackingAdvancedOverlayCallback
    ) {
        disposeBarcodeTrackingAdvancedOverlayCallback()
        this.barcodeTrackingAdvancedOverlayCallback = barcodeTrackingAdvancedOverlayCallback
    }

    fun disposeAll() {
        disposeBarcodeCaptureCallback()
        disposeBarcodeTrackingCallback()
        disposeBarcodeTrackingBasicOverlayCallback()
        disposeBarcodeTrackingAdvancedOverlayCallback()
    }

    fun onFinishBarcodeCaptureAction(finishData: SerializableFinishModeCallbackData?) {
        barcodeCaptureCallback?.onFinishCallback(finishData)
    }

    fun onFinishBarcodeTrackingAction(finishData: SerializableFinishModeCallbackData?) {
        barcodeTrackingCallback?.onFinishCallback(finishData)
    }

    fun onFinishBarcodeSelectionAction(finishData: SerializableFinishModeCallbackData?) {
        barcodeSelectionCallback?.onFinishCallback(finishData)
    }

    fun onFinishBasicOverlayAction(finishData: SerializableFinishBasicOverlayCallbackData?) {
        barcodeTrackingBasicOverlayCallback?.onFinishCallback(finishData)
    }

    fun onFinishAdvancedOverlayViewAction(finishData: SerializableFinishAdvancedOverlayViewData?) {
        barcodeTrackingAdvancedOverlayCallback?.onFinishViewCallback(finishData)
    }

    fun onFinishAdvancedOverlayOffsetAction(
        finishData: SerializableFinishAdvancedOverlayOffsetData?
    ) {
        barcodeTrackingAdvancedOverlayCallback?.onFinishOffsetCallback(finishData)
    }

    fun onFinishAdvancedOverlayAnchorAction(
        finishData: SerializableFinishAdvancedOverlayAnchorData?
    ) {
        barcodeTrackingAdvancedOverlayCallback?.onFinishAnchorCallback(finishData)
    }

    fun onFinishAdvancedOverlayTapAction() {
        barcodeTrackingAdvancedOverlayCallback?.onFinishTapCallback()
    }

    fun forceRelease() {
        barcodeCaptureCallback?.forceRelease()
        barcodeTrackingCallback?.forceRelease()
        barcodeTrackingBasicOverlayCallback?.forceRelease()
        barcodeTrackingAdvancedOverlayCallback?.forceRelease()
    }

    private fun disposeBarcodeCaptureCallback() {
        barcodeCaptureCallback?.dispose()
        barcodeCaptureCallback = null
    }

    private fun disposeBarcodeSelectionCallback() {
        barcodeSelectionCallback?.dispose()
        barcodeSelectionCallback = null
    }

    private fun disposeBarcodeTrackingCallback() {
        barcodeTrackingCallback?.dispose()
        barcodeTrackingCallback = null
    }

    private fun disposeBarcodeTrackingBasicOverlayCallback() {
        barcodeTrackingBasicOverlayCallback?.dispose()
        barcodeTrackingBasicOverlayCallback = null
    }

    private fun disposeBarcodeTrackingAdvancedOverlayCallback() {
        barcodeTrackingAdvancedOverlayCallback?.dispose()
        barcodeTrackingAdvancedOverlayCallback = null
    }
}
