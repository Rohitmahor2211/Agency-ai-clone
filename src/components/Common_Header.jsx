import React, { useContext } from "react";
import {ThemeContextProvider} from '../comtextApi/ThemeContext'
const Common_Header = ({ data }) => {
  const { mainHeading, description } = data;
  const {theme} = useContext(ThemeContextProvider)
  return (
    <div className="flex flex-col items-center gap-8 py-12 ">
      <h1 className={`text-5xl font-medium ${theme?"text-gray-200":'text-[#364153]'} max-sm:text-3xl `}>{mainHeading}</h1>
      <p className={`w-[34%] text-center font-medium text-base ${theme?'text-zinc-400':'text-gray-600'}
      max-md:w-full max-sm:px-10 max-md:px-28
      `}>{description}</p>
    </div>
  );
};

export default Common_Header;
