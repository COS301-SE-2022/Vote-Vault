type Barcode = {
  data: string;
  symbology: string;
};

type Point = {
  x: number;
  y: number;
};

type Quadrilateral = {
  topLeft: Point;
  topRight: Point;
  bottomRight: Point;
  bottomLeft: Point;
};

type LocalizedOnlyBarcode = {
  location: Quadrilateral;
  frameID: number;
};

type BarcodeCapture = any;

type BarcodeCaptureSession = {
  newlyRecognizedBarcodes: Barcode[];
  newlyLocalizedBarcodes: LocalizedOnlyBarcode[];
};

interface ScannerDelegate {
  didScan(barcodeCapture: BarcodeCapture, session: BarcodeCaptureSession);
}

declare let SCANDIT;
