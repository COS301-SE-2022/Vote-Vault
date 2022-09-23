import Cordova
import ScanditBarcodeCapture

// TODO: serialize frame data as argument (https://jira.scandit.com/browse/SDC-1014)
extension FrameData {
    func toJSON() -> CDVPluginResult.JSONMessage {
        return [:]
    }
}

class BarcodeCaptureCallbacks {
    var barcodeCaptureListener: Callback?
    var barcodeTrackingListener: Callback?
    var barcodeSelectionListener: Callback?
    var sparkCaptureListener: Callback?
    var barcodeTrackingBasicOverlayListener: Callback?
    var barcodeTrackingAdvancedOverlayListener: Callback?

    func reset() {
        barcodeCaptureListener = nil
        barcodeTrackingListener = nil
        barcodeSelectionListener = nil
        sparkCaptureListener = nil
        barcodeTrackingBasicOverlayListener = nil
        barcodeTrackingAdvancedOverlayListener = nil
    }
}

@objc(ScanditBarcodeCapture)
class ScanditBarcodeCapture: CDVPlugin, DataCapturePlugin {
    lazy var modeDeserializers: [DataCaptureModeDeserializer] = {
        let barcodeCaptureDeserializer = BarcodeCaptureDeserializer()
        barcodeCaptureDeserializer.delegate = self
        let barcodeTrackingDeserializer = BarcodeTrackingDeserializer()
        barcodeTrackingDeserializer.delegate = self
        let barcodeSelectionDeserializer = BarcodeSelectionDeserializer()
        barcodeSelectionDeserializer.delegate = self
        let sparkCaptureDeserializer = SparkCaptureDeserializer()
        sparkCaptureDeserializer.delegate = self
        return [barcodeCaptureDeserializer,
                barcodeTrackingDeserializer,
                barcodeSelectionDeserializer,
                sparkCaptureDeserializer]
    }()

    lazy var componentDeserializers: [DataCaptureComponentDeserializer] = []
    lazy var components: [DataCaptureComponent] = []

    lazy var callbacks = BarcodeCaptureCallbacks()
    lazy var callbackLocks = CallbackLocks()

    lazy var basicOverlayListenerQueue = DispatchQueue(label: "basicOverlayListenerQueue")
    lazy var advancedOverlayListenerQueue = DispatchQueue(label: "advancedOverlayListenerQueue")
    var barcodeTrackingBasicOverlay: BarcodeTrackingBasicOverlay?
    var barcodeTrackingAdvancedOverlay: BarcodeTrackingAdvancedOverlay?
    var lastTrackedBarcodes: [NSNumber: TrackedBarcode]?
    var lastFrameSequenceId: Int?

    var barcodeSelection: BarcodeSelection?
    var barcodeCaptureSession: BarcodeCaptureSession?
    var barcodeTrackingSession: BarcodeTrackingSession?
    var barcodeSelectionSession: BarcodeSelectionSession?
    var barcodeSelectionBasicOverlay: BarcodeSelectionBasicOverlay?

    override func pluginInitialize() {
        super.pluginInitialize()
        ScanditCaptureCore.dataCapturePlugins.append(self)
    }

    override func onReset() {
        super.onReset()

        callbacks.reset()

        lastTrackedBarcodes = nil
        lastFrameSequenceId = nil

        barcodeTrackingBasicOverlay = nil
        barcodeTrackingAdvancedOverlay = nil
        barcodeSelection = nil
        barcodeSelectionSession = nil

        callbackLocks.releaseAll()
    }

    @objc(getDefaults:)
    func getDefaults(command: CDVInvokedUrlCommand) {
        let defaults = ScanditBarcodeCaptureDefaults()
        commandDelegate.send(.success(message: defaults), callbackId: command.callbackId)
    }

    // MARK: Listeners

    @objc(finishCallback:)
    func finishCallback(command: CDVInvokedUrlCommand) {
        guard let result = BarcodeCaptureCallbackResult.from(command) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }
        callbackLocks.setResult(result, for: result.finishCallbackID)
        callbackLocks.release(for: result.finishCallbackID)
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    func waitForFinished(_ listenerEvent: ListenerEvent, callbackId: String) {
        callbackLocks.wait(for: listenerEvent.name, afterDoing: {
            commandDelegate.send(.listenerCallback(listenerEvent), callbackId: callbackId)
        })
    }

    func finishBlockingCallback(with mode: DataCaptureMode, for listenerEvent: ListenerEvent) {
        defer {
            callbackLocks.clearResult(for: listenerEvent.name)
        }

        guard let result = callbackLocks.getResult(for: listenerEvent.name) as? BarcodeCaptureCallbackResult,
            let enabled = result.enabled else {
            return
        }

        if enabled != mode.isEnabled {
            mode.isEnabled = enabled
        }
    }
}
