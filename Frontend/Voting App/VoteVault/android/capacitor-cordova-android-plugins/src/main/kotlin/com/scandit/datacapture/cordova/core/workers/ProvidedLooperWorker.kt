/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.workers

import android.os.Handler
import android.os.Looper

class ProvidedLooperWorker(looper: Looper) : Worker() {
    override val handler: Handler = Handler(looper)
}
