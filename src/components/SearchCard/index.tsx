import { ChevronRight, Star } from "lucide-react";
import FoodCardSmall from "../FoodCardSmall";
import TagChip from "../TagChip";
import { useIonRouter } from "@ionic/react";
import { CateringSearch } from "@/types/interfaces";

export default function SearchCard({cateringResult}: {cateringResult: CateringSearch}) {
  const router = useIonRouter();

  return (
    <div
      className="w-full  outline outline-1 outline-[#D5D5D5] active:bg-gray-100 transition-colors"
      onClick={() => {
        router.push(`/catering/${cateringResult.id}`, "forward", "push");
      }}
    >
      <div className="flex flex-row items-center justify-between p-8 pb-0">
        <h1 className="font-semibold text-2xl">{cateringResult?.nama}</h1>
        <ChevronRight />
      </div>
      <div className="flex flex-row gap-6 overflow-visible overflow-x-scroll p-4">
        {cateringResult?.makanan.map((food) => (
          <FoodCardSmall
            key={food.id}
            name={food.nama}
            desc={food.deskripsi}
            imgUrl={food.imageUrl}
          />
        ))}
      </div>
      <div className="p-8 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-x-4 gap-y-3 flex-wrap">
          {cateringResult?.kategoris.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
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
