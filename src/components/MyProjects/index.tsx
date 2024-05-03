"use client";
import { useState, useEffect } from "react";
import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import ProjectCard from "./ProjectCard";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { ProjectProps } from "@/contentful/myProjects";

interface ComponentProjectProps{
  myProjects: ProjectProps[];
}

export default function MyProjects({myProjects}:ComponentProjectProps) {
  const [isClient, setIsClient] = useState<boolean>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(1);
  const [fadeSlides, setFadeSlides] = useState<boolean>(false)

  const projectCards = myProjects.map((project, index) => (
    <ProjectCard
      title={project.title}
      subtitle={project.subtitle}
      description={project.description}
      hasDeploy={project.hasDeploy}
      stack={project.technologies}
      key={index}
      slug={project.slug}
      codeUrl={project.codeUrl}
      deployUrl={project.deployUrl}
      
    />
  ));

  const lasItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lasItemIndex - itemsPerPage;
  const currentItems = projectCards.slice(firstItemIndex, lasItemIndex);

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
    // Adiciona a classe fade-in temporariamente
    setFadeSlides(true);
    // Remove a classe fade-in após 1 segundo (1000ms)
    const timeout = setTimeout(() => {
      setFadeSlides(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [currentPage]); // Executa sempre que a página atual muda


  return (
    <LayoutSection>
      <TitleSection title="Meus projetos" id="projects" />
      {isClient ? (
        <>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 min-[1230px]:grid-cols-3 xl:flex
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
        </>
      ) : (
        <span>Carregando</span>
      )}
    </LayoutSection>
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
    <div className="w-full flex justify-center p-6 gap-8">
      <button className={`shadow py-3 px-6 bg-white dark:bg-v-dark-900 rounded flex justify-center items-center transition-opacity ${currentPage == 1 && 'opacity-[0.50] cursor-not-allowed'}`}
      onClick={() => handlePrevPage()}>
        <MdArrowBackIosNew size={25} 
        className="flex justify-center" />
      </button>

      <button 
      onClick={() => handleNextPage()}
      className={`shadow py-3 px-6 bg-white dark:bg-v-dark-900 rounded flex justify-center items-center transition-opacity ${currentPage == pages.length && 'opacity-[0.50] cursor-not-allowed'}`}
      >
      <MdArrowForwardIos size={25}/>
      </button>
    </div>
  );
}
