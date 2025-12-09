import Benefits from "../Benefits";
import MyWorkButton from "../ui/MyWorkButton";
import Image from "next/image";
import WorkPhoto from "../WorkPhoto";

export default function MyWork() {
    return (
        <div className="w-full pt-5">
            <MyWorkButton />

            <div className="mt-28 flex flex-col lg:flex-row lg:justify-between gap-4 pt-8 lg:pt-14" id="my-work">
                <div className="w-full lg:max-w-[31rem] flex flex-col">
                    <span className="text-v-green text-base lg:text-lg mb-2">Quem sou eu</span>
                    <h2 className="font-semibold text-lg lg:text-2xl max-w-[600px] text-left mb-6">Criando soluções performáticas e inovadoras</h2>
                    <p className="leading-8">
                        Com mais de 6 anos desenvolvendo soluções digitais, atuo na criação de projetos performáticos, otimizados e focados na melhor experiência do usuário.
                    </p>
                    <p className="leading-8">
                        Nesse período, trabalhei na construção de plataformas SaaS, E-commerce, Landing Pages de alta conversão, aplicações mobile web em geral.
                    </p>
                    <p className="leading-8">
                        Minha missão é transformar ideias em soluções sólidas, intuitivas e de alto impacto, sempre alinhando tecnologia, design e resultados.
                    </p>
                </div>
                <div className="w-full max-w-[33rem]">
                    <WorkPhoto/>
                </div>
            </div>
            <Benefits />
        </div>
    );
}