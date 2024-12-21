import CateringList from "@/components/CateringList";
import SearchFilters from "@/components/SearchFilters";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
  useIonRouter,
} from "@ionic/react";
import { cartOutline } from "ionicons/icons";

import "./beranda.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Catering } from "@/types/interfaces";

export default function Beranda() {
  const router = useIonRouter();

  const [caterings, setCaterings] = useState<Catering[]>([]);

  useEffect(() => {
    axios
      .get<Catering[]>("http://localhost:3000/catering")
      .then((response) => {
        setCaterings(response.data);
      })
      .catch((error) => console.error("Get Caterings Failed:", error));
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className="p-8">
          <SearchFilters />
          <CateringList caterings={caterings} />
        </div>
        {router.routeInfo.pathname === "/tabs/beranda" && (
          <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton
              onClick={() => router.push("/purchase/cart", "forward", "push")}
            >
              <IonIcon icon={cartOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
}
