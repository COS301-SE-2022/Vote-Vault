import Cordova
import ScanditCaptureCore

struct BrushAndTrackedBarcodeJSON: CommandJSONArgument {
    enum CodingKeys: String, CodingKey {
        case trackedBarcodeID
        case sessionFrameSequenceID
        case brushJSONString = "brush"
    }

    let brushJSONString: String?
    let trackedBarcodeID: String
    let sessionFrameSequenceID: String?

    var brush: Brush? {
        guard let jsonString = brushJSONString else {
            return nil
        }

        return Brush(jsonString: jsonString)
    }
}

struct ViewAndTrackedBarcodeJSON: CommandJSONArgument {
    let view: TrackedBarcodeView.JSON?
    let trackedBarcodeID: String
    let sessionFrameSequenceID: String?
}

struct AnchorAndTrackedBarcodeJSON: CommandJSONArgument {
    let anchor: String?
    let trackedBarcodeID: String
    let sessionFrameSequenceID: String?
}

struct OffsetAndTrackedBarcodeJSON: CommandJSONArgument {
    let offset: String?
    let trackedBarcodeID: String
    let sessionFrameSequenceID: String?
}
