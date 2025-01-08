import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  useIonRouter,
} from "@ionic/react";
import { ChevronLeft } from "lucide-react";
import "./header.css";
import { useCart } from "@/hooks/use-cart";

export default function AppHeader({ title }: { title?: string }) {
  const router = useIonRouter();
  const { items } = useCart();

  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="start">
          <IonButton
            fill="default"
            color="light"
            shape="round"
            className="text-black shadow-none bg-white rounded-lg"
            onClick={() => window.history.back()}
            routerDirection="back"
          >
            <ChevronLeft />
          </IonButton>
        </IonButtons>
        {router.routeInfo.pathname != "/purchase/cart" &&
          router.routeInfo.pathname != "/purchase/confirmation" &&
          items.length > 0 && (
            <IonButtons slot="end">
              <IonButton
                fill="solid"
                color="primary"
                shape="round"
                className="cart-button capitalize"
                onClick={() => router.push("/purchase/cart")}
              >
                <span className="font-normal px-2">
                  {items.length} Items In cart
                </span>
              </IonButton>
            </IonButtons>
          )}
      </IonToolbar>
    </IonHeader>
  );
}
