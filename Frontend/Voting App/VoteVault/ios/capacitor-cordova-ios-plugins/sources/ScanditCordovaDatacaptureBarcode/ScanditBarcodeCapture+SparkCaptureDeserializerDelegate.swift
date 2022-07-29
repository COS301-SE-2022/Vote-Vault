import Cordova
import ScanditBarcodeCapture

extension ScanditBarcodeCapture: SparkCaptureDeserializerDelegate {
    func sparkCaptureDeserializer(_ deserializer: SparkCaptureDeserializer,
                                  didFinishDeserializingMode mode: SparkCapture,
                                  from JSONValue: JSONValue) {
        mode.isEnabled = JSONValue.bool(forKey: "enabled")

        mode.addListener(self)
    }

    func sparkCaptureDeserializer(_ deserializer: SparkCaptureDeserializer,
                                  didStartDeserializingMode mode: SparkCapture,
                                  from JSONValue: JSONValue) { }

    func sparkCaptureDeserializer(_ deserializer: SparkCaptureDeserializer,
                                  didStartDeserializingSettings settings: SparkCaptureSettings,
                                  from JSONValue: JSONValue) { }

    func sparkCaptureDeserializer(_ deserializer: SparkCaptureDeserializer,
                                  didFinishDeserializingSettings settings: SparkCaptureSettings,
                                  from JSONValue: JSONValue) { }
}
