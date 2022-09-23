/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2019- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.core.data.defaults

import com.scandit.datacapture.cordova.core.data.SerializableData
import com.scandit.datacapture.cordova.core.utils.hexString
import com.scandit.datacapture.core.common.geometry.toJson
import com.scandit.datacapture.core.ui.viewfinder.LaserlineViewfinder
import com.scandit.datacapture.core.ui.viewfinder.LaserlineViewfinderStyle
import com.scandit.datacapture.core.ui.viewfinder.serialization.toJson
import org.json.JSONObject

class SerializableLaserlineViewfinderDefaults(
    private val viewFinder: LaserlineViewfinder
) : SerializableData {

    override fun toJson(): JSONObject = JSONObject(
        mapOf(
            FIELD_VIEW_FINDER_DEFAULT_STYLE to viewFinder.style.toJson(),
            FIELD_VIEW_FINDER_STYLES to mapOf(
                LaserlineViewfinderStyle.ANIMATED.toJson() to
                    createViewfinderDefaults(LaserlineViewfinderStyle.ANIMATED),
                LaserlineViewfinderStyle.LEGACY.toJson() to
                    createViewfinderDefaults(LaserlineViewfinderStyle.LEGACY)
            )
        )
    )

    private fun createViewfinderDefaults(
        style: LaserlineViewfinderStyle
    ): Map<String, Any?> {
        return with(LaserlineViewfinder(style)) {
            mapOf(
                FIELD_VIEW_FINDER_WIDTH to width.toJson(),
                FIELD_VIEW_FINDER_ENABLED_COLOR to enabledColor.hexString,
                FIELD_VIEW_FINDER_DISABLED_COLOR to disabledColor.hexString,
                FIELD_VIEW_FINDER_STYLE to style.toJson()
            )
        }
    }

    companion object {
        private const val FIELD_VIEW_FINDER_DEFAULT_STYLE = "defaultStyle"
        private const val FIELD_VIEW_FINDER_STYLES = "styles"
        private const val FIELD_VIEW_FINDER_WIDTH = "width"
        private const val FIELD_VIEW_FINDER_ENABLED_COLOR = "enabledColor"
        private const val FIELD_VIEW_FINDER_DISABLED_COLOR = "disabledColor"
        private const val FIELD_VIEW_FINDER_STYLE = "style"
    }
}
