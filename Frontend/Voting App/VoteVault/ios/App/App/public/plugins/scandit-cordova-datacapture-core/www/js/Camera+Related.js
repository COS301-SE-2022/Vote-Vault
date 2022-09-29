cordova.define("scandit-cordova-datacapture-core.Camera+Related", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraSettings = exports.FocusGestureStrategy = exports.FocusRange = exports.VideoResolution = exports.CameraPosition = exports.TorchState = exports.FrameSourceState = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.Camera+Related"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Cordova_1 = require("scandit-cordova-datacapture-core.Cordova");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
var FrameSourceState;
(function (FrameSourceState) {
    FrameSourceState["On"] = "on";
    FrameSourceState["Off"] = "off";
    FrameSourceState["Starting"] = "starting";
    FrameSourceState["Stopping"] = "stopping";
    FrameSourceState["Standby"] = "standby";
    FrameSourceState["BootingUp"] = "bootingUp";
    FrameSourceState["WakingUp"] = "wakingUp";
    FrameSourceState["GoingToSleep"] = "goingToSleep";
    FrameSourceState["ShuttingDown"] = "shuttingDown";
})(FrameSourceState = exports.FrameSourceState || (exports.FrameSourceState = {}));
var TorchState;
(function (TorchState) {
    TorchState["On"] = "on";
    TorchState["Off"] = "off";
    TorchState["Auto"] = "auto";
})(TorchState = exports.TorchState || (exports.TorchState = {}));
var CameraPosition;
(function (CameraPosition) {
    CameraPosition["WorldFacing"] = "worldFacing";
    CameraPosition["UserFacing"] = "userFacing";
    CameraPosition["Unspecified"] = "unspecified";
})(CameraPosition = exports.CameraPosition || (exports.CameraPosition = {}));
var VideoResolution;
(function (VideoResolution) {
    VideoResolution["Auto"] = "auto";
    VideoResolution["HD"] = "hd";
    VideoResolution["FullHD"] = "fullHd";
    VideoResolution["UHD4K"] = "uhd4k";
})(VideoResolution = exports.VideoResolution || (exports.VideoResolution = {}));
var FocusRange;
(function (FocusRange) {
    FocusRange["Full"] = "full";
    FocusRange["Near"] = "near";
    FocusRange["Far"] = "far";
})(FocusRange = exports.FocusRange || (exports.FocusRange = {}));
var FocusGestureStrategy;
(function (FocusGestureStrategy) {
    FocusGestureStrategy["None"] = "none";
    FocusGestureStrategy["Manual"] = "manual";
    FocusGestureStrategy["ManualUntilCapture"] = "manualUntilCapture";
    FocusGestureStrategy["AutoOnLocation"] = "autoOnLocation";
})(FocusGestureStrategy = exports.FocusGestureStrategy || (exports.FocusGestureStrategy = {}));
var PrivateCameraProperty;
(function (PrivateCameraProperty) {
    PrivateCameraProperty["CameraAPI"] = "api";
})(PrivateCameraProperty || (PrivateCameraProperty = {}));
class CameraSettings extends Serializeable_1.DefaultSerializeable {
    constructor(settings) {
        super();
        this.preferredResolution = Cordova_1.Cordova.defaults.Camera.Settings.preferredResolution;
        this.zoomFactor = Cordova_1.Cordova.defaults.Camera.Settings.zoomFactor;
        this.zoomGestureZoomFactor = Cordova_1.Cordova.defaults.Camera.Settings.zoomGestureZoomFactor;
        this.api = 0;
        this.focus = {
            range: Cordova_1.Cordova.defaults.Camera.Settings.focusRange,
            focusGestureStrategy: Cordova_1.Cordova.defaults.Camera.Settings.focusGestureStrategy,
            shouldPreferSmoothAutoFocus: Cordova_1.Cordova.defaults.Camera.Settings.shouldPreferSmoothAutoFocus,
        };
        if (settings !== undefined && settings !== null) {
            Object.getOwnPropertyNames(settings).forEach(propertyName => {
                this[propertyName] = settings[propertyName];
            });
        }
    }
    get focusRange() {
        return this.focus.range;
    }
    set focusRange(newRange) {
        this.focus.range = newRange;
    }
    get focusGestureStrategy() {
        return this.focus.focusGestureStrategy;
    }
    set focusGestureStrategy(newStrategy) {
        this.focus.focusGestureStrategy = newStrategy;
    }
    get shouldPreferSmoothAutoFocus() {
        return this.focus.shouldPreferSmoothAutoFocus;
    }
    set shouldPreferSmoothAutoFocus(newShouldPreferSmoothAutoFocus) {
        this.focus.shouldPreferSmoothAutoFocus = newShouldPreferSmoothAutoFocus;
    }
    get maxFrameRate() {
        // tslint:disable-next-line:no-console
        console.warn('maxFrameRate is deprecated');
        return 0;
    }
    set maxFrameRate(newValue) {
        // tslint:disable-next-line:no-console
        console.warn('maxFrameRate is deprecated');
    }
    static fromJSON(json) {
        const settings = new CameraSettings();
        settings.preferredResolution = json.preferredResolution;
        settings.zoomFactor = json.zoomFactor;
        settings.focusRange = json.focusRange;
        settings.zoomGestureZoomFactor = json.zoomGestureZoomFactor;
        settings.focusGestureStrategy = json.focusGestureStrategy;
        settings.shouldPreferSmoothAutoFocus = json.shouldPreferSmoothAutoFocus;
        if (json.api !== undefined && json.api !== null) {
            settings.api = json.api;
        }
        return settings;
    }
    setProperty(name, value) {
        this[name] = value;
    }
    getProperty(name) {
        return this[name];
    }
}
exports.CameraSettings = CameraSettings;
});