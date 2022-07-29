import Cordova
struct Callback {
    let id: String

    /// Dispose of a previously added callback to the Cordova side
    ///
    /// We might want to dispose of an already added callback and destroy the corresponding JavaScript
    /// callback as well, e.g. in case a new capture mode is added and the proxy for that mode subscribes to
    /// listeners, in which case we want to destroy the previously existing listener that corresponds to the inactive
    /// capture mode.
    ///
    /// - Parameter commandDelegate: The command delegate to send the dispose command through
    func dispose(by commandDelegate: CDVCommandDelegate) {
        commandDelegate.send(.disposeCallback, callbackId: id)
    }
}
