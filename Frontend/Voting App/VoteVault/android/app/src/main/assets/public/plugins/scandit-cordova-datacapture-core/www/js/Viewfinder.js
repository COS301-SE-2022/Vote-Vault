cordova.define("scandit-cordova-datacapture-core.Viewfinder", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AimerViewfinder = exports.SpotlightViewfinder = exports.RectangularViewfinder = exports.LaserlineViewfinder = exports.NoViewfinder = exports.Brush = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.Viewfinder"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Common_1 = require("scandit-cordova-datacapture-core.Common");
const Cordova_1 = require("scandit-cordova-datacapture-core.Cordova");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
class Brush extends Serializeable_1.DefaultSerializeable {
    constructor(fillColor = Cordova_1.Cordova.defaults.Brush.fillColor, strokeColor = Cordova_1.Cordova.defaults.Brush.strokeColor, strokeWidth = Cordova_1.Cordova.defaults.Brush.strokeWidth) {
        super();
        this.fill = { color: fillColor };
        this.stroke = { color: strokeColor, width: strokeWidth };
    }
    static get transparent() {
        const transparentBlack = Common_1.Color.fromRGBA(255, 255, 255, 0);
        return new Brush(transparentBlack, transparentBlack, 0);
    }
    get fillColor() {
        return this.fill.color;
    }
    get strokeColor() {
        return this.stroke.color;
    }
    get strokeWidth() {
        return this.stroke.width;
    }
}
exports.Brush = Brush;
// tslint:disable-next-line:variable-name
exports.NoViewfinder = { type: 'none' };
class LaserlineViewfinder extends Serializeable_1.DefaultSerializeable {
    constructor(style) {
        super();
        this.type = 'laserline';
        const viewfinderStyle = style || Cordova_1.Cordova.defaults.LaserlineViewfinder.defaultStyle;
        this._style = Cordova_1.Cordova.defaults.LaserlineViewfinder.styles[viewfinderStyle].style;
        this.width = Cordova_1.Cordova.defaults.LaserlineViewfinder.styles[viewfinderStyle].width;
        this.enabledColor = Cordova_1.Cordova.defaults.LaserlineViewfinder.styles[viewfinderStyle].enabledColor;
        this.disabledColor = Cordova_1.Cordova.defaults.LaserlineViewfinder.styles[viewfinderStyle].disabledColor;
    }
    get style() {
        return this._style;
    }
}
__decorate([
    Serializeable_1.nameForSerialization('style')
], LaserlineViewfinder.prototype, "_style", void 0);
exports.LaserlineViewfinder = LaserlineViewfinder;
class RectangularViewfinder extends Serializeable_1.DefaultSerializeable {
    constructor(style, lineStyle) {
        super();
        this.type = 'rectangular';
        const viewfinderStyle = style || Cordova_1.Cordova.defaults.RectangularViewfinder.defaultStyle;
        this._style = Cordova_1.Cordova.defaults.RectangularViewfinder.styles[viewfinderStyle].style;
        this._lineStyle = Cordova_1.Cordova.defaults.RectangularViewfinder.styles[viewfinderStyle].lineStyle;
        this._dimming = Cordova_1.Cordova.defaults.RectangularViewfinder.styles[viewfinderStyle].dimming;
        this._disabledDimming = Cordova_1.Cordova.defaults.RectangularViewfinder.styles[viewfinderStyle].disabledDimming;
        this._animation = Cordova_1.Cordova.defaults.RectangularViewfinder.styles[viewfinderStyle].animation;
        this._color = Cordova_1.Cordova.defaults.RectangularViewfinder.styles[viewfinderStyle].color;
        this._disabledColor = Cordova_1.Cordova.defaults.RectangularViewfinder.styles[viewfinderStyle].disabledColor;
        this._sizeWithUnitAndAspect = Cordova_1.Cordova.defaults.RectangularViewfinder.styles[viewfinderStyle].size;
        if (lineStyle !== undefined) {
            this._lineStyle = lineStyle;
        }
    }
    get sizeWithUnitAndAspect() {
        return this._sizeWithUnitAndAspect;
    }
    get style() {
        return this._style;
    }
    get lineStyle() {
        return this._lineStyle;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get disabledColor() {
        return this._disabledColor;
    }
    set disabledColor(value) {
        this._disabledColor = value;
    }
    get dimming() {
        return this._dimming;
    }
    set dimming(value) {
        this._dimming = value;
    }
    get disabledDimming() {
        return this._disabledDimming;
    }
    set disabledDimming(value) {
        this._disabledDimming = value;
    }
    get animation() {
        return this._animation;
    }
    set animation(animation) {
        this._animation = animation;
    }
    setSize(size) {
        this._sizeWithUnitAndAspect = Common_1.SizeWithUnitAndAspect.sizeWithWidthAndHeight(size);
    }
    setWidthAndAspectRatio(width, heightToWidthAspectRatio) {
        this._sizeWithUnitAndAspect = Common_1.SizeWithUnitAndAspect.sizeWithWidthAndAspectRatio(width, heightToWidthAspectRatio);
    }
    setHeightAndAspectRatio(height, widthToHeightAspectRatio) {
        this._sizeWithUnitAndAspect = Common_1.SizeWithUnitAndAspect.sizeWithHeightAndAspectRatio(height, widthToHeightAspectRatio);
    }
    setShorterDimensionAndAspectRatio(fraction, aspectRatio) {
        this._sizeWithUnitAndAspect = Common_1.SizeWithUnitAndAspect.sizeWithShorterDimensionAndAspectRatio(new Common_1.NumberWithUnit(fraction, Common_1.MeasureUnit.Fraction), aspectRatio);
    }
}
__decorate([
    Serializeable_1.nameForSerialization('style')
], RectangularViewfinder.prototype, "_style", void 0);
__decorate([
    Serializeable_1.nameForSerialization('lineStyle')
], RectangularViewfinder.prototype, "_lineStyle", void 0);
__decorate([
    Serializeable_1.nameForSerialization('dimming')
], RectangularViewfinder.prototype, "_dimming", void 0);
__decorate([
    Serializeable_1.nameForSerialization('disabledDimming')
], RectangularViewfinder.prototype, "_disabledDimming", void 0);
__decorate([
    Serializeable_1.nameForSerialization('animation'),
    Serializeable_1.ignoreFromSerialization
], RectangularViewfinder.prototype, "_animation", void 0);
__decorate([
    Serializeable_1.nameForSerialization('size')
], RectangularViewfinder.prototype, "_sizeWithUnitAndAspect", void 0);
__decorate([
    Serializeable_1.nameForSerialization('color')
], RectangularViewfinder.prototype, "_color", void 0);
__decorate([
    Serializeable_1.nameForSerialization('disabledColor')
], RectangularViewfinder.prototype, "_disabledColor", void 0);
exports.RectangularViewfinder = RectangularViewfinder;
class SpotlightViewfinder extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.type = 'spotlight';
        this._sizeWithUnitAndAspect = Cordova_1.Cordova.defaults.SpotlightViewfinder.size;
        this.enabledBorderColor = Cordova_1.Cordova.defaults.SpotlightViewfinder.enabledBorderColor;
        this.disabledBorderColor = Cordova_1.Cordova.defaults.SpotlightViewfinder.disabledBorderColor;
        this.backgroundColor = Cordova_1.Cordova.defaults.SpotlightViewfinder.backgroundColor;
        // tslint:disable-next-line:no-console
        console.warn('SpotlightViewfinder is deprecated and will be removed in a future release. Use RectangularViewfinder instead.');
    }
    get sizeWithUnitAndAspect() {
        return this._sizeWithUnitAndAspect;
    }
    setSize(size) {
        this._sizeWithUnitAndAspect = Common_1.SizeWithUnitAndAspect.sizeWithWidthAndHeight(size);
    }
    setWidthAndAspectRatio(width, heightToWidthAspectRatio) {
        this._sizeWithUnitAndAspect = Common_1.SizeWithUnitAndAspect.sizeWithWidthAndAspectRatio(width, heightToWidthAspectRatio);
    }
    setHeightAndAspectRatio(height, widthToHeightAspectRatio) {
        this._sizeWithUnitAndAspect = Common_1.SizeWithUnitAndAspect.sizeWithHeightAndAspectRatio(height, widthToHeightAspectRatio);
    }
}
__decorate([
    Serializeable_1.nameForSerialization('size')
], SpotlightViewfinder.prototype, "_sizeWithUnitAndAspect", void 0);
exports.SpotlightViewfinder = SpotlightViewfinder;
class AimerViewfinder extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.type = 'aimer';
        this.frameColor = Cordova_1.Cordova.defaults.AimerViewfinder.frameColor;
        this.dotColor = Cordova_1.Cordova.defaults.AimerViewfinder.dotColor;
    }
}
exports.AimerViewfinder = AimerViewfinder;
});