
import Appetizers from "./_components/Appetizers";
import { CloudinaryUpload } from "./_components/CloudinaryUpload";
import { Category } from "./_components/DishesCategory";

export default function Home() {
  return <div>
    <Category />
    <Appetizers />
    <CloudinaryUpload />
  </div>;
}
