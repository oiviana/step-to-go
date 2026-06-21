import { BriefcaseBusiness, GraduationCap, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";

const highlights = [
  { key: "education", Icon: GraduationCap },
  { key: "experience", Icon: BriefcaseBusiness },
  { key: "current", Icon: Workflow },
] as const;

export default function CareerHighlights() {
  const translate = useTranslations("MyWork.milestones");

  return (
    <section className="mt-4 border-y border-white/[0.08] py-8 lg:mt-8 lg:py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/[0.08]">
        {highlights.map(({ key, Icon }) => (
          <article className="px-1 md:px-6 lg:px-8" key={key}>
            <div className="mb-4 flex items-center gap-3 text-v-green">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-v-green/10">
                <Icon aria-hidden="true" size={20} strokeWidth={2} />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.08em]">
                {translate(`items.${key}.period`)}
              </span>
            </div>
            <h3 className="text-base font-bold leading-6 text-v-white-300 lg:text-lg">
              {translate(`items.${key}.title`)}
            </h3>
            <p className="mt-2 text-sm leading-7 text-v-white-900/70">
              {translate(`items.${key}.description`)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
