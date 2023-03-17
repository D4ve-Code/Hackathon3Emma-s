import QRCode from "react-qr-code";
import { useEffect } from "react";
const QrcodeComponent = () => {
  return (
    <div className="qrcode">
      <div className="qrcode__container">
        <div className="qrcode__container__text">
          <h2>
            Scannez le QR code pour récuperer les informations du smartphone
          </h2>
        </div>
        <div className="qrcode__container__img"></div>
      </div>
    </div>
  );
};

export default QrcodeComponent;
