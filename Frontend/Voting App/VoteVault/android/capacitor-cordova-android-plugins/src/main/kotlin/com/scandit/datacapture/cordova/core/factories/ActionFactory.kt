/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.factories

import com.scandit.datacapture.cordova.core.actions.Action

interface ActionFactory {
    fun provideAction(actionName: String): Action
    fun canBeRunWithoutCameraPermission(actionName: String): Boolean
}
