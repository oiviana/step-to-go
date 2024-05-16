"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb"
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TechnologySlider() {
  const sliderRef = useRef<Slider | null>(null); 
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    variableWidth: true
  };

  return (
    <div className="slider-container h-[65px]">
      <Slider ref={sliderRef} {...settings}>
        <span className="!flex !w-[132px] h-16 justify-start items-center text-v-dark-500 dark:text-v-white-500" title="React JS">
          <FaReact
          size={50}/>
        </span>
        <span className="!flex !w-[132px] h-16  justify-start items-center text-v-dark-500 dark:text-v-white-500" title="Typescript">
          <SiTypescript
          size={50}/>
        </span>
        <span className="!flex !w-[132px] h-16  justify-start items-center text-v-dark-500 dark:text-v-white-500" title="Tailwind CSS">
          <SiTailwindcss
          size={50}/>
        </span>
        <span className="!flex !w-[132px] h-16  justify-start items-center text-v-dark-500 dark:text-v-white-500" title="SQL">
          <TbFileTypeSql
          size={50}/>
        </span>
        <span className="!flex !w-[132px] h-16  justify-start items-center text-v-dark-500 dark:text-v-white-500" title="Next JS">
          <SiNextdotjs 
          size={50}/>
        </span>
        <span className="!flex !w-[132px] h-16  justify-start items-center text-v-dark-500 dark:text-v-white-500" title="Node JS">
          <FaNodeJs 
          size={50}/>
        </span>
        <span className="!flex !w-[132px] h-16  justify-start items-center text-v-dark-500 dark:text-v-white-500" title="GraphQL">
          <GrGraphQl
          size={50}/>
        </span>
        <span className="!flex !w-[132px] h-16  justify-start items-center text-v-dark-500 dark:text-v-white-500" title="GIT">
          <FaGitAlt
          size={50}/>
        </span>
      </Slider>
    </div>
  );
}
