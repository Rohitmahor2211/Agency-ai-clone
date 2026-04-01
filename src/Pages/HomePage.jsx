import React, { useContext, useLayoutEffect, useRef } from "react";
import ProfileCardBtn from "../components/ProfileCardBtn";
import bgi from "../assets/bgi.png";
import heroImg from "../assets/hero_img.png";
import { ThemeContextProvider } from "../comtextApi/ThemeContext";
import gsap from "gsap";
const HomePage = () => {
  const mainhead = useRef();
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(mainhead.current, {
  //       y: 30,
  //       delay: 0.5,
  //       duration: 0.5,
  //       ease: "power1.in",
  //     });
  //   });
  //   return () => ctx.revert();
  // });
  const { theme } = useContext(ThemeContextProvider);
  return (
    <div
      id="/"
      className={`pt-20 w-full bg-contain bg-no-repeat bg-top-left flex flex-col items-center over`}
      style={{ backgroundImage: `url(${theme == false && bgi})` }}
    >
      <ProfileCardBtn />
      <h1
        ref={mainhead}
        className={`text-[84px] font-medium w-[70%] py-8 text-center   leading-25 ${theme ? "text-zinc-100" : " text-[#364153]"}
        max-sm:text-4xl max-sm:py-4 max-sm:w-full  max-sm:leading-10 max-sm:px-4  max-md:leading-14 max-md:text-5xl max-md:w-full max-md:px-10 
        `}
      >
        Turning imagination into{" "}
        <span className="ml-2 bg-linear-to-r from-blue-800 to-indigo-400 bg-clip-text text-transparent">
          digital&nbsp;
        </span>{" "}
        impact.
      </h1>
      <p
        className={`text-center w-[40%] text-lg font-medium ${theme ? "text-gray-400" : " text-zinc-600"}
        max-md:w-full max-sm:px-10  max-md:px-20 
        `}
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>
      <img
        src={heroImg}
        alt=""
        className="p-6 pt-10 w-[80%] max-md:w-full max-sm:p-4 max-sm:pt-10 "
      />
    </div>
  );
};

export default HomePage;
