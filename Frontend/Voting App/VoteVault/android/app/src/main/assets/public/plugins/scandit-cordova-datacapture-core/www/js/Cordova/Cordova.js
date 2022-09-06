cordova.define("scandit-cordova-datacapture-core.Cordova", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cordova = exports.CordovaFunction = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.Cordova"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const CommonCordova_1 = require("scandit-cordova-datacapture-core.CommonCordova");
const Defaults_1 = require("scandit-cordova-datacapture-core.Defaults");
var CordovaFunction;
(function (CordovaFunction) {
    CordovaFunction["GetDefaults"] = "getDefaults";
    CordovaFunction["ContextFromJSON"] = "contextFromJSON";
    CordovaFunction["DisposeContext"] = "disposeContext";
    CordovaFunction["UpdateContextFromJSON"] = "updateContextFromJSON";
    CordovaFunction["SubscribeContextListener"] = "subscribeContextListener";
    CordovaFunction["SubscribeFrameSourceListener"] = "subscribeFrameSourceListener";
    CordovaFunction["SetViewPositionAndSize"] = "setViewPositionAndSize";
    CordovaFunction["ShowView"] = "showView";
    CordovaFunction["HideView"] = "hideView";
    CordovaFunction["ViewPointForFramePoint"] = "viewPointForFramePoint";
    CordovaFunction["ViewQuadrilateralForFrameQuadrilateral"] = "viewQuadrilateralForFrameQuadrilateral";
    CordovaFunction["SubscribeViewListener"] = "subscribeViewListener";
    CordovaFunction["GetCurrentCameraState"] = "getCurrentCameraState";
    CordovaFunction["GetIsTorchAvailable"] = "getIsTorchAvailable";
    CordovaFunction["EmitFeedback"] = "emitFeedback";
    CordovaFunction["SubscribeVolumeButtonObserver"] = "subscribeVolumeButtonObserver";
    CordovaFunction["UnsubscribeVolumeButtonObserver"] = "unsubscribeVolumeButtonObserver";
})(CordovaFunction = exports.CordovaFunction || (exports.CordovaFunction = {}));
// tslint:disable-next-line:variable-name
exports.Cordova = {
    pluginName: 'ScanditCaptureCore',
    defaults: {},
    exec: (success, error, functionName, args) => CommonCordova_1.cordovaExec(success, error, exports.Cordova.pluginName, functionName, args),
};
const getDefaults = new Promise((resolve, reject) => {
    exports.Cordova.exec((defaultsJSON) => {
        exports.Cordova.defaults = Defaults_1.defaultsFromJSON(defaultsJSON);
        resolve();
    }, reject, CordovaFunction.GetDefaults, null);
});
CommonCordova_1.initializePlugin(exports.Cordova.pluginName, getDefaults);
});