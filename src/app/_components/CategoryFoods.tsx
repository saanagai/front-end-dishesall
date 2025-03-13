"use client";
import { FoodType } from "@/app/_components/_util/types";
import { AddFoodDialog } from "@/app/_components/AddFoodDialog";
import { useEffect, useState } from "react";

const CategoryFoods = ({ catId, name }: { catId: string; name: string }) => {
  const [foods, setFoods] = useState<FoodType[]>([]);
  useEffect(() => {
    // fetch() catId
    //setFoods
  }, [catId]);
  return (
    <div>
      <h2>{name}</h2>
      <div className="flex gap-2 flex-wrap">
        <AddFoodDialog name={name} />
        {foods.map((food, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};
export default CategoryFoods;
