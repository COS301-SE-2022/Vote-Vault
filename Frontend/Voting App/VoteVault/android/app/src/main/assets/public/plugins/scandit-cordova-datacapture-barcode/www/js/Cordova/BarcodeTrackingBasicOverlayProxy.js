cordova.define("scandit-cordova-datacapture-barcode.BarcodeTrackingBasicOverlayProxy", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingBasicOverlayProxy = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.BarcodeTrackingBasicOverlayProxy"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Barcode_1 = require("scandit-cordova-datacapture-barcode.Barcode");
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
var BarcodeTrackingBasicOverlayListenerEvent;
(function (BarcodeTrackingBasicOverlayListenerEvent) {
    BarcodeTrackingBasicOverlayListenerEvent["BrushForTrackedBarcode"] = "brushForTrackedBarcode";
    BarcodeTrackingBasicOverlayListenerEvent["DidTapTrackedBarcode"] = "didTapTrackedBarcode";
})(BarcodeTrackingBasicOverlayListenerEvent || (BarcodeTrackingBasicOverlayListenerEvent = {}));
class BarcodeTrackingBasicOverlayProxy {
    static forOverlay(overlay) {
        const proxy = new BarcodeTrackingBasicOverlayProxy();
        proxy.overlay = overlay;
        proxy.initialize();
        return proxy;
    }
    setBrushForTrackedBarcode(brush, trackedBarcode) {
        return new Promise((resolve, reject) => {
            BarcodeTrackingBasicOverlayProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.SetBrushForTrackedBarcode, [{
                    brush: brush ? JSON.stringify(brush.toJSON()) : null,
                    sessionFrameSequenceID: trackedBarcode.sessionFrameSequenceID,
                    trackedBarcodeID: trackedBarcode.identifier,
                }]);
        });
    }
    clearTrackedBarcodeBrushes() {
        return new Promise((resolve, reject) => {
            BarcodeTrackingBasicOverlayProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.ClearTrackedBarcodeBrushes, null);
        });
    }
    subscribeListener() {
        BarcodeTrackingBasicOverlayProxy.cordovaExec(this.notifyListeners.bind(this), null, Cordova_1.CordovaFunction.SubscribeBarcodeTrackingBasicOverlayListener, null);
    }
    notifyListeners(event) {
        if (!event || !this.overlay.listener) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return null;
        }
        switch (event.name) {
            case BarcodeTrackingBasicOverlayListenerEvent.BrushForTrackedBarcode:
                if (this.overlay.listener.brushForTrackedBarcode) {
                    const trackedBarcode = Barcode_1.TrackedBarcode
                        .fromJSON(JSON.parse(event.argument.trackedBarcode));
                    const brush = this.overlay.listener.brushForTrackedBarcode(this.overlay, trackedBarcode);
                    return { brush: brush ? JSON.stringify(brush.toJSON()) : null };
                }
                break;
            case BarcodeTrackingBasicOverlayListenerEvent.DidTapTrackedBarcode:
                if (this.overlay.listener.didTapTrackedBarcode) {
                    const trackedBarcode = Barcode_1.TrackedBarcode
                        .fromJSON(JSON.parse(event.argument.trackedBarcode));
                    this.overlay.listener.didTapTrackedBarcode(this.overlay, trackedBarcode);
                }
                break;
        }
        return null;
    }
    initialize() {
        this.subscribeListener();
    }
}
exports.BarcodeTrackingBasicOverlayProxy = BarcodeTrackingBasicOverlayProxy;
BarcodeTrackingBasicOverlayProxy.cordovaExec = Cordova_1.Cordova.exec;
});