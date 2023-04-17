import ScanbotBarcodeSDK, {
    ScanbotBarcodeSDKConfiguration,
    BarcodeScannerConfiguration,
} from 'cordova-plugin-scanbot-barcode-scanner';

export class ScanbotSdkDemoService {

    public static barcodeSDK = ScanbotBarcodeSDK.promisify!();

    public static async initScanbotBarcodeSDK() {
        try {
            const config: ScanbotBarcodeSDKConfiguration = {
                licenseKey: '', // TODO get a trial license key https://scanbot.io/trial/
                enableNativeLogging: true,
                loggingEnabled: true, // Disable logging in production builds for security and performance reasons!
            };
            await this.barcodeSDK.initializeSdk(config);
            console.log('success');
        } catch (e) {
            console.log(JSON.stringify(e));
        }
    }

    public static async startBarcodeQrCodeScanner() {

        const config: BarcodeScannerConfiguration = {
          finderLineColor: '#ff0000',
          cancelButtonTitle: 'Cancel',
          // See further customization configs...

          // gs1DecodingEnabled: false,
          // minimum1DBarcodesQuietZone: 10,
          // minimumTextLength: 2,
          // maximumTextLength: 11,
          // cameraZoomFactor: 1,
          // finderAspectRatio: {
          //   width: 2,
          //   height: 1
          // }
        };

        try {
          const result = await this.barcodeSDK.startBarcodeScanner(config);

          if (result.status === 'OK') {
            //console.log(JSON.stringify(result));
            alert(JSON.stringify(result.barcodes));
          }
        } catch (e) {
            console.log(JSON.stringify(e));
        }
      }

}