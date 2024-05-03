"use client";
import { ContentImage } from "@/contentful/contentImage";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { use, useEffect, useState } from "react";

interface ProjectSliderProps {
  images: ContentImage[] | null;
}

export default function ProjectSlider({ images }: ProjectSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [themeDark, setThemeDark] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? (images?.length ?? 0) - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  };
  const nextSlide = () => {
    const isLastSlide = currentSlide === (images?.length ?? 0) - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
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
    <div className="relative text-v-white-300">
      <img
        srcSet={`https:${images?.[currentSlide].src}`}
        src={`https:${images?.[currentSlide].src}`}
        alt={images?.[currentSlide].alt}
        className="w-full lg:h-[550px] aspect-square lg:aspect-video  duration-500 animate-vote"
      />
      <button className="absolute top-[40%] translate-x-0 translate-y-[50%] left-4 rounded-full p-2 bg-black bg-opacity-30 flex justify-center items-center">
        <BsChevronLeft size={35} className="mr-[2px]" onClick={prevSlide}/>
      </button>
      <button className="absolute top-[40%] translate-x-0 translate-y-[50%] right-4 rounded-full p-2 bg-black bg-opacity-30 flex justify-center items-center">
        <BsChevronRight size={35} className="ml-[2px]" onClick={nextSlide} />
      </button>
    </div>
  );
}
