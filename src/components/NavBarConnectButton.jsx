import React, { useContext, useEffect } from "react";
import ThemeButton from "./ThemeButton";
import { MoveRight } from "lucide-react";
import { RiMenu3Line } from "@remixicon/react";
import { ThemeContextProvider } from "../comtextApi/ThemeContext";

const NavBarConnectButton = () => {
  const { sidebar, setSidebar } = useContext(ThemeContextProvider);
  return (
    <>
      <div className="flex items-center gap-4 ">
        <ThemeButton />
        <button className="flex items-center gap-2 px-5 py-1.5 rounded-4xl bg-blue-700 text-white max-md:hidden">
          <span className="">Connect</span> <MoveRight size={20} />
        </button>
        <div className="hidden max-md:block ">
          <RiMenu3Line
            onClick={() => {
              setSidebar(true);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NavBarConnectButton;
