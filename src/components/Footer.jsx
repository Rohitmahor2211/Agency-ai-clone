import React from "react";
import FooterLeftSide from "./FooterLeftSide";
import FooterRightSide from "./FooterRightSide";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <div className="w-[80%] m-auto pt-16 py-4  max-md:bg-[#101828] max-md:w-full max-md:px-4
       max-md:text-gray-400 max-md:mt-16 max-md:pt-12">
        <div className="flex justify-around max-md:flex-col">
          <FooterLeftSide />
          <FooterRightSide />
        </div>
        <FooterBottom />
      </div>
    </>
  );
};

export default Footer;
