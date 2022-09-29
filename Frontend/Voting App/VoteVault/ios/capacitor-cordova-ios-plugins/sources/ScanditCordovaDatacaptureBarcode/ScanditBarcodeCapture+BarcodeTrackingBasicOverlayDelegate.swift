import Cordova
import ScanditBarcodeCapture

extension ScanditBarcodeCapture: BarcodeTrackingBasicOverlayDelegate {
    func barcodeTrackingBasicOverlay(_ overlay: BarcodeTrackingBasicOverlay,
                                     brushFor trackedBarcode: TrackedBarcode) -> Brush? {
        guard let callback = callbacks.barcodeTrackingBasicOverlayListener else {
            return overlay.brush
        }

        let listenerEvent = ListenerEvent(name: .brushForTrackedBarcode,
                                  argument: ["trackedBarcode": trackedBarcode.jsonString],
                                  shouldNotifyWhenFinished: true)

        // This callback is called on the main thread, so, if we wait for the JS layer to come back with a brush,
        // that'll block the main thread, so the 'finishCallback' can't get through to resolve the block.
        basicOverlayListenerQueue.async { [weak self] in
            guard let self = self else {
                return
            }

            self.waitForFinished(listenerEvent, callbackId: callback.id)
            self.finishBlockingCallback(with: overlay, and: trackedBarcode, for: listenerEvent)
        }

        // License compliant brush for non-AR licenses, see https://wiki.scandit.com/x/JwBMCQ
        let color = UIColor(red: 0.7, green: 0.8, blue: 0.9, alpha: 0)
        return Brush(fill: color, stroke: color, strokeWidth: 0)
    }

    func barcodeTrackingBasicOverlay(_ overlay: BarcodeTrackingBasicOverlay,
                                     didTap trackedBarcode: TrackedBarcode) {
        guard let callback = callbacks.barcodeTrackingBasicOverlayListener else {
            return
        }

        let event = ListenerEvent(name: .didTapTrackedBarcode,
                                  argument: ["trackedBarcode": trackedBarcode.jsonString])
        commandDelegate.send(.listenerCallback(event), callbackId: callback.id)
    }
}
