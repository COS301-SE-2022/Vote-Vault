/* eslint-disable max-len */
import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class ScannerServiceProvider {
  public contentHeight;
  public delegate: ScannerDelegate;

  public barcodeCapture;
  public session;
  private context;
  private camera;
  private settings;
  private view;
  private overlay;

  constructor(
    private zone: NgZone,
  ) {
    this.context = SCANDIT
.DataCaptureContext.forLicenseKey('ASUh5y86DZDoDPieBTH34qkryRvAL5DUlESSoi5X/8s+AswFfUHDHtdFVHyqUlTbw3e/IlcEZRWVcX3uxEOzXMVC2+a6eu0xDxJ85WJ/Q05qUhGtY2AszXFcL1HMJ5WPKgm6pW8nj8yEXmbzNHn0mQ1vtZSOAtTbcnNF/LdMhKHkS7lMOzfO81xG94+iahNKnFdS/GdB2VFPBDhOo0xxj4lFR+olStQmNWWHYtRJZHeaO0sgWWkr7kxTvkXESiLp41SSM8gchB2NeB5jhU+goOVtHN/QOlx4j2VPLklNpuKVLwn/vX+XvjdNGON9LkT0kXFxYlsZvKGOMQOJdncPhVENEhCsH3so0kNQN8NW53YSdlwVokkYyKF9o2bweP7p1zWXyZRFuN5LJifGnklCH54CIYASQPWWggLPucdJ2lF4Ta/uFlQEDhJPwxvZfHFo92CfidNXxs+cbdH1nC+eQ8I2KIm7bFoonVB4bST274beKERBG7IBv8kNerFK7598JnUNUxOdstMXuyQ3m8VPdKUMCwJK+gxHqQzk2Et8KKjEJpmEs96yeOPb+KFbWhbvpIetDzHVYTvsHEXxh1GscY0j3uhZw4VuqZj2TPUmUBiZoTcloZTYvk9jm9nfvWwjKkko31A+mMW2z+TEuXDy7KrfURaAqJ2XwyU8UTxPFAtPznMI0lPIceiU+ydqFRocIFeEjZsj47dPSBfcKKSJepA+IsdmHvJtje9OoWbMnyFmzBOEkXy5bWjBH+eIa2tX+pmX6PN6+5hegNxqvdrvI9AAPgtnKIpdgS6wiWbwfxKeHs4AKAy8j957/kc8H9JOsX+S9mOcVAeGkyR/KDIfs4jfDsNm8XkDTZQrcSuLSyLmNkzOSvbVsBchQ+cOznriki5MZxCcA7YT1myFSKPDietbEBf6GrvjT2wohr0MsFAIe3ACMzMMjhs8TAbHXCue9J23Oz/MCMOntslaWTyAdyNPgi80pAreQsSiafiUGpeNUVobLGwONIY84bftDmZL1arV4dCZQh+NDs6XEtjEyrHi/EUQszd6YqSN7HKfcpsmQZCF2VCQDdJk9WVFuDJ10YykRXGnl1BwVhMBe/OHrbVDCiQmWaUNaqOHi8029eo4V4aXXWa2DFts6dO/1LIk+izjOE9op9b9oMU=');
    this.camera = SCANDIT
.Camera.default;
    this.context.setFrameSource(this.camera);

    this.settings = new SCANDIT
.BarcodeCaptureSettings();

    this.settings.enableSymbologies([
      SCANDIT
.Symbology.EAN13UPCA,
      SCANDIT
.Symbology.EAN8,
      SCANDIT
.Symbology.UPCE,
      SCANDIT
.Symbology.QR,
      SCANDIT
.Symbology.DataMatrix,
      SCANDIT
.Symbology.Code39,
      SCANDIT
.Symbology.Code128,
      SCANDIT
.Symbology.InterleavedTwoOfFive,
      SCANDIT
.Symbology.PDF417
    ]);
    this.settings.codeDuplicateFilter = -1;
    this.barcodeCapture = SCANDIT
.BarcodeCapture.forContext(this.context, this.settings);
    this.barcodeCapture.applySettings(this.settings);
    this.barcodeCapture.addListener({
      didScan: (barcodeCapture, session) => {
        if (this.delegate) {
          this.zone.run(() => {
            this.delegate.didScan(barcodeCapture, session);
          });
        }
      },
    });
  }

  public start(): void {
    this.view = SCANDIT
.DataCaptureView.forContext(this.context);
    this.view.connectToElement(document.getElementById('scanner'));
    this.overlay = SCANDIT
.BarcodeCaptureOverlay.withBarcodeCaptureForView(this.barcodeCapture, this.view);
    this.overlay.viewfinder = new SCANDIT
.RectangularViewfinder();
    this.camera.switchToDesiredState(SCANDIT
.FrameSourceState.On);
    this.barcodeCapture.isEnabled = true;
  }

  public resume(): void {
    this.barcodeCapture.isEnabled = true;
  }
  public pause(): void {
    this.barcodeCapture.isEnabled = false;
  }
}
