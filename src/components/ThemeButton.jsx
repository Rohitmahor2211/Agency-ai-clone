import React, { useContext } from "react";
import { Sun, Moon, MoveRight } from "lucide-react";
import { ThemeContextProvider } from "../comtextApi/ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContextProvider);

  return (
    <>
      <div
        className="border py-1 px-1 border-gray-500 rounded-full"
        onClick={() => {
          setTheme((prev) => !prev);
        }}
      >
        {theme ? <Sun /> : <Moon />}
      </div>
    </>
  );
};

export default ThemeButton;
