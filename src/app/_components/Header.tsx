import { Button } from "@/components/ui/button";
import { NomNomLogo } from "./NomNomLogo";
import { LayoutDashboard, Settings, TruckIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className=" flex flex-col gap-20 w-[15%] min-h-[100vh] bg-slate-100 p-10">
      <div>
        <div className="flex gap-5">
          <NomNomLogo />
          <div>
            <p className="font-semibold text-[22px]">NomNom</p>
            <p>Swit delivery</p>
          </div>
        </div>
      </div>

      <Button className="rounded-full">
        <LayoutDashboard /> Food menu
      </Button>
      <Button variant="secondary" className="bg-none">
        <TruckIcon />
        Order
      </Button>
      <Button variant="secondary">
        <Settings />
        Settings
      </Button>
    </div>
  );
};
