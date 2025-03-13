import { NomNomLogo } from "@/app/_components/NomNomLogo";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-auto h-auto bg-black text-white py-20 ">
      <div className="w-auto h-16 bg-red-600 px-20 py-3 font-bold text-[20px]">
        <div className="flex gap-7 animate-scroll">
          {Array.from({ length: 6 }, (_, i) => (
            <h2 key={i} className="text-[20px] text-white">
              Fresh fast delivered
            </h2>
          ))}
        </div>
      </div>
      <div className="flex gap-48 mt-20 px-20 ">
        <div>
          <NomNomLogo />
          <p>NomNom</p>
          <p className="text-[12px] w-20">Swift delivery</p>
        </div>
        <div className="w-28">
          <p>NOMNOM</p>
          <p>Home</p>
          <p>Contact us</p>
          <p>Delivery zone</p>
        </div>
        <div>
          <p>MENU</p>
          <p>Appertizers</p>
          <p>Salads</p>
          <p>Pizzas</p>
          <p>Main Dishes</p>
          <p>Desserts</p>
        </div>
        <div>
          <p>Side dish</p>
          <p>Brunch</p>
          <p>Desserts</p>
          <p>Beverages</p>
          <p>Fish & Sea foods</p>
        </div>
        <div className="flex gap-3">
          <div className="size-6 rounded-full bg-white fill-black">
            <Facebook className="fill-black" />
          </div>
          <Instagram />
        </div>
        <div className=" border-t-4 w-[100vh] border-solid border-x-white"></div>
      </div>
    </div>
  );
};
export default Footer;
