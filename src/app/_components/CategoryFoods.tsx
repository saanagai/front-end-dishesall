"use client";
import { FoodCategoryType, FoodType } from "@/app/_components/_util/types";
import { AddFoodDialog } from "@/app/_components/AddFoodDialog";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";

const CategoryFoods = ({ name }: { name: FoodCategoryType }) => {
  console.log(name);
  const [foods, setFoods] = useState<FoodType[]>([]);
  const getFoods = async () => {
    const data = await fetch("http://localHost:4000/food");
    const jsonData = await data.json();
    setFoods(jsonData.data);
    console.log(jsonData);
  };
  useEffect(() => {
    // fetch() catId
    getFoods();
  }, []);
  return (
    <div>
      <div>
        <h2>{name.categoryName}</h2>
        <div className="flex gap-2 flex-wrap">
          <AddFoodDialog name={name.categoryName} />
          {foods.map((food, index) => (
            <div key={index}></div>
          ))}
        </div>
        <Dialog>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
          {foods?.map((food: FoodType, index: number) => {
            return (
              <div key={index}>
                <div>
                  <DialogTrigger>
                    <Pencil />
                  </DialogTrigger>
                  <p>{food.name}</p>
                  <p>{food.price}</p>
                </div>
                <p>{food.ingredietnts}</p>
              </div>
            );
          })}
        </Dialog>
      </div>
    </div>
  );
};
export default CategoryFoods;
