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
  }, [locale]);



  const stackList = project?.technologies.join(" - ");
  const translate = useTranslations("ProjectDetails");

  if (!params.slug || !project) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="max-w-[1170px] mx-auto px-2 flex flex-col gap-4">
      <header className="flex py-3 shadow-xl mt-3 px-2 dark:text-v-white-300">
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
      <section className="mb-5 ">
        <div className="h-[400px] lg:h-[800px] w-full">
          <ProjectSlider images={project.images} />
        </div>
      </section>
      <section>
        <div className="flex flex-col shadow-lg py-6 md:p-6 gap-4 bg-v-white-900 min-h-[450px] w-full rounded-t-md bg-gradient-to-b dark:from-v-dark-700 from-10% dark:via-v-dark-900 via-40% dark:to-v-dark-bold to-80% px-2 dark:text-v-white-300">
          <div className="flex justify-center md:justify-between flex-col md:flex-row">
            <h1 className="text-xl md:text-3xl font-bold text-center lg:text-left">
              {project.title}
            </h1>
            <div className="flex gap-4 justify-center mt-4 md:mt-0">
              <button className="flex bg-v-dark-bold dark:bg-v-white-500 dark:text-v-dark-bold text-v-white-300 text-lg font-semibold py-2 px-3 gap-3 items-center rounded">
                <FaCode size={18} />
                <a href={project.codeUrl} target="_blank">{translate("codebutton")}</a>
              </button>
              {project?.hasDeploy && (
                <button className="flex bg-v-dark-bold dark:bg-v-white-500 dark:text-v-dark-bold text-v-white-300 text-lg font-semibold py-2 px-3 gap-3 items-center rounded">
                  <VscPreview size={18} />
                  <a href={project.deployUrl} target="_blank">Deploy</a>
                </button>
              )}
            </div>
          </div>
          <span className="text-slate-600 dark:text-slate-500">
            {translate("tech")} {stackList}
          </span>

          <article className="mt-8 !leading-[40px] text-sm md:text-md !font-normal">
            <b>{translate("description")} </b>
            {project.description}
          </article>
        </div>
      </section>
    </div>
  );
}
