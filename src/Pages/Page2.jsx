import React, { useContext } from "react";
import Common_Header from "../components/Common_Header";
import Page2Footer from "../components/Page2Footer";
import { ThemeContextProvider } from "../comtextApi/ThemeContext";

const Page2 = () => {

  const {theme} = useContext(ThemeContextProvider)
  const Header_info = {
    mainHeading: "How can we help?",
    description:
      "From strategy to execution, we craft digital solutions that move your business forward.",
  };

  return (
    <>
      <div
      id="services"
      className={`${theme?'bg-black': 'bg-[#f6e5ff54]'} rounded-xl py-10 max-sm:py-6`}>
        <Common_Header data={Header_info} />
        <Page2Footer />
      </div>
    </>
  );
};

export default Page2;
