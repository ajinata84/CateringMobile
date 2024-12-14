import { ChevronRight, Star } from "lucide-react";
import FoodCardSmall from "../FoodCardSmall";
import TagChip from "../TagChip";
import { useIonRouter } from "@ionic/react";

export default function SearchCard() {
  const router = useIonRouter();

  return (
    <div
      className="w-full  outline outline-1 outline-[#D5D5D5] active:bg-gray-100 transition-colors"
      onClick={() => {
        router.push("/catering/cateringid", "forward", "push");
      }}
    >
      <div className="flex flex-row items-center justify-between p-8 pb-0">
        <h1 className="font-semibold text-2xl">Catering Ikan Nila</h1>
        <ChevronRight />
      </div>
      <div className="flex flex-row gap-6 overflow-visible overflow-x-scroll p-4">
        <FoodCardSmall />
        <FoodCardSmall />
        <FoodCardSmall />
        <FoodCardSmall />
      </div>
      <div className="p-8 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-x-4 gap-y-3 flex-wrap">
          <TagChip tag="Pernikahan" />
          <TagChip tag="Acara" />
          <TagChip tag="Harian" />
        </div>
        <div className="items-center flex flex-row">
          <Star
            strokeWidth={0.5}
            fill="#FFF200"
            stroke="#FFF200"
            className="mr-2"
          />{" "}
          4.8
        </div>
      </div>
    </div>
  );
}
