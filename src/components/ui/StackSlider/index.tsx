import { useTranslations } from "next-intl";
import {
  SiDocker,
  SiGraphql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVtex,
} from "react-icons/si";

const stackItems = [
  {
    key: "react",
    name: "React JS",
    Icon: SiReact,
  },
  {
    key: "vtex",
    name: "VTEX IO",
    Icon: SiVtex,
  },
  {
    key: "typescript",
    name: "TypeScript",
    Icon: SiTypescript,
  },
  {
    key: "tailwind",
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    key: "docker",
    name: "Docker",
    Icon: SiDocker,
  },
  {
    key: "graphql",
    name: "GraphQL",
    Icon: SiGraphql,
  },
] as const;

export default function StackSlider() {
  const translate = useTranslations("Projects.stackCards");

  return (
    <section className="mt-24 rounded-[2rem] border border-white/[0.08] bg-[radial-gradient(circle_at_top_right,rgba(158,230,85,0.12),transparent_35%),rgba(255,255,255,0.025)] p-6 sm:p-8 lg:p-10">
      <div className="mb-8 max-w-[720px]">
        <span className="mb-6 inline-flex w-fit items-center rounded-full border border-v-green/30 bg-v-green/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.04em] text-v-green lg:text-sm">
          {translate("eyebrow")}
        </span>
        <h2 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] text-v-white-300 sm:text-4xl lg:text-[2.75rem]">
          {translate("title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {stackItems.map(({ key, name, Icon }) => (
          <article
            key={key}
            className="group flex min-h-[150px] gap-4 rounded-[1.375rem] border border-white/[0.08] bg-v-dark-test/70 p-5 transition duration-200 hover:-translate-y-1 hover:border-v-green/30 hover:bg-v-green/[0.04]"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-v-green/10 text-v-green transition-colors duration-200 group-hover:bg-v-green/15">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="mb-2 text-lg font-bold leading-tight text-v-white-300">
                {name}
              </h3>
              <p className="text-sm leading-6 text-v-white-900/80">
                {translate(`${key}.description`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
