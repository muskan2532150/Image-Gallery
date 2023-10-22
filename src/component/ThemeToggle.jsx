import React, { useEffect, useState } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle the dark mode toggle
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.removeItem("darkMode");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="text-white bg-gray-800 dark:bg-gray-200 dark:text-gray-800 px-3 py-2 rounded-lg"
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
