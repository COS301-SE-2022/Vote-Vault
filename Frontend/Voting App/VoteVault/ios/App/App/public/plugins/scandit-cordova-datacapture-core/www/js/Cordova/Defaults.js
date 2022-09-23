cordova.define("scandit-cordova-datacapture-core.Defaults", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultsFromJSON = void 0;
const Common_1 = require("scandit-cordova-datacapture-core.Common");
const DataCaptureView_Related_1 = require("scandit-cordova-datacapture-core.DataCaptureView+Related");
const Viewfinder_Related_1 = require("scandit-cordova-datacapture-core.Viewfinder+Related");
exports.defaultsFromJSON = (json) => {
    return {
        Camera: {
            Settings: {
                preferredResolution: json.Camera.Settings.preferredResolution,
                zoomFactor: json.Camera.Settings.zoomFactor,
                focusRange: json.Camera.Settings.focusRange,
                zoomGestureZoomFactor: json.Camera.Settings.zoomGestureZoomFactor,
                focusGestureStrategy: json.Camera.Settings.focusGestureStrategy,
                shouldPreferSmoothAutoFocus: json.Camera.Settings.shouldPreferSmoothAutoFocus,
            },
            defaultPosition: json.Camera.defaultPosition || null,
            availablePositions: json.Camera.availablePositions,
            defaultSparkCaptureCameraPosition: json.Camera.defaultSparkCaptureCameraPosition || null,
        },
        DataCaptureView: {
            scanAreaMargins: Common_1.MarginsWithUnit
                .fromJSON(JSON.parse(json.DataCaptureView.scanAreaMargins)),
            pointOfInterest: Common_1.PointWithUnit
                .fromJSON(JSON.parse(json.DataCaptureView.pointOfInterest)),
            logoAnchor: json.DataCaptureView.logoAnchor,
            logoOffset: Common_1.PointWithUnit
                .fromJSON(JSON.parse(json.DataCaptureView.logoOffset)),
            focusGesture: DataCaptureView_Related_1.PrivateFocusGestureDeserializer.fromJSON(JSON.parse(json.DataCaptureView.focusGesture)),
            zoomGesture: DataCaptureView_Related_1.PrivateZoomGestureDeserializer.fromJSON(JSON.parse(json.DataCaptureView.zoomGesture)),
            logoStyle: json.DataCaptureView.logoStyle.toLowerCase(),
        },
        LaserlineViewfinder: Object
            .keys(json.LaserlineViewfinder.styles)
            .reduce((acc, key) => {
            const viewfinder = json.LaserlineViewfinder.styles[key];
            acc.styles[key] = {
                width: Common_1.NumberWithUnit
                    .fromJSON(JSON.parse(viewfinder.width)),
                enabledColor: Common_1.Color
                    .fromJSON(viewfinder.enabledColor),
                disabledColor: Common_1.Color
                    .fromJSON(viewfinder.disabledColor),
                style: viewfinder.style,
            };
            return acc;
        }, { defaultStyle: json.LaserlineViewfinder.defaultStyle, styles: {} }),
        RectangularViewfinder: Object
            .keys(json.RectangularViewfinder.styles)
            .reduce((acc, key) => {
            const viewfinder = json.RectangularViewfinder.styles[key];
            acc.styles[key] = {
                size: Common_1.SizeWithUnitAndAspect
                    .fromJSON(JSON.parse(viewfinder.size)),
                color: Common_1.Color.fromJSON(viewfinder.color),
                disabledColor: Common_1.Color.fromJSON(viewfinder.disabledColor),
                style: viewfinder.style,
                lineStyle: viewfinder.lineStyle,
                dimming: parseFloat(viewfinder.dimming.toString()),
                disabledDimming: parseFloat(viewfinder.disabledDimming.toString()),
                animation: Viewfinder_Related_1.RectangularViewfinderAnimation
                    .fromJSON(JSON.parse(viewfinder.animation)),
            };
            return acc;
        }, { defaultStyle: json.RectangularViewfinder.defaultStyle, styles: {} }),
        SpotlightViewfinder: {
            size: Common_1.SizeWithUnitAndAspect
                .fromJSON(JSON.parse(json.SpotlightViewfinder.size)),
            enabledBorderColor: Common_1.Color
                .fromJSON(json.SpotlightViewfinder.enabledBorderColor),
            disabledBorderColor: Common_1.Color
                .fromJSON(json.SpotlightViewfinder.disabledBorderColor),
            backgroundColor: Common_1.Color
                .fromJSON(json.SpotlightViewfinder.backgroundColor),
        },
        AimerViewfinder: {
            frameColor: Common_1.Color.fromJSON(json.AimerViewfinder.frameColor),
            dotColor: Common_1.Color.fromJSON(json.AimerViewfinder.dotColor),
        },
        Brush: {
            fillColor: Common_1.Color
                .fromJSON(json.Brush.fillColor),
            strokeColor: Common_1.Color
                .fromJSON(json.Brush.strokeColor),
            strokeWidth: json.Brush.strokeWidth,
        },
        deviceID: json.deviceID,
    };
};
});