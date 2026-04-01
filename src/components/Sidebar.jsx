import React, { useContext, useEffect } from "react";
import { ThemeContextProvider } from "../comtextApi/ThemeContext";
import { X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(ThemeContextProvider);
  return (
    <>
      <div
        className={`h-screen w-[46%] right-0
         bg-[#5044E5] fixed z-40 transition-all 
        duration-200 ease-in max-md:w-[36%]
            ${sidebar ? "translate-x-0" : "translate-x-full"}
            `}
      >
        <div className="py-4 flex justify-end px-4">
          <X
            onClick={() => {
              setSidebar(false);
            }}
          />
        </div>
        <div className="flex flex-col py-6 px-6 gap-4 font-medium">
          <HashLink
            smooth
            to="/#"
            className="border-b border-transparent hover:border-white"
            onClick={() => {
              setSidebar(false);
            }}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#services"
            className="border-b border-transparent hover:border-white"
            onClick={() => {
              setSidebar(false);
            }}
          >
            Service
          </HashLink>
          <HashLink
            smooth
            to="/#our-work"
            className="border-b border-transparent hover:border-white"
            onClick={() => {
              setSidebar(false);
            }}
          >
            Our work
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className="border-b border-transparent hover:border-white"
            onClick={() => {
              setSidebar(false);
            }}
          >
            Contact Us
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
