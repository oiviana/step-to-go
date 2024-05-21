"use client";
import { ContentImage } from "@/contentful/contentImage";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";

interface ProjectSliderProps {
  images: ContentImage[] | null;
}

export default function ProjectSlider({ images }: ProjectSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide
      ? (images?.length ?? 0) - 1
      : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  const nextSlide = () => {
    const isLastSlide = currentSlide === (images?.length ?? 0) - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const [themeDark] = useTheme();

  return (
    <div className="relative text-v-white-300">
      <Image
        src={`https:${images?.[currentSlide].src}`}
        alt={images?.[currentSlide].alt!}
        className="w-full lg:h-[800px] aspect-square lg:aspect-video  duration-500 animate-vote"
        width={1920}
        height={1080}
        sizes="(min-width: 1520px) 1424px, 95vw"
      />
      <button
        className="absolute top-[40%] translate-x-0 translate-y-[50%] left-4 rounded-full p-2 bg-black bg-opacity-30 flex justify-center items-center"
        aria-label="Previous Slide"
      >
        <BsChevronLeft size={35} className="mr-[2px]" onClick={prevSlide} />
      </button>
      <button
        className="absolute top-[40%] translate-x-0 translate-y-[50%] right-4 rounded-full p-2 bg-black bg-opacity-30 flex justify-center items-center"
        aria-label="Next Slide"
      >
        <BsChevronRight size={35} className="ml-[2px]" onClick={nextSlide} />
      </button>
    </div>
  );
}
