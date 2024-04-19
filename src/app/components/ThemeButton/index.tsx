"use client";
import { useState } from "react";

export default function ThemeButton() {
  const [theme, setTheme] = useState(false);
  console.log(theme);
  const toogleTheme = () => {
    setTheme(!theme);
  };

  return (
    <button
      className="absolute w-12 h-12 bottom-16 right-16 bg-orange-500 rounded-full text-slate-50"
      onClick={toogleTheme}
    >
      oii
    </button>
  );
}
