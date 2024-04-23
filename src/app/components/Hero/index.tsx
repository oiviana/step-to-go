import LayoutSection from "../LayoutSection";
import Image from "next/image";

export default function Hero() {
  return (
    <LayoutSection>
      <div className="lg:relative">
        <h2 className="text-2xl lg:text-4xl font-bold py-5 lg:pb-16">
          Prazer, me chamo Lucas Viana!
        </h2>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div className="lg: max-w-[40rem]">
            <p className="leading-9">
              Sou apaixonado por tecnologia, com mais de 5 anos de experiência
              em desenvolvimento. Meu objetivo é contribuir ativamente para o
              mercado, aplicando meu conhecimento e habilidades para solucionar
              desafios em projetos diversos.
            </p>
            <h3 className="text-xl py-6">
                Tecnologias que utilizo:
            </h3>
          </div>
          <div className="lg:absolute top-7 right-0">
            <Image
              src="/hero.png"
              width={400}
              height={400}
              alt="Lucas Viana"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </LayoutSection>
  );
}
