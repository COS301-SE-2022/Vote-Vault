cordova.define("scandit-cordova-datacapture-core.Viewfinder+Related", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectangularViewfinderAnimation = exports.LaserlineViewfinderStyle = exports.RectangularViewfinderLineStyle = exports.RectangularViewfinderStyle = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.Viewfinder+Related"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
var RectangularViewfinderStyle;
(function (RectangularViewfinderStyle) {
    RectangularViewfinderStyle["Legacy"] = "legacy";
    RectangularViewfinderStyle["Rounded"] = "rounded";
    RectangularViewfinderStyle["Square"] = "square";
})(RectangularViewfinderStyle = exports.RectangularViewfinderStyle || (exports.RectangularViewfinderStyle = {}));
var RectangularViewfinderLineStyle;
(function (RectangularViewfinderLineStyle) {
    RectangularViewfinderLineStyle["Light"] = "light";
    RectangularViewfinderLineStyle["Bold"] = "bold";
})(RectangularViewfinderLineStyle = exports.RectangularViewfinderLineStyle || (exports.RectangularViewfinderLineStyle = {}));
var LaserlineViewfinderStyle;
(function (LaserlineViewfinderStyle) {
    LaserlineViewfinderStyle["Legacy"] = "legacy";
    LaserlineViewfinderStyle["Animated"] = "animated";
})(LaserlineViewfinderStyle = exports.LaserlineViewfinderStyle || (exports.LaserlineViewfinderStyle = {}));
class RectangularViewfinderAnimation extends Serializeable_1.DefaultSerializeable {
    constructor(isLooping) {
        super();
        this._isLooping = false;
        this._isLooping = isLooping;
    }
    static fromJSON(json) {
        if (json === null) {
            return null;
        }
        return new RectangularViewfinderAnimation(json.looping);
    }
    get isLooping() {
        return this._isLooping;
    }
}
__decorate([
    Serializeable_1.nameForSerialization('isLooping')
], RectangularViewfinderAnimation.prototype, "_isLooping", void 0);
exports.RectangularViewfinderAnimation = RectangularViewfinderAnimation;
});