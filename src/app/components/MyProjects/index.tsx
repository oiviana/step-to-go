"use client";
import { useState, useEffect } from "react";
import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";

export default function MyProjects() {
  const [isClient, setIsClient] = useState<boolean>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(1);

  const projectCards = projects.map((project, index) => (
    <ProjectCard
      title={project.title}
      subtitle={project.subtitle}
      description={project.description}
      hasDeploy={project.hasDeploy}
      stack={project.stack}
      key={index}
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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LayoutSection>
      <TitleSection title="Meus projetos" />
      {isClient ? (
        <>
          <div className={`grid grid-cols-1 md:grid-cols-2 min-[1230px]:grid-cols-3 xl:flex ${currentItems.length % 2 === 0 ?'xl:justify-start gap-[7.5rem]':'xl:justify-between'}`}>
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
  setCurrentPage: (page:number) => void;
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
    <div>
      <button onClick={() => handlePrevPage()}>Voltar</button>

      <button onClick={() => handleNextPage()}> Proxim</button>
    </div>
  );
}
