import Cordova
import ScanditBarcodeCapture

extension ScanditBarcodeCapture: BarcodeSelectionDeserializerDelegate {
    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didStartDeserializingMode mode: BarcodeSelection,
                                      from JSONValue: JSONValue) { }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didFinishDeserializingMode mode: BarcodeSelection,
                                      from JSONValue: JSONValue) {
        let JSONString = JSONValue.jsonString()

        guard let data = JSONString.data(using: .utf8),
            let jsonObject = try? JSONSerialization.jsonObject(with: data),
            let json = jsonObject as? [String: Any],
            let enabled = json["enabled"] as? Bool else {
                return
        }
        mode.isEnabled = enabled

        barcodeSelection = mode

        mode.addListener(self)
    }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didStartDeserializingSettings settings: BarcodeSelectionSettings,
                                      from JSONValue: JSONValue) { }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didFinishDeserializingSettings settings: BarcodeSelectionSettings,
                                      from JSONValue: JSONValue) { }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didStartDeserializingBasicOverlay overlay: BarcodeSelectionBasicOverlay,
                                      from JSONValue: JSONValue) { }

    func barcodeSelectionDeserializer(_ deserializer: BarcodeSelectionDeserializer,
                                      didFinishDeserializingBasicOverlay overlay: BarcodeSelectionBasicOverlay,
                                      from JSONValue: JSONValue) {
        barcodeSelectionBasicOverlay = overlay
    }
}
