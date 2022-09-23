import Cordova
import ScanditBarcodeCapture

extension Barcode {
    var selectionIdentifier: String {
        return (data ?? "") + SymbologyDescription(symbology: symbology).identifier
    }
}

extension BarcodeSelectionSession {
    var barcodes: [Barcode] {
        return selectedBarcodes + newlyUnselectedBarcodes
    }

    func count(for selectionIdentifier: String) -> Int {
        guard let barcode = barcodes.first(where: { $0.selectionIdentifier == selectionIdentifier }) else {
            return 0
        }
        return count(for: barcode)
    }
}

extension ScanditBarcodeCapture {
    @objc(subscribeBarcodeSelectionListener:)
    func subscribeBarcodeSelectionListener(command: CDVInvokedUrlCommand) {
        callbacks.barcodeSelectionListener?.dispose(by: commandDelegate)
        callbacks.barcodeSelectionListener = Callback(id: command.callbackId)
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }

    @objc(resetBarcodeSelection:)
    func resetBarcodeSelection(command: CDVInvokedUrlCommand) {
        guard let barcodeSelection = self.barcodeSelection else {
            commandDelegate.send(.failure(with: .noBarcodeSelection), callbackId: command.callbackId)
            return
        }
        barcodeSelection.reset()
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(unfreezeCameraInBarcodeSelection:)
    func unfreezeCameraInBarcodeSelection(command: CDVInvokedUrlCommand) {
        guard let barcodeSelection = self.barcodeSelection else {
            commandDelegate.send(.failure(with: .noBarcodeSelection), callbackId: command.callbackId)
            return
        }
        barcodeSelection.unfreezeCamera()
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(getCountForBarcodeInBarcodeSelectionSession:)
    func getCountForBarcodeInBarcodeSelectionSession(command: CDVInvokedUrlCommand) {
        guard let barcodeSelectionSession = self.barcodeSelectionSession else {
            commandDelegate.send(.failure(with: .noBarcodeSelectionSession), callbackId: command.callbackId)
            return
        }
        commandDelegate.send(.success(message: barcodeSelectionSession.count(for: command.defaultArgumentAsString!)),
                             callbackId: command.callbackId)
    }

    @objc(resetBarcodeCaptureSession:)
        func resetBarcodeCaptureSession(command: CDVInvokedUrlCommand) {
            guard let barcodeCaptureSession = self.barcodeCaptureSession else {
                commandDelegate.send(.failure(with: .noBarcodeCaptureSession), callbackId: command.callbackId)
                return
            }
            barcodeCaptureSession.reset()
            commandDelegate.send(.success, callbackId: command.callbackId)
        }

    @objc(resetBarcodeTrackingSession:)
        func resetBarcodeTrackingSession(command: CDVInvokedUrlCommand) {
            guard let barcodeTrackingSession = self.barcodeTrackingSession else {
                commandDelegate.send(.failure(with: .noBarcodeTrackingSession), callbackId: command.callbackId)
                return
            }
            barcodeTrackingSession.reset()
            commandDelegate.send(.success, callbackId: command.callbackId)
        }

    @objc(resetBarcodeSelectionSession:)
    func resetBarcodeSelectionSession(command: CDVInvokedUrlCommand) {
        guard let barcodeSelectionSession = self.barcodeSelectionSession else {
            commandDelegate.send(.failure(with: .noBarcodeSelectionSession), callbackId: command.callbackId)
            return
        }
        barcodeSelectionSession.reset()
        commandDelegate.send(.success, callbackId: command.callbackId)
    }
}
