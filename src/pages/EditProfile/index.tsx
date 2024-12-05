import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonItem, IonLabel, IonInput } from "@ionic/react";
import { mailOutline, callOutline, locationOutline } from "ionicons/icons";
import { ArrowBigLeft, ChevronLeft } from "lucide-react";
import "./editprofile.css";

export default function EditProfile() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButton routerLink="/tabs/profil">
            <ChevronLeft />
          </IonButton>
          <IonTitle>Edit Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="edit-profile-container">
          <div className="profile-header">
            <div className="profile-image"></div>
            <h2 className="profile-name">Edit Profile</h2>
          </div>

          {/* Form untuk mengedit data */}
          <form onSubmit={(e) => e.preventDefault()}>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput type="email" placeholder="Enter your email" />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Phone</IonLabel>
              <IonInput type="tel" placeholder="Enter your phone number" />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Address</IonLabel>
              <IonInput type="text" placeholder="Enter your address" />
            </IonItem>

            <IonButton expand="block" color="primary" style={{ marginTop: "20px" }}>
              Save Changes
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
}
