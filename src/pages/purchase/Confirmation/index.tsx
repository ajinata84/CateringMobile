import { Bike, ChevronLeft } from "lucide-react";
import React from "react";
import "./index.css";
import { IonPage } from "@ionic/react";

export default function Confirmation() {
  return (
    <IonPage>
      <div>
        <div className="back-confirm">
          <ChevronLeft />
          <p>Konfirmasi order</p>
        </div>

        <div className="delivery-info">
          <div className="delivery-content">
            <Bike />
            <p>
              Pesanan anda akan sampai dalam{" "}
              <span className="highlight">30 menit!</span>
            </p>
          </div>
        </div>

        <div className="confirmation">
          <h1>Menu pilihan Anda</h1>
          <div className="menu-order">
            <div className="list-menu">
              <img src=".\src\pages\purchase\Confirmation\img\Konrobakar.jpg" />
              <div className="detail-menu">
                <h2>Paket Kenyang Gembira</h2>
                <h3>Rp40.000</h3>
              </div>
            </div>
            <div className="list-menu">
              <img src=".\src\pages\purchase\Confirmation\img\Konrobakar.jpg" />
              <div className="detail-menu">
                <h2>Paket Kenyang Gembira</h2>
                <h3>Rp40.000</h3>
              </div>
            </div>
          </div>

          <h1>Detail pembayaran</h1>
          <div className="payment-detail">
            <div className="payment-row">
              <p>Harga</p>
              <p className="harga">Rp110.000</p>
            </div>
            <div className="payment-row">
              <p>Biaya pengemasan</p>
              <p className="harga">Rp5.000</p>
            </div>
            <div className="payment-row">
              <p>Biaya pengiriman</p>
              <p className="harga">Rp15.000</p>
            </div>
            <div className="payment-row">
              <p>Total pembayaran</p>
              <p className="harga">Rp130.000</p>
            </div>
          </div>
        </div>

        <div className="order-container">
          <div className="order-button">
            <button className="btn-order">Order</button>
          </div>
        </div>
      </div>
    </IonPage>
  );
}
