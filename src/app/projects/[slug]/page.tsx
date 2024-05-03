import ProjectSlider from "@/components/ProjectDetails/ProjectSlider";
import ThemeButton from "@/components/ThemeButton";
import { fetchProjectsBySlug } from "@/contentful/myProjects";
import { ProjectProps } from "@/contentful/myProjects";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { VscPreview } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const projectBySlug: ProjectProps | null = await fetchProjectsBySlug(
    params.slug
  );
  const stackList = projectBySlug?.technologies.join(" - ");
  console.log(projectBySlug);
  if (!params.slug || !projectBySlug) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-2 flex flex-col gap-4">
      <header className="flex py-4 shadow-xl mt-3 px-2 dark:text-v-white-300">
        <Link
          href="/"
          className="flex justify-between p-2 gap-2 font-bold text-lg "
        >
          <IoMdArrowRoundBack size={25} />
          <span className="hidden md:flex">Voltar</span>
        </Link>
        <h2 className="flex mx-auto text-lg md:text-2xl font-semibold leading-8">
          Detalhes do Projeto
        </h2>
      </header>
      <section className="mb-5 ">
        <div className="h-[400px] lg:h-[550px] w-full">
         
          <ProjectSlider images={projectBySlug.images} />
        </div>
      </section>
      <section>
        <div className="flex flex-col shadow-lg py-6 md:p-7 gap-4 bg-v-white-900 min-h-[450px] w-full rounded-t-md bg-gradient-to-b dark:from-v-dark-700 from-10% dark:via-v-dark-900 via-40% dark:to-v-dark-bold to-80% px-2 dark:text-v-white-300">
          <div>
          <h1 className="text-lg md:text-3xl font-bold text-center lg:text-left">
            Projeto lindo que eu fiz
          </h1>
          <button>
            <FaCode size={18}/>
            <a href="">Código</a>
            </button>
          <button>Deploy</button>
          </div>
          <span className="text-slate-600 dark:text-slate-500">Tecnologias: {stackList}</span>
       
          <article className="mt-8 !leading-[40px] text-sm md:text-md !font-normal">
            <b>Descrição: </b>{projectBySlug.description}
          </article>
        </div>
      </section>
    </div>
  );
}
