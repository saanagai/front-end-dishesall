import { Button } from "@/components/ui/button";
import { NomNomLogo } from "../../_components/NomNomLogo";
import { LayoutDashboard, Settings, TruckIcon } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" flex flex-col gap-20 w-[15%] min-h-[100vh] bg-slate-100 p-10">
      <Link href="/">
        <div>
          <div className="flex gap-5">
            <NomNomLogo />
            <div>
              <p className="font-semibold text-[22px]">NomNom</p>
              <p>Swit delivery</p>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/FoodMenu">
        <Button className="rounded-full">
          <LayoutDashboard /> Food menu
        </Button>
      </Link>
      <Link href="/orders">
        <Button variant="secondary" className="bg-none">
          <TruckIcon />
          Orders
        </Button>
      </Link>
      <Button variant="secondary">
        <Settings />
        Settings
      </Button>
    </div>
  );
};
