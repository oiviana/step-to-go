import type { IconType } from "react-icons";
import {
  SiDocker,
  SiGit,
  SiJest,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVtex,
} from "react-icons/si";

type SliderItem =
  | {
      techName: string;
      techImg: string;
      iconClassName?: string;
      techIcon?: never;
    }
  | {
      techName: string;
      techIcon: IconType;
      iconClassName?: string;
      techImg?: never;
    };

export const sliderMock: SliderItem[] = [
  {
    techIcon: SiReact,
    techName: "React JS",
  },
  {
    techIcon: SiVtex,
    techName: "VTEX IO",
  },
  {
    techIcon: SiTypescript,
    techName: "Typescript",
  },
  {
    techIcon: SiDocker,
    techName: "Docker",
  },
  {
    techIcon: SiTailwindcss,
    techName: "Tailwind CSS",
  },

  {
    techIcon: SiJest,
    techName: "Jest",
  },
  {
    techIcon: SiPostgresql,
    techName: "PostgreSQL",
  },
  {
    techIcon: SiNodedotjs,
    techName: "NodeJS",
  },
  {
    techIcon: SiNestjs,
    techName: "NestJS",
  },
  {
    techIcon: SiGit,
    techName: "GIT",
  },
];
