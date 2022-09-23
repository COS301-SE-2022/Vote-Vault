import Cordova
import ScanditBarcodeCapture

struct BarcodeCaptureCallbackResult: BlockingListenerCallbackResult {
    struct ResultJSON: Decodable {
        enum CodingKeys: String, CodingKey {
            case enabled
            case brushJSONString = "brush"
            case viewJSON = "view"
            case anchorString = "anchor"
            case offsetString = "offset"
        }

        let enabled: Bool?
        let brushJSONString: String?
        let viewJSON: TrackedBarcodeView.JSON?
        let anchorString: String?
        let offsetString: String?
    }

    let finishCallbackID: ListenerEvent.Name
    let result: ResultJSON?

    var enabled: Bool? {
        guard let result = result else {
            return nil
        }

        return result.enabled
    }

    var view: TrackedBarcodeView? {
        guard let viewJSON = result?.viewJSON else {
            return nil
        }

        return TrackedBarcodeView(json: viewJSON)
    }

    var brush: Brush? {
        guard let result = result, let jsonString = result.brushJSONString else {
            return nil
        }

        return Brush(jsonString: jsonString)
    }

    var anchor: Anchor? {
        guard let result = result, let anchorString = result.anchorString else {
            return nil
        }
        return Anchor(JSONString: anchorString)
    }

    var offset: PointWithUnit? {
        guard let result = result, let offsetString = result.offsetString else {
            return nil
        }
        return PointWithUnit(JSONString: offsetString)
    }
}
