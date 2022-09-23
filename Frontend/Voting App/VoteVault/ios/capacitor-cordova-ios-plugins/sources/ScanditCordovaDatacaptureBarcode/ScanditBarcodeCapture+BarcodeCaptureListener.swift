import Cordova
import ScanditBarcodeCapture

extension ScanditBarcodeCapture: BarcodeCaptureListener {
    func barcodeCapture(_ barcodeCapture: BarcodeCapture,
                        didScanIn session: BarcodeCaptureSession,
                        frameData: FrameData) {
        guard let callback = callbacks.barcodeCaptureListener else {
            return
        }

        barcodeCaptureSession = session

        let listenerEvent = ListenerEvent(name: .didScanInBarcodeCapture,
                                  argument: ["session": session.jsonString, "frameData": frameData.toJSON()],
                                  shouldNotifyWhenFinished: true)
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: barcodeCapture, for: listenerEvent)
    }

    func barcodeCapture(_ barcodeCapture: BarcodeCapture,
                        didUpdate session: BarcodeCaptureSession,
                        frameData: FrameData) {
        guard let callback = callbacks.barcodeCaptureListener else {
            return
        }

        barcodeCaptureSession = session

        let listenerEvent = ListenerEvent(name: .didUpdateSessionInBarcodeCapture,
                                  argument: ["session": session.jsonString, "frameData": frameData.toJSON()],
                                  shouldNotifyWhenFinished: true)
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: barcodeCapture, for: listenerEvent)
    }

    func didStartObserving(_ barcodeCapture: BarcodeCapture) {
        // ignored in Cordova
    }

    func didStopObserving(_ barcodeCapture: BarcodeCapture) {
        // ignored in Cordova
    }
}
