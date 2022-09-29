cordova.define("scandit-cordova-datacapture-core.DataCaptureVersion", function(require, exports, module) { 
"use strict";
/// <amd-module name="scandit-cordova-datacapture-core.DataCaptureVersion"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCaptureVersion = void 0;
const CommonCordova_1 = require("scandit-cordova-datacapture-core.CommonCordova");
class DataCaptureVersion {
    static get pluginVersion() {
        return CommonCordova_1.pluginsMetadata['scandit-cordova-datacapture-core'];
    }
}
exports.DataCaptureVersion = DataCaptureVersion;
});