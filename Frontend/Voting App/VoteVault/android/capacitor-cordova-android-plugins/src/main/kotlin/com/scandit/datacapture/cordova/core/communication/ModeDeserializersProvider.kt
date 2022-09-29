/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.communication

import com.scandit.datacapture.core.capture.serialization.DataCaptureModeDeserializer

interface ModeDeserializersProvider {
    fun provideModeDeserializers(): List<DataCaptureModeDeserializer>
}
