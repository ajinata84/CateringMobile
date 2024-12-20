import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IonButton, IonContent, IonInput, IonItem, IonRow, IonCol, IonCard, IonCardContent, IonText, IonPage } from "@ionic/react";
import "./register.css";

// Menambahkan tipe eksplisit untuk parameter e pada handleChange dan error pada handleRegister
export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/customer/register", {
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
      <IonContent className="register-page">
        <div className="Layout flex flex-col justify-center items-center h-screen relative">
          <IonText color="dark">
            <h1 className="register-title">Register</h1>
          </IonText>
          <IonCard className="register-card">
            <IonCardContent>
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
                <IonInput name="email" type="email" placeholder="Email" value={formData.email} onIonInput={handleChange} />
              </IonItem>
              <IonItem className="input-item">
                <IonInput name="password" type="password" placeholder="Password" value={formData.password} onIonInput={handleChange} />
              </IonItem>
              <IonItem className="input-item">
                <IonInput name="username" placeholder="Username" value={formData.username} onIonInput={handleChange} />
              </IonItem>
              <IonButton expand="block" className="register-button" routerLink="/login" onClick={handleRegister}>
                Register
              </IonButton>
              <IonRow className="login-link">
                <IonText>Already have an account? </IonText>
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
