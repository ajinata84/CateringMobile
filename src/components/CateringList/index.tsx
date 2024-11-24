import React from 'react';
import { IonContent, IonCard, IonCardContent, IonRow, IonCol, IonButton, IonText } from '@ionic/react';
import './list.css'; // Styling yang sudah kamu buat
import { LucideSun, LucideMoon, LucideSunrise } from 'lucide-react';

export default function CateringList() {
  return (
    <IonContent className="catering-container">
      <IonCard className="catering-card">
        <IonCardContent>
          <div className="catering-card-inner">
            {/* Gambar di kiri */}
            <img
              src="./src/components/CateringList/img/capjay.jpg"
              alt="Catering Capjay Top"
              className="catering-image"
            />
            {/* Konten di sebelah kanan */}
            <div className="catering-content">
              <div className="rating-container">
                <span className="rating-icon">★</span>
                <span>4.7</span>
              </div>
              <h3 className="catering-title">Catering Capjay Top</h3>
              <p className="catering-price"> Rp20.000 - Rp60.000</p>

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
    </IonContent>
  );
}
