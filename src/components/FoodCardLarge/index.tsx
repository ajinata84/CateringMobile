import { Star } from "lucide-react";

interface FoodCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

export default function FoodCardLarge({
  name,
  description,
  imageUrl,
}: FoodCardProps) {
  return (
    <div className="relative w-full mt-10">
      <div className="flex flex-row items-center gap-4 p-4">
        <div className="w-[50%] relative ">
          <img
            src={imageUrl}
            className="aspect-square w-full object-cover rounded-2xl "
            alt={name}
          />
        </div>
        <div className="relative w-[50%]">
          <h2 className="font-semibold text-xl w-full ">{name}</h2>
          <p className="text-[#424242] text-sm">{description}</p>
        </div>
      </div>
      <div className="w-full text-sm shadow-lg p-4 rounded-2xl absolute z-0 h-1/2 bottom-0 "></div>
    </div>
  );
}
