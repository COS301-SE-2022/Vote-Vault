cordova.define("scandit-cordova-datacapture-core.CommonCordova", function(require, exports, module) { 
"use strict";
/// <amd-module name="scandit-cordova-datacapture-core.CommonCordova"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializePlugin = exports.cordovaExec = exports.pluginsMetadata = exports.CordovaError = void 0;
// tslint:disable:no-var-requires
const exec = require('cordova/exec');
const channel = require('cordova/channel');
const cordovaPluginsData = require('cordova/plugin_list');
// tslint:enable:no-var-requires
class CordovaError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
    static fromJSON(json) {
        if (json && json.code && json.message) {
            return new CordovaError(json.code, json.message);
        }
        else {
            return null;
        }
    }
}
exports.CordovaError = CordovaError;
exports.pluginsMetadata = cordovaPluginsData.metadata;
exports.cordovaExec = (successCallback, errorCallback, className, functionName, args) => {
    if (window.Scandit && window.Scandit.DEBUG) {
        // tslint:disable-next-line:no-console
        console.log(`Called native function: ${functionName}`, args, { success: successCallback, error: errorCallback });
    }
    const extendedSuccessCallback = (message) => {
        const shouldCallback = message && message.shouldNotifyWhenFinished;
        const finishCallbackID = shouldCallback ? message.finishCallbackID : null;
        const started = Date.now();
        let callbackResult;
        if (successCallback) {
            callbackResult = successCallback(message);
        }
        if (shouldCallback) {
            const maxCallbackDuration = 50;
            const callbackDuration = Date.now() - started;
            if (callbackDuration > maxCallbackDuration) {
                // tslint:disable-next-line:no-console
                console.log(`[SCANDIT WARNING] Took ${callbackDuration}ms to execute callback that's blocking native execution. You should keep this duration short, for more information, take a look at the documentation.`);
            }
            exec(null, null, className, 'finishCallback', [{
                    finishCallbackID,
                    result: callbackResult,
                }]);
        }
    };
    const extendedErrorCallback = (error) => {
        if (errorCallback) {
            const cordovaError = CordovaError.fromJSON(error);
            if (cordovaError !== null) {
                error = cordovaError;
            }
            errorCallback(error);
        }
    };
    exec(extendedSuccessCallback, extendedErrorCallback, className, functionName, args);
};
exports.initializePlugin = (pluginName, customInitialization) => {
    const readyEventName = `on${pluginName}Ready`;
    channel.createSticky(readyEventName);
    channel.waitForInitialization(readyEventName);
    customInitialization.then(() => channel[readyEventName].fire());
};
});