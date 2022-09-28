import Cordova
extension ScanditBarcodeCapture {
    @objc(subscribeSparkCaptureListener:)
    func subscribeSparkCaptureListener(command: CDVInvokedUrlCommand) {
        callbacks.sparkCaptureListener?.dispose(by: commandDelegate)
        callbacks.sparkCaptureListener = Callback(id: command.callbackId)
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }
}
