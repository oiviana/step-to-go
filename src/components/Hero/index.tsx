import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import TechnologySlider from "./TechnologySlider";
import Image from "next/image";

export default function Hero() {
  return (
    <LayoutSection>
      <div className="relative">
        <TitleSection title="Prazer, me chamo Lucas Viana!" id="about"/>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div className="lg: max-w-[40rem] mt-[2rem] lg:mt-0 sm:mx-auto lg:mx-0">
            <p className="leading-9">
              Sou apaixonado por tecnologia, com mais de 5 anos de experiência
              em desenvolvimento. Meu objetivo é contribuir ativamente para o
              mercado, aplicando meu conhecimento e habilidades para solucionar
              desafios em projetos diversos.
            </p>
            <h3 className="text-xl py-6">Tecnologias que utilizo:</h3>
            <TechnologySlider />
          </div>
          <div>
            <div className="lg:absolute top-7 right-0 flex justify-center lg:mx-0">
              <Image
                src="/hero.png"
                width={400}
                height={400}
                alt="Lucas Viana"
                className="rounded-full"
              />
            </div>
            <div className="bottom-[15rem] mt-2 lg:flex items-end lg:h-[378px] min-w-[300px] flex justify-center lg:justify-normal">
              <a
                href="https://drive.google.com/file/d/1ReRpGHVCIRJ69a9h2Ieemiz4dCNt-cSQ/view?usp=sharing"
                target="_blank"
                className="p-5 h-[60px] flex max-w-[220px] leading-2 justify-center rounded-md lg:absolute shadow-md font-semibold bg-v-dark-900 dark:bg-v-white-500 text-v-white-300 dark:text-v-dark-bold"
              >
                Veja meu currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
}
