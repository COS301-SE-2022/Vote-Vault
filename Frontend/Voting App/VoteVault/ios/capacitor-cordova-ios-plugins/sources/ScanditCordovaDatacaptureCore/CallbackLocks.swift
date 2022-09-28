import Cordova
protocol BlockingListenerCallbackResult: Decodable {
    var finishCallbackID: ListenerEvent.Name { get }
}

extension BlockingListenerCallbackResult {
    func isForListenerEvent(_ listenerEventName: ListenerEvent.Name) -> Bool {
        return finishCallbackID == listenerEventName
    }

    static func from(_ command: CDVInvokedUrlCommand) -> Self? {
        guard let data = command.defaultArgumentAsString?.data(using: .utf8) else {
            return nil
        }
        let decoder = JSONDecoder()
        return try? decoder.decode(Self.self, from: data)
    }
}

class CallbackLock {
    let condition = NSCondition()
    var isCallbackFinished = true
    var result: BlockingListenerCallbackResult?

    func wait(afterDoing block: () -> Void) {
        isCallbackFinished = false
        block()

        condition.lock()
        while !isCallbackFinished {
            condition.wait()
        }

        condition.unlock()
    }

    func release() {
        isCallbackFinished = true
        condition.signal()
    }
}

class CallbackLocks {
    /// The unfair lock to be used for accessing the locks dictionary.
    private var locksUnfairLock = os_unfair_lock()

    /// Dictionary holding the callback locks.
    /// You need to acquire `locksUnfairLock` before reading/writing the dictionary.
    var locks: [ListenerEvent.Name: CallbackLock] = [ListenerEvent.Name: CallbackLock]()

    func wait(for eventName: ListenerEvent.Name, afterDoing block: () -> Void) {
        getLock(for: eventName).wait(afterDoing: block)
    }

    func release(for eventName: ListenerEvent.Name) {
        getLock(for: eventName).release()
    }

    func setResult(_ result: BlockingListenerCallbackResult?, for eventName: ListenerEvent.Name) {
        getLock(for: eventName).result = result
    }

    func clearResult(for eventName: ListenerEvent.Name) {
        setResult(nil, for: eventName)
    }

    func getResult(for eventName: ListenerEvent.Name) -> BlockingListenerCallbackResult? {
        return getLock(for: eventName).result
    }

    func releaseAll() {
        os_unfair_lock_lock(&locksUnfairLock)
        defer { os_unfair_lock_unlock(&locksUnfairLock) }
        locks.values.forEach({ $0.release() })
    }

    private func getLock(for eventName: ListenerEvent.Name) -> CallbackLock {
        os_unfair_lock_lock(&locksUnfairLock)
        defer { os_unfair_lock_unlock(&locksUnfairLock) }
        if locks[eventName] == nil {
            locks[eventName] = CallbackLock()
        }
        return locks[eventName]!
    }
}
