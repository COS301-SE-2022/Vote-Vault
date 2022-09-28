cordova.define("scandit-cordova-datacapture-barcode.BarcodeSelection", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSelection = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.BarcodeSelection"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const BarcodeSelection_Related_1 = require("scandit-cordova-datacapture-barcode.BarcodeSelection+Related");
const Camera_Related_1 = require("scandit-cordova-datacapture-core.Camera+Related");
const BarcodeSelectionListenerProxy_1 = require("scandit-cordova-datacapture-barcode.BarcodeSelectionListenerProxy");
const BarcodeSelectionProxy_1 = require("scandit-cordova-datacapture-barcode.BarcodeSelectionProxy");
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
class BarcodeSelection extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = 'barcodeSelection';
        this._isEnabled = true;
        this._feedback = BarcodeSelection_Related_1.BarcodeSelectionFeedback.default;
        this._pointOfInterest = null;
        this._context = null;
        this.listeners = [];
        this.listenerProxy = null;
        this.modeProxy = new BarcodeSelectionProxy_1.BarcodeSelectionProxy();
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
    get pointOfInterest() {
        return this._pointOfInterest;
    }
    set pointOfInterest(pointOfInterest) {
        this._pointOfInterest = pointOfInterest;
        this.didChange();
    }
    static get recommendedCameraSettings() {
        return new Camera_Related_1.CameraSettings(Cordova_1.Cordova.defaults.BarcodeSelection.RecommendedCameraSettings);
    }
    static forContext(context, settings) {
        const barcodeSelection = new BarcodeSelection();
        barcodeSelection.settings = settings;
        if (context) {
            context.addMode(barcodeSelection);
        }
        barcodeSelection.listenerProxy = BarcodeSelectionListenerProxy_1.BarcodeSelectionListenerProxy.forBarcodeSelection(barcodeSelection);
        return barcodeSelection;
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
    reset() {
        return this.modeProxy.reset();
    }
    unfreezeCamera() {
        return this.modeProxy.unfreezeCamera();
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
], BarcodeSelection.prototype, "_isEnabled", void 0);
__decorate([
    Serializeable_1.nameForSerialization('feedback')
], BarcodeSelection.prototype, "_feedback", void 0);
__decorate([
    Serializeable_1.nameForSerialization('pointOfInterest')
], BarcodeSelection.prototype, "_pointOfInterest", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeSelection.prototype, "_context", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeSelection.prototype, "listeners", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeSelection.prototype, "listenerProxy", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeSelection.prototype, "modeProxy", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeSelection.prototype, "isInListenerCallback", void 0);
exports.BarcodeSelection = BarcodeSelection;
});