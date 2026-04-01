import { Mail, MoveRight, UserRound } from "lucide-react";
import React, { useContext } from "react";
import {ThemeContextProvider} from '../comtextApi/ThemeContext'
const Form = () => {

  const {theme} = useContext(ThemeContextProvider)

  return (
    <>
      <form className="flex items-center  flex-col gap-2 max-md:items-start ">
        <div className="w-[50%] grid grid-cols-2 max-md:w-full max-sm:grid-cols-1 max-sm:grid-rows-3 max-md:px-6 ">
          <div className="h-26 p-2 relative max-sm:col-span-2">
            <h1 className="pb-2 text-sm">Your Name</h1>
            <input
              type="text"
              className={`border w-[95%] py-3 rounded-md text-sm font-medium pl-11 pr-2 outline-0 border-gray-400 ${theme?'placeholder:text-white':'placeholder:text-gray-600'}
              max-sm:w-full
              `}
              placeholder="Enter Your Name"
            />
            <UserRound size={18} className="absolute top-12.5 left-5" />
          </div>
          <div className=" h-26 p-2 relative max-sm:col-span-2">
            <h1 className="pb-2 text-sm">Email id</h1>
            <input
              type="text"
              className={`border w-[95%] py-3 rounded-md text-sm font-medium pl-11 pr-2  border-gray-400 outline-0 ${theme?'placeholder:text-white':'placeholder:text-gray-600'}
              max-sm:w-full
              `}
              placeholder="Enter Your Email"
            />
            <Mail size={18} className="absolute top-12.5 left-5" />
          </div>
          <div className="max-sm:h-0 col-span-2 p-2">
            <h1 className="pb-2 text-sm">Message</h1>
            <textarea
              placeholder="Enter Your Message"
              className={`w-[98%] border h-44 border-gray-400 outline-0 rounded-md resize-none p-3 text-sm  ${theme?'placeholder:text-white':'placeholder:text-gray-600'}
              max-sm:w-full
              `}
            ></textarea>
          </div>
        </div>
        <div className="w-[50%] py-4 px-2 max-sm:relative max-sm:top-24 max-md:px-8">
          <button className="border px-8 gap-2 py-2 rounded-full flex text-sm font-semibold items-center bg-[#5044E5] text-white  ">Submit <span><MoveRight /></span></button>
        </div>
      </form>
    </>
  );
};

export default Form;
