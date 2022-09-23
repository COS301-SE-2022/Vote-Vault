/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.workers

import android.os.Handler

abstract class Worker {

    protected abstract val handler: Handler

    fun post(block: () -> Unit) = handler.post(block)
}
