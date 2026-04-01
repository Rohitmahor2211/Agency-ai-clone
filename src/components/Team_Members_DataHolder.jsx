import React from "react";
import Team_member_card from "./Team_member_card";
import Team_member_pic_1 from "../assets/Team_member1.jpg";
import Team_member_pic_2 from "../assets/Team_member2.jpg";
import Team_member_pic_3 from "../assets/Team_member3.jpg";
import Team_member_pic_4 from "../assets/Team_member4.jpg";
import Team_member_pic_5 from "../assets/Team_member5.jpg";
import Team_member_pic_6 from "../assets/Team_member6.jpg";
import Team_member_pic_7 from "../assets/Team_member7.jpg";
import Team_member_pic_8 from "../assets/Team_member8.jpg";
const Team_Members_DataHolder = () => {
  const userInfo = [
    {
      profilePic: Team_member_pic_1,
      name: "Haley Carter",
      role: "CEO & founde",
    },
    {
      profilePic: Team_member_pic_2,
      name: "James Walker",
      role: "Ads manager",
    },
    {
      profilePic: Team_member_pic_3,
      name: "Jessica Morgan",
      role: "Vice president",
    },
    {
      profilePic: Team_member_pic_4,
      name: "Ashley Bennett",
      role: "Marketing & sales",
    },
    {
      profilePic: Team_member_pic_5,
      name: "Emily Parker",
      role: "Content marketer",
    },
    {
      profilePic: Team_member_pic_6,
      name: "Ryan Mitchell",
      role: "Content writer",
    },
    {
      profilePic: Team_member_pic_7,
      name: "Megan Brooks",
      role: "Performance manager",
    },
    {
      profilePic: Team_member_pic_8,
      name: "Amber Foster",
      role: "Senior writer",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center px-60 gap-5 max-sm:px-20 max-md:px-2 ">
        {userInfo.map((data,i) => {
           return <Team_member_card key={i} info={data}/>;
        })} 
      </div>
    </>
  );
};

export default Team_Members_DataHolder;
