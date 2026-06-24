"use client";

import ProjectSlider from "@/components/ProjectDetails/ProjectSlider";
import { fetchProjectsBySlug, ProjectProps } from "@/contentful/myProjects";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { VscPreview } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";
import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getFallbackCategory(project: ProjectProps) {
  const normalizedStack = project.technologies.map((item) => item.toLowerCase());

  if (normalizedStack.some((item) => item.includes("vtex"))) {
    return "E-commerce";
  }

  if (normalizedStack.some((item) => item.includes("cms"))) {
    return "Site institucional";
  }

  return "Projeto web";
}

function getFallbackRole(project: ProjectProps) {
  const stackSummary = project.technologies
    .filter((item) => ["vtex", "react", "next", "typescript"].some((tech) => item.toLowerCase().includes(tech)))
    .slice(0, 2)
    .join(" / ");

  return stackSummary ? `Front-end / ${stackSummary}` : "Front-end";
}

function SkeletonBlock({ className }: { className: string }) {
  return (
    <div
      className={`animate-pulse rounded bg-[linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.12),rgba(255,255,255,0.06))] bg-[length:200%_100%] ${className}`}
    />
  );
}

function ProjectDetailsSkeleton() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_18%_12%,rgba(158,230,85,0.1),transparent_28%),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),#0f0f14] bg-[length:auto,64px_64px,64px_64px] px-4 py-10 pb-24 text-v-white-300 sm:px-6">
      <div className="mx-auto w-full max-w-[1280px]">
        <header className="grid grid-cols-1 items-center gap-5 border-b border-white/[0.08] pb-7 lg:grid-cols-[1fr_auto_1fr]">
          <SkeletonBlock className="h-7 w-28" />
          <SkeletonBlock className="h-10 w-64 lg:mx-auto" />
        </header>

        <main className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          <section className="rounded-[2rem] border border-white/[0.08] bg-[radial-gradient(circle_at_top_left,rgba(158,230,85,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012)),#181820] p-6 sm:p-8 lg:p-10">
            <SkeletonBlock className="mb-9 h-10 w-56 rounded-full" />
            <SkeletonBlock className="h-20 w-full max-w-[620px] rounded-xl sm:h-24" />
            <SkeletonBlock className="mt-5 h-7 w-full max-w-[760px]" />
            <SkeletonBlock className="mt-4 h-7 w-4/5 max-w-[620px]" />
            <div className="mt-8 flex flex-wrap gap-3">
              <SkeletonBlock className="h-10 w-24 rounded-full" />
              <SkeletonBlock className="h-10 w-28 rounded-full" />
              <SkeletonBlock className="h-10 w-20 rounded-full" />
              <SkeletonBlock className="h-10 w-32 rounded-full" />
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <SkeletonBlock className="h-12 w-40 rounded-full" />
              <SkeletonBlock className="h-12 w-40 rounded-full" />
            </div>
          </section>

          <aside className="grid gap-4 rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012)),#181820] p-6">
            {[0, 1, 2].map((item) => (
              <div
                className="rounded-[1.375rem] border border-white/[0.07] bg-v-dark-test/70 p-5"
                key={item}
              >
                <SkeletonBlock className="mb-4 h-4 w-24" />
                <SkeletonBlock className="h-7 w-44" />
              </div>
            ))}
          </aside>
        </main>

        <section className="mt-8 rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012)),#181820] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-6">
          <SkeletonBlock className="aspect-[16/7] w-full rounded-2xl" />
          <div className="mt-6 flex justify-center gap-4">
            <SkeletonBlock className="h-16 w-28 rounded-xl" />
            <SkeletonBlock className="h-16 w-28 rounded-xl" />
            <SkeletonBlock className="h-16 w-28 rounded-xl" />
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
          <article className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012)),#181820] p-6 sm:p-8">
            <SkeletonBlock className="mb-8 h-10 w-32 rounded-full" />
            <SkeletonBlock className="h-14 w-full max-w-[620px] rounded-xl" />
            <SkeletonBlock className="mt-8 h-7 w-full" />
            <SkeletonBlock className="mt-4 h-7 w-11/12" />
            <SkeletonBlock className="mt-4 h-7 w-4/5" />
          </article>

          <article className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012)),#181820] p-6 sm:p-8">
            <SkeletonBlock className="mb-8 h-10 w-44 rounded-full" />
            <SkeletonBlock className="h-7 w-4/5" />
            <SkeletonBlock className="mt-6 h-7 w-3/4" />
            <SkeletonBlock className="mt-6 h-7 w-5/6" />
          </article>
        </section>
      </div>
    </section>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const locale = useLocale();
  const [project, setProject] = useState<ProjectProps | null>();
  const translate = useTranslations("ProjectDetails");

  useEffect(() => {
    const fetchData = async () => {
      const getProjects = await fetchProjectsBySlug(slug, locale);
      setProject(getProjects);
    };

    fetchData();
  }, [locale, slug]);

  if (!slug || !project) {
    return <ProjectDetailsSkeleton />;
  }

  const summaryItems = [
    {
      label: translate("client"),
      value: project.client || project.title,
    },
    {
      label: translate("category"),
      value: project.category || getFallbackCategory(project),
    },
    {
      label: translate("role"),
      value: project.role || getFallbackRole(project),
    },
  ];

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_18%_12%,rgba(158,230,85,0.1),transparent_28%),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),#0f0f14] bg-[length:auto,64px_64px,64px_64px] px-4 py-10 pb-24 text-v-white-300 sm:px-6">
      <div className="mx-auto w-full max-w-[1280px]">
        <header className="grid grid-cols-1 items-center gap-5 border-b border-white/[0.08] pb-7 lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-3 text-lg font-extrabold text-v-green transition-colors hover:text-[#b3eb7a]"
          >
            <IoMdArrowRoundBack size={25} />
            {translate("return")}
          </Link>
          <span className="text-left text-2xl font-black tracking-[-0.04em] text-v-green lg:text-center lg:text-[1.75rem]">
            {translate("title")}
          </span>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <main className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <section className="rounded-[2rem] border border-white/[0.08] bg-[radial-gradient(circle_at_top_left,rgba(158,230,85,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015)),#181820] p-6 sm:p-8 lg:p-10">
              <span className="mb-5 inline-flex w-fit rounded-full border border-v-green/30 bg-v-green/[0.07] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-v-green">
                {translate("selected")}
              </span>

              <h1 className="max-w-[720px] text-4xl font-black leading-[0.95] tracking-[-0.07em] text-v-white-300 sm:text-6xl lg:text-[4rem]">
                {project.title}
              </h1>

              <p className="mt-5 max-w-[780px] text-base leading-8 text-v-white-900/85 lg:text-lg lg:leading-9">
                {project.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {project.technologies.map((item, index) => (
                  <span
                    className="rounded-full border border-v-green/40 bg-v-green/[0.07] px-3 py-2 text-xs font-extrabold text-v-green lg:text-sm"
                    key={`${item}-${index}`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                {project.hasDeploy && (
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-v-green px-6 font-extrabold text-v-dark-test transition hover:-translate-y-0.5 hover:bg-[#b3eb7a]"
                  >
                    <VscPreview size={18} />
                    {translate("accessProject")}
                  </a>
                )}
                {project.showRepo && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.12] px-6 font-extrabold text-v-white-300 transition hover:border-v-green/50 hover:text-v-green"
                  >
                    <FaCode size={18} />
                    {translate("repository")}
                  </a>
                )}
              </div>
            </section>

            <aside className="grid gap-4 rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015)),#181820] p-6">
              {summaryItems.map((item) => (
                <div
                  className="rounded-[1.375rem] border border-white/[0.07] bg-v-dark-test/70 p-5"
                  key={item.label}
                >
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.06em] text-v-white-900/70">
                    {item.label}
                  </span>
                  <strong className="block text-lg leading-snug text-v-white-300">
                    {item.value}
                  </strong>
                </div>
              ))}
            </aside>
          </main>

          <section className="mt-8 rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015)),#181820] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-6 sm:pt-8">
            <ProjectSlider
              images={project.images}
              mobileImages={project.mobileImages}
            />
          </section>

          <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
            <article className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015)),#181820] p-6 sm:p-8">
              <span className="mb-5 inline-flex w-fit rounded-full border border-v-green/30 bg-v-green/[0.07] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-v-green">
                {translate("description")}
              </span>
              <h2 className="mb-5 text-3xl font-black leading-[1.05] tracking-[-0.05em] text-v-white-300 lg:text-[2rem]">
                {translate("aboutMyWork")}
              </h2>
              <p className="text-base leading-8 text-v-white-900/90 lg:text-[1.0625rem] lg:leading-9">
                {project.description}
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015)),#181820] p-6 sm:p-8">
              <span className="mb-5 inline-flex w-fit rounded-full border border-v-green/30 bg-v-green/[0.07] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-v-green">
                {translate("mainDeliveries")}
              </span>
              {project.mainDeliveries.length > 0 ? (
                <ul className="grid gap-4">
                  {project.mainDeliveries.map((delivery, index) => (
                    <li
                      className="relative pl-7 text-base leading-7 text-v-white-900/90 before:absolute before:left-0 before:top-2.5 before:h-2.5 before:w-2.5 before:rounded-full before:bg-v-green before:shadow-[0_0_24px_rgba(158,230,85,0.4)]"
                      key={`${delivery}-${index}`}
                    >
                      {delivery}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base leading-8 text-v-white-900/80">
                  {translate("deliveriesFallback")}
                </p>
              )}
            </article>
          </section>
        </motion.div>
      </div>
    </section>
  );
}
