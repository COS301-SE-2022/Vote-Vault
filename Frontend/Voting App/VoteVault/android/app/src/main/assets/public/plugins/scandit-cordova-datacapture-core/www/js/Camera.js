cordova.define("scandit-cordova-datacapture-core.Camera", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.Camera"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Camera_Related_1 = require("scandit-cordova-datacapture-core.Camera+Related");
const CameraProxy_1 = require("scandit-cordova-datacapture-core.CameraProxy");
const Cordova_1 = require("scandit-cordova-datacapture-core.Cordova");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
var CameraType;
(function (CameraType) {
    CameraType["sparkCapture"] = "sparkCapture";
})(CameraType || (CameraType = {}));
class Camera extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = 'camera';
        this.cameraType = null;
        this.settings = null;
        this._desiredTorchState = Camera_Related_1.TorchState.Off;
        this._desiredState = Camera_Related_1.FrameSourceState.Off;
        this.listeners = [];
        this.context = null;
    }
    get proxy() {
        if (!this._proxy) {
            this.initialize();
        }
        return this._proxy;
    }
    static get default() {
        if (Cordova_1.Cordova.defaults.Camera.defaultPosition) {
            const camera = new Camera();
            camera.position = Cordova_1.Cordova.defaults.Camera.defaultPosition;
            return camera;
        }
        else {
            return null;
        }
    }
    static get sparkCapture() {
        if (Cordova_1.Cordova.defaults.Camera.defaultSparkCaptureCameraPosition !== null) {
            const camera = new Camera();
            camera.position = Cordova_1.Cordova.defaults.Camera.defaultSparkCaptureCameraPosition;
            camera.cameraType = CameraType.sparkCapture;
            return camera;
        }
        else {
            return null;
        }
    }
    static atPosition(cameraPosition) {
        if (Cordova_1.Cordova.defaults.Camera.availablePositions.includes(cameraPosition)) {
            const camera = new Camera();
            camera.position = cameraPosition;
            return camera;
        }
        else {
            return null;
        }
    }
    get desiredState() {
        return this._desiredState;
    }
    get isTorchAvailable() {
        // tslint:disable-next-line:no-console
        console.warn('isTorchAvailable is deprecated. Use getIsTorchAvailable instead.');
        return false;
    }
    set desiredTorchState(desiredTorchState) {
        this._desiredTorchState = desiredTorchState;
        this.didChange();
    }
    get desiredTorchState() {
        return this._desiredTorchState;
    }
    switchToDesiredState(state) {
        this._desiredState = state;
        return this.didChange();
    }
    getCurrentState() {
        return this.proxy.getCurrentState();
    }
    getIsTorchAvailable() {
        return this.proxy.getIsTorchAvailable();
    }
    addListener(listener) {
        if (listener == null) {
            return;
        }
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (listener == null) {
            return;
        }
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    applySettings(settings) {
        this.settings = settings;
        return this.didChange();
    }
    initialize() {
        if (this._proxy) {
            return;
        }
        this._proxy = CameraProxy_1.CameraProxy.forCamera(this);
    }
    didChange() {
        if (this.context) {
            return this.context.update();
        }
        else {
            return Promise.resolve();
        }
    }
}
__decorate([
    Serializeable_1.serializationDefault({})
], Camera.prototype, "settings", void 0);
__decorate([
    Serializeable_1.nameForSerialization('desiredTorchState')
], Camera.prototype, "_desiredTorchState", void 0);
__decorate([
    Serializeable_1.nameForSerialization('desiredState')
], Camera.prototype, "_desiredState", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], Camera.prototype, "listeners", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], Camera.prototype, "context", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], Camera.prototype, "_proxy", void 0);
exports.Camera = Camera;
});