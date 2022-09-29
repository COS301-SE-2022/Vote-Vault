/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2021- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.cordova.barcode.data.defaults

import com.scandit.datacapture.barcode.selection.capture.BarcodeSelection
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionAimerSelection
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionSettings
import com.scandit.datacapture.barcode.selection.capture.BarcodeSelectionTapSelection
import com.scandit.datacapture.barcode.selection.capture.toJson
import com.scandit.datacapture.barcode.selection.feedback.BarcodeSelectionFeedback
import com.scandit.datacapture.barcode.selection.ui.overlay.BarcodeSelectionBasicOverlay
import com.scandit.datacapture.barcode.selection.ui.overlay.BarcodeSelectionBasicOverlayStyle
import com.scandit.datacapture.barcode.selection.ui.overlay.toJson
import com.scandit.datacapture.cordova.core.data.SerializableData
import com.scandit.datacapture.cordova.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.cordova.core.data.defaults.SerializableCameraSettingsDefault
import org.json.JSONObject

class SerializableBarcodeSelectionDefaults(
    private val defaultFeedback: BarcodeSelectionFeedback,
    private val recommendedCameraSettingsDefaults: SerializableCameraSettingsDefault,
    private val settingsDefaults: SerializableBarcodeSelectionSettingsDefaults,
    private val tapSelectionDefaults: SerializableBarcodeSelectionTapSelectionDefaults,
    private val aimerSelectionDefaults: SerializableBarcodeSelectionAimerSelectionDefaults,
    private val overlayDefaults: SerializableBarcodeSelectionBasicOverlayDefaults
) : SerializableData {
    override fun toJson() = JSONObject(
        mapOf(
            FIELD_OVERLAY to overlayDefaults.toJson(),
            FIELD_SETTINGS to settingsDefaults.toJson(),
            FIELD_FEEDBACK to defaultFeedback.toJson(),
            FIELD_CAMERA_SETTINGS to recommendedCameraSettingsDefaults.toJson(),
            FIELD_TAP_SELECTION to tapSelectionDefaults.toJson(),
            FIELD_AIMER_SELECTION to aimerSelectionDefaults.toJson()
        )
    )

    companion object {
        private const val FIELD_OVERLAY = "BarcodeSelectionBasicOverlay"
        private const val FIELD_SETTINGS = "BarcodeSelectionSettings"
        private const val FIELD_FEEDBACK = "feedback"
        private const val FIELD_CAMERA_SETTINGS = "RecommendedCameraSettings"
        private const val FIELD_TAP_SELECTION = "BarcodeSelectionTapSelection"
        private const val FIELD_AIMER_SELECTION = "BarcodeSelectionAimerSelection"

        @JvmStatic
        fun create(): SerializableBarcodeSelectionDefaults {
            val selection = BarcodeSelection.forDataCaptureContext(
                null,
                BarcodeSelectionSettings()
            )

            return SerializableBarcodeSelectionDefaults(
                defaultFeedback = BarcodeSelectionFeedback.defaultFeedback(),
                recommendedCameraSettingsDefaults = SerializableCameraSettingsDefault(
                    BarcodeSelection.createRecommendedCameraSettings()
                ),
                settingsDefaults = SerializableBarcodeSelectionSettingsDefaults(
                    BarcodeSelectionSettings()
                ),
                tapSelectionDefaults = SerializableBarcodeSelectionTapSelectionDefaults(
                    BarcodeSelectionTapSelection()
                ),
                aimerSelectionDefaults = SerializableBarcodeSelectionAimerSelectionDefaults(
                    BarcodeSelectionAimerSelection()
                ),
                overlayDefaults = SerializableBarcodeSelectionBasicOverlayDefaults(
                    barcodeSelectionBasicOverlay = BarcodeSelectionBasicOverlay.newInstance(
                        selection,
                        null
                    ),
                    styles = BarcodeSelectionBasicOverlayStyle.values()
                )
            )
        }
    }
}

class SerializableBarcodeSelectionSettingsDefaults(
    private val settings: BarcodeSelectionSettings
) : SerializableData {
    override fun toJson() = JSONObject(
        mapOf(
            FIELD_CODE_DUPLICATE_FILTER to settings.codeDuplicateFilter.asMillis(),
            FIELD_SINGLE_BARCODE_AUTO_DETECTION_ENABLED to settings.singleBarcodeAutoDetection,
            FIELD_SELECTION_TYPE to settings.selectionType.toJson()
        )
    )

    companion object {
        private const val FIELD_CODE_DUPLICATE_FILTER = "codeDuplicateFilter"
        private const val FIELD_SINGLE_BARCODE_AUTO_DETECTION_ENABLED =
            "singleBarcodeAutoDetectionEnabled"
        private const val FIELD_SELECTION_TYPE = "selectionType"
    }
}

class SerializableBarcodeSelectionBasicOverlayDefaults(
    private val barcodeSelectionBasicOverlay: BarcodeSelectionBasicOverlay,
    private val styles: Array<BarcodeSelectionBasicOverlayStyle>
) : SerializableData {

    override fun toJson() = JSONObject(
        mapOf(
            FIELD_DEFAULT_STYLE to barcodeSelectionBasicOverlay.style.toJson(),
            FIELD_STYLES to stylesMap(styles),
            FIELD_TRACKED_BRUSH to SerializableBrushDefaults(
                barcodeSelectionBasicOverlay.trackedBrush
            ).toJson(),
            FIELD_AIMED_BRUSH to SerializableBrushDefaults(
                barcodeSelectionBasicOverlay.aimedBrush
            ).toJson(),
            FIELD_SELECTING_BRUSH to SerializableBrushDefaults(
                barcodeSelectionBasicOverlay.selectingBrush
            ).toJson(),
            FIELD_SELECTED_BRUSH to SerializableBrushDefaults(
                barcodeSelectionBasicOverlay.selectedBrush
            ).toJson()
        )
    )

    private fun stylesMap(styles: Array<BarcodeSelectionBasicOverlayStyle>): JSONObject {
        val map = mutableMapOf<String, Map<String, JSONObject>>()

        styles.forEach {
            map[it.toJson()] = mapOf(
                FIELD_TRACKED_BRUSH to
                    SerializableBrushDefaults(
                        BarcodeSelectionBasicOverlay.defaultTrackedBrush(it)
                    ).toJSONObject(),
                FIELD_AIMED_BRUSH to
                    SerializableBrushDefaults(
                        BarcodeSelectionBasicOverlay.defaultAimedBrush(it)
                    ).toJSONObject(),
                FIELD_SELECTING_BRUSH to
                    SerializableBrushDefaults(
                        BarcodeSelectionBasicOverlay.defaultSelectingBrush(it)
                    ).toJSONObject(),
                FIELD_SELECTED_BRUSH to
                    SerializableBrushDefaults(
                        BarcodeSelectionBasicOverlay.defaultSelectedBrush(it)
                    ).toJSONObject()
            )
        }

        return JSONObject(map as Map<String, Map<String, JSONObject>>)
    }

    companion object {
        private const val FIELD_TRACKED_BRUSH = "DefaultTrackedBrush"
        private const val FIELD_AIMED_BRUSH = "DefaultAimedBrush"
        private const val FIELD_SELECTING_BRUSH = "DefaultSelectingBrush"
        private const val FIELD_SELECTED_BRUSH = "DefaultSelectedBrush"
        private const val FIELD_DEFAULT_STYLE = "defaultStyle"
        private const val FIELD_STYLES = "styles"
    }
}

class SerializableBarcodeSelectionTapSelectionDefaults(
    private val tapSelection: BarcodeSelectionTapSelection
) : SerializableData {
    override fun toJson() = JSONObject(
        mapOf(
            FIELD_DEFAULT_FREEZE_BEHAVIOUR to tapSelection.freezeBehavior.toJson(),
            FIELD_DEFAULT_TAP_BEHAVIOUR to tapSelection.tapBehavior.toJson()
        )
    )

    companion object {
        private const val FIELD_DEFAULT_FREEZE_BEHAVIOUR = "defaultFreezeBehaviour"
        private const val FIELD_DEFAULT_TAP_BEHAVIOUR = "defaultTapBehaviour"
    }
}

class SerializableBarcodeSelectionAimerSelectionDefaults(
    private val aimerSelection: BarcodeSelectionAimerSelection
) : SerializableData {
    override fun toJson() = JSONObject(
        mapOf(
            FIELD_DEFAULT_SELECTION_STRATEGY to aimerSelection.selectionStrategy.toJson()
        )
    )

    companion object {
        private const val FIELD_DEFAULT_SELECTION_STRATEGY = "defaultSelectionStrategy"
    }
}
