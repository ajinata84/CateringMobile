import { IonCard, IonCardContent, useIonRouter } from "@ionic/react";
import "./list.css";
import { LucideSun, LucideMoon, LucideSunrise } from "lucide-react";
import { Catering } from "@/tabs/Beranda";

function getRangeTimeString(hours: number[]) {
  if (!hours.length) return "";
  const minHour = Math.min(...hours);
  const maxHour = Math.max(...hours);
  return `${String(minHour).padStart(2, "0")}:00 - ${String(maxHour).padStart(
    2,
    "0"
  )}:00`;
}

function CateringList({ caterings }: { caterings: Catering[] }) {
  const router = useIonRouter();

  return (
    <>
      {caterings.map((cat) => {
        const prices = cat.Pakets.map((p) => p.harga);
        const minPrice = prices.length ? Math.min(...prices) : 0;
        const maxPrice = prices.length ? Math.max(...prices) : 0;

        const morning: number[] = [];
        const day: number[] = [];
        const evening: number[] = [];

        cat.Pakets.forEach((paket) => {
          paket.Schedules.forEach((schedule) => {
            const hour = parseInt(schedule.waktu.split(":")[0], 10);
            if (hour < 10) morning.push(hour);
            else if (hour < 18) day.push(hour);
            else evening.push(hour);
          });
        });

        const morningRange = getRangeTimeString(morning);
        const dayRange = getRangeTimeString(day);
        const eveningRange = getRangeTimeString(evening);

        return (
          <IonCard
            className="catering-card"
            key={cat.id}
            onClick={() => {
              router.push(`/catering/${cat.id}`, "forward", "push");
            }}
          >
            <IonCardContent className="!p-0">
              <div className="catering-card-inner">
                <div className="image-container">
                  <img
                    src={cat.imageUrl}
                    alt={cat.nama}
                    className="catering-image"
                  />
                  <div className="rating-container">
                    <span className="rating-icon">★</span>
                    <span>{cat.rating}</span>
                  </div>
                </div>
                <div className="catering-content">
                  <h1 className="catering-title">{cat.nama}</h1>
                  <p className="catering-price">
                    Rp{minPrice.toLocaleString()} - Rp
                    {maxPrice.toLocaleString()}
                  </p>
                  <div className="delivery-schedule">
                    <h3 className="schedule-title">Jadwal Pengiriman</h3>
                    <ul>
                      {morningRange && (
                        <li>
                          <LucideSunrise size={13} color="#FFA500" />
                          {morningRange}
                        </li>
                      )}
                      {dayRange && (
                        <li>
                          <LucideSun size={13} color="#FFD700" /> {dayRange}
                        </li>
                      )}
                      {eveningRange && (
                        <li>
                          <LucideMoon size={13} color="#6A5ACD" />
                          {eveningRange}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        );
      })}
    </>
  );
}

export default CateringList;
