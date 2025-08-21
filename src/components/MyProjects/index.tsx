"use client";

import { useState, useEffect} from "react";
import ProjectCard from "./ProjectCard";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { ProjectProps } from "@/contentful/myProjects";
import SkeletonGrid from "./SkeletonGrid";
import React from "react";
import { useTranslations } from "next-intl";

interface ComponentProjectProps {
  myProjects: ProjectProps[];
}

export default function MyProjects({ myProjects }: ComponentProjectProps) {
  const [isClient, setIsClient] = useState<boolean>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(1);
  const [fadeSlides, setFadeSlides] = useState<boolean>(false);

  const projectCards = myProjects.map((project, index) => (
    <ProjectCard
      title={project.title}
      subtitle={project.subtitle}
      description={project.description}
      hasDeploy={project.hasDeploy}
      hasFinished={project.hasFinished}
      stack={project.technologies}
      key={index}
      slug={project.slug}
      codeUrl={project.codeUrl}
      deployUrl={project.deployUrl}
      thumbnail={project.thumbnail}
    />
  ));

  const lasItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lasItemIndex - itemsPerPage;
  const currentItems = projectCards.slice(firstItemIndex, lasItemIndex);
  const translate = useTranslations("Projects");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1230) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {

    setFadeSlides(true);

    const timeout = setTimeout(() => {
      setFadeSlides(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [currentPage]); 

  return (
    <>
      {isClient ? (
        <div className=" lg:mb-[3rem] relative">
           <h2 className="text-center lg:text-left text-base lg:text-xl mb-8">
           {translate("projectTitle")}
        </h2>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 min-[1230px]:grid-cols-3 xl:flex h-[430px]
            ${fadeSlides ? "animate-vote duration-500" : ""} 
            ${
              currentItems.length % 2 === 0
                ? "xl:justify-start gap-[7.5rem]"
                : "xl:justify-between"
            }`}
          >
            {currentItems}
          </div>
          <PaginationSection
            totalItems={projectCards.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
          />
        </div>
      ) : (
        <SkeletonGrid/>
      )}

    </>
  );
}

function PaginationSection({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
<>
      <button
        className={` absolute top-[50%] left-[-4px]  shadow rounded-full bg-white dark:bg-v-dark-900 w-9  h-9 lg:w-12 lg:h-12 flex justify-center items-center transition-opacity ${
          currentPage == 1 && "hidden cursor-not-allowed"
        }`}
        onClick={() => handlePrevPage()}
        aria-label="Projetos anteriores"
      >
        <MdArrowBackIosNew size={25} className="flex justify-center" />
      </button>

      <button
        onClick={() => handleNextPage()}
        className={`absolute top-[50%] right-[-4px] shadow bg-white dark:bg-v-dark-900 rounded-full w-9 h-9 lg:w-12 lg:h-12 flex justify-center items-center transition-opacity ${
          currentPage == pages.length && "hidden cursor-not-allowed"
        }`}
        aria-label="Próximos projetos"
      >
        <MdArrowForwardIos size={25} />
      </button>
</>
  );
}
