import { AddFoodDialog } from "@/app/_components/AddFoodDialog";
import Page from "./Appetizers";
import Category from "./DishesCategory";
import CategoryFoods from "@/app/_components/CategoryFoods";

export default function Home() {
  return (
    <div>
      <Page />
      <Category />
      {/* <AddFoodDialog />
      <CategoryFoods /> */}
    </div>
  );
}
