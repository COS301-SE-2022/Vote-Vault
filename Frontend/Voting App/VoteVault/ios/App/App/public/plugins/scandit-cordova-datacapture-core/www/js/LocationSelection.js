cordova.define("scandit-cordova-datacapture-core.LocationSelection", function(require, exports, module) { 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectangularLocationSelection = exports.RadiusLocationSelection = exports.NoneLocationSelection = exports.PrivateLocationSelection = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.LocationSelection"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Common_1 = require("scandit-cordova-datacapture-core.Common");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
var LocationSelectionType;
(function (LocationSelectionType) {
    LocationSelectionType["Radius"] = "radius";
    LocationSelectionType["Rectangular"] = "rectangular";
})(LocationSelectionType || (LocationSelectionType = {}));
class PrivateLocationSelection {
    static fromJSON(json) {
        switch (json.type) {
            case LocationSelectionType.Radius:
                return RadiusLocationSelection
                    .fromJSON(json);
                break;
            case LocationSelectionType.Rectangular:
                return RectangularLocationSelection
                    .fromJSON(json);
                break;
            default:
                return exports.NoneLocationSelection;
                break;
        }
    }
}
exports.PrivateLocationSelection = PrivateLocationSelection;
// tslint:disable-next-line:variable-name
exports.NoneLocationSelection = { type: 'none' };
class RadiusLocationSelection extends Serializeable_1.DefaultSerializeable {
    constructor(radius) {
        super();
        this.type = LocationSelectionType.Radius;
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    static fromJSON(json) {
        return new RadiusLocationSelection(Common_1.NumberWithUnit.fromJSON(json.radius));
    }
}
__decorate([
    Serializeable_1.nameForSerialization('radius')
], RadiusLocationSelection.prototype, "_radius", void 0);
exports.RadiusLocationSelection = RadiusLocationSelection;
class RectangularLocationSelection extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.type = LocationSelectionType.Rectangular;
    }
    get sizeWithUnitAndAspect() {
        return this._sizeWithUnitAndAspect;
    }
    static fromJSON(json) {
        const locationSelection = new RectangularLocationSelection();
        locationSelection._sizeWithUnitAndAspect
            = Common_1.SizeWithUnitAndAspect.fromJSON(json.size);
        return locationSelection;
    }
    static withSize(size) {
        const locationSelection = new RectangularLocationSelection();
        locationSelection._sizeWithUnitAndAspect = Common_1.SizeWithUnitAndAspect.sizeWithWidthAndHeight(size);
        return locationSelection;
    }
    static withWidthAndAspectRatio(width, heightToWidthAspectRatio) {
        const locationSelection = new RectangularLocationSelection();
        locationSelection._sizeWithUnitAndAspect = Common_1.SizeWithUnitAndAspect
            .sizeWithWidthAndAspectRatio(width, heightToWidthAspectRatio);
        return locationSelection;
    }
    static withHeightAndAspectRatio(height, widthToHeightAspectRatio) {
        const locationSelection = new RectangularLocationSelection();
        locationSelection._sizeWithUnitAndAspect = Common_1.SizeWithUnitAndAspect
            .sizeWithHeightAndAspectRatio(height, widthToHeightAspectRatio);
        return locationSelection;
    }
}
__decorate([
    Serializeable_1.nameForSerialization('size')
], RectangularLocationSelection.prototype, "_sizeWithUnitAndAspect", void 0);
exports.RectangularLocationSelection = RectangularLocationSelection;
});