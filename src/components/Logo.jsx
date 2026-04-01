import React, { useContext } from "react";
import logo from "../assets/svgexport-1.svg";
import themeLogo from "../assets/themeLogo.svg";
import { ThemeContextProvider } from "../comtextApi/ThemeContext";
const Logo = () => {
  const { theme } = useContext(ThemeContextProvider);
  return (
    <>
      <div>
        <img src={theme ? themeLogo : logo} alt="" className=""/>
      </div>
    </>
  );
};

export default Logo;
