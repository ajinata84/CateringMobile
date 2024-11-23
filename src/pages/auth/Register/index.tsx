import { Button } from "@/components/ui/button";
import React from "react";

import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow, IonCol, IonCard, IonCardContent, IonText } from "@ionic/react";
import "./register.css";

export default function Register() {
  const handleRegister = () => {
    console.log("Register Succes");
  };
  return (
    <IonPage>
      <IonContent className="register-page">
        <div className="Layout flex justify-center items-center h-screen">
          <IonCard className="register-card">
            <IonCardContent>
              <IonText color="dark">
                <h1 className="register-title">Login</h1>
              </IonText>
              <IonRow className="register-tabs">
                <IonCol size="6">
                  <IonButton expand="block" fill="outline" className="tab-button" routerLink="/login">
                    Login
                  </IonButton>
                </IonCol>
                <IonCol size="6">
                  <IonButton expand="block" className="tab-button active">
                    Register
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonItem className="input-item">
                <IonInput name="username" placeholder="Username" />
              </IonItem>
              <IonItem className="input-item">
                <IonInput name="phone" type="number" placeholder="Phone" />
              </IonItem>
              <IonItem className="input-item">
                <IonInput name="email" type="email" placeholder="Email" />
              </IonItem>
              <IonItem className="input-item">
                <IonInput name="password" type="password" placeholder="Password" />
              </IonItem>
              <IonButton expand="block" className="register-button" onClick={handleRegister}>
                Register
              </IonButton>
              <IonRow className="login-link">
                <IonText>You a Member? </IonText>
                <IonButton fill="clear" routerLink="/login" className="link">
                  Login Now
                </IonButton>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
}
