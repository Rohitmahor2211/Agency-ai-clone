import React, { useContext } from "react";
import mainLogo from "../assets/svgexport-1.svg";
import Logo from "./Logo";
import { ThemeContextProvider } from "../comtextApi/ThemeContext";
const FooterLeftSide = () => {
  const {theme} = useContext(ThemeContextProvider)
  return (
    <>
      <div className="w-[50%] p-1 max-sm:w-full max-md:w-[80%]" >
        <Logo />
        <p className="text-sm font-medium py-2 pt-4 pr-26">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
        <div className="flex gap-4 text-sm font-medium py-2 max-md:gap-6">
          <p>Home</p>
          <p>Service</p>
          <p>Our Work</p>
          <p>Contact Us</p>
        </div>
      </div>
    </>
  );
};

export default FooterLeftSide;
