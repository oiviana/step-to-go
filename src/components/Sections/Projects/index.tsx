import LayoutSection from "@/components/LayoutSection";
import MyProjects from "@/components/MyProjects";
import { useLocale, useTranslations } from "next-intl";
import { fetchProjects, ProjectProps } from "@/contentful/myProjects";

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import StackSlider from "@/components/ui/StackSlider";
import ProjectsBanner from "./ProjectsBanner";

export default function Projects() {
  const translate = useTranslations("Projects");
  const locale = useLocale();
  const [projects, setProjects] = useState<ProjectProps[]>();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
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
          {translate("stackTitle")}
        </h2>
        <StackSlider />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, translateY: 30 }}
          animate={isInView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 80 }}
          transition={{ duration: 1.3 }}
        >
          <div>
            {projects ? (
              <MyProjects myProjects={projects} />
            ) : (
              <p>Carregando projetos...</p>
            )}
          </div>
        </motion.div>
      </div>
    </LayoutSection>
  );
}
