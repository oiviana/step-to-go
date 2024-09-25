"use client"

import { ReactNode, useEffect } from "react";

interface LayoutSectionProps {
  children: ReactNode;
}

export default function LayoutSection({ children }: LayoutSectionProps) {
  useEffect(() => {
    const section = document.querySelector('.section-scroll');
    let isScrolling: ReturnType<typeof setTimeout>;

    if (section) {
      const handleScroll = () => {
        section.classList.add('scrolling');

        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          section.classList.remove('scrolling');
        }, 1000);
      };

      section.addEventListener('scroll', handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        section.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); 
  return (
    <section className="section-scroll min-h-24 w-full px-2 lg:pt-20 min-[1170px]:px-0 lg:pb-[180px] text-v-white-300 max-w-[1170px] mx-auto flex flex-col lg:overflow-scroll lg:overflow-x-hidden lg:h-[46rem] mt-20 lg:mt-8">
      {children}
    </section>
  );
}
