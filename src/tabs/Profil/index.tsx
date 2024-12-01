import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from "@ionic/react";
import { mailOutline, callOutline, locationOutline } from "ionicons/icons";
import { ArrowBigLeft } from "lucide-react";
import "./profil.css";

export default function Profil() {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButton routerLink="/tabs/beranda">
            <ArrowBigLeft />
          </IonButton>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="profile-header">
          <div className="profile-image"></div>
          <h2 className="profile-name">Budi Siregar</h2>
        </div>
        <div className="profile-info">
          <div className="info-item">
            <IonIcon icon={mailOutline} className="icon" />
            <span>Email</span>
            <p>Budi123@gmail.com</p>
          </div>
          <div className="info-item">
            <IonIcon icon={callOutline} className="icon" />
            <span>Phone</span>
            <p>+628222111333</p>
          </div>
          <div className="info-item">
            <IonIcon icon={locationOutline} className="icon" />
            <span>Address</span>
            <p>Malang</p>
          </div>
        </div>
      </IonContent>
    </>
  );
}
