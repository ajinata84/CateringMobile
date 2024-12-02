import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  useIonRouter,
} from "@ionic/react";
import { home, newspaperOutline, personCircleOutline } from "ionicons/icons";
import React from "react";

export default function TabBar() {
  const router = useIonRouter();
  const hideTabs = [
    "/login",
    "/register",
    "/profile/edit-profile",
    "/purchase/cart",
    "/purchase/confirmation",
  ];
  const isTabHidden = hideTabs.includes(router.routeInfo.pathname);

  return (
    <>
      {!isTabHidden && (
        <IonTabBar slot="bottom">
          <IonTabButton tab="beranda" href="/tabs/beranda">
            <IonIcon icon={home} />
            <IonLabel>Beranda</IonLabel>
          </IonTabButton>
          <IonTabButton tab="aktivitas" href="/tabs/aktivitas">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>Aktivitas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profil" href="/tabs/profil">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      )}
    </>
  );
}
