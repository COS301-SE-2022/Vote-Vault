cordova.define("scandit-cordova-datacapture-core.VolumeButtonObserver", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeButtonObserver = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.VolumeButtonObserver"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const VolumeButtonObserverProxy_1 = require("scandit-cordova-datacapture-core.VolumeButtonObserverProxy");
// Note: the class is made private by being excluded from the docs through `coverage_cordova_javascript_name_ignore`
class VolumeButtonObserver {
    constructor(didChangeVolume) {
        this.didChangeVolume = didChangeVolume;
        this.initialize();
    }
    dispose() {
        if (this.proxy) {
            this.proxy.dispose();
            this.proxy = null;
            this.didChangeVolume = null;
        }
    }
    initialize() {
        if (!this.proxy) {
            this.proxy = VolumeButtonObserverProxy_1.VolumeButtonObserverProxy.forVolumeButtonObserver(this);
        }
    }
}
exports.VolumeButtonObserver = VolumeButtonObserver;
});