cordova.define("scandit-cordova-datacapture-barcode.SparkCaptureListenerProxy", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkCaptureListenerProxy = void 0;
const SparkCapture_Related_1 = require("scandit-cordova-datacapture-barcode.SparkCapture+Related");
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
var SparkCaptureListenerEvent;
(function (SparkCaptureListenerEvent) {
    SparkCaptureListenerEvent["DidScan"] = "didScanInSparkCapture";
    SparkCaptureListenerEvent["DidUpdateSession"] = "didUpdateSessionInSparkCapture";
})(SparkCaptureListenerEvent || (SparkCaptureListenerEvent = {}));
class SparkCaptureListenerProxy {
    static forSparkCapture(sparkCapture) {
        const proxy = new SparkCaptureListenerProxy();
        proxy.sparkCapture = sparkCapture;
        proxy.initialize();
        return proxy;
    }
    initialize() {
        this.subscribeListener();
    }
    subscribeListener() {
        SparkCaptureListenerProxy.cordovaExec(this.notifyListeners.bind(this), null, Cordova_1.CordovaFunction.SubscribeSparkCaptureListener, null);
    }
    notifyListeners(event) {
        const done = () => {
            this.sparkCapture.isInListenerCallback = false;
            return { enabled: this.sparkCapture.isEnabled };
        };
        this.sparkCapture.isInListenerCallback = true;
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return done();
        }
        this.sparkCapture.listeners.forEach((listener) => {
            switch (event.name) {
                case SparkCaptureListenerEvent.DidScan:
                    if (listener.didScan) {
                        listener.didScan(this.sparkCapture, SparkCapture_Related_1.SparkCaptureSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
                case SparkCaptureListenerEvent.DidUpdateSession:
                    if (listener.didUpdateSession) {
                        listener.didUpdateSession(this.sparkCapture, SparkCapture_Related_1.SparkCaptureSession
                            .fromJSON(JSON.parse(event.argument.session)));
                    }
                    break;
            }
        });
        return done();
    }
}
exports.SparkCaptureListenerProxy = SparkCaptureListenerProxy;
SparkCaptureListenerProxy.cordovaExec = Cordova_1.Cordova.exec;
});