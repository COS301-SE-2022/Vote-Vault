cordova.define("scandit-cordova-datacapture-barcode.BarcodeTrackingListenerProxy", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingListenerProxy = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.BarcodeTrackingListenerProxy"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const BarcodeTracking_Related_1 = require("scandit-cordova-datacapture-barcode.BarcodeTracking+Related");
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
var BarcodeTrackingListenerEvent;
(function (BarcodeTrackingListenerEvent) {
    BarcodeTrackingListenerEvent["DidUpdateSession"] = "didUpdateSessionInBarcodeTracking";
})(BarcodeTrackingListenerEvent || (BarcodeTrackingListenerEvent = {}));
class BarcodeTrackingListenerProxy {
    static forBarcodeTracking(barcodeTracking) {
        const proxy = new BarcodeTrackingListenerProxy();
        proxy.barcodeTracking = barcodeTracking;
        proxy.initialize();
        return proxy;
    }
    initialize() {
        this.subscribeListener();
    }
    reset() {
        return new Promise((resolve, reject) => {
            BarcodeTrackingListenerProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.ResetBarcodeTrackingSession, null);
        });
    }
    subscribeListener() {
        BarcodeTrackingListenerProxy.cordovaExec(this.notifyListeners.bind(this), null, Cordova_1.CordovaFunction.SubscribeBarcodeTrackingListener, null);
    }
    notifyListeners(event) {
        const done = () => {
            this.barcodeTracking.isInListenerCallback = false;
            return { enabled: this.barcodeTracking.isEnabled };
        };
        this.barcodeTracking.isInListenerCallback = true;
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return done();
        }
        this.barcodeTracking.listeners.forEach((listener) => {
            switch (event.name) {
                case BarcodeTrackingListenerEvent.DidUpdateSession:
                    if (listener.didUpdateSession) {
                        listener.didUpdateSession(this.barcodeTracking, BarcodeTracking_Related_1.BarcodeTrackingSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
            }
        });
        return done();
    }
}
exports.BarcodeTrackingListenerProxy = BarcodeTrackingListenerProxy;
BarcodeTrackingListenerProxy.cordovaExec = Cordova_1.Cordova.exec;
});