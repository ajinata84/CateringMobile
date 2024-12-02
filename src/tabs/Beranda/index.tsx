import CateringList from "@/components/CateringList";
import SearchFilters from "@/components/SearchFilters";
import { IonContent, IonPage } from "@ionic/react";

import React from "react";

export default function Beranda() {
  return (
    <IonPage>
      <IonContent>
        <div className="p-8">
          <SearchFilters />
          <CateringList />
        </div>
      </IonContent>
    </IonPage>
  );
}
