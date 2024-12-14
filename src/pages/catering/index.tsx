import AppHeader from "@/components/AppHeader";
import PaketCard from "@/components/PaketCard";
import { IonButton, IonContent, IonPage, useIonRouter } from "@ionic/react";
import { ChevronLeft, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Catering() {
  const router = useIonRouter();

  const path = router.routeInfo.pathname;

  const dummyImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Gurame_bakar_kecap_2.JPG/1200px-Gurame_bakar_kecap_2.JPG";
  return (
    <IonPage>
      <AppHeader />
      <IonContent>
        <img
          src={dummyImage}
          className="w-full max-h-[30vh] object-cover"
          alt="catering-thumbnail"
        />
        <div className="p-4 space-y-4">
          <h1 className="text-4xl font-semibold">Catering Bu Yayuk</h1>
          <div className="flex flex-row items-center gap-4">
            <MapPin />
            Pakisaji
          </div>
          <div className="flex flex-row items-center gap-4">
            <Phone />
            08510*********
          </div>
        </div>
        <PaketCard paketRoute={path} />
      </IonContent>
    </IonPage>
  );
}
