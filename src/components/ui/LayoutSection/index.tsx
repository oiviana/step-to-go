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

      return () => {
        section.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  return (
    <section className="section-scroll min-h-24 w-full px-2 lg:pt-14
     lg:pb-[50px] text-v-white-300 max-w-[1174px] mx-auto flex flex-col lg:overflow-scroll lg:overflow-x-hidden lg:h-[49rem] mt-40 lg:mt-8 lg:pr-[4px]">
      {children}
    </section>
  );
}
