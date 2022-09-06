cordova.define("scandit-cordova-datacapture-barcode.BarcodeSelection+Related", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSelectionBasicOverlay = exports.BarcodeSelectionBasicOverlayStyle = exports.BarcodeSelectionSession = exports.BarcodeSelectionTapSelection = exports.BarcodeSelectionAimerSelection = exports.PrivateBarcodeSelectionType = exports.BarcodeSelectionTapBehavior = exports.BarcodeSelectionFreezeBehavior = exports.BarcodeSelectionManualSelectionStrategy = exports.BarcodeSelectionAutoSelectionStrategy = exports.PrivateBarcodeSelectionStrategy = exports.BarcodeSelectionFeedback = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.BarcodeSelection+Related"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Barcode_1 = require("scandit-cordova-datacapture-barcode.Barcode");
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
const Viewfinder_1 = require("scandit-cordova-datacapture-core.Viewfinder");
class BarcodeSelectionFeedback extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.selection = Cordova_1.Cordova.defaults.BarcodeSelection.feedback.selection;
    }
    static get default() {
        return new BarcodeSelectionFeedback();
    }
}
exports.BarcodeSelectionFeedback = BarcodeSelectionFeedback;
var BarcodeSelectionStrategyType;
(function (BarcodeSelectionStrategyType) {
    BarcodeSelectionStrategyType["Auto"] = "autoSelectionStrategy";
    BarcodeSelectionStrategyType["Manual"] = "manualSelectionStrategy";
})(BarcodeSelectionStrategyType || (BarcodeSelectionStrategyType = {}));
class PrivateBarcodeSelectionStrategy {
    static fromJSON(json) {
        switch (json.type) {
            case BarcodeSelectionStrategyType.Auto:
                return BarcodeSelectionAutoSelectionStrategy.autoSelectionStrategy;
                break;
            case BarcodeSelectionStrategyType.Manual:
                return BarcodeSelectionManualSelectionStrategy.manualSelectionStrategy;
                break;
            default:
                throw new Error('Unknown selection strategy type: ' + json.type);
                break;
        }
    }
}
exports.PrivateBarcodeSelectionStrategy = PrivateBarcodeSelectionStrategy;
class BarcodeSelectionAutoSelectionStrategy extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = BarcodeSelectionStrategyType.Auto;
    }
    static get autoSelectionStrategy() {
        return new BarcodeSelectionAutoSelectionStrategy();
    }
}
exports.BarcodeSelectionAutoSelectionStrategy = BarcodeSelectionAutoSelectionStrategy;
class BarcodeSelectionManualSelectionStrategy extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = BarcodeSelectionStrategyType.Manual;
    }
    static get manualSelectionStrategy() {
        return new BarcodeSelectionManualSelectionStrategy();
    }
}
exports.BarcodeSelectionManualSelectionStrategy = BarcodeSelectionManualSelectionStrategy;
var BarcodeSelectionFreezeBehavior;
(function (BarcodeSelectionFreezeBehavior) {
    BarcodeSelectionFreezeBehavior["Manual"] = "manual";
    BarcodeSelectionFreezeBehavior["ManualAndAutomatic"] = "manualAndAutomatic";
})(BarcodeSelectionFreezeBehavior = exports.BarcodeSelectionFreezeBehavior || (exports.BarcodeSelectionFreezeBehavior = {}));
var BarcodeSelectionTapBehavior;
(function (BarcodeSelectionTapBehavior) {
    BarcodeSelectionTapBehavior["ToggleSelection"] = "toggleSelection";
    BarcodeSelectionTapBehavior["RepeatSelection"] = "repeatSelection";
})(BarcodeSelectionTapBehavior = exports.BarcodeSelectionTapBehavior || (exports.BarcodeSelectionTapBehavior = {}));
var BarcodeSelectionTypeName;
(function (BarcodeSelectionTypeName) {
    BarcodeSelectionTypeName["Aimer"] = "aimerSelection";
    BarcodeSelectionTypeName["Tap"] = "tapSelection";
})(BarcodeSelectionTypeName || (BarcodeSelectionTypeName = {}));
class PrivateBarcodeSelectionType {
    static fromJSON(json) {
        switch (json.type) {
            case BarcodeSelectionTypeName.Aimer:
                return PrivateBarcodeSelectionAimerSelection.fromJSON(json);
                break;
            case BarcodeSelectionTypeName.Tap:
                return PrivateBarcodeSelectionTapSelection.fromJSON(json);
                break;
            default:
                throw new Error('Unknown selection strategy type: ' + json.type);
                break;
        }
    }
}
exports.PrivateBarcodeSelectionType = PrivateBarcodeSelectionType;
class BarcodeSelectionAimerSelection extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.type = BarcodeSelectionTypeName.Aimer;
        this.selectionStrategy = Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionAimerSelection
            .defaultSelectionStrategy(PrivateBarcodeSelectionStrategy.fromJSON);
    }
    static get aimerSelection() {
        return new BarcodeSelectionAimerSelection();
    }
}
exports.BarcodeSelectionAimerSelection = BarcodeSelectionAimerSelection;
class PrivateBarcodeSelectionAimerSelection {
    static fromJSON(json) {
        const selection = BarcodeSelectionAimerSelection.aimerSelection;
        selection.selectionStrategy = PrivateBarcodeSelectionStrategy.fromJSON(json.selectionStrategy);
        return selection;
    }
}
class BarcodeSelectionTapSelection extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = BarcodeSelectionTypeName.Tap;
        this.freezeBehavior = Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionTapSelection.defaultFreezeBehavior;
        this.tapBehavior = Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionTapSelection.defaultTapBehavior;
    }
    static get tapSelection() {
        return new BarcodeSelectionTapSelection();
    }
    static withFreezeBehaviorAndTapBehavior(freezeBehavior, tapBehavior) {
        const selection = this.tapSelection;
        selection.freezeBehavior = freezeBehavior;
        selection.tapBehavior = tapBehavior;
        return selection;
    }
}
exports.BarcodeSelectionTapSelection = BarcodeSelectionTapSelection;
class PrivateBarcodeSelectionTapSelection {
    static fromJSON(json) {
        const selection = BarcodeSelectionTapSelection.tapSelection;
        selection.freezeBehavior = json.freezeBehavior;
        selection.tapBehavior = json.tapBehavior;
        return selection;
    }
}
class BarcodeSelectionSession {
    get selectedBarcodes() {
        return this._selectedBarcodes;
    }
    get newlySelectedBarcodes() {
        return this._newlySelectedBarcodes;
    }
    get newlyUnselectedBarcodes() {
        return this._newlyUnselectedBarcodes;
    }
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    static fromJSON(json) {
        const session = new BarcodeSelectionSession();
        session._selectedBarcodes = json.selectedBarcodes
            .map(Barcode_1.Barcode.fromJSON);
        session._newlySelectedBarcodes = json.newlySelectedBarcodes
            .map(Barcode_1.Barcode.fromJSON);
        session._newlyUnselectedBarcodes = json.newlyUnselectedBarcodes
            .map(Barcode_1.Barcode.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    }
    getCount(barcode) {
        return this.listenerProxy.getCount(barcode);
    }
    reset() {
        return this.listenerProxy.reset();
    }
}
exports.BarcodeSelectionSession = BarcodeSelectionSession;
var BarcodeSelectionBasicOverlayStyle;
(function (BarcodeSelectionBasicOverlayStyle) {
    BarcodeSelectionBasicOverlayStyle["Frame"] = "frame";
    BarcodeSelectionBasicOverlayStyle["Dot"] = "dot";
})(BarcodeSelectionBasicOverlayStyle = exports.BarcodeSelectionBasicOverlayStyle || (exports.BarcodeSelectionBasicOverlayStyle = {}));
class BarcodeSelectionBasicOverlay extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.type = 'barcodeSelectionBasic';
        this._trackedBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultTrackedBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultTrackedBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultTrackedBrush.strokeWidth);
        this._aimedBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultAimedBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultAimedBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultAimedBrush.strokeWidth);
        this._selectedBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectedBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectedBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectedBrush.strokeWidth);
        this._selectingBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectingBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectingBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle].DefaultSelectingBrush.strokeWidth);
        this._shouldShowScanAreaGuides = false;
        this._shouldShowHints = true;
        this._viewfinder = new Viewfinder_1.AimerViewfinder();
    }
    get trackedBrush() {
        return this._trackedBrush;
    }
    set trackedBrush(newBrush) {
        this._trackedBrush = newBrush;
        this.barcodeSelection.didChange();
    }
    get aimedBrush() {
        return this._aimedBrush;
    }
    set aimedBrush(newBrush) {
        this._aimedBrush = newBrush;
        this.barcodeSelection.didChange();
    }
    get selectedBrush() {
        return this._selectedBrush;
    }
    set selectedBrush(newBrush) {
        this._selectedBrush = newBrush;
        this.barcodeSelection.didChange();
    }
    get selectingBrush() {
        return this._selectingBrush;
    }
    set selectingBrush(newBrush) {
        this._selectingBrush = newBrush;
        this.barcodeSelection.didChange();
    }
    get style() {
        return this._style;
    }
    get viewfinder() {
        return this._viewfinder;
    }
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.barcodeSelection.didChange();
    }
    get shouldShowHints() {
        return this._shouldShowHints;
    }
    set shouldShowHints(shouldShow) {
        this._shouldShowHints = shouldShow;
        this.barcodeSelection.didChange();
    }
    static withBarcodeSelection(barcodeSelection) {
        return BarcodeSelectionBasicOverlay.withBarcodeSelectionForView(barcodeSelection, null);
    }
    static withBarcodeSelectionForView(barcodeSelection, view) {
        return this.withBarcodeSelectionForViewWithStyle(barcodeSelection, view, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.defaultStyle);
    }
    static withBarcodeSelectionForViewWithStyle(barcodeSelection, view, style) {
        const overlay = new BarcodeSelectionBasicOverlay();
        overlay.barcodeSelection = barcodeSelection;
        overlay._style = style;
        overlay._trackedBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultTrackedBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultTrackedBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultTrackedBrush.strokeWidth);
        overlay._aimedBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultAimedBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultAimedBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultAimedBrush.strokeWidth);
        overlay._selectedBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultSelectedBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultSelectedBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultSelectedBrush.strokeWidth);
        overlay._selectingBrush = new Viewfinder_1.Brush(Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultSelectingBrush.fillColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultSelectingBrush.strokeColor, Cordova_1.Cordova.defaults.BarcodeSelection.BarcodeSelectionBasicOverlay.styles[overlay._style]
            .DefaultSelectingBrush.strokeWidth);
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    }
}
__decorate([
    Serializeable_1.ignoreFromSerialization
], BarcodeSelectionBasicOverlay.prototype, "barcodeSelection", void 0);
__decorate([
    Serializeable_1.nameForSerialization('trackedBrush')
], BarcodeSelectionBasicOverlay.prototype, "_trackedBrush", void 0);
__decorate([
    Serializeable_1.nameForSerialization('aimedBrush')
], BarcodeSelectionBasicOverlay.prototype, "_aimedBrush", void 0);
__decorate([
    Serializeable_1.nameForSerialization('selectedBrush')
], BarcodeSelectionBasicOverlay.prototype, "_selectedBrush", void 0);
__decorate([
    Serializeable_1.nameForSerialization('selectingBrush')
], BarcodeSelectionBasicOverlay.prototype, "_selectingBrush", void 0);
__decorate([
    Serializeable_1.nameForSerialization('style')
], BarcodeSelectionBasicOverlay.prototype, "_style", void 0);
__decorate([
    Serializeable_1.nameForSerialization('shouldShowScanAreaGuides')
], BarcodeSelectionBasicOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    Serializeable_1.nameForSerialization('shouldShowHints')
], BarcodeSelectionBasicOverlay.prototype, "_shouldShowHints", void 0);
__decorate([
    Serializeable_1.nameForSerialization('viewfinder')
], BarcodeSelectionBasicOverlay.prototype, "_viewfinder", void 0);
exports.BarcodeSelectionBasicOverlay = BarcodeSelectionBasicOverlay;
});