import Cordova
import ScanditCaptureCore

extension Quadrilateral {
    init?(JSONString: String) {
        var state = Quadrilateral()
        if SDCQuadrilateralFromJSONString(JSONString, &state) {
            self = state
        } else {
            return nil
        }
    }
}

extension TorchState {
    init?(JSONString: String) {
        var state = TorchState.on
        if SDCTorchStateFromJSONString(JSONString, &state) {
            self = state
        } else {
            return nil
        }
    }
}

extension CameraPosition {
    init?(JSONString: String) {
        var position = CameraPosition.worldFacing
        if SDCCameraPositionFromJSONString(JSONString, &position) {
            self = position
        } else {
            return nil
        }
    }
}

extension FrameSourceState {
    init?(JSONString: String) {
        var state = FrameSourceState.on
        if SDCFrameSourceStateFromJSONString(JSONString, &state) {
            self = state
        } else {
            return nil
        }
    }
}

extension Anchor {
    init?(JSONString: String) {
        var anchor = Anchor.center
        if SDCAnchorFromJSONString(JSONString, &anchor) {
            self = anchor
        } else {
            return nil
        }
    }
}

extension PointWithUnit {
    init?(JSONString: String) {
        var point = PointWithUnit.zero
        if SDCPointWithUnitFromJSONString(JSONString, &point) {
            self = point
        } else {
            return nil
        }
    }
}

extension ScanditCaptureCore: FrameSourceDeserializerDelegate {

    public func frameSourceDeserializer(_ deserializer: FrameSourceDeserializer,
                                        didStartDeserializingFrameSource frameSource: FrameSource,
                                        from JSONValue: JSONValue) { }

    public func frameSourceDeserializer(_ deserializer: FrameSourceDeserializer,
                                        didFinishDeserializingFrameSource frameSource: FrameSource,
                                        from JSONValue: JSONValue) {
        guard let camera = frameSource as? Camera else {
            return
        }

        camera.addListener(self)

        if JSONValue.containsKey("desiredTorchState"),
           let desiredTorchState = TorchState(JSONString: JSONValue.string(forKey: "desiredTorchState",
                                                                           default: TorchState.off.jsonString)) {
            camera.desiredTorchState = desiredTorchState
        }

        if JSONValue.containsKey("desiredState"),
           let desiredState = FrameSourceState(JSONString: JSONValue.string(forKey: "desiredState",
                                                                            default: FrameSourceState.off.jsonString)) {
            camera.switch(toDesiredState: desiredState)
        }
    }

    public func frameSourceDeserializer(_ deserializer: FrameSourceDeserializer,
                                        didStartDeserializingCameraSettings settings: CameraSettings,
                                        from JSONValue: JSONValue) { }

    public func frameSourceDeserializer(_ deserializer: FrameSourceDeserializer,
                                        didFinishDeserializingCameraSettings settings: CameraSettings,
                                        from JSONValue: JSONValue) { }

}
