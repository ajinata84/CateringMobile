import { IonButton, IonContent, IonPage, useIonRouter } from "@ionic/react";
import { useEffect, useState } from "react";
import FoodCardLarge from "@/components/FoodCardLarge";
import AppHeader from "@/components/AppHeader";
import { useParams } from "react-router";
import { Paket } from "@/types/interfaces";
import axios from "axios";

import "./paket.css";
import TimeIcon from "@/components/TimeIcon";
import { useCart } from "@/hooks/use-cart";
import TagChip from "@/components/TagChip";

export default function PaketView() {
  const { cateringid, paketid } = useParams<{
    cateringid: string;
    paketid: string;
  }>();

  const router = useIonRouter();
  const currentPath = router.routeInfo.pathname;

  const [paket, setPaket] = useState<Paket | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get<Paket>(`http://localhost:3000/catering/paket/${paketid}`)
      .then((response) => {
        setPaket(response.data);
      })
      .catch((error) => {
        console.error("Get Paket Failed:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [paketid]);

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

  if (!paket) {
    return (
      <IonPage>
        <AppHeader />
        <IonContent>
          <div className="flex items-center justify-center h-full">
            Paket not found
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <AppHeader />
      <IonContent>
        <div className="p-8 mb-20">
          <h1 className="font-semibold text-3xl">{paket.nama}</h1>
          <div className="flex flex-row justify-between mt-4 items-center">
            <span className="font-semibold !mt-0 ">
              {`Rp. ${paket.harga.toLocaleString()}`}
            </span>
            <div className="flex flex-row w-full justify-end gap-2">
              {<TagChip tag={paket.kategori} />}
              <div className="w-[30%] rounded-full bg-[#597445] text-white text-center p-2">
                {paket.durasi} Hari
              </div>
            </div>
          </div>

          {paket.Schedules.map((schedule) => {
            const hour = parseInt(schedule.waktu.split(":")[0]);
            const timeLabel =
              hour < 10 ? "Pagi" : hour < 18 ? "Siang" : "Malam";

            return (
              <div key={schedule.id} className="mt-2">
                <div className="space-y-1">
                  <span className="flex flex-row items-center space-x-4">
                    <span className="font-semibold !mt-0">{timeLabel}</span>
                    <span className="text-sm">{schedule.waktu}</span>
                    <TimeIcon hour={hour} />
                  </span>
                </div>

                {schedule.ScheduleFoods.map((food) => (
                  <FoodCardLarge
                    key={food.id}
                    name={food.makanan.nama}
                    description={food.makanan.deskripsi}
                    imageUrl={food.makanan.imageUrl}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {currentPath.includes("paket") && (
          <IonButton
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-cart-button capitalize"
            onClick={() => addToCart(paket)}
          >
            Tambah Ke Keranjang
          </IonButton>
        )}
      </IonContent>
    </IonPage>
  );
}
