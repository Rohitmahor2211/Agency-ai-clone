import React, { useContext } from "react";
import Routing from "./Routes/Routing";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import SponcerdCompanies from "./components/SponcerdCompanies";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./comtextApi/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContextProvider);
  return (
    <div
      className={`w-full font-[Manrope] ${theme ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <Navbar />
      <HomePage />
      <SponcerdCompanies />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer />
      <Routing />
    </div>
  );
};

export default App;
