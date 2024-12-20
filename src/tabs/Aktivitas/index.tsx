import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import "./index.css";
import { IonContent, IonPage } from "@ionic/react";

export default function Aktivitas() {
  const [activeTab, setActiveTab] = useState<"ongoing" | "completed">(
    "ongoing"
  );

  const showContent = (tab: "ongoing" | "completed") => {
    setActiveTab(tab);
  };

  return (
    <IonPage>
      <IonContent>
        <div className="back-confirm">
          <p>List Transaksi</p>
        </div>

        <div className="tab-container">
          <div
            className={`tab ${activeTab === "ongoing" ? "active" : ""}`}
            onClick={() => showContent("ongoing")}
          >
            Sedang berjalan
          </div>
          <div
            className={`tab ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => showContent("completed")}
          >
            Pesanan selesai
          </div>
        </div>

        {activeTab === "ongoing" && (
          <div className="list-card">
            <div className="card">
              <div className="title">
                <h1>Catering Ikan Nila</h1>
                <p>2 Hari</p>
              </div>

              <div className="card-detail">
                <div className="row">
                  <p>Paket</p>
                  <p className="information">Paket Murah</p>
                </div>
                <div className="row">
                  <p>Tanggal Mulai</p>
                  <p className="information">11/12/2024</p>
                </div>
                <div className="row">
                  <p>Tanggal Selesai</p>
                  <p className="information">13/12/2024</p>
                </div>
                <div className="row">
                  <p>Total Harga</p>
                  <p className="information">Rp150.000</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="title">
                <h1>Catering Ayam Bakar</h1>
                <p>1 Minggu</p>
              </div>

              <div className="card-detail">
                <div className="row">
                  <p>Paket</p>
                  <p className="information">Paket Mantap</p>
                </div>
                <div className="row">
                  <p>Tanggal Mulai</p>
                  <p className="information">01/12/2024</p>
                </div>
                <div className="row">
                  <p>Tanggal Selesai</p>
                  <p className="information">07/12/2024</p>
                </div>
                <div className="row">
                  <p>Total Harga</p>
                  <p className="information">Rp300.000</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "completed" && (
          <div className="content">
            <p>Belum ada transaksi.</p>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
}
