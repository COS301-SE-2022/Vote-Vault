cordova.define("scandit-cordova-datacapture-core.DataCaptureContext+Related", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextStatus = void 0;
class ContextStatus {
    static fromJSON(json) {
        const status = new ContextStatus();
        status._code = json.code;
        status._message = json.message;
        status._isValid = json.isValid;
        return status;
    }
    get message() {
        return this._message;
    }
    get code() {
        return this._code;
    }
    get isValid() {
        return this._isValid;
    }
}
exports.ContextStatus = ContextStatus;
});