cordova.define("scandit-cordova-datacapture-core.DataCaptureContext", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCaptureContext = exports.DataCaptureContextSettings = void 0;
const Cordova_1 = require("scandit-cordova-datacapture-core.Cordova");
const DataCaptureContextProxy_1 = require("scandit-cordova-datacapture-core.DataCaptureContextProxy");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
class DataCaptureContextSettings extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
    }
    setProperty(name, value) {
        this[name] = value;
    }
    getProperty(name) {
        return this[name];
    }
}
exports.DataCaptureContextSettings = DataCaptureContextSettings;
class DataCaptureContext extends Serializeable_1.DefaultSerializeable {
    constructor(licenseKey, deviceName) {
        super();
        this.licenseKey = licenseKey;
        this.deviceName = deviceName;
        this.framework = 'cordova';
        this.frameworkVersion = (window.cordova && window.cordova.version) || undefined;
        this.settings = new DataCaptureContextSettings();
        this._frameSource = null;
        this.view = null;
        this.modes = [];
        this.components = [];
        this.listeners = [];
    }
    get frameSource() {
        return this._frameSource;
    }
    static get deviceID() {
        return Cordova_1.Cordova.defaults.deviceID;
    }
    // Deprecated
    get deviceID() {
        // tslint:disable-next-line:no-console
        console.log('The instance property "deviceID" on the DataCaptureContext is deprecated, please use the static property DataCaptureContext.deviceID instead.');
        return DataCaptureContext.deviceID;
    }
    static forLicenseKey(licenseKey) {
        return DataCaptureContext.forLicenseKeyWithOptions(licenseKey, null);
    }
    static forLicenseKeyWithSettings(licenseKey, settings) {
        const context = this.forLicenseKey(licenseKey);
        if (settings !== null) {
            context.applySettings(settings);
        }
        return context;
    }
    static forLicenseKeyWithOptions(licenseKey, options) {
        if (options == null) {
            options = { deviceName: null };
        }
        return new DataCaptureContext(licenseKey, options.deviceName || '');
    }
    setFrameSource(frameSource) {
        this._frameSource = frameSource;
        if (frameSource) {
            frameSource.context = this;
        }
        return this.update();
    }
    addListener(listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    addMode(mode) {
        if (!this.modes.includes(mode)) {
            this.modes.push(mode);
            mode._context = this;
            this.update();
        }
    }
    removeMode(mode) {
        if (this.modes.includes(mode)) {
            this.modes.splice(this.modes.indexOf(mode), 1);
            mode._context = null;
            this.update();
        }
    }
    removeAllModes() {
        this.modes = [];
        this.update();
    }
    dispose() {
        if (!this.proxy) {
            return;
        }
        this.proxy.dispose();
    }
    applySettings(settings) {
        this.settings = settings;
        return this.update();
    }
    initialize() {
        if (this.proxy) {
            return;
        }
        this.proxy = DataCaptureContextProxy_1.DataCaptureContextProxy.forDataCaptureContext(this);
    }
    update() {
        if (!this.proxy) {
            return Promise.resolve();
        }
        return this.proxy.updateContextFromJSON();
    }
    addComponent(component) {
        if (!this.components.includes(component)) {
            this.components.push(component);
            component._context = this;
            return this.update();
        }
        else {
            return Promise.resolve();
        }
    }
}
__decorate([
    Serializeable_1.nameForSerialization('frameSource')
], DataCaptureContext.prototype, "_frameSource", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], DataCaptureContext.prototype, "proxy", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], DataCaptureContext.prototype, "listeners", void 0);
exports.DataCaptureContext = DataCaptureContext;
});