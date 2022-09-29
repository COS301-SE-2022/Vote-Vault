import Cordova
import WebKit

import ScanditCaptureCore

class ScanditCaptureCoreCallbacks {
    var contextListener: Callback?
    var viewListener: Callback?
    var frameSourceListener: Callback?
    var volumeButtonObserver: Callback?
}

protocol DataCapturePlugin where Self: CDVPlugin {
    var modeDeserializers: [DataCaptureModeDeserializer] { get }
    var componentDeserializers: [DataCaptureComponentDeserializer] { get }
    var components: [DataCaptureComponent] { get }
}

@objc(ScanditCaptureCore)
// swiftlint:disable:next type_body_length
public class ScanditCaptureCore: CDVPlugin {

    static var dataCapturePlugins = [DataCapturePlugin]()

    public var context: DataCaptureContext?

    var captureView: DataCaptureView? {
        didSet {
            guard oldValue != captureView else { return }

            if let oldValue = oldValue {
                captureViewConstraints.captureView = nil
                oldValue.removeFromSuperview()
            }

            guard let captureView = captureView else {
                return
            }

            captureView.addListener(self)

            captureView.isHidden = true
            captureView.translatesAutoresizingMaskIntoConstraints = false

            viewController.view.addSubview(captureView)
            captureViewConstraints.captureView = captureView
        }
    }

    private var volumeButtonObserver: VolumeButtonObserver?

    private lazy var captureViewConstraints = DataCaptureViewConstraints(relativeTo: webView as! WKWebView)

    private lazy var viewDeserializer: DataCaptureViewDeserializer = {
        let deserializer = DataCaptureViewDeserializer(modeDeserializers: modeDeserializers)
        deserializer.delegate = self
        return deserializer
    }()

    private lazy var frameSourceDeserializer: FrameSourceDeserializer = {
        let deserializer = FrameSourceDeserializer(modeDeserializers: modeDeserializers)
        deserializer.delegate = self
        return deserializer
    }()

    private var modeDeserializers: [DataCaptureModeDeserializer] {
        return ScanditCaptureCore.dataCapturePlugins.reduce(into: []) { deserializers, plugin in
            deserializers.append(contentsOf: plugin.modeDeserializers)
        }
    }

    private var componentDeserializers: [DataCaptureComponentDeserializer] {
        return ScanditCaptureCore.dataCapturePlugins.reduce(into: []) { deserializers, plugin in
            deserializers.append(contentsOf: plugin.componentDeserializers)
        }
    }

    private var components: [DataCaptureComponent] {
        return ScanditCaptureCore.dataCapturePlugins.reduce(into: []) { components, plugin in
            components.append(contentsOf: plugin.components)
        }
    }

    public lazy var deserializer: DataCaptureContextDeserializer = {
        let deserializer = DataCaptureContextDeserializer(frameSourceDeserializer: self.frameSourceDeserializer,
                                                          viewDeserializer: viewDeserializer,
                                                          modeDeserializers: modeDeserializers,
                                                          componentDeserializers: componentDeserializers)
        deserializer.avoidThreadDependencies = true
        return deserializer
    }()

    lazy var callbacks = ScanditCaptureCoreCallbacks()

    public override func pluginInitialize() {
        guard webView is WKWebView else {
            fatalError("""
                The Scandit Data Capture SDK requires the Cordova WebView to be a WKWebView.
                For more information, see the Scandit documentation about how to add the Data Capture SDK to your app.
                """)
        }
    }

    public override func onReset() {
        super.onReset()

        // Remove the data capture view
        captureView = nil

        // Dispose of the context
        context?.dispose()
        context = nil

        // Reset callbacks that might be stored
        callbacks.contextListener = nil
        callbacks.viewListener = nil
        callbacks.volumeButtonObserver = nil

        volumeButtonObserver = nil
    }

    // MARK: - DataCaptureContextProxy

    // MARK: Context deserialization

    @objc(contextFromJSON:)
    public func contextFromJSON(command: CDVInvokedUrlCommand) {
        guard let jsonString = command.defaultArgumentAsString else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        context?.dispose()

        do {
            context = try deserializer.context(fromJSONString: jsonString).context
        } catch let error {
            commandDelegate.send(.failure(with: error), callbackId: command.callbackId)
            contextDeserializationFailed(with: error)
            return
        }

        context!.addListener(self)

        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(updateContextFromJSON:)
    func updateContextFromJSON(command: CDVInvokedUrlCommand) {
        guard let jsonString = command.defaultArgumentAsString else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        guard let context = context else {
            return contextFromJSON(command: command)
        }

        do {
            try deserializer.update(context, view: captureView, components: components, fromJSON: jsonString)
        } catch let error {
            commandDelegate.send(.failure(with: error), callbackId: command.callbackId)
            contextDeserializationFailed(with: error)
            return
        }

        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    private func contextDeserializationFailed(with error: Error) {
        guard let callback = callbacks.contextListener else {
            return
        }

        let errorStatus: CDVPluginResult.JSONMessage = [
            "code": -1,
            "isValid": true,
            "message": "Could not deserialize context: \(error.localizedDescription)"
        ]
        // "Route" through context deserialization errors to the context listener as status updates
        let event = ListenerEvent(name: .didChangeContextStatus,
                                  argument: errorStatus)
        commandDelegate.send(.listenerCallback(event), callbackId: callback.id)
    }

    // MARK: Listeners

    @objc(subscribeContextListener:)
    func subscribeContextListener(command: CDVInvokedUrlCommand) {
        callbacks.contextListener?.dispose(by: commandDelegate)
        callbacks.contextListener = Callback(id: command.callbackId)
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }

    @objc(subscribeViewListener:)
    func subscribeViewListener(command: CDVInvokedUrlCommand) {
        callbacks.viewListener?.dispose(by: commandDelegate)
        callbacks.viewListener = Callback(id: command.callbackId)
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }

    @objc(subscribeFrameSourceListener:)
    func subscribeFrameSourceListener(command: CDVInvokedUrlCommand) {
        callbacks.frameSourceListener?.dispose(by: commandDelegate)
        callbacks.frameSourceListener = Callback(id: command.callbackId)
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }

    @objc(subscribeVolumeButtonObserver:)
    func subscribeVolumeButtonObserver(command: CDVInvokedUrlCommand) {
        callbacks.volumeButtonObserver = Callback(id: command.callbackId)
        volumeButtonObserver = VolumeButtonObserver(handler: { [weak self] in
            guard let self = self else {
                return
            }
            self.commandDelegate.send(.listenerCallback(ListenerEvent(name: .didChangeVolume)),
                                      callbackId: self.callbacks.volumeButtonObserver!.id)
        })
        commandDelegate.send(.keepCallback, callbackId: command.callbackId)
    }

    @objc(unsubscribeVolumeButtonObserver:)
    func unsubscribeVolumeButtonObserver(command: CDVInvokedUrlCommand) {
        callbacks.volumeButtonObserver?.dispose(by: commandDelegate)
        volumeButtonObserver = nil
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    // MARK: Context related

    @objc(disposeContext:)
    func disposeContext(command: CDVInvokedUrlCommand) {
        context?.dispose()
        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    // MARK: - DataCaptureViewProxy

    @objc(setViewPositionAndSize:)
    func setViewPositionAndSize(command: CDVInvokedUrlCommand) {
        guard let viewPositionAndSizeJSON = try? ViewPositionAndSizeJSON.fromCommand(command) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        captureViewConstraints.updatePositionAndSize(fromJSON: viewPositionAndSizeJSON)

        if viewPositionAndSizeJSON.shouldBeUnderWebView {
            // Make the WebView transparent, so we can see views behind
            webView.isOpaque = false
            webView.backgroundColor = .clear
            webView.scrollView.backgroundColor = .clear
        }

        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(showView:)
    func showView(command: CDVInvokedUrlCommand) {
        guard let captureView = captureView else {
            commandDelegate.send(.failure(with: .noViewToBeShown), callbackId: command.callbackId)
            return
        }

        captureView.isHidden = false

        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    @objc(hideView:)
    func hideView(command: CDVInvokedUrlCommand) {
        guard let captureView = captureView else {
            commandDelegate.send(.failure(with: .noViewToBeHidden), callbackId: command.callbackId)
            return
        }

        captureView.isHidden = true

        commandDelegate.send(.success, callbackId: command.callbackId)
    }

    // MARK: View related

    @objc(viewPointForFramePoint:)
    func viewPointForFramePoint(command: CDVInvokedUrlCommand) {
        guard let captureView = captureView else {
            commandDelegate.send(.failure(with: .cantConvertPointWithoutView), callbackId: command.callbackId)
            return
        }

        guard let pointJSON = try? PointJSON.fromCommand(command) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        let convertedPoint = captureView.viewPoint(forFramePoint: pointJSON.cgPoint)

        commandDelegate.send(.success(message: convertedPoint.jsonString), callbackId: command.callbackId)
    }

    @objc(viewQuadrilateralForFrameQuadrilateral:)
    func viewQuadrilateralForFrameQuadrilateral(command: CDVInvokedUrlCommand) {
        guard let captureView = captureView else {
            commandDelegate.send(.failure(with: .cantConvertQuadrilateralWithoutView), callbackId: command.callbackId)
            return
        }

        guard let jsonString = command.defaultArgumentAsString,
              let quad = Quadrilateral(JSONString: jsonString) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        let convertedQuadrilateral = captureView.viewQuadrilateral(forFrameQuadrilateral: quad)

        commandDelegate.send(.success(message: convertedQuadrilateral.jsonString), callbackId: command.callbackId)
    }

    // MARK: - CameraProxy

    @objc(getCurrentCameraState:)
    func getCurrentCameraState(command: CDVInvokedUrlCommand) {
        guard let camera = context?.frameSource as? Camera else {
            commandDelegate.send(.failure(with: .noCamera), callbackId: command.callbackId)
            return
        }

        commandDelegate.send(.success(message: camera.currentState.jsonString), callbackId: command.callbackId)
    }

    @objc(getIsTorchAvailable:)
    func getIsTorchAvailable(command: CDVInvokedUrlCommand) {
        guard let jsonString = command.defaultArgumentAsString,
              let cameraPosition = CameraPosition(JSONString: jsonString) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        guard let camera = Camera(position: cameraPosition) else {
            commandDelegate.send(.failure(with: .noCamera(withPosition: cameraPosition.jsonString)),
                                 callbackId: command.callbackId)
            return
        }

        commandDelegate.send(.success(message: camera.isTorchAvailable), callbackId: command.callbackId)
    }

    // MARK: - Defaults

    @objc(getDefaults:)
    func getDefaults(command: CDVInvokedUrlCommand) {
        let temporaryCameraSettings = CameraSettings()
        let temporaryView = DataCaptureView.init(frame: CGRect.zero)

        let defaults = ScanditCaptureCoreDefaults(cameraSettings: temporaryCameraSettings,
                                                  dataCaptureView: temporaryView,
                                                  laserlineViewfinder: LaserlineViewfinder(),
                                                  rectangularViewfinder: RectangularViewfinder(),
                                                  spotlightViewfinder: SpotlightViewfinder(),
                                                  aimerViewfinder: AimerViewfinder(),
                                                  brush: Brush())
        commandDelegate.send(.success(message: defaults), callbackId: command.callbackId)
    }

    // MARK: - FeedbackProxy

    @objc(emitFeedback:)
    func emitFeedback(command: CDVInvokedUrlCommand) {
        guard let jsonString = command.defaultArgumentAsString,
              let feedback = try? Feedback(fromJSONString: jsonString) else {
            commandDelegate.send(.failure(with: .invalidJSON), callbackId: command.callbackId)
            return
        }

        feedback.emit()
    }
}
