"use client";
import { useState, useEffect } from "react";
import { texts } from "./text";
import LayoutSection from "../LayoutSection";

export default function HomeSlider() {
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(false);

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
      <ul className="flex items-center text-2xl lg:text-5xl leading-[3rem] lg:leading-[4rem] font-bold min-h-[28rem] lg:min-h-[48rem]">
        <h1
          className={`transition-opacity ease-in-out duration-1000 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          style={{ display: "flex" }}
        >
          {texts[currentText]}
        </h1>
      </ul>
    </LayoutSection>
  );
}
