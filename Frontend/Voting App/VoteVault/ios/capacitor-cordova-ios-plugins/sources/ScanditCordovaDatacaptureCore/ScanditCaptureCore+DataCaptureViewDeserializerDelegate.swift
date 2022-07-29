import Cordova
import ScanditCaptureCore

extension ScanditCaptureCore: DataCaptureViewDeserializerDelegate {
    public func viewDeserializer(_ deserializer: DataCaptureViewDeserializer,
                                 didStartDeserializingView view: DataCaptureView,
                                 from JSONValue: JSONValue) { }

    public func viewDeserializer(_ deserializer: DataCaptureViewDeserializer,
                                 didFinishDeserializingView view: DataCaptureView,
                                 from JSONValue: JSONValue) {
        captureView = view
    }
}
