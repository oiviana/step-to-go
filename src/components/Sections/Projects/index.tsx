import LayoutSection from "@/components/LayoutSection";
import MyProjects from "@/components/MyProjects";
import { useLocale } from "next-intl";
import { fetchProjects, ProjectProps } from "@/contentful/myProjects";

import { useState, useEffect } from "react";
import StackSlider from "@/components/ui/StackSlider";

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
      <div>
        <h1>Desenvolver e inovar!</h1>
        <p>
          Ao longo dos últimos 4 anos, tenho contribuído ativamente para
          diversos projetos com foco na web.
        </p>
      </div>
      <StackSlider />
      {/* <div>
        {projects ? (
          <MyProjects myProjects={projects} />
        ) : (
          <p>Carregando projetos...</p>
        )}
      </div> */}
    </LayoutSection>
  );
}
