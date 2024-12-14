import { Star } from "lucide-react";
import React from "react";

export default function FoodCardLarge() {
  const imgUrl =
    "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="relative w-full pt-12 mt-16">
      <div className=" w-full text-sm shadow-lg p-4 rounded-2xl relative ">
        <div className="flex flex-row items-start gap-4">
          <div className="w-[50%] relative pt-24">
            <img
              src={imgUrl}
              className="aspect-square object-cover rounded-2xl absolute top-[-5rem]"
              alt="Capjay"
            />
          </div>
          <div className="relative w-[50%]">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[-2.5rem] bg-white shadow-md p-2 rounded-xl px-3">
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

            <h2 className="font-semibold mt-0 text-xl w-full pt-4">
              Capjay Mantab Jiwa
            </h2>
          </div>
        </div>
        <p className="text-[#424242] text-sm">
          Capjay yang disajikan dengan cinta yang tulus. Berisikan brokoli kol,
          udang, dan berbagai macam sayuran sehat lain.
        </p>
      </div>
    </div>
  );
}
