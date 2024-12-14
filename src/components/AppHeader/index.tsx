import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle } from "@ionic/react";
import { ChevronLeft } from "lucide-react";
import React from "react";

export default function AppHeader({ title }: { title?: string }) {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonButton
            fill="default"
            color="light"
            className="text-black shadow-none bg-white"
            onClick={() => window.history.back()}
            routerDirection="back"
          >
            <ChevronLeft />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}
