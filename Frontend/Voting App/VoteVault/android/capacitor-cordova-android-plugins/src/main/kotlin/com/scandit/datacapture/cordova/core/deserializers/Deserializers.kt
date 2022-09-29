/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.deserializers

import android.content.Context
import com.scandit.datacapture.core.capture.serialization.DataCaptureContextDeserializer
import com.scandit.datacapture.core.capture.serialization.DataCaptureModeDeserializer
import com.scandit.datacapture.core.component.serialization.DataCaptureComponentDeserializer
import com.scandit.datacapture.core.source.serialization.FrameSourceDeserializer
import com.scandit.datacapture.core.source.serialization.FrameSourceDeserializerListener
import com.scandit.datacapture.core.ui.serialization.DataCaptureViewDeserializer

class Deserializers(
    context: Context,
    modeDeserializers: List<DataCaptureModeDeserializer>,
    componentDeserializers: List<DataCaptureComponentDeserializer>,
    frameSourceDeserializerListener: FrameSourceDeserializerListener
) {
    private val frameSourceDeserializer: FrameSourceDeserializer
    private val dataCaptureViewDeserializer: DataCaptureViewDeserializer
    val dataCaptureContextDeserializer: DataCaptureContextDeserializer

    init {
        frameSourceDeserializer = FrameSourceDeserializer(modeDeserializers).apply {
            listener = frameSourceDeserializerListener
        }
        dataCaptureViewDeserializer = DataCaptureViewDeserializer(context, modeDeserializers)
        dataCaptureContextDeserializer = DataCaptureContextDeserializer(
            frameSourceDeserializer,
            dataCaptureViewDeserializer,
            modeDeserializers,
            componentDeserializers
        )
        dataCaptureContextDeserializer.avoidThreadDependencies = true
    }
}
