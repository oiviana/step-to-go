"use client";
import { useState, useEffect } from "react";
import { texts } from "./text";
import LayoutSection from "../LayoutSection";
import { useTranslations } from "next-intl";

export default function HomeSlider() {
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(false);
  const translate = useTranslations("Home")

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentText((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(false);
      }, 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutSection>
      <div className="flex items-center  h-[28rem] lg:h-[48rem]">
        <h1
          className={`text-center lg:text-left  text-v-dark-900 dark:text-v-white-300 text-2xl lg:text-5xl leading-[3rem] lg:leading-[4rem] font-bold transition-opacity ease-in-out duration-1000 lg:h-[250px] ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {translate(`homeslider.${currentText}`)}
        </h1>    
      </div>
    </LayoutSection>
  );
}
