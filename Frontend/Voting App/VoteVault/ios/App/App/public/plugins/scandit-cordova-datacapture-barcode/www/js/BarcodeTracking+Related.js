cordova.define("scandit-cordova-datacapture-barcode.BarcodeTracking+Related", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingAdvancedOverlay = exports.BarcodeTrackingBasicOverlay = exports.BarcodeTrackingBasicOverlayStyle = exports.BarcodeTrackingSession = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.BarcodeTracking+Related"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Barcode_1 = require("scandit-cordova-datacapture-barcode.Barcode");
const BarcodeTrackingAdvancedOverlayProxy_1 = require("scandit-cordova-datacapture-barcode.BarcodeTrackingAdvancedOverlayProxy");
const BarcodeTrackingBasicOverlayProxy_1 = require("scandit-cordova-datacapture-barcode.BarcodeTrackingBasicOverlayProxy");
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
const Viewfinder_1 = require("scandit-cordova-datacapture-core.Viewfinder");
class BarcodeTrackingSession {
    get addedTrackedBarcodes() {
        return this._addedTrackedBarcodes;
    }
    get removedTrackedBarcodes() {
        return this._removedTrackedBarcodes;
    }
    get updatedTrackedBarcodes() {
        return this._updatedTrackedBarcodes;
    }
    get trackedBarcodes() {
        return this._trackedBarcodes;
    }
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    static fromJSON(json) {
        const session = new BarcodeTrackingSession();
        session._frameSequenceID = json.frameSequenceId;
        session._addedTrackedBarcodes = json.addedTrackedBarcodes
            .map(Barcode_1.TrackedBarcode.fromJSON);
        session._addedTrackedBarcodes
            .forEach(a => a.sessionFrameSequenceID = `${json.frameSequenceId}`);
        session._removedTrackedBarcodes = json.removedTrackedBarcodes;
        session._updatedTrackedBarcodes = json.updatedTrackedBarcodes
            .map(Barcode_1.TrackedBarcode.fromJSON);
        session._updatedTrackedBarcodes
            .forEach(a => a.sessionFrameSequenceID = `${json.frameSequenceId}`);
        session._trackedBarcodes = Object.keys(json.trackedBarcodes)
            .reduce((trackedBarcodes, identifier) => {
            const trackedBarcode = Barcode_1.TrackedBarcode
                .fromJSON(json.trackedBarcodes[identifier]);
            trackedBarcode.sessionFrameSequenceID = `${json.frameSequenceId}`;
            trackedBarcodes[identifier] = trackedBarcode;
            return trackedBarcodes;
        }, {});
        return session;
    }
    reset() {
        return this.listenerProxy.reset();
    }
}
exports.BarcodeTrackingSession = BarcodeTrackingSession;
var BarcodeTrackingBasicOverlayStyle;
(function (BarcodeTrackingBasicOverlayStyle) {
    BarcodeTrackingBasicOverlayStyle["Frame"] = "frame";
    BarcodeTrackingBasicOverlayStyle["Dot"] = "dot";
    BarcodeTrackingBasicOverlayStyle["Legacy"] = "legacy";
})(BarcodeTrackingBasicOverlayStyle = exports.BarcodeTrackingBasicOverlayStyle || (exports.BarcodeTrackingBasicOverlayStyle = {}));
class BarcodeTrackingBasicOverlay extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.type = 'barcodeTrackingBasic';
        this._defaultBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.strokeWidth);
        this._shouldShowScanAreaGuides = false;
        this.listener = null;
    }
    static get defaultBrush() {
        // tslint:disable-next-line:no-console
        console.warn('defaultBrush is deprecated and will be removed in a future release. ' +
            'Use .brush to get the default for your selected style');
        return new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.defaultStyle].DefaultBrush.strokeWidth);
    }
    get defaultBrush() {
        return this._defaultBrush;
    }
    set defaultBrush(newBrush) {
        this._defaultBrush = newBrush;
        this.barcodeTracking.didChange();
    }
    get brush() {
        return this._defaultBrush;
    }
    set brush(newBrush) {
        this._defaultBrush = newBrush;
        this.barcodeTracking.didChange();
    }
    get proxy() {
        if (!this._proxy) {
            this.initialize();
        }
        return this._proxy;
    }
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.barcodeTracking.didChange();
    }
    get style() {
        return this._style;
    }
    static withBarcodeTracking(barcodeTracking) {
        return BarcodeTrackingBasicOverlay.withBarcodeTrackingForView(barcodeTracking, null);
    }
    static withBarcodeTrackingForView(barcodeTracking, view) {
        return this.withBarcodeTrackingForViewWithStyle(barcodeTracking, view, Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.defaultStyle);
    }
    static withBarcodeTrackingForViewWithStyle(barcodeTracking, view, style) {
        const overlay = new BarcodeTrackingBasicOverlay();
        overlay.barcodeTracking = barcodeTracking;
        overlay._style = style;
        overlay._defaultBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.styles[overlay._style].DefaultBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.styles[overlay._style].DefaultBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeTracking.BarcodeTrackingBasicOverlay.styles[overlay._style].DefaultBrush.strokeWidth);
        if (view) {
            view.addOverlay(overlay);
        }
        overlay.initialize();
        return overlay;
    }
    setBrushForTrackedBarcode(brush, trackedBarcode) {
        return this.proxy.setBrushForTrackedBarcode(brush, trackedBarcode);
    }
    clearTrackedBarcodeBrushes() {
        return this.proxy.clearTrackedBarcodeBrushes();
    }
    initialize() {
        if (this._proxy) {
            return;
        }
        this._proxy = BarcodeTrackingBasicOverlayProxy_1.BarcodeTrackingBasicOverlayProxy.forOverlay(this);
    }
}
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeTrackingBasicOverlay.prototype, "barcodeTracking", void 0);
__decorate([
    Serializeable_1.nameForSerialization('defaultBrush')
], BarcodeTrackingBasicOverlay.prototype, "_defaultBrush", void 0);
__decorate([
    Serializeable_1.nameForSerialization('shouldShowScanAreaGuides')
], BarcodeTrackingBasicOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeTrackingBasicOverlay.prototype, "listener", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeTrackingBasicOverlay.prototype, "_proxy", void 0);
__decorate([
    Serializeable_1.nameForSerialization('style')
], BarcodeTrackingBasicOverlay.prototype, "_style", void 0);
exports.BarcodeTrackingBasicOverlay = BarcodeTrackingBasicOverlay;
class BarcodeTrackingAdvancedOverlay extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.type = 'barcodeTrackingAdvanced';
        this._shouldShowScanAreaGuides = false;
        this.listener = null;
    }
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.barcodeTracking.didChange();
    }
    get proxy() {
        if (!this._proxy) {
            this.initialize();
        }
        return this._proxy;
    }
    static withBarcodeTrackingForView(barcodeTracking, view) {
        const overlay = new BarcodeTrackingAdvancedOverlay();
        overlay.barcodeTracking = barcodeTracking;
        if (view) {
            view.addOverlay(overlay);
        }
        overlay.initialize();
        return overlay;
    }
    setViewForTrackedBarcode(view, trackedBarcode) {
        return this.proxy.setViewForTrackedBarcode(view, trackedBarcode);
    }
    setAnchorForTrackedBarcode(anchor, trackedBarcode) {
        return this.proxy.setAnchorForTrackedBarcode(anchor, trackedBarcode);
    }
    setOffsetForTrackedBarcode(offset, trackedBarcode) {
        return this.proxy.setOffsetForTrackedBarcode(offset, trackedBarcode);
    }
    clearTrackedBarcodeViews() {
        return this.proxy.clearTrackedBarcodeViews();
    }
    initialize() {
        if (this._proxy) {
            return;
        }
        this._proxy = BarcodeTrackingAdvancedOverlayProxy_1.BarcodeTrackingAdvancedOverlayProxy.forOverlay(this);
    }
}
__decorate([
    Serializeable_1.nameForSerialization('shouldShowScanAreaGuides')
], BarcodeTrackingAdvancedOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeTrackingAdvancedOverlay.prototype, "barcodeTracking", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeTrackingAdvancedOverlay.prototype, "listener", void 0);
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeTrackingAdvancedOverlay.prototype, "_proxy", void 0);
exports.BarcodeTrackingAdvancedOverlay = BarcodeTrackingAdvancedOverlay;
});