import Cordova
import ScanditBarcodeCapture

extension Dictionary where Key == NSNumber, Value == TrackedBarcode {
    func trackedBarcode(withID id: String) -> TrackedBarcode? {
        guard let trackedBarcodeID = Int(id),
              // swiftlint:disable:next compiler_protocol_init
              let trackedBarcode = self[NSNumber(integerLiteral: trackedBarcodeID)] else {
            return nil
        }

        return trackedBarcode
    }
}
