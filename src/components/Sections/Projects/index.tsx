import LayoutSection from "@/components/LayoutSection";
import MyProjects from "@/components/MyProjects";
import { useLocale } from "next-intl";
import { fetchProjects, ProjectProps } from "@/contentful/myProjects";

import { useState, useEffect } from "react";
import StackSlider from "@/components/ui/StackSlider";
import ProjectsBanner from "./ProjectsBanner";

export default function Projects() {
  const locale = useLocale();
  const [projects, setProjects] = useState<ProjectProps[]>();

  useEffect(() => {
    const fetchData = async () => {
      const getProjects = await fetchProjects({ locale: locale });
      setProjects(getProjects);
    };

    fetchData();
  }, [locale]);

  return (
    <LayoutSection>
      <div className="flex flex-col">
        <ProjectsBanner />
        <h2 className="text-center lg:text-left text-base lg:text-xl">
          Algumas tecnologias que eu já utilizei ou utilizo em meus projetos:
        </h2>
        <StackSlider />
        <div>
          {projects ? (
            <MyProjects myProjects={projects} />
          ) : (
            <p>Carregando projetos...</p>
          )}
        </div>
      </div>
    </LayoutSection>
  );
}
