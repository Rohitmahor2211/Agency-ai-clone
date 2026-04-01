import React, { useContext } from "react";
import { ThemeContextProvider } from "../comtextApi/ThemeContext";
const Card = ({ content }) => {
  const { theme } = useContext(ThemeContextProvider);
  return (
    <div
      className={`w-[33%] py-8 border flex items-center rounded-xl px-4 gap-6 max-md:w-full 
        ${theme ? "bg-[#101828]/90 backdrop-blur-lg border border-white/30 shadow-2xl text-white" :
        "bg-white rounded-md border-gray-300 text-zinc-600"} `}
    >
      <img
        src={content.imgLogo}
        alt=""
        className={`rounded-full border-6 ${theme?'border-gray-600':'border-gray-300'}`}
      />
      <div className=" font-medium">
        <p>{content.mainhead}</p>
        <p className="pt-2 text-sm">{content.info}</p>
      </div>
    </div>
  );
};

export default Card;
