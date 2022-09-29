cordova.define("scandit-cordova-datacapture-core.DataCaptureViewProxy", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCaptureViewProxy = void 0;
/// <amd-module name="scandit-cordova-datacapture-core.DataCaptureViewProxy"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Common_1 = require("scandit-cordova-datacapture-core.Common");
const Cordova_1 = require("scandit-cordova-datacapture-core.Cordova");
var DataCaptureViewListenerEvent;
(function (DataCaptureViewListenerEvent) {
    DataCaptureViewListenerEvent["DidChangeSizeOrientation"] = "didChangeSizeOrientation";
})(DataCaptureViewListenerEvent || (DataCaptureViewListenerEvent = {}));
class DataCaptureViewProxy {
    static forDataCaptureView(view) {
        const viewProxy = new DataCaptureViewProxy();
        viewProxy.view = view;
        viewProxy.initialize();
        return viewProxy;
    }
    setPositionAndSize(top, left, width, height, shouldBeUnderWebView) {
        return new Promise((resolve, reject) => {
            DataCaptureViewProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.SetViewPositionAndSize, [{ top, left, width, height, shouldBeUnderWebView }]);
        });
    }
    show() {
        return new Promise((resolve, reject) => {
            DataCaptureViewProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.ShowView, null);
        });
    }
    hide() {
        return new Promise((resolve, reject) => {
            DataCaptureViewProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.HideView, null);
        });
    }
    viewPointForFramePoint(point) {
        return new Promise((resolve, reject) => {
            DataCaptureViewProxy.cordovaExec((convertedPoint) => resolve(Common_1.Point.fromJSON(JSON.parse(convertedPoint))), reject, Cordova_1.CordovaFunction.ViewPointForFramePoint, [point.toJSON()]);
        });
    }
    viewQuadrilateralForFrameQuadrilateral(quadrilateral) {
        return new Promise((resolve, reject) => {
            DataCaptureViewProxy.cordovaExec((convertedQuadrilateral) => resolve(Common_1.Quadrilateral.fromJSON(JSON.parse(convertedQuadrilateral))), reject, Cordova_1.CordovaFunction.ViewQuadrilateralForFrameQuadrilateral, [quadrilateral.toJSON()]);
        });
    }
    subscribeListener() {
        DataCaptureViewProxy.cordovaExec(this.notifyListeners.bind(this), null, Cordova_1.CordovaFunction.SubscribeViewListener, null);
    }
    notifyListeners(event) {
        if (!event) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return;
        }
        this.view.listeners.forEach((listener) => {
            switch (event.name) {
                case DataCaptureViewListenerEvent.DidChangeSizeOrientation:
                    if (listener.didChangeSize) {
                        const size = Common_1.Size.fromJSON(event.argument.size);
                        const orientation = event.argument.orientation;
                        listener.didChangeSize(this.view, size, orientation);
                    }
                    break;
            }
        });
    }
    initialize() {
        this.subscribeListener();
    }
}
exports.DataCaptureViewProxy = DataCaptureViewProxy;
DataCaptureViewProxy.cordovaExec = Cordova_1.Cordova.exec;
});