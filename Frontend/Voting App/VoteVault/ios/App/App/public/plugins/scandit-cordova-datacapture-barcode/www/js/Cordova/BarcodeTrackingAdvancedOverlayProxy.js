cordova.define("scandit-cordova-datacapture-barcode.BarcodeTrackingAdvancedOverlayProxy", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeTrackingAdvancedOverlayProxy = void 0;
/// <amd-module name="scandit-cordova-datacapture-barcode.BarcodeTrackingAdvancedOverlayProxy"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Barcode_1 = require("scandit-cordova-datacapture-barcode.Barcode");
const Cordova_1 = require("scandit-cordova-datacapture-barcode.Cordova");
var BarcodeTrackingAdvancedOverlayListenerEvent;
(function (BarcodeTrackingAdvancedOverlayListenerEvent) {
    BarcodeTrackingAdvancedOverlayListenerEvent["ViewForTrackedBarcode"] = "viewForTrackedBarcode";
    BarcodeTrackingAdvancedOverlayListenerEvent["AnchorForTrackedBarcode"] = "anchorForTrackedBarcode";
    BarcodeTrackingAdvancedOverlayListenerEvent["OffsetForTrackedBarcode"] = "offsetForTrackedBarcode";
    BarcodeTrackingAdvancedOverlayListenerEvent["DidTapViewForTrackedBarcode"] = "didTapViewForTrackedBarcode";
})(BarcodeTrackingAdvancedOverlayListenerEvent || (BarcodeTrackingAdvancedOverlayListenerEvent = {}));
class BarcodeTrackingAdvancedOverlayProxy {
    static forOverlay(overlay) {
        const proxy = new BarcodeTrackingAdvancedOverlayProxy();
        proxy.overlay = overlay;
        proxy.initialize();
        return proxy;
    }
    setViewForTrackedBarcode(view, trackedBarcode) {
        if (view instanceof Promise) {
            return view.then(v => this.setViewForTrackedBarcodeSync(v, trackedBarcode));
        }
        else {
            return this.setViewForTrackedBarcodeSync(view, trackedBarcode);
        }
    }
    setViewForTrackedBarcodeSync(view, trackedBarcode) {
        return new Promise((resolve, reject) => {
            BarcodeTrackingAdvancedOverlayProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.SetViewForTrackedBarcode, [{
                    view: view ? view.toJSON() : null,
                    sessionFrameSequenceID: trackedBarcode.sessionFrameSequenceID,
                    trackedBarcodeID: trackedBarcode.identifier,
                }]);
        });
    }
    setAnchorForTrackedBarcode(anchor, trackedBarcode) {
        return new Promise((resolve, reject) => {
            BarcodeTrackingAdvancedOverlayProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.SetAnchorForTrackedBarcode, [{
                    anchor,
                    sessionFrameSequenceID: trackedBarcode.sessionFrameSequenceID,
                    trackedBarcodeID: trackedBarcode.identifier,
                }]);
        });
    }
    setOffsetForTrackedBarcode(offset, trackedBarcode) {
        return new Promise((resolve, reject) => {
            BarcodeTrackingAdvancedOverlayProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.SetOffsetForTrackedBarcode, [{
                    offset: offset ? JSON.stringify(offset.toJSON()) : null,
                    sessionFrameSequenceID: trackedBarcode.sessionFrameSequenceID,
                    trackedBarcodeID: trackedBarcode.identifier,
                }]);
        });
    }
    clearTrackedBarcodeViews() {
        return new Promise((resolve, reject) => {
            BarcodeTrackingAdvancedOverlayProxy.cordovaExec(resolve, reject, Cordova_1.CordovaFunction.ClearTrackedBarcodeViews, null);
        });
    }
    subscribeListener() {
        BarcodeTrackingAdvancedOverlayProxy.cordovaExec(this.notifyListeners.bind(this), null, Cordova_1.CordovaFunction.SubscribeBarcodeTrackingAdvancedOverlayListener, null);
    }
    notifyListeners(event) {
        if (!event || !this.overlay.listener) {
            // The event could be undefined/null in case the plugin result did not pass a "message",
            // which could happen e.g. in case of "ok" results, which could signal e.g. successful
            // listener subscriptions.
            return null;
        }
        switch (event.name) {
            case BarcodeTrackingAdvancedOverlayListenerEvent.ViewForTrackedBarcode:
                if (this.overlay.listener.viewForTrackedBarcode) {
                    const trackedBarcode = Barcode_1.TrackedBarcode
                        .fromJSON(JSON.parse(event.argument.trackedBarcode));
                    const view = this.overlay.listener.viewForTrackedBarcode(this.overlay, trackedBarcode);
                    if (view instanceof Promise) {
                        this.setViewForTrackedBarcode(view, trackedBarcode);
                        return { view: null };
                    }
                    else {
                        return { view: view ? view.toJSON() : null };
                    }
                }
                break;
            case BarcodeTrackingAdvancedOverlayListenerEvent.AnchorForTrackedBarcode:
                if (this.overlay.listener.anchorForTrackedBarcode) {
                    const trackedBarcode = Barcode_1.TrackedBarcode
                        .fromJSON(JSON.parse(event.argument.trackedBarcode));
                    const anchor = this.overlay.listener.anchorForTrackedBarcode(this.overlay, trackedBarcode);
                    return { anchor };
                }
                break;
            case BarcodeTrackingAdvancedOverlayListenerEvent.OffsetForTrackedBarcode:
                if (this.overlay.listener.offsetForTrackedBarcode) {
                    const trackedBarcode = Barcode_1.TrackedBarcode
                        .fromJSON(JSON.parse(event.argument.trackedBarcode));
                    const offset = this.overlay.listener.offsetForTrackedBarcode(this.overlay, trackedBarcode);
                    return { offset: JSON.stringify(offset.toJSON()) };
                }
                break;
            case BarcodeTrackingAdvancedOverlayListenerEvent.DidTapViewForTrackedBarcode:
                if (this.overlay.listener.didTapViewForTrackedBarcode) {
                    const trackedBarcode = Barcode_1.TrackedBarcode
                        .fromJSON(JSON.parse(event.argument.trackedBarcode));
                    this.overlay.listener.didTapViewForTrackedBarcode(this.overlay, trackedBarcode);
                }
                break;
        }
        return null;
    }
    initialize() {
        this.subscribeListener();
    }
}
exports.BarcodeTrackingAdvancedOverlayProxy = BarcodeTrackingAdvancedOverlayProxy;
BarcodeTrackingAdvancedOverlayProxy.cordovaExec = Cordova_1.Cordova.exec;
});