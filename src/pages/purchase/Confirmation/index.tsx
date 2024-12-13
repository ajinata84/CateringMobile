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

        <div className="alamat-pengiriman">
          <div className="card">
            <div className="title">
              <h1>Alamat pengiriman</h1>
              <p>Ubah</p>
            </div>

            <div className="detail">
              <p>Jalan Anggrek No.123</p>
              <p>Kelurahan Mentari, Kecamatan Blimbing</p>
              <p>Malang 12345</p>
            </div>
          </div>
        </div>

        <div className="confirmation">
          {/* <h1>Menu pilihan Anda</h1> */}
          <div className="menu-order">
            <div className="list-menu">
              <img src=".\src\pages\purchase\Confirmation\img\Konrobakar.jpg" />
              <div className="detail-menu">
                <h2>Paket Kenyang Gembira</h2>
                <h3>Rp40.000</h3>
              </div>
            </div>
            {/* <div className="border"></div> */}

            <div className="list-menu">
              <img src=".\src\pages\purchase\Confirmation\img\Konrobakar.jpg" />
              <div className="detail-menu">
                <h2>Paket Kenyang Gembira</h2>
                <h3>Rp40.000</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="jadwal-pengiriman">
          <div className="card">
            <div className="title">
              <h1>Jadwal pengiriman</h1>
              <p>Ubah</p>
            </div>

            <div className="detail">
              <p>10/12/2024 01:00</p>
            </div>
          </div>
        </div>

        <div className="confirmation">
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
          </div>
        </div>
      </div>

      <div className="order-container">
        <div className="order-button">
          <div className="total-payment">
            <h1>Total tagihan</h1>
            <p>Rp130.0000</p>
          </div>
          <button className="btn-order">Pesan sekarang</button>
        </div>
      </div>
    </IonPage>
  );
}
