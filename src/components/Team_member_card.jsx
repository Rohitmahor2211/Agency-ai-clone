import React, { useContext } from "react";
import Team_member1 from "../assets/Team_member1.jpg";
import { ThemeContextProvider } from "../comtextApi/ThemeContext";
const Team_member_card = ({ info }) => {
  const {theme} = useContext(ThemeContextProvider)
  return (
    <>
      <div className={`min-w-60 flex items-center gap-5 border py-3 px-4  rounded-lg
        ${theme?'bg-[#101828]/90 backdrop-blur-lg border border-white/20 transition-all duration-400 text-white shadow-white/5':'border-gray-200 transition-all duration-400 shadow-xl shadow-gray-100 '}
          max-sm:min-w-40 max-sm:flex-col
        `}>
        <img src={info.profilePic} alt="" className="h-12 rounded-full" />
        <div>
          <h1 className="text-sm">{info.name}</h1>
          <p className="text-xs py-0.5">{info.role}</p>
        </div>
      </div>
    </>
  );
};

export default Team_member_card;
