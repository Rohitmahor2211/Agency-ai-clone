import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import Page5 from "../Pages/Page5";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/#" element={<HomePage />} />
        <Route path="/services" element={<Page2 />} />
        <Route path="/our-work" element={<Page3 />} />
        <Route path="/contact" element={<Page5 />} />
      </Routes>
    </>
  );
};

export default Routing;
