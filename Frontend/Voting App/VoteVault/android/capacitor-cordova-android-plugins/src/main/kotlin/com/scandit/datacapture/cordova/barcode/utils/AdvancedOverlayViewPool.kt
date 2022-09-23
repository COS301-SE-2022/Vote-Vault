/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.utils

import android.content.Context
import android.widget.ImageView

class AdvancedOverlayViewPool(
    private val context: Context
) {

    private val views: MutableMap<Int, ImageView> = mutableMapOf()

    @Synchronized
    fun getOrCreateView(id: Int): ImageView = views.getOrPut(id, ::createView)
    private fun createView() = ImageView(context)
}
