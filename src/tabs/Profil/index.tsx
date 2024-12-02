import React from "react";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonToggle, IonItem, IonLabel, IonList } from "@ionic/react";
import { logOutOutline, storefrontOutline, helpCircleOutline, notificationsOutline, lockClosedOutline, keyOutline } from "ionicons/icons";
import "./profil.css";
import { ArrowBigLeft } from "lucide-react";

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
        <div className="profile-container">
          <div className="profile-avatar">
            <img
              src="https://via.placeholder.com/100" // Ganti dengan URL avatar
              alt="Profile Avatar"
            />
          </div>
          <h2 className="profile-name">Coffeestories</h2>
          <p className="profile-email">mark.brock@icloud.com</p>
          <IonButton expand="block" className="edit-profile-button" routerLink="/profile/edit-profile">
            Edit Profile
          </IonButton>
        </div>

        <IonList>
          {/* Inventories Section */}
          <div className="section-title">Inventories</div>
          <IonItem lines="full" button>
            <IonIcon slot="start" icon={storefrontOutline} />
            <IonLabel>My Stores</IonLabel>
            <div className="badge">2</div>
          </IonItem>
          <IonItem lines="full" button>
            <IonIcon slot="start" icon={helpCircleOutline} />
            <IonLabel>Support</IonLabel>
          </IonItem>

          {/* Preferences Section */}
          <div className="section-title">Preferences</div>
          <IonItem lines="full">
            <IonIcon slot="start" icon={notificationsOutline} />
            <IonLabel>Push Notifications</IonLabel>
            <IonToggle slot="end" checked />
          </IonItem>
          <IonItem lines="full">
            <IonIcon slot="start" icon={lockClosedOutline} />
            <IonLabel>Face ID</IonLabel>
            <IonToggle slot="end" checked />
          </IonItem>
          <IonItem lines="full" button>
            <IonIcon slot="start" icon={keyOutline} />
            <IonLabel>PIN Code</IonLabel>
          </IonItem>
        </IonList>

        {/* Logout Section */}
        <IonButton expand="block" color="danger" className="logout-button">
          <IonIcon slot="start" icon={logOutOutline} />
          Logout
        </IonButton>
      </IonContent>
    </>
  );
}
