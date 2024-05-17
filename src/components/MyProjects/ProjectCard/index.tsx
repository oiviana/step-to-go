import { ContentImage } from "@/contentful/contentImage";
import Image from "next/image";
import { Link, usePathname } from "../../../../navigation";
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
}

export default function ProjectCard({
  title,
  subtitle,
  stack,
  slug,
  thumbnail,
  hasFinished
}: ProjectCardProps) {

  const stackList = stack.join(" - ");
  const translate = useTranslations("Home")

  return (
    <div className="flex flex-col w-full max-w-[400px] shadow-md mx-auto lg:mx-0 cursor-pointer h-[430px]">
      <div className="max-h-[230px] group overflow-hidden rounded-t">
        <Image
         src={`https:${thumbnail?.src}`}
          alt="Projeto em construção"
          width={400}
          height={230}
          className="transition-all duration-200 group-hover:scale-105 "
          style={{objectFit:"contain"}}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="flex flex-col p-2 gap-3 rounded-b bg-white dark:bg-v-dark-900 border-t border-v-white-300 dark:border-gray-500 flex-1">
        <h3 className="text-lg lg:text-xl text-v-dark-bold dark:text-v-white-300 font-bold mb-1">
          {title}
        </h3>
        <p className="text-xs lg:text-sm min-h-[40px] max-h-[80px] overflow-hidden text-ellipsis line-clamp-[4]">
          {subtitle}
        </p>
        <span className="text-sm font-bold">{stackList}</span>

        <button className={`text-xs lg:text-sm bg-v-white-500 dark:bg-v-dark-300 p-3 rounded shadow-sm mt-auto ${!hasFinished && 'opacity-[0.50] cursor-default'}`}>
          <Link className={`flex w-full h-full justify-center ${!hasFinished && 'opacity-[0.50] cursor-default'}`} href={`${hasFinished ? `/projects/${slug}` : `/#projects`} `} >{hasFinished ? translate("projects.button") : translate("projects.buttonNotFinished")}</Link>
        </button>
      </div>
    </div>
  );
}
