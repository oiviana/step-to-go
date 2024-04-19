"use client";

interface ThemeButtonProps {}

import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

export default function ThemeButton() {
  const [themeDark, setThemeDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log(theme)
    if (theme === "dark") setThemeDark(true);
  }, []);

  useEffect(() => {
    if (themeDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [themeDark]);

  return (
    <button
      className="relative flex w-16 h-8 rounded-full p-1 bg-white dark:bg-v-dark-900"
      onClick={() => setThemeDark(!themeDark)}
    >
      <FaMoon size={22} 
      className=" text-v-dark-500"/>
      <div
        className="absolute bg-v-white-900 dark:bg-v-dark-500 w-6 h-6 rounded-full shadow-md transform transition-transform duration-200"
        style={themeDark ? { left: "4px" } : { right: "4px" }}
      >
      </div>
      <FaRegSun
      size={22}
      className="ml-auto text-gray-50"/>
    </button>
  );
}
