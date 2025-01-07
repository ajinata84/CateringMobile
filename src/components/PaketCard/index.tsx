import { useIonRouter } from "@ionic/react";
import { LucideSun, LucideMoon, LucideSunrise } from "lucide-react";
import React from "react";
import { Paket } from "@/types/interfaces";
import { getScheduleTimes } from "@/lib/utils";

interface PaketCardProps {
  paketRoute: string;
  pakets: Paket[];
}

export default function PaketCard({ paketRoute, pakets }: PaketCardProps) {
  const router = useIonRouter();

  const getFoodImages = (paket: Paket) => {
    const images: string[] = [];
    paket.Schedules.forEach((schedule) => {
      schedule.ScheduleFoods.forEach((food) => {
        if (!images.includes(food.makanan.imageUrl)) {
          images.push(food.makanan.imageUrl);
        }
      });
    });
    return images.slice(0, 4);
  };

  return (
    <div className="space-y-4">
      {pakets.map((paket) => {
        const foodImages = getFoodImages(paket);
        const { morning, day, evening } = getScheduleTimes(paket);

        return (
          <div
            key={paket.id}
            className="flex flex-row outline outline-2 outline-[#D5D5D5] active:bg-gray-100 h-72"
            onClick={() => {
              router.push(`${paketRoute}/paket/${paket.id}`, "forward", "push");
            }}
          >
            <div className="w-[55%] p-4 flex flex-col">
              <h1 className="text-xl font-semibold">{paket.nama}</h1>
              <div className="mt-2 space-y-1 mb-4">
                <ul className="text-sm">
                  {morning && (
                    <li className="flex items-center gap-2">
                      <LucideSunrise size={13} color="#FFA500" />
                      {morning}
                    </li>
                  )}
                  {day && (
                    <li className="flex items-center gap-2">
                      <LucideSun size={13} color="#FFD700" /> {day}
                    </li>
                  )}
                  {evening && (
                    <li className="flex items-center gap-2">
                      <LucideMoon size={13} color="#6A5ACD" /> {evening}
                    </li>
                  )}
                </ul>
              </div>
              <span className="text-xs">Items List:</span>
              <div className="flex flex-col gap-1 ">
                {paket.Schedules[0]?.ScheduleFoods.slice(0, 3).map((food) => (
                  <span key={food.id}>{food.makanan.nama}</span>
                ))}
                {paket.Schedules[0]?.ScheduleFoods.length > 3 && (
                  <span className="text-gray-500 font-medium">
                    +{paket.Schedules[0].ScheduleFoods.length - 3} more items
                  </span>
                )}
              </div>

              <span className="font-semibold !mt-2">
                Rp. {paket.harga.toLocaleString()}
              </span>
            </div>
            <div
              className={`w-[45%] grid ${
                foodImages.length === 3 ? "grid-rows-2" : "grid-rows-2"
              }`}
            >
              {foodImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="thumbnail"
                  className={`w-full h-full object-cover
                    ${
                      foodImages.length === 2 && index === 0 ? "row-span-1" : ""
                    }
                    ${
                      foodImages.length === 2 && index === 1 ? "row-span-1" : ""
                    }
                    ${
                      foodImages.length === 3 && index === 2 ? "col-span-2" : ""
                    }`}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
