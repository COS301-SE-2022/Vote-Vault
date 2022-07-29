/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.errors

import java.lang.Exception

class InvalidActionNameError(actionName: String) : Exception("$actionName is not a valid action")
