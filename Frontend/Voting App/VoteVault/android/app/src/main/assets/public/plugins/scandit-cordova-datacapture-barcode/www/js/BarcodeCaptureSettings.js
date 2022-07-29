cordova.define("scandit-cordova-datacapture-barcode.BarcodeCaptureSettings", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCaptureSettings = void 0;
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
const LocationSelection_1 = require("scandit-cordova-datacapture-core.LocationSelection");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
class BarcodeCaptureSettings extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.codeDuplicateFilter = Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureSettings.codeDuplicateFilter;
        this.locationSelection = null;
        this.enabledCompositeTypes = [];
        this.properties = {};
        this.symbologies = {};
    }
    get compositeTypeDescriptions() {
        return Cordova_1.Cordova.defaults.CompositeTypeDescriptions.reduce((descriptions, description) => {
            descriptions[description.types[0]] = description;
            return descriptions;
        }, {});
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
    enableSymbologiesForCompositeTypes(compositeTypes) {
        compositeTypes.forEach(compositeType => {
            this.enableSymbologies(this.compositeTypeDescriptions[compositeType].symbologies);
        });
    }
}
__decorate([
    Serializeable_1.serializationDefault(LocationSelection_1.NoneLocationSelection)
], BarcodeCaptureSettings.prototype, "locationSelection", void 0);
exports.BarcodeCaptureSettings = BarcodeCaptureSettings;
});