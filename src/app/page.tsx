import Appetizers from "./(admin)/_components/Appetizers";
import CategoryFoods from "./(admin)/_components/CategoryFoods";

import Category from "./(admin)/_components/DishesCategory";

export default function Home() {
  const categories = [
    { _id: "1235123123", name: "Pizza" },
    { _id: "asd12d1212d", name: "Salads" },
    { _id: "asd12d1111212d", name: "Appetizer" },
  ];
  return (
    <div>
      {/* <Category /> */}
      {categories.map((category) => (
        <CategoryFoods catId={category._id} name={category.name} />
      ))}
      <Appetizers />
    </div>
  );
}
