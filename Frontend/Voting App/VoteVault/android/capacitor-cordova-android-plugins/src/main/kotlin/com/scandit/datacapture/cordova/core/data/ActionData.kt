/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.data

import org.apache.cordova.CallbackContext
import org.json.JSONArray

data class ActionData(
    val actionName: String,
    val args: JSONArray,
    val callback: CallbackContext
)
