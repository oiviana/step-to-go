"use client";

import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { ProjectProps } from "@/contentful/myProjects";

interface ComponentProjectProps {
  myProjects: ProjectProps[];
}

export default function MyProjects({ myProjects }: ComponentProjectProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "prev" | "next") => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: direction === "next" ? 424 : -424,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-12 lg:px-16">
      <button
        className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.12] bg-v-dark-test/90 text-v-white-300 shadow transition-colors hover:border-v-green/50 hover:text-v-green lg:flex"
        onClick={() => handleScroll("prev")}
        aria-label="Projeto anterior"
      >
        <MdArrowBack size={24} />
      </button>

      <div
        ref={sliderRef}
        className="grid auto-cols-[88%] grid-flow-col snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-5 pt-2 [scrollbar-width:none] md:auto-cols-[calc((100%_-_24px)/2)] xl:auto-cols-[400px] [&::-webkit-scrollbar]:hidden"
      >
        {myProjects.map((project, index) => (
          <ProjectCard
            key={project.slug || index}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            hasDeploy={project.hasDeploy}
            hasFinished={project.hasFinished}
            stack={project.technologies}
            slug={project.slug}
            codeUrl={project.codeUrl}
            deployUrl={project.deployUrl}
            thumbnail={project.thumbnail}
            featured={index === 1}
          />
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.12] bg-v-dark-test/90 text-v-white-300 shadow transition-colors hover:border-v-green/50 hover:text-v-green lg:flex"
        onClick={() => handleScroll("next")}
        aria-label="Próximo projeto"
      >
        <MdArrowForward size={24} />
      </button>
    </div>
  );
}
