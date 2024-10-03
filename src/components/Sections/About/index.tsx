import LayoutSection from "@/components/LayoutSection";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import { FaDotCircle } from "react-icons/fa";

const secondaryFontFamily = Inter({
  display: "swap",
  weight: "500",
  subsets: ["latin"],
});

export default function About() {
  const translate = useTranslations();
  const timeline = translate.raw("timeline");

  const timelineList = timeline.map((item: any, index: number) => (
    <motion.li 
    className=" flex flex-col lg:flex-row mb-[3.5rem] lg:mb-[10rem] z-[-1]" 
    key={index}
    initial={{ opacity: 0, x: -50 }} // Começa fora da tela à esquerda
    animate={{ opacity: 1, x: 0 }} // Termina na posição original
    transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex lg:relative mb-6 lg:mb-0">
        <FaDotCircle
          size={15}
          className="text-v-green absolute right-[-12px] top-[4px] hidden lg:flex"
        />
        <div className="flex flex-col lg:w-[200px] text-v-green  pr-4 lg:pr-0">
          <span className="text-base lg:text-lg">{item.month}</span>
          <span className="text-2xl lg:text-4xl font-bold ">{item.year}</span>
        </div>
        <h2 className="lg:w-[290px] text-center border-t-0 lg:border-t-2 border-l-2 lg:border-l-0 border-v-dark-500 lg:border-v-green pt-[2px] lg:pt-4 pl-4 lg:pl-0 text-lg lg:text-xl font-semibold lg:mt-[10px]">
          {item.title}
        </h2>
      </div>
      <div
        className={`lg:pl-12 text-justify  leading-8 text-v-white-900 ${secondaryFontFamily.className} lg:pr-1`}
      >
        {item.event}
      </div>
      <div className="bg-v-dark-500 h-[2px] w-[100%] mx-auto mt-8 lg:hidden"></div>
      </motion.li>
  ));

  return (
    <LayoutSection>
      <ul className="w-full">
        {timelineList}
      </ul>
    </LayoutSection>
  );
}
