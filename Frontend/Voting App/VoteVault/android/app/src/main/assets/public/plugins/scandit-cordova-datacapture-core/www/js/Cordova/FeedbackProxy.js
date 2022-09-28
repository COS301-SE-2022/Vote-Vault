cordova.define("scandit-cordova-datacapture-core.FeedbackProxy", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackProxy = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.FeedbackProxy"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Cordova_1 = require("scandit-cordova-datacapture-core.Cordova");
class FeedbackProxy {
    static forFeedback(feedback) {
        const proxy = new FeedbackProxy();
        proxy.feedback = feedback;
        return proxy;
    }
    emit() {
        FeedbackProxy.cordovaExec(null, null, Cordova_1.CordovaFunction.EmitFeedback, [this.feedback.toJSON()]);
    }
}
exports.FeedbackProxy = FeedbackProxy;
FeedbackProxy.cordovaExec = Cordova_1.Cordova.exec;
});