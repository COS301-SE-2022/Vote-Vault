import Cordova
import ScanditBarcodeCapture

extension ScanditBarcodeCapture: BarcodeCaptureDeserializerDelegate {
    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didFinishDeserializingMode mode: BarcodeCapture,
                                    from JSONValue: JSONValue) {
        mode.isEnabled = JSONValue.bool(forKey: "enabled")

        mode.addListener(self)
    }

    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didStartDeserializingMode mode: BarcodeCapture,
                                    from JSONValue: JSONValue) { }

    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didStartDeserializingSettings settings: BarcodeCaptureSettings,
                                    from JSONValue: JSONValue) { }

    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didFinishDeserializingSettings settings: BarcodeCaptureSettings,
                                    from JSONValue: JSONValue) { }

    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didStartDeserializingOverlay overlay: BarcodeCaptureOverlay,
                                    from JSONValue: JSONValue) { }

    func barcodeCaptureDeserializer(_ deserializer: BarcodeCaptureDeserializer,
                                    didFinishDeserializingOverlay overlay: BarcodeCaptureOverlay,
                                    from JSONValue: JSONValue) { }
}
