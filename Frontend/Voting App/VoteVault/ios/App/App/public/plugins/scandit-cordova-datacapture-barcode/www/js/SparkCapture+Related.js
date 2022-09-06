cordova.define("scandit-cordova-datacapture-barcode.SparkCapture+Related", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkCaptureFeedback = exports.SparkCaptureSession = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.SparkCapture+Related"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Barcode_1 = require("scandit-cordova-datacapture-barcode.Barcode");
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
class SparkCaptureSession {
    get newlyRecognizedBarcodes() {
        return this._newlyRecognizedBarcodes;
    }
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    static fromJSON(json) {
        const session = new SparkCaptureSession();
        session._newlyRecognizedBarcodes = json.newlyRecognizedBarcodes
            .map(Barcode_1.Barcode.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    }
}
exports.SparkCaptureSession = SparkCaptureSession;
class SparkCaptureFeedback extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super(...arguments);
        this.success = Cordova_1.Cordova.defaults.SparkCapture.feedback.success;
    }
    static get default() {
        return new SparkCaptureFeedback();
    }
}
exports.SparkCaptureFeedback = SparkCaptureFeedback;
});