import Cordova
class TappableBase64ImageView: UIImageView {
    struct JSON: Decodable {
        struct OptionsJSON: Decodable {
            // swiftlint:disable:next nesting
            struct SizeJSON: Decodable {
                let width: CGFloat
                let height: CGFloat
            }

            let size: SizeJSON?
            let scale: CGFloat?
        }

        let data: String
        let options: OptionsJSON
    }

    var didTap: (() -> Void)?

    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }

    init?(base64DataString: String) {
        let dataString = String(base64DataString.split(separator: ",")[1])

        guard let imageData = Data(base64Encoded: dataString) else {
            return nil
        }

        super.init(image: UIImage(data: imageData))
    }

    convenience init?(json: JSON) {
        self.init(base64DataString: json.data)

        if let size = json.options.size {
            frame.size = CGSize(width: size.width, height: size.height)
        }

        if let scale = json.options.scale {
            frame.size = CGSize(width: frame.size.width * scale, height: frame.size.height * scale)
        }

        isUserInteractionEnabled = true
        addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(handleTap)))
    }

    @objc func handleTap() {
        didTap?()
    }
}

typealias TrackedBarcodeView = TappableBase64ImageView
