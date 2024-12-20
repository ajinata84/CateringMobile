import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons, IonItem, IonLabel, IonInput, IonCard } from "@ionic/react";
import { mailOutline, callOutline, locationOutline } from "ionicons/icons";
import { ArrowBigLeft, ChevronLeft, Radius } from "lucide-react";
import "./editprofile.css";

export default function EditProfile() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton routerLink="/tabs/profil">
              <ChevronLeft />
            </IonButton>
          </IonButtons>
          <IonTitle>Edit Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="edit-profile-container">
          <div className="profile-header">
            <div className="profile-image"></div>
            <h2 className="profile-name">Name</h2>
          </div>

          <IonCard className="editprofile-card">
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

              <IonButton expand="block" className="save-button" style={{ marginTop: "20px" }}>
                Save Changes
              </IonButton>

              {/* <IonButton expand="block" color="primary" className="rounded-button" style={{ marginTop: "20px" }}>
                Save Changes
              </IonButton> */}
            </form>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
}
