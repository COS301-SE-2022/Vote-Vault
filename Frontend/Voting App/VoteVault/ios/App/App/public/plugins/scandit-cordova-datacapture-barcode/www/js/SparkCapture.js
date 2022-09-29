cordova.define("scandit-cordova-datacapture-barcode.SparkCapture", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkCapture = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.SparkCapture"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const SparkCaptureListenerProxy_1 = require("scandit-cordova-datacapture-barcode.SparkCaptureListenerProxy");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
const SparkCapture_Related_1 = require("scandit-cordova-datacapture-barcode.SparkCapture+Related");
class SparkCapture extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = 'sparkCapture';
        this._isEnabled = true;
        this._feedback = SparkCapture_Related_1.SparkCaptureFeedback.default;
        this._context = null;
        this.listeners = [];
        this.listenerProxy = null;
        this.isInListenerCallback = false;
    }
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        if (!this.isInListenerCallback) {
            // If we're "in" a listener callback, we don't want to deserialize the context to update the enabled state,
            // but rather pass that back to be applied in the native callback.
            this.didChange();
        }
    }
    get context() {
        return this._context;
    }
    get feedback() {
        return this._feedback;
    }
    set feedback(feedback) {
        this._feedback = feedback;
        this.didChange();
    }
    static forContext(context, settings) {
        const sparkCapture = new SparkCapture();
        sparkCapture.settings = settings;
        if (context) {
            context.addMode(sparkCapture);
        }
        sparkCapture.listenerProxy = SparkCaptureListenerProxy_1.SparkCaptureListenerProxy.forSparkCapture(sparkCapture);
        return sparkCapture;
    }
    applySettings(settings) {
        this.settings = settings;
        return this.didChange();
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
    Serializeable_1.nameForSerialization('enabled')
], SparkCapture.prototype, "_isEnabled", void 0);
__decorate([
    Serializeable_1.nameForSerialization('feedback')
], SparkCapture.prototype, "_feedback", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], SparkCapture.prototype, "_context", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], SparkCapture.prototype, "listeners", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], SparkCapture.prototype, "listenerProxy", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], SparkCapture.prototype, "isInListenerCallback", void 0);
exports.SparkCapture = SparkCapture;
});