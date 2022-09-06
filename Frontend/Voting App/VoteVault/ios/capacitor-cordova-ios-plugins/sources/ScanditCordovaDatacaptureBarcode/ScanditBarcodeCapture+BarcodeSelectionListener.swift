import Cordova
import ScanditBarcodeCapture

extension ScanditBarcodeCapture: BarcodeSelectionListener {
    func barcodeSelection(_ barcodeSelection: BarcodeSelection,
                          didUpdateSelection session: BarcodeSelectionSession,
                          frameData: FrameData?) {
        guard let callback = callbacks.barcodeSelectionListener else {
            return
        }

        barcodeSelectionSession = session

        let listenerEvent = ListenerEvent(name: .didUpdateSelectionInBarcodeSelection,
                                          argument: ["session": session.jsonString],
                                          shouldNotifyWhenFinished: true)
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: barcodeSelection, for: listenerEvent)
    }

    func barcodeSelection(_ barcodeSelection: BarcodeSelection,
                          didUpdate session: BarcodeSelectionSession,
                          frameData: FrameData?) {
        guard let callback = callbacks.barcodeSelectionListener else {
            return
        }

        barcodeSelectionSession = session

        let listenerEvent = ListenerEvent(name: .didUpdateSessionInBarcodeSelection,
                                          argument: ["session": session.jsonString],
                                          shouldNotifyWhenFinished: true)
        waitForFinished(listenerEvent, callbackId: callback.id)
        finishBlockingCallback(with: barcodeSelection, for: listenerEvent)
    }
}
