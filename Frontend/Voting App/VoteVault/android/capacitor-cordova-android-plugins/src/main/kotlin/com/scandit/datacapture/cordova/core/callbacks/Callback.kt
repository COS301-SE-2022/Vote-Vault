/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.callbacks

import org.apache.cordova.CallbackContext
import java.util.concurrent.atomic.AtomicBoolean

abstract class Callback(protected val callbackContext: CallbackContext) {

    protected val disposed: AtomicBoolean = AtomicBoolean(false)

    open fun dispose() {
        disposed.set(true)
        // This is to let Cordova know that we're not using this callback anymore.
        callbackContext.success()
    }
}
