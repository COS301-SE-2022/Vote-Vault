import Cordova
extension CGPoint {
    var json: CDVPluginResult.JSONMessage {
        return [
            "x": x,
            "y": y
        ]
    }

    var jsonString: String {
        return String(data: try! JSONSerialization.data(withJSONObject: json), encoding: .utf8)!
    }
}

struct PointJSON: CommandJSONArgument {
    let x: Double
    let y: Double

    var cgPoint: CGPoint {
        return CGPoint(x: x, y: y)
    }
}
