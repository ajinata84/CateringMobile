import React from "react";
import { IonContent, IonCard, IonCardContent } from "@ionic/react";
import "./list.css"; // Styling yang sudah kamu buat
import { LucideSun, LucideMoon, LucideSunrise } from "lucide-react";

export default function CateringList() {
  return (
    <>
      <IonCard className="catering-card">
        <IonCardContent className="!p-0">
          <div className="catering-card-inner">
            {/* Gambar di kiri */}
            <div className="image-container">
              <img
                src="./src/components/CateringList/img/capjay.jpg"
                alt="Catering Capjay Top"
                className="catering-image"
              />
              {/* Badge rating di atas gambar */}
              <div className="rating-container">
                <span className="rating-icon">★</span>
                <span>4.7</span>
              </div>
            </div>

            {/* Konten di sebelah kanan */}
            <div className="catering-content">
              <h1 className="catering-title">Catering Capjay Top</h1>
              <p className="catering-price">Rp20.000 - Rp60.000</p>

              <div className="delivery-schedule">
                <h3 className="schedule-title">Jadwal Pengiriman</h3>
                <ul>
                  <li>
                    <LucideSunrise size={13} color="#FFA500" /> 07.00 - 07.30
                  </li>
                  <li>
                    <LucideSun size={13} color="#FFD700" /> 12.00 - 12.30
                  </li>
                  <li>
                    <LucideMoon size={13} color="#6A5ACD" /> 18.00 - 18.30
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
      <IonCard className="catering-card">
        <IonCardContent className="!p-0">
          <div className="catering-card-inner">
            {/* Gambar di kiri */}
            <div className="image-container">
              <img
                src="./src/components/CateringList/img/capjay.jpg"
                alt="Catering Capjay Top"
                className="catering-image"
              />
              {/* Badge rating di atas gambar */}
              <div className="rating-container">
                <span className="rating-icon">★</span>
                <span>4.7</span>
              </div>
            </div>

            {/* Konten di sebelah kanan */}
            <div className="catering-content">
              <h1 className="catering-title">Catering Capjay Top</h1>
              <p className="catering-price">Rp20.000 - Rp60.000</p>

              <div className="delivery-schedule">
                <h3 className="schedule-title">Jadwal Pengiriman</h3>
                <ul>
                  <li>
                    <LucideSunrise size={13} color="#FFA500" /> 07.00 - 07.30
                  </li>
                  <li>
                    <LucideSun size={13} color="#FFD700" /> 12.00 - 12.30
                  </li>
                  <li>
                    <LucideMoon size={13} color="#6A5ACD" /> 18.00 - 18.30
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
      <IonCard className="catering-card">
        <IonCardContent className="!p-0">
          <div className="catering-card-inner">
            {/* Gambar di kiri */}
            <div className="image-container">
              <img
                src="./src/components/CateringList/img/capjay.jpg"
                alt="Catering Capjay Top"
                className="catering-image"
              />
              {/* Badge rating di atas gambar */}
              <div className="rating-container">
                <span className="rating-icon">★</span>
                <span>4.7</span>
              </div>
            </div>

            {/* Konten di sebelah kanan */}
            <div className="catering-content">
              <h1 className="catering-title">Catering Capjay Top</h1>
              <p className="catering-price">Rp20.000 - Rp60.000</p>

              <div className="delivery-schedule">
                <h3 className="schedule-title">Jadwal Pengiriman</h3>
                <ul>
                  <li>
                    <LucideSunrise size={13} color="#FFA500" /> 07.00 - 07.30
                  </li>
                  <li>
                    <LucideSun size={13} color="#FFD700" /> 12.00 - 12.30
                  </li>
                  <li>
                    <LucideMoon size={13} color="#6A5ACD" /> 18.00 - 18.30
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    </>
  );
}
