import Cordova
extension ScanditBarcodeCapture {
    @objc(subscribeBarcodeCaptureListener:)
    func subscribeBarcodeCaptureListener(command: CDVInvokedUrlCommand) {
        callbacks.barcodeCaptureListener?.dispose(by: commandDelegate)
        callbacks.barcodeCaptureListener = Callback(id: command.callbackId)
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }
}
