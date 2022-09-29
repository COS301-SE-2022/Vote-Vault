import Cordova
import ScanditBarcodeCapture

extension ScanditBarcodeCapture: BarcodeTrackingAdvancedOverlayDelegate {
    func barcodeTrackingAdvancedOverlay(_ overlay: BarcodeTrackingAdvancedOverlay,
                                        viewFor trackedBarcode: TrackedBarcode) -> UIView? {
        guard let callback = callbacks.barcodeTrackingAdvancedOverlayListener else {
            return nil
        }

        let listenerEvent = ListenerEvent(name: .viewForTrackedBarcode,
                                  argument: ["trackedBarcode": trackedBarcode.jsonString],
                                  shouldNotifyWhenFinished: true)

        // We're currently on the main thread, if we'd wait for the JS layer to come back with a result,
        // we'd block the main thread, so the 'finishCallback' couldn't get through to resolve the block.
        // To solve this, we're going to wait for the result to come back on a separate queue.
        advancedOverlayListenerQueue.async { [weak self] in
            guard let self = self else {
                return
            }

            self.waitForFinished(listenerEvent, callbackId: callback.id)
            self.finishBlockingCallback(with: overlay, and: trackedBarcode, for: listenerEvent)
        }

        return nil
    }

    func barcodeTrackingAdvancedOverlay(_ overlay: BarcodeTrackingAdvancedOverlay,
                                        anchorFor trackedBarcode: TrackedBarcode) -> Anchor {
        guard let callback = callbacks.barcodeTrackingAdvancedOverlayListener else {
            return .center
        }

        let listenerEvent = ListenerEvent(name: .anchorForTrackedBarcode,
                                  argument: ["trackedBarcode": trackedBarcode.jsonString],
                                  shouldNotifyWhenFinished: true)

        // We're currently on the main thread, if we'd wait for the JS layer to come back with a result,
        // we'd block the main thread, so the 'finishCallback' couldn't get through to resolve the block.
        // To solve this, we're going to wait for the result to come back on a separate queue.
        advancedOverlayListenerQueue.async { [weak self] in
            guard let self = self else {
                return
            }

            self.waitForFinished(listenerEvent, callbackId: callback.id)
            self.finishBlockingCallback(with: overlay, and: trackedBarcode, for: listenerEvent)
        }

        return .center
    }

    func barcodeTrackingAdvancedOverlay(_ overlay: BarcodeTrackingAdvancedOverlay,
                                        offsetFor trackedBarcode: TrackedBarcode) -> PointWithUnit {
        guard let callback = callbacks.barcodeTrackingAdvancedOverlayListener else {
            return .zero
        }

        let listenerEvent = ListenerEvent(name: .offsetForTrackedBarcode,
                                  argument: ["trackedBarcode": trackedBarcode.jsonString],
                                  shouldNotifyWhenFinished: true)

        // We're currently on the main thread, if we'd wait for the JS layer to come back with a result,
        // we'd block the main thread, so the 'finishCallback' couldn't get through to resolve the block.
        // To solve this, we're going to wait for the result to come back on a separate queue.
        advancedOverlayListenerQueue.async { [weak self] in
            guard let self = self else {
                return
            }
            self.waitForFinished(listenerEvent, callbackId: callback.id)
            self.finishBlockingCallback(with: overlay, and: trackedBarcode, for: listenerEvent)
        }

        return .zero
    }
}

extension ScanditBarcodeCapture {
    func didTapViewTrackedBarcode(trackedBarcode: TrackedBarcode) {
        guard let callback = callbacks.barcodeTrackingAdvancedOverlayListener else {
            return
        }

        let event = ListenerEvent(name: .didTapViewForTrackedBarcode,
                                  argument: ["trackedBarcode": trackedBarcode.jsonString])
        commandDelegate.send(.listenerCallback(event), callbackId: callback.id)
    }
}
