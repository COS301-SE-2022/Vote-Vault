cordova.define("scandit-cordova-datacapture-barcode.BarcodeSelectionProxy", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSelectionProxy = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.BarcodeSelectionProxy"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
class BarcodeSelectionProxy {
    reset() {
        return new Promise((resolve, reject) => {
            BarcodeSelectionProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.ResetBarcodeSelection, null);
        });
    }
    unfreezeCamera() {
        return new Promise((resolve, reject) => {
            BarcodeSelectionProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.UnfreezeCameraInBarcodeSelection, null);
        });
    }
}
exports.BarcodeSelectionProxy = BarcodeSelectionProxy;
BarcodeSelectionProxy.cordovaExec = Cordova_1.Cordova.exec;
});