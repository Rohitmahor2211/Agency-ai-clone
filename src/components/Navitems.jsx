import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navitems = () => {
  return (
    <>
      <div className="w-[35%] flex justify-center gap-8 max-md:hidden">
        <HashLink smooth to="/#" className="border-b border-transparent hover:border-white" 
        >Home</HashLink>
        <HashLink smooth to="/#services" className="border-b border-transparent hover:border-white" >Service</HashLink>
        <HashLink smooth to="/#our-work" className="border-b border-transparent hover:border-white" >Our work</HashLink>
        <HashLink smooth to="/#contact" className="border-b border-transparent hover:border-white" >Contact Us</HashLink>
      </div>
    </>
  );
};

export default Navitems;
