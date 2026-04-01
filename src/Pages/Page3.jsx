import React from "react";
import Common_Header from "../components/Common_Header";
import Company_card from "../components/Company_card";

const Page3 = () => {
  const Header_info = {
    mainHeading: "Our latest work",
    description:
      "From strategy to execution, we craft digital solutions that move your business forward.",
  };
  return (
    <div 
    id="our-work"
    className="pb-10 max-sm:pb-2 pt-10 max-md:pt-2">
      <Common_Header data={Header_info} />
      <div className="flex justify-center gap-6 py-2 max-sm:flex-col max-sm:gap-0 max-md:flex-wrap">
        <Company_card />
      </div>
    </div>
  );
};

export default Page3;
