import Appetizers from "./(admin)/_components/Appetizers";
import CategoryFoods from "./_components/CategoryFoods";

import Category from "./(admin)/_components/DishesCategory";
import { FoodCategoryType } from "./_components/_util/types";

export default function Home() {
  const categories: FoodCategoryType[] = [
    { _id: "1235123123", categoryName: "Pizza" },
    { _id: "asd12d1212d", categoryName: "Salads" },
    { _id: "asd12d1111212d", categoryName: "Appetizer" },
  ];

  return (
    <div>
      {/* <Category /> */}
      {categories.map((category) => (
        <CategoryFoods name={category} />
      ))}
      <Appetizers />
    </div>
  );
}
