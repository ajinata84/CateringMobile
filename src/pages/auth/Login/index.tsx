// import React from 'react'

import React, { useState } from "react";
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow, IonCol, IonCard, IonCardContent, IonText } from "@ionic/react";
import "./login.css";
export default function Login() {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  return (
    <IonPage>
      <IonContent className="login-page">
        <div className="Layout flex flex-col justify-center items-center h-screen">
          <IonText color="dark">
            <h1 className="login-title">Login</h1>
          </IonText>
          <IonCard className="login-card">
            <IonCardContent>
              <IonRow className="login-tabs">
                <IonCol size="6">
                  <IonButton expand="block" className="tab-button active">
                    Login
                  </IonButton>
                </IonCol>
                <IonCol size="6">
                  <IonButton expand="block" fill="outline" className="tab-button" routerLink="/register">
                    Register
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonItem className="input-item">
                <IonInput name="username" placeholder="username" />
              </IonItem>
              <IonItem className="input-item">
                <IonInput name="password" type="password" placeholder="password" />
              </IonItem>

              <IonText color="medium" className="forgot-password">
                Forgot Password?
              </IonText>
              <IonButton expand="block" className="login-button" routerLink="/tabs/beranda" onClick={handleLogin}>
                LOGIN
              </IonButton>
              <IonRow className="register-link">
                <IonText>Not a Member? </IonText>
                <IonButton fill="clear" routerLink="/register" className="link">
                  Register Now
                </IonButton>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
}
