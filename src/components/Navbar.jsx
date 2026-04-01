import React, { useContext, useLayoutEffect, useRef } from "react";
import Logo from "./Logo";
import Navitems from "./Navitems";
import NavBarConnectButton from "./NavBarConnectButton";
import { ThemeContextProvider } from "../comtextApi/ThemeContext";
import Sidebar from "./Sidebar";
import gsap from "gsap";

const Navbar = () => {
  const { theme } = useContext(ThemeContextProvider);

  const navbar = useRef()
  // useLayoutEffect(()=>{
  //   const ctx = gsap.context(()=>{
  //     gsap.from(navbar.current,{
  //       yPercent:-100,
  //       duration:1,
  //       opacity:0,
  //       ease : "power1"
        
  //     })
  //   })
  //   return ()=> ctx.revert()
  // },[])



  return (
    <>
      <div
      ref={navbar}
        className={`flex justify-evenly items-center py-4 fixed top-0 w-full z-30 max-md:justify-between max-md:px-6 
                backdrop-blur-md  transition-all ${theme ? "bg-[#0C111C]/70" : " bg-white/20"}`}
      >
        <Logo />
        <Navitems />
        <NavBarConnectButton />
      </div>
        <Sidebar  />
    </>
  );
};

export default Navbar;
