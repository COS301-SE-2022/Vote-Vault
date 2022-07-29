import Cordova
import ScanditBarcodeCapture

extension ScanditBarcodeCapture: BarcodeTrackingDeserializerDelegate {
    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didFinishDeserializingMode mode: BarcodeTracking,
                                     from JSONValue: JSONValue) {
        let JSONString = JSONValue.jsonString()

        guard let data = JSONString.data(using: .utf8),
            let jsonObject = try? JSONSerialization.jsonObject(with: data),
            let json = jsonObject as? [String: Any],
            let enabled = json["enabled"] as? Bool else {
                return
        }
        mode.isEnabled = enabled

        mode.addListener(self)
    }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didStartDeserializingMode mode: BarcodeTracking,
                                     from JSONValue: JSONValue) { }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didStartDeserializingSettings settings: BarcodeTrackingSettings,
                                     from JSONValue: JSONValue) { }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didFinishDeserializingSettings settings: BarcodeTrackingSettings,
                                     from JSONValue: JSONValue) { }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didStartDeserializingBasicOverlay overlay: BarcodeTrackingBasicOverlay,
                                     from JSONValue: JSONValue) {
        callbackLocks.releaseAll()

        overlay.delegate = self
        barcodeTrackingBasicOverlay = overlay
    }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didFinishDeserializingBasicOverlay overlay: BarcodeTrackingBasicOverlay,
                                     from JSONValue: JSONValue) { }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didStartDeserializingAdvancedOverlay overlay: BarcodeTrackingAdvancedOverlay,
                                     from JSONValue: JSONValue) {
        callbackLocks.releaseAll()

        overlay.delegate = self
        barcodeTrackingAdvancedOverlay = overlay
    }

    func barcodeTrackingDeserializer(_ deserializer: BarcodeTrackingDeserializer,
                                     didFinishDeserializingAdvancedOverlay overlay: BarcodeTrackingAdvancedOverlay,
                                     from JSONValue: JSONValue) { }
}
