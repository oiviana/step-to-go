"use client"
import ProjectSlider from "@/components/ProjectDetails/ProjectSlider";
import { fetchProjectsBySlug } from "@/contentful/myProjects";
import { ProjectProps } from "@/contentful/myProjects";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { VscPreview } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const locale = useLocale();

  const [project, setProject] = useState<ProjectProps | null>();

  useEffect(() => {
    const fetchData = async () => {
      const getProjects = await fetchProjectsBySlug(params.slug, locale);
      setProject(getProjects);
    };

    fetchData();
  }, [locale, params.slug]);

  const translate = useTranslations("ProjectDetails");

  if (!params.slug || !project) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="max-w-[1210px] mx-auto px-2 flex flex-col gap-4">
      <header className="flex py-3  mt-3 px-2 text-v-purple-light border-b-2 border-v-dark-900">
        <Link
          href="/"
          className="flex justify-between p-2 gap-2 font-bold text-lg "
        >
          <IoMdArrowRoundBack size={25} />
          <span className="hidden md:flex">{translate("return")}</span>
        </Link>
        <h2 className="flex mx-auto text-lg md:text-2xl font-semibold leading-8">
          {translate("title")}
        </h2>
      </header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row lg:gap-2">
          <section className="h-auto">
            <ProjectSlider images={project.images} mobileImages={project.mobileImages} />
          </section>
          <section className="lg:max-w-[410px]">
            <div className="flex flex-col  py-6 md:p-6 gap-4 w-full  px-2 text-v-white-300">
              <div className="flex justify-center md:justify-between flex-col md:flex-row">
                <h1 className="text-lg md:text-xl font-bold text-center lg:text-left text-v-green mb-4">
                  {project.title}
                </h1>
              </div>
              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                {project.technologies.map((item, index) => (
                  <span className="text-xs md:text-sm text-v-purple-light font-semibold border-[2px] border-v-purple-light rounded-md p-1 cursor-default" key={index}>
                    {item}
                  </span>
                ))}
              </div>
              <article className="mt-4 !leading-[40px] text-sm md:text-md !font-normal lg:text-justify mb-4">
                <b className="text-v-green">{translate("description")} </b>
                {project.description}
              </article>
              <div className="flex gap-4 justify-center mt-4 md:mt-0 lg:justify-start">
                {project?.showRepo && (
                  <button className="flex w-32 bg-v-green hover:bg-[#b3eb7a] transition-colors text-v-dark-test text-base font-semibold py-2 px-3 rounded ">
                    
                    <a href={project.codeUrl} target="_blank" className="w-full h-full flex justify-center gap-3 items-center">
                    <FaCode size={18} /> {translate("codebutton")}
                    </a>
                  </button>
                )}
                {project?.hasDeploy && (
                  <button className="flex w-32 bg-v-green hover:bg-[#b3eb7a] transition-colors text-v-dark-test text-base font-semibold py-2 px-3 rounded ">
                   
                    <a href={project.deployUrl} target="_blank" className="w-full h-full flex justify-center gap-3 items-center">
                      <VscPreview size={18} /> Deploy
                      </a>
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
        </motion.div>
    </div>
  );
}
