import { NomNomLogo } from "@/app/_components/NomNomLogo";
import { LucideShoppingCart, ShoppingCart, UserCircle } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-100% h-auto bg-black flex justify-around">
      <div className=" flex gap-3 px-10 py-2">
        <NomNomLogo />
        <div className=" text-white">
          <div className="flex">
            <p className="font-semibold ">Nom</p>
            <p className="font-semibold text-red-600">Nom</p>
          </div>
          <p className="text-[10px]">Swift delivery</p>
        </div>
      </div>
      <div className="flex gap-3">
        <input
          type=""
          className="rounded-lg w-40 text-[10px]"
          placeholder="Delivery address: Add Location <cheveron right/>"
        />
        <div className="size-7 rounded-full bg-white flex justify-center items-center">
          <LucideShoppingCart className=" size-6 rounded-full fill-black" />
        </div>
        <div className="size-7 rounded-full bg-red-600 flex justify-center items-center">
          <UserCircle />
        </div>
      </div>
    </div>
  );
};
