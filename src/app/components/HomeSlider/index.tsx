"use client";
import { useState, useEffect } from "react";
import { texts } from "./text";
import LayoutSection from "../LayoutSection";

export default function HomeSlider() {
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(false);
  console.log("Renderizou");

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
      <ul className="flex items-center text-2xl lg:text-5xl leading-[3rem] lg:leading-[4rem] font-bold min-h-[28rem] lg:min-h-[50rem]">
        {texts.map((text, index) => (
          <h1
            key={index}
            className={`transition-opacity ease-in-out duration-1000  ${
              index === currentText && fade ? "opacity-0" : "opacity-100"
            }`}
            style={{ display: index === currentText ? "flex" : "none" }}
          >
            {text}
          </h1>
        ))}
      </ul>
    </LayoutSection>
  );
}
