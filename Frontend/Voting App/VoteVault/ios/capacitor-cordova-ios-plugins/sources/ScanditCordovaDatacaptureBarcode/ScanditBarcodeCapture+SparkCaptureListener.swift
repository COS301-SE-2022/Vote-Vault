import Cordova
import ScanditBarcodeCapture

extension ScanditBarcodeCapture: SparkCaptureListener {
    func sparkCapture(_ sparkCapture: SparkCapture,
                      didScanIn session: SparkCaptureSession,
                      frameData: FrameData) {
        guard let callback = callbacks.sparkCaptureListener else {
            return
        }

        let listenerEvent = ListenerEvent(name: .didScanInSparkCapture,
                                          argument: ["session": session.jsonString],
                                          shouldNotifyWhenFinished: true)
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: sparkCapture, for: listenerEvent)
    }

    func sparkCapture(_ sparkCapture: SparkCapture,
                      didUpdate session: SparkCaptureSession,
                      frameData: FrameData) {
        guard let callback = callbacks.sparkCaptureListener else {
            return
        }

        let listenerEvent = ListenerEvent(name: .didUpdateSessionInSparkCapture,
                                          argument: ["session": session.jsonString],
                                          shouldNotifyWhenFinished: true)
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: sparkCapture, for: listenerEvent)
    }

    func didStartObserving(_ sparkCapture: SparkCapture) {
        // ignored in Cordova
    }

    func didStopObserving(_ sparkCapture: SparkCapture) {
        // ignored in Cordova
    }
}
