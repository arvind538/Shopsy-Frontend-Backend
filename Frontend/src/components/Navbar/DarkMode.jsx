import React, { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      {theme === "light" ? (
        <img
          src={LightButton}
          alt="Light Mode"
          onClick={toggleTheme}
          className="w-12 cursor-pointer transition-all duration-300"
        />
      ) : (
        <img
          src={DarkButton}
          alt="Dark Mode"
          onClick={toggleTheme}
          className="w-12 cursor-pointer transition-all duration-300"
        />
      )}
    </div>
  );
};

export default DarkMode;
