import AppHeader from "@/components/AppHeader";
import PaketCard from "@/components/PaketCard";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import { MapPin, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Catering as ICatering } from "@/types/interfaces";
import axios from "axios";

export default function Catering() {
  const router = useIonRouter();
  const { cateringid } = useParams<{ cateringid: string }>();
  const [catering, setCatering] = useState<ICatering | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<ICatering>(`http://localhost:3000/catering/${cateringid}`)
      .then((response) => {
        setCatering(response.data);
      })
      .catch((error) => {
        console.error("Get Catering Failed:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cateringid]);

  if (loading) {
    return (
      <IonPage>
        <AppHeader />
        <IonContent>
          <div className="flex items-center justify-center h-full">
            Loading...
          </div>
        </IonContent>
      </IonPage>
    );
  }

  if (!catering) {
    return (
      <IonPage>
        <AppHeader />
        <IonContent>
          <div className="flex items-center justify-center h-full">
            Catering not found
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <AppHeader title={catering.nama}/>
      <IonContent>
        <img
          src={catering.imageUrl}
          className="w-full max-h-[30vh] object-cover"
          alt={`${catering.nama}-thumbnail`}
        />
        <div className="p-4 space-y-4">
          <h1 className="text-4xl font-semibold">{catering.nama}</h1>
          <div className="flex flex-row items-center gap-4">
            <MapPin />
            {catering.alamat}
          </div>
          <div className="flex flex-row items-center gap-4">
            <Phone />
            {catering.hp}
          </div>
          <p className="text-gray-600">{catering.deskripsi}</p>
        </div>
        <PaketCard
          paketRoute={router.routeInfo.pathname}
          pakets={catering.Pakets}
        />
        <div className="mb-36"></div>
      </IonContent>
    </IonPage>
  );
}
