import LayoutSection from "@/components/ui/LayoutSection";
import MyProjects from "@/components/MyProjects";
import { useLocale, useTranslations } from "next-intl";
import { fetchProjects, ProjectProps } from "@/contentful/myProjects";

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import StackSlider from "@/components/ui/StackSlider";
import SkeletonGrid from "@/components/MyProjects/SkeletonGrid";

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
        <div className="mb-10">
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-v-green/30 bg-v-green/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.04em] text-v-green lg:text-sm">
            {translate("eyebrow")}
          </span>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h1 className="max-w-[680px] text-3xl font-bold leading-[0.95] tracking-[-0.06em] text-v-white-300 sm:text-5xl lg:text-[3rem]">
                {translate("sectionTitle")}
              </h1>
              <p className="mt-6 max-w-[680px] text-base leading-8 text-v-white-900/85 lg:text-lg">
                {translate("sectionDescription")}
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/lucasviana80"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-white/[0.12] px-5 text-sm font-bold text-v-white-300 transition-colors hover:border-v-green/55 hover:bg-v-green/[0.08] hover:text-v-green lg:text-base"
            >
              {translate("talkButton")}
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>

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
              <SkeletonGrid label={translate("loading")} />
            )}
          </div>
        </motion.div>

        <StackSlider />
      </div>
    </LayoutSection>
  );
}
