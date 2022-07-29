import Cordova
import WebKit

class DataCaptureViewConstraints {
    let webView: WKWebView

    var captureView: UIView? {
        didSet {
            resetConstraints()
            update()
        }
    }

    private weak var top: NSLayoutConstraint?
    private weak var left: NSLayoutConstraint?
    private weak var width: NSLayoutConstraint?
    private weak var height: NSLayoutConstraint?

    private var position: CGPoint = .zero
    private var size: CGSize = .zero
    private var shouldBeUnderWebView: Bool = false

    private var constraints: [NSLayoutConstraint] {
        return [top, left, width, height].compactMap({ $0 })
    }

    init(relativeTo webView: WKWebView) {
        self.webView = webView
    }

    /// Update the constraints that set the position and size of the capture view,
    /// based on a JSON passed in as the argument to a Cordova command.
    ///
    /// If the view does not exist yet, the position and size are stored and will be applied to the view
    /// when it's created (and the constraints object is updated with the new view).
    ///
    /// - Parameter positionAndSizeJSON: The JSON passed to the Cordova command
    func updatePositionAndSize(fromJSON positionAndSizeJSON: ViewPositionAndSizeJSON) {
        position = positionAndSizeJSON.position
        size = positionAndSizeJSON.size
        shouldBeUnderWebView = positionAndSizeJSON.shouldBeUnderWebView
        update()
    }

    private func update() {
        updateConstraints()
        updatePosition()
    }

    private func activate() {
        NSLayoutConstraint.activate(constraints)
    }

    private func resetConstraints() {
        top = nil
        left = nil
        width = nil
        height = nil
    }

    private func updateConstraints() {
        guard let captureView = captureView else {
            return
        }

        let topConstant = position.y + webView.adjustedContentInset.top
        let leftConstant = position.x + webView.adjustedContentInset.left

        if let top = top {
            top.constant = topConstant
        } else {
            top = captureView.topAnchor.constraint(equalTo: webView.topAnchor, constant: topConstant)
            top?.isActive = true
        }

        if let left = left {
            left.constant = leftConstant
        } else {
            left = captureView.leadingAnchor.constraint(equalTo: webView.leadingAnchor, constant: leftConstant)
            left?.isActive = true
        }

        if let width = width {
            width.constant = size.width
        } else {
            width = captureView.widthAnchor.constraint(equalToConstant: size.width)
            width?.isActive = true
        }

        if let height = height {
            height.constant = size.height
        } else {
            height = captureView.heightAnchor.constraint(equalToConstant: size.height)
            height?.isActive = true
        }

        captureView.superview?.layoutIfNeeded()
    }

    private func updatePosition() {
        guard let captureView = captureView else {
            return
        }

        if shouldBeUnderWebView {
            #if swift(>=4.2)
            captureView.superview?.sendSubviewToBack(captureView)
            #else
            captureView.superview?.sendSubview(toBack: captureView)
            #endif
        } else {
            #if swift(>=4.2)
            captureView.superview?.bringSubviewToFront(captureView)
            #else
            captureView.superview?.bringSubview(toFront: captureView)
            #endif
        }
    }
}
