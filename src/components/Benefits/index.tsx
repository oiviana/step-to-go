"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Code2, SearchCheck, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";

type BenefitItem = {
  description: string;
  icon: LucideIcon;
  number: string;
  title: string;
};

const BENEFITS: BenefitItem[] = [
  {
    number: "01",
    icon: Code2,
    title: "Desenvolvimento de sites e aplicativos",
    description:
      "Crio aplicações web e mobile com foco em performance, escalabilidade e uma experiência moderna do início ao fim.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Implementação e documentação",
    description:
      "Atuo na implementação, evolução e sustentação de aplicações, entregando soluções bem estruturadas e documentadas de ponta a ponta.",
  },
  {
    number: "03",
    icon: SearchCheck,
    title: "Otimização e SEO",
    description:
      "Desenvolvo páginas rápidas, acessíveis e bem estruturadas, aplicando SEO para melhorar desempenho, ranqueamento e experiência do usuário.",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div ref={ref} className="mt-24 w-full pt-8 lg:mt-28 lg:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="mb-3 block text-base text-v-green lg:text-lg">
          Impulsione seu negócio
        </span>
        <h2 className="max-w-[38rem] text-left text-lg font-semibold leading-[1.35] text-v-white-300 lg:text-2xl">
          Serviços completos para impulsionar o crescimento do seu negócio digital
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3">
        {BENEFITS.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 42 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 42 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="group relative flex h-full min-h-[19rem] cursor-default flex-col overflow-hidden rounded-[1.15rem] border border-white/[0.07] bg-white/[0.02] p-6 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 hover:border-v-green/[0.22] hover:bg-v-green/[0.03]"
            >
              <div className="pointer-events-none absolute left-1/2 top-[-3.75rem] h-[11.25rem] w-[11.25rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,230,85,0.12)_0%,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px bg-[linear-gradient(90deg,transparent,#9ee655,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute right-6 top-6 text-[0.7rem] font-semibold tracking-[0.16em] text-v-green/20 transition-colors duration-300 group-hover:text-v-green/45">
                {item.number}
              </span>

              <div className="relative z-[1] mb-5 flex h-11 w-11 items-center justify-center rounded-[0.7rem] border border-v-green/[0.12] bg-v-green/[0.08] transition-colors duration-300 group-hover:border-v-green/[0.28] group-hover:bg-v-green/[0.14]">
                <Icon
                  size={20}
                  strokeWidth={2}
                  className="text-v-green transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="relative z-[1] flex flex-1 flex-col">
                <div className="flex min-h-[12.5rem] flex-col gap-3 lg:min-h-[13.5rem]">
                  <h3 className="min-h-[3.75rem] max-w-[17rem] text-lg font-semibold leading-[1.3] text-v-white-300">
                    {item.title}
                  </h3>
                  <p className="min-h-[8rem] overflow-hidden text-sm leading-8 text-v-white-900/50 transition-colors duration-300 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] group-hover:text-v-white-900/65">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto h-px bg-white/[0.05] transition-colors duration-300 group-hover:bg-v-green/[0.1]" />

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-v-green/45 transition-[color,gap] duration-300 group-hover:gap-3 group-hover:text-v-green">
                  Saiba mais
                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-[3px]"
                  />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
