import React, { useContext } from "react";
import workMobileImg from "../assets/worK_mobile_app.png";
import work_fitness_app from "../assets/work_fitness_app.png";
import work_dashboard_management from "../assets/work_dashboard_management.png";
import {ThemeContextProvider} from '../comtextApi/ThemeContext'
const Company_card = () => {
    const {theme} = useContext(ThemeContextProvider)
  const cardInfo = [
    {
      imageUrl:  workMobileImg ,
      mainHead: "Mobile app marketing",
      companyCardInfo:
        "We turn bold ideas into powerful digital solutions that connect, engage..",
    },
    {
      imageUrl:  work_dashboard_management ,
      mainHead: "Dashboard management",
      companyCardInfo: "We help you execute your plan and deliver results.",
    },
    {
      imageUrl:  work_fitness_app ,
      mainHead: "Fitness app promotion",
      companyCardInfo:
        "We help you create a marketing strategy that drives results.",
    },
  ];

  return (
    <>
      {cardInfo.map((data,i) => {
        return (
          <>
            <div key={i} className="w-82 max-sm:w-full max-sm:p-4" >
              <img src={data.imageUrl} alt="" />
              <div className="py-4 px-2">
                <h1 className="font-semibold text-base ">{data.mainHead}</h1>
                <p className={`py-2.5 text-sm font-normal ${theme?'text-zinc-400 ':'text-zinc-600'}pr-10`}>{data.companyCardInfo}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Company_card;
