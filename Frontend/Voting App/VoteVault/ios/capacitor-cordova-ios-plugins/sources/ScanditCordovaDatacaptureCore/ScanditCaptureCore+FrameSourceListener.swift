import Cordova
import ScanditCaptureCore

extension ScanditCaptureCore: FrameSourceListener {
    public func frameSource(_ source: FrameSource, didChange newState: FrameSourceState) {
        guard let callback = callbacks.frameSourceListener else {
            return
        }
        commandDelegate.send(.listenerCallback(ListenerEvent(name: .didChangeState,
                                                             argument: ["newState": newState.jsonString])),
                             callbackId: callback.id)
    }

    public func frameSource(_ source: FrameSource, didOutputFrame frame: FrameData) {
        // pass
    }
}
