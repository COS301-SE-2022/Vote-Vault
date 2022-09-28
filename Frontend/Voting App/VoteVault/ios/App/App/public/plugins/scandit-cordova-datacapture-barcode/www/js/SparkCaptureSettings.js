cordova.define("scandit-cordova-datacapture-barcode.SparkCaptureSettings", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkCaptureSettings = void 0;
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
const LocationSelection_1 = require("scandit-cordova-datacapture-core.LocationSelection");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
class SparkCaptureSettings extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.codeDuplicateFilter = Cordova_1.Cordova.defaults.SparkCapture.SparkCaptureSettings.codeDuplicateFilter;
        this.locationSelection = Cordova_1.Cordova.defaults.SparkCapture.SparkCaptureSettings.locationSelection;
        this.properties = {};
        this.symbologies = {};
    }
    get enabledSymbologies() {
        return Object.keys(this.symbologies)
            .filter(symbology => this.symbologies[symbology].isEnabled);
    }
    settingsForSymbology(symbology) {
        if (!this.symbologies[symbology]) {
            const symbologySettings = Cordova_1.Cordova.defaults.SymbologySettings[symbology];
            symbologySettings._symbology = symbology;
            this.symbologies[symbology] = symbologySettings;
        }
        return this.symbologies[symbology];
    }
    setProperty(name, value) {
        this.properties[name] = value;
    }
    getProperty(name) {
        return this.properties[name];
    }
    enableSymbologies(symbologies) {
        symbologies.forEach(symbology => this.enableSymbology(symbology, true));
    }
    enableSymbology(symbology, enabled) {
        this.settingsForSymbology(symbology).isEnabled = enabled;
    }
}
__decorate([
    Serializeable_1.serializationDefault(LocationSelection_1.NoneLocationSelection)
], SparkCaptureSettings.prototype, "locationSelection", void 0);
exports.SparkCaptureSettings = SparkCaptureSettings;
});