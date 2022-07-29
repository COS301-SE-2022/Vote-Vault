/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.communication

import com.scandit.datacapture.core.component.serialization.DataCaptureComponentDeserializer

interface ComponentDeserializersProvider {
    fun provideComponentDeserializers(): List<DataCaptureComponentDeserializer>
}
