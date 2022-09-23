cordova.define("scandit-cordova-datacapture-barcode.BarcodeCapture+Related", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeCaptureOverlay = exports.BarcodeCaptureOverlayStyle = exports.BarcodeCaptureFeedback = exports.BarcodeCaptureSession = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.BarcodeCapture+Related"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Barcode_1 = require("scandit-cordova-datacapture-barcode.Barcode");
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
const Feedback_1 = require("scandit-cordova-datacapture-core.Feedback");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
const Viewfinder_1 = require("scandit-cordova-datacapture-core.Viewfinder");
class BarcodeCaptureSession {
    get newlyRecognizedBarcodes() {
        return this._newlyRecognizedBarcodes;
    }
    get newlyLocalizedBarcodes() {
        return this._newlyLocalizedBarcodes;
    }
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    static fromJSON(json) {
        const session = new BarcodeCaptureSession();
        session._newlyRecognizedBarcodes = json.newlyRecognizedBarcodes
            .map(Barcode_1.Barcode.fromJSON);
        session._newlyLocalizedBarcodes = json.newlyLocalizedBarcodes
            .map(Barcode_1.LocalizedOnlyBarcode.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    }
    reset() {
        return this.listenerProxy.reset();
    }
}
exports.BarcodeCaptureSession = BarcodeCaptureSession;
class BarcodeCaptureFeedback extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.success = Feedback_1.Feedback.defaultFeedback;
    }
    static get default() {
        return new BarcodeCaptureFeedback();
    }
}
exports.BarcodeCaptureFeedback = BarcodeCaptureFeedback;
var BarcodeCaptureOverlayStyle;
(function (BarcodeCaptureOverlayStyle) {
    BarcodeCaptureOverlayStyle["Frame"] = "frame";
    BarcodeCaptureOverlayStyle["Legacy"] = "legacy";
})(BarcodeCaptureOverlayStyle = exports.BarcodeCaptureOverlayStyle || (exports.BarcodeCaptureOverlayStyle = {}));
class BarcodeCaptureOverlay extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.type = 'barcodeCapture';
        this._shouldShowScanAreaGuides = false;
        this._viewfinder = null;
        this._brush = BarcodeCaptureOverlay.defaultBrush;
    }
    static get defaultBrush() {
        // tslint:disable-next-line:no-console
        console.warn('defaultBrush is deprecated and will be removed in a future release. ' +
            'Use .brush to get the default for your selected style');
        return new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureOverlay.styles[Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureOverlay.defaultStyle].DefaultBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureOverlay.styles[Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureOverlay.defaultStyle].DefaultBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureOverlay.styles[Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureOverlay.defaultStyle].DefaultBrush.strokeWidth);
    }
    get brush() {
        return this._brush;
    }
    set brush(newBrush) {
        this._brush = newBrush;
        this.barcodeCapture.didChange();
    }
    get viewfinder() {
        return this._viewfinder;
    }
    set viewfinder(newViewfinder) {
        this._viewfinder = newViewfinder;
        this.barcodeCapture.didChange();
    }
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.barcodeCapture.didChange();
    }
    get style() {
        return this._style;
    }
    static withBarcodeCapture(barcodeCapture) {
        return BarcodeCaptureOverlay.withBarcodeCaptureForView(barcodeCapture, null);
    }
    static withBarcodeCaptureForView(barcodeCapture, view) {
        return this.withBarcodeCaptureForViewWithStyle(barcodeCapture, view, Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureOverlay.defaultStyle);
    }
    static withBarcodeCaptureForViewWithStyle(barcodeCapture, view, style) {
        const overlay = new BarcodeCaptureOverlay();
        overlay.barcodeCapture = barcodeCapture;
        overlay._style = style;
        overlay._brush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureOverlay.styles[overlay._style].DefaultBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureOverlay.styles[overlay._style].DefaultBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeCapture.BarcodeCaptureOverlay.styles[overlay._style].DefaultBrush.strokeWidth);
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    }
}
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeCaptureOverlay.prototype, "barcodeCapture", void 0);
__decorate([
    Serializeable_1.nameForSerialization('shouldShowScanAreaGuides')
], BarcodeCaptureOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    Serializeable_1.serializationDefault(Viewfinder_1.NoViewfinder),
    Serializeable_1.nameForSerialization('viewfinder')
], BarcodeCaptureOverlay.prototype, "_viewfinder", void 0);
__decorate([
    Serializeable_1.nameForSerialization('brush')
], BarcodeCaptureOverlay.prototype, "_brush", void 0);
__decorate([
    Serializeable_1.nameForSerialization('style')
], BarcodeCaptureOverlay.prototype, "_style", void 0);
exports.BarcodeCaptureOverlay = BarcodeCaptureOverlay;
});