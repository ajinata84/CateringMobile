// import React from 'react'

import React, { useState } from "react";
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRow, IonCol, IonCard, IonCardContent, IonText } from "@ionic/react";
import "./login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Register failed");
      }

      const data = await response.json();
      console.log("Customer registered successfully:", data);

      // Tampilkan notifikasi sukses atau redirect ke halaman lain
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Register Failed:", error.message);
        // Tampilkan notifikasi error
      } else {
        console.error("An unexpected error occurred");
      }
    }
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
                <IonInput name="email" type="email" placeholder="Email" value={formData.email} onIonInput={handleChange} />
              </IonItem>
              <IonItem className="input-item">
                <IonInput name="password" type="password" placeholder="Password" value={formData.password} onIonInput={handleChange} />
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
