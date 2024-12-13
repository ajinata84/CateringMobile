import React from "react";

export default function FoodCardSmall() {
  const imgUrl =
    "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="relative w-40 pt-8 mt-4">
      <div className=" w-40 text-sm shadow-lg p-4 rounded-2xl relative pt-[6.5rem]">
        <img
          src={imgUrl}
          className="h-32 w-32 object-cover rounded-2xl absolute top-[-2rem]"
        />
        <h2 className="font-medium text-lg">Capjay Mantab</h2>
        <p className="text-[#424242] text-xs">
          Capjay yang disajikan dengan cinta yang tulus
        </p>
      </div>
    </div>
  );
}
