/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.callbacks

class CoreCallbackContainer {
    @Volatile
    var contextCallback: DataCaptureContextCallback? = null
        private set
    @Volatile
    var viewCallback: DataCaptureViewCallback? = null
        private set

    @Volatile
    var frameSourceCallback: FrameSourceCallback? = null
        private set

    fun setContextCallback(contextCallback: DataCaptureContextCallback) {
        disposeContextCallback()
        this.contextCallback = contextCallback
    }

    fun setViewCallback(viewCallback: DataCaptureViewCallback) {
        disposeViewCallback()
        this.viewCallback = viewCallback
    }

    fun setFrameSourceCallback(fameSourceCallback: FrameSourceCallback) {
        disposeFrameSourceCallback()
        this.frameSourceCallback = fameSourceCallback
    }

    fun disposeAll() {
        disposeContextCallback()
        disposeViewCallback()
    }

    private fun disposeContextCallback() {
        contextCallback?.dispose()
        contextCallback = null
    }

    private fun disposeViewCallback() {
        viewCallback?.dispose()
        viewCallback = null
    }

    private fun disposeFrameSourceCallback() {
        frameSourceCallback?.dispose()
        frameSourceCallback = null
    }
}
