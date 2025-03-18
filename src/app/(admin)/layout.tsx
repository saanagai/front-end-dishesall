import React, { ReactNode } from "react";
import { SideBar } from "./_components/SideBar";

type Props = { children: ReactNode };

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};
export default Layout;
