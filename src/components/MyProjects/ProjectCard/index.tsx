import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  hasDeploy: boolean;
  slug: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  stack,
  hasDeploy,
  slug,
}: ProjectCardProps) {
  const stackList = stack.join(" - ");

  return (
    <div className="flex flex-col w-full max-w-[400px] shadow-md mx-auto lg:mx-0">
      <div className="max-h-[260px] group overflow-hidden rounded-t">
        <Image
          src="/building-project.jpg"
          alt="Projeto em construção"
          width={420}
          height={280}
          className="transition-all duration-200 group-hover:scale-105 "
          priority={false}
        />
      </div>
      <div className="flex flex-col p-2 gap-3 rounded-b bg-white dark:bg-v-dark-900 border-t border-v-white-300">
        <h3 className="text-lg lg:text-xl text-v-dark-bold dark:text-v-white-300 font-bold mb-1">
          {title}
        </h3>
        <p className="text-xs lg:text-sm min-h-[40px] max-h-[80px] overflow-hidden text-ellipsis line-clamp-[4]">
          {subtitle}
        </p>
        <span className="text-sm font-bold">{stackList}</span>

        <button className="text-xs lg:text-sm bg-v-white-500 dark:bg-v-dark-300 p-3 rounded shadow-sm">
          <Link className="flex w-full h-full justify-center" href={`/projects/${slug}`}>Mais detalhes</Link>
        </button>
      </div>
    </div>
  );
}
