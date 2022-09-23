import Cordova
import ScanditBarcodeCapture

var offset: [Int: PointWithUnit] = [:]

extension ScanditBarcodeCapture {
    @objc(subscribeBarcodeTrackingListener:)
    func subscribeBarcodeTrackingListener(command: CDVInvokedUrlCommand) {
        callbacks.barcodeTrackingListener?.dispose(by: commandDelegate)
        callbacks.barcodeTrackingListener = Callback(id: command.callbackId)

        lastTrackedBarcodes = nil
        lastFrameSequenceId = nil

        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }

    @objc(subscribeBarcodeTrackingBasicOverlayListener:)
    func subscribeBarcodeTrackingBasicOverlayListener(command: CDVInvokedUrlCommand) {
        callbacks.barcodeTrackingBasicOverlayListener?.dispose(by: commandDelegate)
        callbacks.barcodeTrackingBasicOverlayListener = Callback(id: command.callbackId)
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }

    @objc(subscribeBarcodeTrackingAdvancedOverlayListener:)
    func subscribeBarcodeTrackingAdvancedOverlayListener(command: CDVInvokedUrlCommand) {
        callbacks.barcodeTrackingAdvancedOverlayListener?.dispose(by: commandDelegate)
        callbacks.barcodeTrackingAdvancedOverlayListener = Callback(id: command.callbackId)
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }

    @objc(setBrushForTrackedBarcode:)
    func setBrushForTrackedBarcode(command: CDVInvokedUrlCommand) {
        guard let json = try? BrushAndTrackedBarcodeJSON.fromCommand(command) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        guard let trackedBarcode = trackedBarcode(withID: json.trackedBarcodeID,
                                                  inSession: json.sessionFrameSequenceID) else {
            commandDelegate.send(.failure(with: .trackedBarcodeNotFound),
                                 callbackId: command.callbackId)
            return
        }

        guard let overlay = self.barcodeTrackingBasicOverlay else {
            commandDelegate.send(.failure(with: .noOverlay), callbackId: command.callbackId)
            return
        }
        overlay.setBrush(json.brush, for: trackedBarcode)
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(clearTrackedBarcodeBrushes:)
    func clearTrackedBarcodeBrushes(command: CDVInvokedUrlCommand) {
        guard let overlay = self.barcodeTrackingBasicOverlay else {
            commandDelegate.send(.failure(with: .noOverlay), callbackId: command.callbackId)
            return
        }
        overlay.clearTrackedBarcodeBrushes()
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(setViewForTrackedBarcode:)
    func setViewForTrackedBarcode(command: CDVInvokedUrlCommand) {
        guard let json = try? ViewAndTrackedBarcodeJSON.fromCommand(command) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        guard let trackedBarcode = trackedBarcode(withID: json.trackedBarcodeID,
                                                  inSession: json.sessionFrameSequenceID) else {
            commandDelegate.send(.failure(with: .trackedBarcodeNotFound),
                                 callbackId: command.callbackId)
            return
        }

        DispatchQueue.main.async {
            var trackedBarcodeView: TrackedBarcodeView?
            if let viewJSON = json.view {
                trackedBarcodeView = TrackedBarcodeView(json: viewJSON)
                trackedBarcodeView?.didTap = { [weak self] in
                    self?.didTapViewTrackedBarcode(trackedBarcode: trackedBarcode)
                }
            }

            guard let overlay = self.barcodeTrackingAdvancedOverlay else {
                self.commandDelegate.send(.failure(with: .noOverlay), callbackId: command.callbackId)
                return
            }
            overlay.setView(trackedBarcodeView, for: trackedBarcode)

            self.commandDelegate.send(.success, callbackId: command.callbackId)
        }
    }

    @objc(setAnchorForTrackedBarcode:)
    func setAnchorForTrackedBarcode(command: CDVInvokedUrlCommand) {
        guard let json = try? AnchorAndTrackedBarcodeJSON.fromCommand(command) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        guard let trackedBarcode = trackedBarcode(withID: json.trackedBarcodeID,
                                                  inSession: json.sessionFrameSequenceID) else {
            commandDelegate.send(.failure(with: .trackedBarcodeNotFound),
                                 callbackId: command.callbackId)
            return
        }

        guard let anchorString = json.anchor, let anchor = Anchor(JSONString: anchorString) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        guard let overlay = self.barcodeTrackingAdvancedOverlay else {
            commandDelegate.send(.failure(with: .noOverlay), callbackId: command.callbackId)
            return
        }
        overlay.setAnchor(anchor, for: trackedBarcode)

        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(setOffsetForTrackedBarcode:)
    func setOffsetForTrackedBarcode(command: CDVInvokedUrlCommand) {
        guard let json = try? OffsetAndTrackedBarcodeJSON.fromCommand(command) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        guard let trackedBarcode = trackedBarcode(withID: json.trackedBarcodeID,
                                                  inSession: json.sessionFrameSequenceID) else {
            commandDelegate.send(.failure(with: .trackedBarcodeNotFound),
                                 callbackId: command.callbackId)
            return
        }

        guard let offsetString = json.offset, let offsetValue = PointWithUnit(JSONString: offsetString) else {
            offset[trackedBarcode.identifier] = PointWithUnit.zero
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        guard let overlay = self.barcodeTrackingAdvancedOverlay else {
            offset[trackedBarcode.identifier] = PointWithUnit.zero
            commandDelegate.send(.failure(with: .noOverlay), callbackId: command.callbackId)
            return
        }
        overlay.setOffset(offsetValue, for: trackedBarcode)
        offset[trackedBarcode.identifier] = offsetValue
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(clearTrackedBarcodeViews:)
    func clearTrackedBarcodeViews(command: CDVInvokedUrlCommand) {
        guard let overlay = self.barcodeTrackingAdvancedOverlay else {
            commandDelegate.send(.failure(with: .noOverlay), callbackId: command.callbackId)
            return
        }
        overlay.clearTrackedBarcodeViews()
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    func finishBlockingCallback(with overlay: BarcodeTrackingBasicOverlay,
                                and trackedBarcode: TrackedBarcode,
                                for listenerEvent: ListenerEvent) {
        defer {
            callbackLocks.clearResult(for: listenerEvent.name)
        }

        /// No listener set.
        let callbackLockResult = callbackLocks.getResult(for: listenerEvent.name)
        guard let callbackResult = callbackLockResult as? BarcodeCaptureCallbackResult else {
            return
        }

        if callbackResult.isForListenerEvent(.brushForTrackedBarcode) {
            /// Listener didn't return a brush, e.g. set listener didn't implement the function.
            if callbackResult.result == nil {
                overlay.setBrush(overlay.brush, for: trackedBarcode)
                return
            }

            /// Listener returned null for brush.
            guard let brush = callbackResult.brush else {
                overlay.setBrush(nil, for: trackedBarcode)
                return
            }

            /// Listener returned a brush to be set.
            overlay.setBrush(brush, for: trackedBarcode)
        }

    }

    func finishBlockingCallback(with overlay: BarcodeTrackingAdvancedOverlay,
                                and trackedBarcode: TrackedBarcode,
                                for listenerEvent: ListenerEvent) {
        defer {
            callbackLocks.clearResult(for: listenerEvent.name)
        }

        /// No listener set.
        let callbackLockResult = callbackLocks.getResult(for: listenerEvent.name)
        guard let callbackResult = callbackLockResult as? BarcodeCaptureCallbackResult else {
            return
        }

        switch callbackResult.finishCallbackID {
        case .viewForTrackedBarcode:
            guard callbackResult.result != nil else {
                /// The JS listener didn't return a result, e.g. it didn't implement the relevant listener function
                /// **Note**: a `nil` view is different than no result:
                /// `nil` means the intention of setting no view, while the absense of a result means
                /// that there's no intention to set anything, e.g. views
                /// are set through `setView` instead of through the listener.
                return
            }
            DispatchQueue.main.async {
                callbackResult.view?.didTap = {
                    self.didTapViewTrackedBarcode(trackedBarcode: trackedBarcode)
                }
                overlay.setView(callbackResult.view, for: trackedBarcode)
            }
        case .anchorForTrackedBarcode:
            guard let anchor = callbackResult.anchor else {
                /// The JS listener didn't return a valid anchor,
                /// e.g. it didn't implement the relevant listener function.
                return
            }
            overlay.setAnchor(anchor, for: trackedBarcode)
        case .offsetForTrackedBarcode:
            guard let offsetValue = callbackResult.offset ?? offset[trackedBarcode.identifier] else {
                /// The JS listener didn't return a valid offset,
                /// e.g. it didn't implement the relevant listener function.
                return
            }
            offset.removeValue(forKey: trackedBarcode.identifier)
            overlay.setOffset(offsetValue, for: trackedBarcode)
        default:
            return
        }
    }

    private func trackedBarcode(withID trackedBarcodeId: String,
                                inSession sessionFrameSequenceId: String?) -> TrackedBarcode? {
        guard let lastTrackedBarcodes = lastTrackedBarcodes, !lastTrackedBarcodes.isEmpty else {
            return nil
        }

        if let sessionId = sessionFrameSequenceId, lastFrameSequenceId != Int(sessionId) {
            return nil
        }

        guard let trackedBarcode = lastTrackedBarcodes.trackedBarcode(withID: trackedBarcodeId) else {
            return nil
        }

        return trackedBarcode
    }
}
