import Footer from "./_components/Footer";
import { Header } from "./_components/Header";

export default function Home() {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <img src="/main.png" alt="" />
      <div>
        <h3 className="font-semibold text-lg mt-5 px-8 ">Categories</h3>
        {/* <CategoryFoods /> */}
      </div>
      <div>{/* <h3>{name}</h3> */}</div>
      <Footer />
    </div>
  );
}
