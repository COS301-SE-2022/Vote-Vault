import Cordova
import ScanditCaptureCore

extension ScanditCaptureCore: DataCaptureViewListener {
    public func dataCaptureView(_ view: DataCaptureView, didChange size: CGSize, orientation: UIInterfaceOrientation) {
        guard let callback = callbacks.viewListener else {
            return
        }
        commandDelegate.send(.listenerCallback(ListenerEvent(name: .didChangeSize,
                                                             argument: [
                                                                "size": ["width": size.width, "height": size.height],
                                                                "orientation": orientation.description])),
                             callbackId: callback.id)
    }
}
