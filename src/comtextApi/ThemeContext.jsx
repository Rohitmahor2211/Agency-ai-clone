import React, { createContext, useEffect, useState } from "react";

export const ThemeContextProvider = createContext();

const ThemeContext = ({ children }) => {
  const [sidebar , setSidebar] = useState(false)
  const [theme, setTheme] = useState(() => {
    const retriveTheme = localStorage.getItem("currentTheme");
    return JSON.parse(retriveTheme);
  });
  useEffect(() => {
    localStorage.setItem("currentTheme", JSON.stringify(theme));
    console.log(theme)
  }, [theme][sidebar]);



  return (
    <>
      <ThemeContextProvider.Provider value={{ theme, setTheme , sidebar , setSidebar }}>
        {children}
      </ThemeContextProvider.Provider>
    </>
  );
};

export default ThemeContext;
