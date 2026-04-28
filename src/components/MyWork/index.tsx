import Benefits from "../Benefits";
import WorkPhoto from "../WorkPhoto";
import HeroStatsCard from "../ui/HeroStatsCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MyWork() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className="w-full pt-14 lg:pt-16">
            <div
                ref={ref}
                className="flex flex-col gap-12 pt-8 lg:pt-16"
                id="my-work"
            >
                <motion.div
                    initial={{ opacity: 0, y: 48 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto mb-2 flex w-full justify-center lg:mb-6"
                >
                    <HeroStatsCard isActive={isInView} />
                </motion.div>

                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:max-w-[31rem] flex flex-col"
                >
                    <span className="text-v-green text-base lg:text-lg mb-2">Quem sou eu</span>
                    <h2 className="font-semibold text-lg lg:text-2xl max-w-[600px] text-left mb-6">Criando soluções performáticas e inovadoras</h2>
                    <p className="leading-8">
                        Com mais de 6 anos desenvolvendo soluções digitais, atuo na criação de projetos performáticos, otimizados e focados na melhor experiência do usuário.
                    </p>
                    <p className="leading-8">
                        Nesse período, trabalhei na construção de plataformas SaaS, E-commerce, Landing Pages de alta conversão, aplicações mobile e web em geral.
                    </p>
                    <p className="leading-8">
                        Minha missão é transformar ideias em soluções sólidas, intuitivas e de alto impacto, sempre alinhando tecnologia, design e resultados.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-[33rem]"
                >
                    <WorkPhoto />
                </motion.div>
                </div>
            </div>
            <Benefits />
        </div>
    );
}
