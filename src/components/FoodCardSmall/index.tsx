import React from "react";

export default function FoodCardSmall({
  name,
  desc,
  imgUrl,
}: {
  name: string;
  desc: string;
  imgUrl: string;
}) {
  return (
    <div className="relative w-40 pt-8 mt-4">
      <div className=" w-40 text-sm shadow-lg p-4 rounded-2xl relative pt-[6.5rem]">
        <img
          src={imgUrl}
          className="h-32 w-32 object-cover rounded-2xl absolute top-[-2rem]"
        />
        <h2 className="font-medium text-lg">{name}</h2>
        <p className="text-[#424242] text-xs">
          {desc}
        </p>
      </div>
    </div>
  );
}
