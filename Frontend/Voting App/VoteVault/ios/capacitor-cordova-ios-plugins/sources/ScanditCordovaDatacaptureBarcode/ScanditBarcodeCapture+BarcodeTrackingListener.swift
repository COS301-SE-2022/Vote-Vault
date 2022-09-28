import Cordova
import ScanditBarcodeCapture

extension ScanditBarcodeCapture: BarcodeTrackingListener {
    func barcodeTracking(_ barcodeTracking: BarcodeTracking,
                         didUpdate session: BarcodeTrackingSession,
                         frameData: FrameData) {
        guard let callback = callbacks.barcodeTrackingListener else {
            return
        }

        barcodeTrackingSession = session

        lastTrackedBarcodes = session.trackedBarcodes
        lastFrameSequenceId = session.frameSequenceId

        let listenerEvent = ListenerEvent(name: .didUpdateSessionInBarcodeTracking,
                                  argument: ["session": session.jsonString, "frameData": frameData.toJSON()],
                                  shouldNotifyWhenFinished: true)
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: barcodeTracking, for: listenerEvent)
    }
}
