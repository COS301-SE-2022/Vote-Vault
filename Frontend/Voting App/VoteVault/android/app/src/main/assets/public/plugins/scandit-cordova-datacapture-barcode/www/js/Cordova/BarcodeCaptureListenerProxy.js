cordova.define("scandit-cordova-datacapture-barcode.BarcodeCaptureListenerProxy", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCaptureListenerProxy = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.BarcodeCaptureListenerProxy"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const BarcodeCapture_Related_1 = require("scandit-cordova-datacapture-barcode.BarcodeCapture+Related");
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
var BarcodeCaptureListenerEvent;
(function (BarcodeCaptureListenerEvent) {
    BarcodeCaptureListenerEvent["DidScan"] = "didScanInBarcodeCapture";
    BarcodeCaptureListenerEvent["DidUpdateSession"] = "didUpdateSessionInBarcodeCapture";
})(BarcodeCaptureListenerEvent || (BarcodeCaptureListenerEvent = {}));
class BarcodeCaptureListenerProxy {
    static forBarcodeCapture(barcodeCapture) {
        const proxy = new BarcodeCaptureListenerProxy();
        proxy.barcodeCapture = barcodeCapture;
        proxy.initialize();
        return proxy;
    }
    initialize() {
        this.subscribeListener();
    }
    reset() {
        return new Promise((resolve, reject) => {
            BarcodeCaptureListenerProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.ResetBarcodeCaptureSession, null);
        });
    }
    subscribeListener() {
        BarcodeCaptureListenerProxy.cordovaExec(this.notifyListeners.bind(this), null, Cordova_1.CordovaFunction.SubscribeBarcodeCaptureListener, null);
    }
    notifyListeners(event) {
        const done = () => {
            this.barcodeCapture.isInListenerCallback = false;
            return { enabled: this.barcodeCapture.isEnabled };
        };
        this.barcodeCapture.isInListenerCallback = true;
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return done();
        }
        this.barcodeCapture.listeners.forEach((listener) => {
            switch (event.name) {
                case BarcodeCaptureListenerEvent.DidScan:
                    if (listener.didScan) {
                        listener.didScan(this.barcodeCapture, BarcodeCapture_Related_1.BarcodeCaptureSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
                case BarcodeCaptureListenerEvent.DidUpdateSession:
                    if (listener.didUpdateSession) {
                        listener.didUpdateSession(this.barcodeCapture, BarcodeCapture_Related_1.BarcodeCaptureSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
            }
        });
        return done();
    }
}
exports.BarcodeCaptureListenerProxy = BarcodeCaptureListenerProxy;
BarcodeCaptureListenerProxy.cordovaExec = Cordova_1.Cordova.exec;
});