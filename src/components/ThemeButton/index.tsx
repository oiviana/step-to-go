"use client";

import useTheme from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

export default function ThemeButton() {
  const [themeDark, toggleTheme] = useTheme();
  const [toggleMounted, setToggleMounted] = useState<boolean>(false);

  useEffect(() => {
    setToggleMounted(true);
  }, []);

  return (
    <>
      {!toggleMounted ? (
        <div className="relative  md:flex w-16 h-8 rounded-full p-1 bg-white dark:bg-v-dark-bold shadow animate-pulse"></div>
      ) : (
        <button
          className="relative  md:flex w-16 h-8 rounded-full p-1 bg-white dark:bg-v-dark-bold shadow"
          onClick={toggleTheme}
          aria-label="Switch theme button"
        >
          <FaMoon
            size={22}
            className="text-v-dark-500 dark:text-gray-50 mt-[1px]"
          />
          <div
            className="absolute top-[4px] bg-v-white-900 dark:bg-v-dark-300 w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 z-30"
            style={themeDark ? { left: "4px" } : { right: "4px" }}
          ></div>
          <FaRegSun
            size={22}
            className="ml-auto text-gray-50 absolute right-[5px] top-[5px]"
          />
        </button>
      )}
    </>
  );
}
