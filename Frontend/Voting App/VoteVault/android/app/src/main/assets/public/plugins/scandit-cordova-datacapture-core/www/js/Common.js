cordova.define("scandit-cordova-datacapture-core.Common", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = exports.Orientation = exports.Color = exports.MarginsWithUnit = exports.SizeWithUnitAndAspect = exports.SizingMode = exports.SizeWithAspect = exports.Size = exports.SizeWithUnit = exports.RectWithUnit = exports.Rect = exports.PointWithUnit = exports.NumberWithUnit = exports.MeasureUnit = exports.Quadrilateral = exports.Point = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.Common"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
class Point extends Serializeable_1.DefaultSerializeable {
    constructor(x, y) {
        super();
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    static fromJSON(json) {
        return new Point(json.x, json.y);
    }
}
__decorate([
    Serializeable_1.nameForSerialization('x')
], Point.prototype, "_x", void 0);
__decorate([
    Serializeable_1.nameForSerialization('y')
], Point.prototype, "_y", void 0);
exports.Point = Point;
class Quadrilateral extends Serializeable_1.DefaultSerializeable {
    constructor(topLeft, topRight, bottomRight, bottomLeft) {
        super();
        this._topLeft = topLeft;
        this._topRight = topRight;
        this._bottomRight = bottomRight;
        this._bottomLeft = bottomLeft;
    }
    get topLeft() {
        return this._topLeft;
    }
    get topRight() {
        return this._topRight;
    }
    get bottomRight() {
        return this._bottomRight;
    }
    get bottomLeft() {
        return this._bottomLeft;
    }
    static fromJSON(json) {
        return new Quadrilateral(Point.fromJSON(json.topLeft), Point.fromJSON(json.topRight), Point.fromJSON(json.bottomRight), Point.fromJSON(json.bottomLeft));
    }
}
__decorate([
    Serializeable_1.nameForSerialization('topLeft')
], Quadrilateral.prototype, "_topLeft", void 0);
__decorate([
    Serializeable_1.nameForSerialization('topRight')
], Quadrilateral.prototype, "_topRight", void 0);
__decorate([
    Serializeable_1.nameForSerialization('bottomRight')
], Quadrilateral.prototype, "_bottomRight", void 0);
__decorate([
    Serializeable_1.nameForSerialization('bottomLeft')
], Quadrilateral.prototype, "_bottomLeft", void 0);
exports.Quadrilateral = Quadrilateral;
var MeasureUnit;
(function (MeasureUnit) {
    MeasureUnit["DIP"] = "dip";
    MeasureUnit["Pixel"] = "pixel";
    MeasureUnit["Fraction"] = "fraction";
})(MeasureUnit = exports.MeasureUnit || (exports.MeasureUnit = {}));
class NumberWithUnit extends Serializeable_1.DefaultSerializeable {
    constructor(value, unit) {
        super();
        this._value = value;
        this._unit = unit;
    }
    get value() {
        return this._value;
    }
    get unit() {
        return this._unit;
    }
    static fromJSON(json) {
        return new NumberWithUnit(json.value, json.unit);
    }
}
__decorate([
    Serializeable_1.nameForSerialization('value')
], NumberWithUnit.prototype, "_value", void 0);
__decorate([
    Serializeable_1.nameForSerialization('unit')
], NumberWithUnit.prototype, "_unit", void 0);
exports.NumberWithUnit = NumberWithUnit;
class PointWithUnit extends Serializeable_1.DefaultSerializeable {
    constructor(x, y) {
        super();
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    static fromJSON(json) {
        return new PointWithUnit(NumberWithUnit.fromJSON(json.x), NumberWithUnit.fromJSON(json.y));
    }
    static get zero() {
        return new PointWithUnit(new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel));
    }
}
__decorate([
    Serializeable_1.nameForSerialization('x')
], PointWithUnit.prototype, "_x", void 0);
__decorate([
    Serializeable_1.nameForSerialization('y')
], PointWithUnit.prototype, "_y", void 0);
exports.PointWithUnit = PointWithUnit;
class Rect extends Serializeable_1.DefaultSerializeable {
    constructor(origin, size) {
        super();
        this._origin = origin;
        this._size = size;
    }
    get origin() {
        return this._origin;
    }
    get size() {
        return this._size;
    }
}
__decorate([
    Serializeable_1.nameForSerialization('origin')
], Rect.prototype, "_origin", void 0);
__decorate([
    Serializeable_1.nameForSerialization('size')
], Rect.prototype, "_size", void 0);
exports.Rect = Rect;
class RectWithUnit extends Serializeable_1.DefaultSerializeable {
    constructor(origin, size) {
        super();
        this._origin = origin;
        this._size = size;
    }
    get origin() {
        return this._origin;
    }
    get size() {
        return this._size;
    }
}
__decorate([
    Serializeable_1.nameForSerialization('origin')
], RectWithUnit.prototype, "_origin", void 0);
__decorate([
    Serializeable_1.nameForSerialization('size')
], RectWithUnit.prototype, "_size", void 0);
exports.RectWithUnit = RectWithUnit;
class SizeWithUnit extends Serializeable_1.DefaultSerializeable {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
}
__decorate([
    Serializeable_1.nameForSerialization('width')
], SizeWithUnit.prototype, "_width", void 0);
__decorate([
    Serializeable_1.nameForSerialization('height')
], SizeWithUnit.prototype, "_height", void 0);
exports.SizeWithUnit = SizeWithUnit;
class Size extends Serializeable_1.DefaultSerializeable {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    static fromJSON(json) {
        return new Size(json.width, json.height);
    }
}
__decorate([
    Serializeable_1.nameForSerialization('width')
], Size.prototype, "_width", void 0);
__decorate([
    Serializeable_1.nameForSerialization('height')
], Size.prototype, "_height", void 0);
exports.Size = Size;
class SizeWithAspect {
    constructor(size, aspect) {
        this._size = size;
        this._aspect = aspect;
    }
    get size() {
        return this._size;
    }
    get aspect() {
        return this._aspect;
    }
}
__decorate([
    Serializeable_1.nameForSerialization('size')
], SizeWithAspect.prototype, "_size", void 0);
__decorate([
    Serializeable_1.nameForSerialization('aspect')
], SizeWithAspect.prototype, "_aspect", void 0);
exports.SizeWithAspect = SizeWithAspect;
var SizingMode;
(function (SizingMode) {
    SizingMode["WidthAndHeight"] = "widthAndHeight";
    SizingMode["WidthAndAspectRatio"] = "widthAndAspectRatio";
    SizingMode["HeightAndAspectRatio"] = "heightAndAspectRatio";
    SizingMode["ShorterDimensionAndAspectRatio"] = "shorterDimensionAndAspectRatio";
})(SizingMode = exports.SizingMode || (exports.SizingMode = {}));
class SizeWithUnitAndAspect {
    constructor() {
        this._shorterDimensionAndAspectRatio = null;
    }
    get widthAndHeight() {
        return this._widthAndHeight;
    }
    get widthAndAspectRatio() {
        return this._widthAndAspectRatio;
    }
    get heightAndAspectRatio() {
        return this._heightAndAspectRatio;
    }
    get shorterDimensionAndAspectRatio() {
        return this._shorterDimensionAndAspectRatio;
    }
    get sizingMode() {
        if (this.widthAndAspectRatio) {
            return SizingMode.WidthAndAspectRatio;
        }
        if (this.heightAndAspectRatio) {
            return SizingMode.HeightAndAspectRatio;
        }
        if (this.shorterDimensionAndAspectRatio) {
            return SizingMode.ShorterDimensionAndAspectRatio;
        }
        return SizingMode.WidthAndHeight;
    }
    static sizeWithWidthAndHeight(widthAndHeight) {
        const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._widthAndHeight = widthAndHeight;
        return sizeWithUnitAndAspect;
    }
    static sizeWithWidthAndAspectRatio(width, aspectRatio) {
        const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._widthAndAspectRatio = new SizeWithAspect(width, aspectRatio);
        return sizeWithUnitAndAspect;
    }
    static sizeWithHeightAndAspectRatio(height, aspectRatio) {
        const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._heightAndAspectRatio = new SizeWithAspect(height, aspectRatio);
        return sizeWithUnitAndAspect;
    }
    static sizeWithShorterDimensionAndAspectRatio(shorterDimension, aspectRatio) {
        const sizeWithUnitAndAspect = new SizeWithUnitAndAspect();
        sizeWithUnitAndAspect._shorterDimensionAndAspectRatio = new SizeWithAspect(shorterDimension, aspectRatio);
        return sizeWithUnitAndAspect;
    }
    static fromJSON(json) {
        if (json.width && json.height) {
            return this.sizeWithWidthAndHeight(new SizeWithUnit(NumberWithUnit.fromJSON(json.width), NumberWithUnit.fromJSON(json.height)));
        }
        else if (json.width && json.aspect) {
            return this.sizeWithWidthAndAspectRatio(NumberWithUnit.fromJSON(json.width), json.aspect);
        }
        else if (json.height && json.aspect) {
            return this.sizeWithHeightAndAspectRatio(NumberWithUnit.fromJSON(json.height), json.aspect);
        }
        else if (json.shorterDimension && json.aspect) {
            return this.sizeWithShorterDimensionAndAspectRatio(NumberWithUnit.fromJSON(json.shorterDimension), json.aspect);
        }
        else {
            throw new Error(`SizeWithUnitAndAspectJSON is malformed: ${JSON.stringify(json)}`);
        }
    }
    // no member access so our coverage check doesn't pick it up
    // TODO: https://jira.scandit.com/browse/SDC-1773
    // tslint:disable-next-line:member-access
    toJSON() {
        switch (this.sizingMode) {
            case SizingMode.WidthAndAspectRatio:
                return {
                    width: this.widthAndAspectRatio.size.toJSON(),
                    aspect: this.widthAndAspectRatio.aspect,
                };
            case SizingMode.HeightAndAspectRatio:
                return {
                    height: this.heightAndAspectRatio.size.toJSON(),
                    aspect: this.heightAndAspectRatio.aspect,
                };
            case SizingMode.ShorterDimensionAndAspectRatio:
                return {
                    shorterDimension: this.shorterDimensionAndAspectRatio.size.toJSON(),
                    aspect: this.shorterDimensionAndAspectRatio.aspect,
                };
            default:
                return {
                    width: this.widthAndHeight.width.toJSON(),
                    height: this.widthAndHeight.height.toJSON(),
                };
        }
    }
}
__decorate([
    Serializeable_1.nameForSerialization('widthAndHeight')
], SizeWithUnitAndAspect.prototype, "_widthAndHeight", void 0);
__decorate([
    Serializeable_1.nameForSerialization('widthAndAspectRatio')
], SizeWithUnitAndAspect.prototype, "_widthAndAspectRatio", void 0);
__decorate([
    Serializeable_1.nameForSerialization('heightAndAspectRatio')
], SizeWithUnitAndAspect.prototype, "_heightAndAspectRatio", void 0);
__decorate([
    Serializeable_1.nameForSerialization('shorterDimensionAndAspectRatio')
], SizeWithUnitAndAspect.prototype, "_shorterDimensionAndAspectRatio", void 0);
exports.SizeWithUnitAndAspect = SizeWithUnitAndAspect;
class MarginsWithUnit extends Serializeable_1.DefaultSerializeable {
    constructor(left, right, top, bottom) {
        super();
        this._left = left;
        this._right = right;
        this._top = top;
        this._bottom = bottom;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
    get top() {
        return this._top;
    }
    get bottom() {
        return this._bottom;
    }
    static fromJSON(json) {
        return new MarginsWithUnit(NumberWithUnit.fromJSON(json.left), NumberWithUnit.fromJSON(json.right), NumberWithUnit.fromJSON(json.top), NumberWithUnit.fromJSON(json.bottom));
    }
    static get zero() {
        return new MarginsWithUnit(new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel), new NumberWithUnit(0, MeasureUnit.Pixel));
    }
}
__decorate([
    Serializeable_1.nameForSerialization('left')
], MarginsWithUnit.prototype, "_left", void 0);
__decorate([
    Serializeable_1.nameForSerialization('right')
], MarginsWithUnit.prototype, "_right", void 0);
__decorate([
    Serializeable_1.nameForSerialization('top')
], MarginsWithUnit.prototype, "_top", void 0);
__decorate([
    Serializeable_1.nameForSerialization('bottom')
], MarginsWithUnit.prototype, "_bottom", void 0);
exports.MarginsWithUnit = MarginsWithUnit;
class Color {
    constructor(hex) {
        this.hexadecimalString = hex;
    }
    get redComponent() {
        return this.hexadecimalString.slice(0, 2);
    }
    get greenComponent() {
        return this.hexadecimalString.slice(2, 4);
    }
    get blueComponent() {
        return this.hexadecimalString.slice(4, 6);
    }
    get alphaComponent() {
        return this.hexadecimalString.slice(6, 8);
    }
    get red() {
        return Color.hexToNumber(this.redComponent);
    }
    get green() {
        return Color.hexToNumber(this.greenComponent);
    }
    get blue() {
        return Color.hexToNumber(this.blueComponent);
    }
    get alpha() {
        return Color.hexToNumber(this.alphaComponent);
    }
    static fromHex(hex) {
        return new Color(Color.normalizeHex(hex));
    }
    static fromRGBA(red, green, blue, alpha = 1) {
        const hexString = [red, green, blue, this.normalizeAlpha(alpha)]
            .reduce((hex, colorComponent) => hex + this.numberToHex(colorComponent), '');
        return new Color(hexString);
    }
    static hexToNumber(hex) {
        return parseInt(hex, 16);
    }
    static fromJSON(json) {
        return Color.fromHex(json);
    }
    static numberToHex(x) {
        x = Math.round(x);
        let hex = x.toString(16);
        if (hex.length === 1) {
            hex = '0' + hex;
        }
        return hex.toUpperCase();
    }
    static normalizeHex(hex) {
        // remove leading #
        if (hex[0] === '#') {
            hex = hex.slice(1);
        }
        // double digits if single digit
        if (hex.length < 6) {
            hex = hex.split('').map(s => s + s).join('');
        }
        // add alpha if missing
        if (hex.length === 6) {
            hex = hex + 'FF';
        }
        return hex.toUpperCase();
    }
    static normalizeAlpha(alpha) {
        if (alpha > 0 && alpha <= 1) {
            return 255 * alpha;
        }
        return alpha;
    }
    withAlpha(alpha) {
        const newHex = this.hexadecimalString.slice(0, 6) + Color.numberToHex(Color.normalizeAlpha(alpha));
        return Color.fromHex(newHex);
    }
    // no member access so our coverage check doesn't pick it up
    // TODO: https://jira.scandit.com/browse/SDC-1773
    // tslint:disable-next-line:member-access
    toJSON() {
        return this.hexadecimalString;
    }
}
exports.Color = Color;
var Orientation;
(function (Orientation) {
    Orientation["Unknown"] = "unknown";
    Orientation["Portrait"] = "portrait";
    Orientation["PortraitUpsideDown"] = "portraitUpsideDown";
    Orientation["LandscapeRight"] = "landscapeRight";
    Orientation["LandscapeLeft"] = "landscapeLeft";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
var Direction;
(function (Direction) {
    Direction["None"] = "none";
    Direction["Horizontal"] = "horizontal";
    Direction["LeftToRight"] = "leftToRight";
    Direction["RightToLeft"] = "rightToLeft";
    Direction["Vertical"] = "vertical";
    Direction["TopToBottom"] = "topToBottom";
    Direction["BottomToTop"] = "bottomToTop";
})(Direction = exports.Direction || (exports.Direction = {}));
});