import { ContentImage } from "@/contentful/contentImage";
import Image from "next/image";
import { Link } from "../../../../navigation";
import { useTranslations } from "next-intl";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  hasDeploy: boolean;
  hasFinished: boolean;
  slug: string;
  codeUrl: string;
  deployUrl: string;
  thumbnail: ContentImage | null;
  featured?: boolean;
}

function getProjectTypeKey(stack: string[]) {
  const normalizedStack = stack.map((item) => item.toLowerCase());

  if (normalizedStack.some((item) => item.includes("vtex"))) {
    return "ecommerce";
  }

  if (normalizedStack.some((item) => item.includes("cms"))) {
    return "institutional";
  }

  return "web";
}

export default function ProjectCard({
  title,
  subtitle,
  stack,
  slug,
  thumbnail,
  hasFinished,
  featured = false,
}: ProjectCardProps) {
  const translate = useTranslations("Projects");
  const projectTypeKey = getProjectTypeKey(stack);

  return (
    <article
      className={`group/card relative flex min-h-[560px] w-full max-w-[400px] snap-start flex-col overflow-hidden rounded-3xl border bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015)),#181820] shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-1.5 hover:border-v-green/35 hover:shadow-[0_32px_100px_rgba(0,0,0,0.38)] ${
        featured ? "border-v-green/25" : "border-white/[0.08]"
      }`}
    >
      {hasFinished && (
        <Link
          className="absolute inset-0 z-10 rounded-3xl"
          href={`/projects/${slug}`}
          aria-label={`${translate("button")} ${title}`}
        />
      )}

      <div className="h-[210px] bg-white/[0.035] p-3">
        <div className="group h-full w-full overflow-hidden rounded-2xl bg-v-dark-test">
          {thumbnail?.src && (
            <Image
              src={`https:${thumbnail.src}`}
              alt={title}
              width={400}
              height={230}
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
              sizes="(max-width: 768px) 88vw, (max-width: 1200px) 50vw, 400px"
              priority={false}
            />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 text-xs font-extrabold uppercase tracking-[0.04em] text-v-green">
          {translate(`projectTypes.${projectTypeKey}`)}
        </span>

        <h3 className="mb-3 text-2xl font-bold leading-[1.15] tracking-[-0.04em] text-v-white-300">
          {title}
        </h3>

        <p className="text-sm leading-7 text-v-white-900/85">
          {subtitle}
        </p>

        <div className="mb-6 mt-6 flex flex-wrap gap-2">
          {stack.map((item, index) => (
            <span
              className="rounded-full border border-v-green/35 bg-v-green/[0.06] px-3 py-1.5 text-xs font-bold text-v-green"
              key={`${item}-${index}`}
            >
              {item}
            </span>
          ))}
        </div>

        {hasFinished ? (
          <span className="mt-auto flex h-11 w-full items-center justify-center gap-3 rounded bg-v-green text-sm font-extrabold text-v-dark-700 shadow-sm transition group-hover/card:-translate-y-0.5 group-hover/card:bg-[#b3eb7a] lg:text-base">
            {translate("button")}
            <span aria-hidden="true">-&gt;</span>
          </span>
        ) : (
          <span className="mt-auto flex h-11 w-full cursor-default items-center justify-center rounded bg-v-green text-center text-xs font-extrabold text-v-dark-700 opacity-50 shadow-sm lg:text-sm">
            {translate("buttonNotFinished")}
          </span>
        )}
      </div>
    </article>
  );
}
