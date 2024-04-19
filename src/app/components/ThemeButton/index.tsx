"use client";

interface ThemeButtonProps{

}

import { useState, useEffect } from "react";

export default function ThemeButton() {
  const [themeDark, setThemeDark] = useState(true);

  useEffect(()=>{
    const theme = localStorage.getItem("theme")
    if(theme === 'dark') setThemeDark(true)
  },[])

  useEffect(()=>{
    if(themeDark){
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme','dark')
    }else{
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme','light')
    }
  },[themeDark])

  return (
    <button
      className="absolute w-12 h-12 bottom-16 right-16 bg-orange-500 rounded-full text-slate-50"
      onClick={()=> setThemeDark(!themeDark)}
    >
    </button>
  );
}
