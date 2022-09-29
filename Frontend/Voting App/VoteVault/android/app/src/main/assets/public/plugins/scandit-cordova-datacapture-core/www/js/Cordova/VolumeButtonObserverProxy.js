cordova.define("scandit-cordova-datacapture-core.VolumeButtonObserverProxy", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeButtonObserverProxy = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.VolumeButtonObserverProxy"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Cordova_1 = require("scandit-cordova-datacapture-core.Cordova");
var VolumeButtonObserverEvent;
(function (VolumeButtonObserverEvent) {
    VolumeButtonObserverEvent["DidChangeVolume"] = "didChangeVolume";
})(VolumeButtonObserverEvent || (VolumeButtonObserverEvent = {}));
class VolumeButtonObserverProxy {
    static forVolumeButtonObserver(volumeButtonObserver) {
        const proxy = new VolumeButtonObserverProxy();
        proxy.volumeButtonObserver = volumeButtonObserver;
        proxy.subscribe();
        return proxy;
    }
    dispose() {
        this.unsubscribe();
    }
    subscribe() {
        VolumeButtonObserverProxy.cordovaExec(this.notifyListeners.bind(this), null, Cordova_1.CordovaFunction.SubscribeVolumeButtonObserver, null);
    }
    unsubscribe() {
        VolumeButtonObserverProxy.cordovaExec(null, null, Cordova_1.CordovaFunction.UnsubscribeVolumeButtonObserver, null);
    }
    notifyListeners(event) {
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return;
        }
        if (this.volumeButtonObserver.didChangeVolume && event.name === VolumeButtonObserverEvent.DidChangeVolume) {
            this.volumeButtonObserver.didChangeVolume();
        }
    }
}
exports.VolumeButtonObserverProxy = VolumeButtonObserverProxy;
VolumeButtonObserverProxy.cordovaExec = Cordova_1.Cordova.exec;
});