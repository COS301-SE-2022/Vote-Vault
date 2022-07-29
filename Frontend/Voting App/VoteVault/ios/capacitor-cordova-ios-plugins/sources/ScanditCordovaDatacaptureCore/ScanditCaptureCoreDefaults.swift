import Cordova
import ScanditCaptureCore

struct ScanditCaptureCoreDefaults: Encodable {
    struct CameraSettingsDefaults: Encodable {
        let preferredResolution: String
        let zoomFactor: Float
        let focusRange: String
        let zoomGestureZoomFactor: Float
        let focusGestureStrategy: String
        let shouldPreferSmoothAutoFocus: Bool
    }

    struct CameraDefaults: Encodable {
        let Settings: CameraSettingsDefaults
        let defaultPosition: String?
        let availablePositions: [String]
        let defaultSparkCaptureCameraPosition: String?
    }

    struct DataCaptureViewDefaults: Encodable {
        let scanAreaMargins: String
        let pointOfInterest: String
        let logoAnchor: String
        let logoOffset: String
        let focusGesture: String?
        let zoomGesture: String?
        let logoStyle: String
    }

    public struct LaserlineViewfinderDefaults: Encodable {
        let defaultStyle: String
        let styles: [String: [String: String]]
    }

    public struct RectangularViewfinderDefaults: Encodable {
        let defaultStyle: String
        let styles: [String: [String: String?]]
    }

    struct SpotlightViewfinderDefaults: Encodable {
        let size: String
        let enabledBorderColor: String
        let disabledBorderColor: String
        let backgroundColor: String
    }

    struct AimerViewfinderDefaults: Encodable {
        let frameColor: String
        let dotColor: String
    }

    struct BrushDefaults: Encodable {
        let fillColor: String
        let strokeColor: String
        let strokeWidth: Int
    }

    let Camera: CameraDefaults
    let DataCaptureView: DataCaptureViewDefaults
    let LaserlineViewfinder: LaserlineViewfinderDefaults
    let RectangularViewfinder: RectangularViewfinderDefaults
    let SpotlightViewfinder: SpotlightViewfinderDefaults
    let AimerViewfinder: AimerViewfinderDefaults
    let Brush: BrushDefaults

    let deviceID: String?

    init(cameraSettings: CameraSettings,
         dataCaptureView: DataCaptureView,
         laserlineViewfinder: LaserlineViewfinder,
         rectangularViewfinder: RectangularViewfinder,
         spotlightViewfinder: SpotlightViewfinder,
         aimerViewfinder: AimerViewfinder,
         brush: Brush) {
        self.Camera = CameraDefaults.from(cameraSettings)
        self.DataCaptureView = DataCaptureViewDefaults.from(dataCaptureView)
        self.LaserlineViewfinder = LaserlineViewfinderDefaults.from(laserlineViewfinder)
        self.RectangularViewfinder = RectangularViewfinderDefaults.from(rectangularViewfinder)
        self.SpotlightViewfinder = SpotlightViewfinderDefaults.from(spotlightViewfinder)
        self.AimerViewfinder = AimerViewfinderDefaults.from(aimerViewfinder)
        self.Brush = BrushDefaults.from(brush)
        self.deviceID = DataCaptureContext.deviceID
    }
}

extension ScanditCaptureCoreDefaults.CameraDefaults {
    typealias Defaults = ScanditCaptureCoreDefaults.CameraDefaults

    static func from(_ cameraSettings: CameraSettings) -> Defaults {
        let availableCameras = [
            CameraPosition.userFacing.jsonString: Camera(position: .userFacing),
            CameraPosition.worldFacing.jsonString: Camera(position: .worldFacing)
        ]
        let availablePositions = Array(availableCameras.keys)

        return Defaults(Settings: ScanditCaptureCoreDefaults.CameraSettingsDefaults.from(cameraSettings),
                        defaultPosition: Camera.default?.position.jsonString,
                        availablePositions: availablePositions,
                        defaultSparkCaptureCameraPosition: Camera.sparkCapture?.position.jsonString)
    }
}

extension ScanditCaptureCoreDefaults.CameraSettingsDefaults {
    typealias Defaults = ScanditCaptureCoreDefaults.CameraSettingsDefaults

    static func from(_ cameraSettings: CameraSettings) -> Defaults {
        return Defaults(preferredResolution: cameraSettings.preferredResolution.jsonString,
                        zoomFactor: Float(cameraSettings.zoomFactor),
                        focusRange: cameraSettings.focusRange.jsonString,
                        zoomGestureZoomFactor: Float(cameraSettings.zoomGestureZoomFactor),
                        focusGestureStrategy: cameraSettings.focusGestureStrategy.jsonString,
                        shouldPreferSmoothAutoFocus: cameraSettings.shouldPreferSmoothAutoFocus)
    }
}

extension ScanditCaptureCoreDefaults.DataCaptureViewDefaults {
    typealias Defaults = ScanditCaptureCoreDefaults.DataCaptureViewDefaults

    static func from(_ dataCaptureView: DataCaptureView) -> Defaults {
        return Defaults(scanAreaMargins: dataCaptureView.scanAreaMargins.jsonString,
                        pointOfInterest: dataCaptureView.pointOfInterest.jsonString,
                        logoAnchor: dataCaptureView.logoAnchor.jsonString,
                        logoOffset: dataCaptureView.logoOffset.jsonString,
                        focusGesture: dataCaptureView.focusGesture?.jsonString,
                        zoomGesture: dataCaptureView.zoomGesture?.jsonString,
                        logoStyle: dataCaptureView.logoStyle.jsonString)
    }
}

public extension ScanditCaptureCoreDefaults.LaserlineViewfinderDefaults {
    internal typealias Defaults = ScanditCaptureCoreDefaults.LaserlineViewfinderDefaults

    internal static func from(_ viewfinder: LaserlineViewfinder) -> Defaults {
        func createViewfinderDefaults(style: LaserlineViewfinderStyle) -> [String: String] {
            let viewfinder = LaserlineViewfinder(style: style)
            let defaults = [
                "style": viewfinder.style.jsonString,
                "width": viewfinder.width.jsonString,
                "enabledColor": viewfinder.enabledColor.sdcHexString,
                "disabledColor": viewfinder.disabledColor.sdcHexString
            ]
            return defaults
        }

        return Defaults(
            defaultStyle: LaserlineViewfinder().style.jsonString,
            styles: [
                LaserlineViewfinderStyle.animated.jsonString: createViewfinderDefaults(style: .animated),
                LaserlineViewfinderStyle.legacy.jsonString: createViewfinderDefaults(style: .legacy)
            ]
        )
    }
}

extension ScanditCaptureCoreDefaults.AimerViewfinderDefaults {
    typealias Defaults = ScanditCaptureCoreDefaults.AimerViewfinderDefaults

    static func from(_ viewfinder: AimerViewfinder) -> Defaults {
        return Defaults(frameColor: viewfinder.frameColor.sdcHexString,
                        dotColor: viewfinder.dotColor.sdcHexString)
    }
}

public extension ScanditCaptureCoreDefaults.RectangularViewfinderDefaults {
    internal typealias Defaults = ScanditCaptureCoreDefaults.RectangularViewfinderDefaults

    internal static func from(_ viewfinder: RectangularViewfinder) -> Defaults {
        func createViewfinderDefaults(style: RectangularViewfinderStyle) -> [String: String?] {
            let viewfinder = RectangularViewfinder(style: style)
            let defaults = [
                "style": viewfinder.style.jsonString,
                "size": viewfinder.sizeWithUnitAndAspect.jsonString,
                "color": viewfinder.color.sdcHexString,
                "disabledColor": viewfinder.disabledColor.sdcHexString,
                "lineStyle": viewfinder.lineStyle.jsonString,
                "dimming": viewfinder.dimming.description,
                "disabledDimming": viewfinder.disabledDimming.description,
                "animation": viewfinder.animation?.jsonString
            ]
            return defaults
        }

        return Defaults(
            defaultStyle: RectangularViewfinder().style.jsonString,
            styles: [
                RectangularViewfinderStyle.square.jsonString: createViewfinderDefaults(style: .square),
                RectangularViewfinderStyle.rounded.jsonString: createViewfinderDefaults(style: .rounded),
                RectangularViewfinderStyle.legacy.jsonString: createViewfinderDefaults(style: .legacy)
            ]
        )
    }
}

extension ScanditCaptureCoreDefaults.SpotlightViewfinderDefaults {
    typealias Defaults = ScanditCaptureCoreDefaults.SpotlightViewfinderDefaults

    static func from(_ viewfinder: SpotlightViewfinder) -> Defaults {
        return Defaults(size: viewfinder.sizeWithUnitAndAspect.jsonString,
                        enabledBorderColor: viewfinder.enabledBorderColor.sdcHexString,
                        disabledBorderColor: viewfinder.disabledBorderColor.sdcHexString,
                        backgroundColor: viewfinder.backgroundColor.sdcHexString)
    }
}

extension ScanditCaptureCoreDefaults.BrushDefaults {
    typealias Defaults = ScanditCaptureCoreDefaults.BrushDefaults

    static func from(_ brush: Brush) -> Defaults {
        return Defaults(fillColor: brush.fillColor.sdcHexString,
                        strokeColor: brush.strokeColor.sdcHexString,
                        strokeWidth: Int(brush.strokeWidth))
    }
}
