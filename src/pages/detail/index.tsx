import { ChevronLeft, Star } from "lucide-react";
import React from "react";
import "./index.css";
import { IonContent, IonPage } from "@ionic/react";
import AppHeader from "@/components/AppHeader";

export default function Detail() {
  return (
    <IonPage>
      <AppHeader title="Detail Transaksi" />
      <IonContent>
        <div className="info-catering">
          <h1>Catering Ikan Nila</h1>
          <p>Paket Mantap</p>
          <p>11/12/2024 - 13/12/2024</p>
        </div>

        <div className="bottom-border"></div>

        <div className="beri-rating">
          <h1>Berikan rating pada catering?</h1>
          <div className="stars">
            <Star size={28} color="#d9d9d9" strokeWidth={1} />
            <Star size={28} color="#d9d9d9" strokeWidth={1} />
            <Star size={28} color="#d9d9d9" strokeWidth={1} />
            <Star size={28} color="#d9d9d9" strokeWidth={1} />
            <Star size={28} color="#d9d9d9" strokeWidth={1} />
          </div>
        </div>

        <div className="bottom-border"></div>

        <div className="menu-catering">
          <h1>Detail Paket</h1>
          <p>1 x Ikan Bakar Pedas</p>
          <p>1 x Capjay Kuah</p>
          <p>1 x Nasi Putih</p>
          <p>1 x Es Teh</p>
        </div>

        <div className="bottom-border"></div>

        <div className="alamat-catering">
          <div className="alamat">
            <h1>Alamat:</h1>
            <h2>Jl. Mawar Blok D No.12</h2>
          </div>
          <div className="alamat">
            <h1>Note:</h1>
            <h2>Rumah pagar putih</h2>
          </div>
        </div>

        <div className="bottom-border"></div>

        <div className="payment-catering">
          <h1>Detail Payment</h1>
          <div className="payment-rows">
            <p>Harga</p>
            <p>Rp50.000</p>
          </div>
          <div className="payment-rows">
            <p>Biaya Pengemasan</p>
            <p>Rp5.000</p>
          </div>
          <div className="payment-rows">
            <p>Biaya Pengiriman</p>
            <p>Rp15.000</p>
          </div>
          <div className="bottom-border-dashed"></div>
          <div className="payment-rows">
            <p>Total</p>
            <h2>Rp80.000</h2>
          </div>
          <div className="bottom-border-dashed"></div>
        </div>

        <div className="button-container">
          <button className="outline-button">Bantuan</button>
          <button className="filled-button">Mau Lagi</button>
        </div>
      </IonContent>
    </IonPage>
  );
}
