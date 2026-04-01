import React from "react";
import Common_Header from "../components/Common_Header";
import Team_member_card from "../components/Team_member_card";
import Team_Members_DataHolder from "../components/Team_Members_DataHolder";
const Page4 = () => {
  const Header_info = {
    mainHeading: "Meet the team",
    description:
      "A passionate team of digital experts dedicated to your brands success.",
  };

  return (
    <>
      <div 
      className="pb-20 max-md:pb-2">
        <Common_Header data={Header_info} />
        <Team_Members_DataHolder />
      </div>
    </>
  );
};

export default Page4;
