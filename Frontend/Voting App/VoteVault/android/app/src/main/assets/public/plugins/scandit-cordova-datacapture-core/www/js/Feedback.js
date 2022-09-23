cordova.define("scandit-cordova-datacapture-core.Feedback", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = exports.Sound = exports.Vibration = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.Feedback"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const FeedbackProxy_1 = require("scandit-cordova-datacapture-core.FeedbackProxy");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
var VibrationType;
(function (VibrationType) {
    VibrationType["default"] = "default";
    VibrationType["selectionHaptic"] = "selectionHaptic";
    VibrationType["successHaptic"] = "successHaptic";
    VibrationType["impactHaptic"] = "impactHaptic";
})(VibrationType || (VibrationType = {}));
class Vibration extends Serializeable_1.DefaultSerializeable {
    constructor(type) {
        super();
        this.type = type;
    }
    static get defaultVibration() {
        return new Vibration(VibrationType.default);
    }
    static get selectionHapticFeedback() {
        return new Vibration(VibrationType.selectionHaptic);
    }
    static get successHapticFeedback() {
        return new Vibration(VibrationType.successHaptic);
    }
    static get impactHapticFeedback() {
        return new Vibration(VibrationType.impactHaptic);
    }
    static fromJSON(json) {
        return new Vibration(json.type);
    }
}
exports.Vibration = Vibration;
class Sound extends Serializeable_1.DefaultSerializeable {
    constructor(resource) {
        super();
        this.resource = null;
        this.resource = resource;
    }
    static get defaultSound() {
        return new Sound(null);
    }
    static fromJSON(json) {
        return new Sound(json.resource);
    }
}
__decorate([
    Serializeable_1.ignoreFromSerializationIfNull
], Sound.prototype, "resource", void 0);
exports.Sound = Sound;
class Feedback extends Serializeable_1.DefaultSerializeable {
    constructor(vibration, sound) {
        super();
        this._vibration = null;
        this._sound = null;
        this._vibration = vibration;
        this._sound = sound;
        this.initialize();
    }
    static get defaultFeedback() {
        return new Feedback(Vibration.defaultVibration, Sound.defaultSound);
    }
    get vibration() {
        return this._vibration;
    }
    get sound() {
        return this._sound;
    }
    static fromJSON(json) {
        return new Feedback(json.vibration ? Vibration.fromJSON(json.vibration) : null, json.sound ? Sound.fromJSON(json.sound) : null);
    }
    emit() {
        if (!this.proxy) {
            return;
        }
        this.proxy.emit();
    }
    initialize() {
        if (this.proxy) {
            return;
        }
        this.proxy = FeedbackProxy_1.FeedbackProxy.forFeedback(this);
    }
}
__decorate([
    Serializeable_1.ignoreFromSerializationIfNull,
    Serializeable_1.nameForSerialization('vibration')
], Feedback.prototype, "_vibration", void 0);
__decorate([
    Serializeable_1.ignoreFromSerializationIfNull,
    Serializeable_1.nameForSerialization('sound')
], Feedback.prototype, "_sound", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], Feedback.prototype, "proxy", void 0);
exports.Feedback = Feedback;
});