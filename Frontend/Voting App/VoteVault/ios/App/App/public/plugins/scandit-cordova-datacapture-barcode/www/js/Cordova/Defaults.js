cordova.define("scandit-cordova-datacapture-barcode.Defaults", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultsFromJSON = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.Defaults"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Barcode_1 = require("scandit-cordova-datacapture-barcode.Barcode");
const Camera_Related_1 = require("scandit-cordova-datacapture-core.Camera+Related");
const Common_1 = require("scandit-cordova-datacapture-core.Common");
const Feedback_1 = require("scandit-cordova-datacapture-core.Feedback");
const LocationSelection_1 = require("scandit-cordova-datacapture-core.LocationSelection");
exports.defaultsFromJSON = (json) => {
    // SparkCapture is currently only available on iOS. To avoid polluting the code with handling null values for the
    // related defaults, we define them here. The values do not really matter, as SparkCapture is not supported if
    // `json.SparkCapture` was not defined.
    if (!json.SparkCapture) {
        json.SparkCapture = {
            feedback: JSON.stringify({ success: Feedback_1.Feedback.defaultFeedback.toJSON() }),
            SparkCaptureSettings: {
                codeDuplicateFilter: 0,
                locationSelection: JSON.stringify(new LocationSelection_1.RadiusLocationSelection(new Common_1.NumberWithUnit(10, Common_1.MeasureUnit.DIP)).toJSON()),
            },
        };
    }
    return {
        SymbologySettings: Object.keys(json.SymbologySettings)
            .reduce((settings, identifier) => {
            settings[identifier] = Barcode_1.SymbologySettings
                .fromJSON(JSON.parse(json.SymbologySettings[identifier]));
            return settings;
        }, {}),
        SymbologyDescriptions: json.SymbologyDescriptions.map(description => Barcode_1.SymbologyDescription.fromJSON(JSON.parse(description))),
        CompositeTypeDescriptions: json.CompositeTypeDescriptions.map(description => JSON.parse(description)),
        BarcodeCapture: {
            BarcodeCaptureOverlay: {
                defaultStyle: json.BarcodeCapture.BarcodeCaptureOverlay.defaultStyle,
                DefaultBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.BarcodeCapture.BarcodeCaptureOverlay.DefaultBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.BarcodeCapture.BarcodeCaptureOverlay.DefaultBrush.strokeColor),
                    strokeWidth: json.BarcodeCapture.BarcodeCaptureOverlay.DefaultBrush.strokeWidth,
                },
                styles: Object
                    .keys(json.BarcodeCapture.BarcodeCaptureOverlay.styles)
                    .reduce((previousValue, currentValue) => {
                    return Object.assign(Object.assign({}, previousValue), { [currentValue]: {
                            DefaultBrush: {
                                fillColor: Common_1.Color
                                    .fromJSON(json.BarcodeCapture.BarcodeCaptureOverlay.styles[currentValue].DefaultBrush.fillColor),
                                strokeColor: Common_1.Color
                                    .fromJSON(json.BarcodeCapture.BarcodeCaptureOverlay.styles[currentValue].DefaultBrush.strokeColor),
                                strokeWidth: json.BarcodeCapture.BarcodeCaptureOverlay.styles[currentValue].DefaultBrush.strokeWidth,
                            },
                        } });
                }, {}),
            },
            BarcodeCaptureSettings: {
                codeDuplicateFilter: json.BarcodeCapture.BarcodeCaptureSettings.codeDuplicateFilter,
            },
            RecommendedCameraSettings: Camera_Related_1.CameraSettings
                .fromJSON(json.BarcodeCapture.RecommendedCameraSettings),
        },
        BarcodeTracking: {
            RecommendedCameraSettings: Camera_Related_1.CameraSettings
                .fromJSON(json.BarcodeTracking.RecommendedCameraSettings),
            BarcodeTrackingBasicOverlay: {
                defaultStyle: json.BarcodeTracking.BarcodeTrackingBasicOverlay.defaultStyle,
                DefaultBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.BarcodeTracking.BarcodeTrackingBasicOverlay.DefaultBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.BarcodeTracking.BarcodeTrackingBasicOverlay.DefaultBrush.strokeColor),
                    strokeWidth: json.BarcodeTracking.BarcodeTrackingBasicOverlay.DefaultBrush.strokeWidth,
                },
                styles: Object
                    .keys(json.BarcodeTracking.BarcodeTrackingBasicOverlay.styles)
                    .reduce((previousValue, currentValue) => {
                    return Object.assign(Object.assign({}, previousValue), { [currentValue]: {
                            DefaultBrush: {
                                fillColor: Common_1.Color
                                    .fromJSON(json.BarcodeTracking.BarcodeTrackingBasicOverlay.
                                    styles[currentValue].DefaultBrush.fillColor),
                                strokeColor: Common_1.Color
                                    .fromJSON(json.BarcodeTracking.BarcodeTrackingBasicOverlay.
                                    styles[currentValue].DefaultBrush.strokeColor),
                                strokeWidth: json.BarcodeTracking.BarcodeTrackingBasicOverlay.
                                    styles[currentValue].DefaultBrush.strokeWidth,
                            },
                        } });
                }, {}),
            },
        },
        BarcodeSelection: {
            RecommendedCameraSettings: Camera_Related_1.CameraSettings
                .fromJSON(json.BarcodeSelection.RecommendedCameraSettings),
            feedback: ({
                selection: Feedback_1.Feedback
                    .fromJSON(JSON.parse(json.BarcodeSelection.feedback).selection),
            }),
            BarcodeSelectionSettings: {
                codeDuplicateFilter: json.BarcodeSelection.BarcodeSelectionSettings.codeDuplicateFilter,
                singleBarcodeAutoDetection: json.BarcodeSelection.BarcodeSelectionSettings.singleBarcodeAutoDetection,
                selectionType: fromJSON => fromJSON(JSON.parse(json.BarcodeSelection.BarcodeSelectionSettings.selectionType)),
            },
            BarcodeSelectionTapSelection: {
                defaultFreezeBehavior: json.BarcodeSelection.BarcodeSelectionTapSelection
                    .defaultFreezeBehavior,
                defaultTapBehavior: json.BarcodeSelection.BarcodeSelectionTapSelection
                    .defaultTapBehavior,
            },
            BarcodeSelectionAimerSelection: {
                defaultSelectionStrategy: fromJSON => fromJSON(JSON.parse(json.BarcodeSelection.BarcodeSelectionAimerSelection.defaultSelectionStrategy)),
            },
            BarcodeSelectionBasicOverlay: {
                defaultStyle: json.BarcodeSelection
                    .BarcodeSelectionBasicOverlay.defaultStyle,
                DefaultTrackedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultTrackedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultTrackedBrush.strokeColor),
                    strokeWidth: json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultTrackedBrush.strokeWidth,
                },
                DefaultAimedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultAimedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultAimedBrush.strokeColor),
                    strokeWidth: json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultAimedBrush.strokeWidth,
                },
                DefaultSelectedBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultSelectedBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultSelectedBrush.strokeColor),
                    strokeWidth: json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultSelectedBrush.strokeWidth,
                },
                DefaultSelectingBrush: {
                    fillColor: Common_1.Color
                        .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultSelectingBrush.fillColor),
                    strokeColor: Common_1.Color
                        .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultSelectingBrush.strokeColor),
                    strokeWidth: json.BarcodeSelection.BarcodeSelectionBasicOverlay.DefaultSelectingBrush.strokeWidth,
                },
                styles: Object
                    .keys(json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles)
                    .reduce((previousValue, currentValue) => {
                    return Object.assign(Object.assign({}, previousValue), { [currentValue]: {
                            DefaultTrackedBrush: {
                                fillColor: Common_1.Color
                                    .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultTrackedBrush.fillColor),
                                strokeColor: Common_1.Color
                                    .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultTrackedBrush.strokeColor),
                                strokeWidth: json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultTrackedBrush.strokeWidth,
                            },
                            DefaultAimedBrush: {
                                fillColor: Common_1.Color
                                    .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultAimedBrush.fillColor),
                                strokeColor: Common_1.Color
                                    .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultAimedBrush.strokeColor),
                                strokeWidth: json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultAimedBrush.strokeWidth,
                            },
                            DefaultSelectedBrush: {
                                fillColor: Common_1.Color
                                    .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultSelectedBrush.fillColor),
                                strokeColor: Common_1.Color
                                    .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultSelectedBrush.strokeColor),
                                strokeWidth: json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultSelectedBrush.strokeWidth,
                            },
                            DefaultSelectingBrush: {
                                fillColor: Common_1.Color
                                    .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultSelectingBrush.fillColor),
                                strokeColor: Common_1.Color
                                    .fromJSON(json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultSelectingBrush.strokeColor),
                                strokeWidth: json.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[currentValue]
                                    .DefaultSelectingBrush.strokeWidth,
                            },
                        } });
                }, {}),
            },
        },
        SparkCapture: {
            feedback: ({
                success: Feedback_1.Feedback
                    .fromJSON(JSON.parse(json.SparkCapture.feedback).success),
            }),
            SparkCaptureSettings: {
                codeDuplicateFilter: json.SparkCapture.SparkCaptureSettings.codeDuplicateFilter,
                locationSelection: LocationSelection_1.PrivateLocationSelection
                    .fromJSON(JSON.parse(json.SparkCapture.SparkCaptureSettings.locationSelection)),
            },
        },
    };
};
});