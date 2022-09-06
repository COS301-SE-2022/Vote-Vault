/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.handlers

import com.scandit.datacapture.cordova.core.data.ActionData
import com.scandit.datacapture.cordova.core.errors.ActionError
import com.scandit.datacapture.cordova.core.errors.InvalidActionNameError
import com.scandit.datacapture.cordova.core.factories.ActionFactory
import org.apache.cordova.CallbackContext
import org.json.JSONArray
import java.util.*

class ActionsHandler(
    private val actionFactory: ActionFactory,
    private val actionsHandlerHelper: CameraPermissionsActionsHandlerHelper
) {
    private val actions: MutableList<ActionData> = Collections.synchronizedList(mutableListOf())

    fun addAction(actionName: String, args: JSONArray, callbackContext: CallbackContext): Boolean =
        addAction(ActionData(actionName, args, callbackContext))

    private fun addAction(actionData: ActionData): Boolean {
        try {
            if (actionsHandlerHelper.canBeRun(actionData.actionName)) {
                // We are ready to run this action.
                executeSyncAction(actionData)
            } else {
                // We cannot run this action yet, add it to the queue.
                actions.add(actionData)
            }
        } catch (e: InvalidActionNameError) {
            println(e)
            return false
        } catch (e: Exception) {
            println(e)
        }
        return true
    }

    fun onCameraPermissionGranted() {
        actionsHandlerHelper.onCameraPermissionsGranted()
        for (actionData in actions) {
            addAction(actionData)
        }
    }

    fun onCameraPermissionDenied() {
        actionsHandlerHelper.onCameraPermissionDenied()
    }

    private fun executeSyncAction(actionData: ActionData) = runAction(actionData)

    private fun runAction(actionData: ActionData) {
        try {
            val action = actionFactory.provideAction(actionData.actionName)
            action.run(actionData.args, actionData.callback)
        } catch (e: ActionError) {
            println(e)
        } catch (e: Exception) {
            println(e)
        }
    }
}
