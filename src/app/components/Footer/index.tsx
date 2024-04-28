import Link from "next/link";
import Logo from "../Logo";
import NextLogo from "../Logo/NextLogo";

export default function Footer() {
  return (
    <footer className="w-full bg-v-white-500 dark:bg-v-dark-700 isolate ">
      <div className="max-w-[1440px] flex flex-col mx-auto px-2 pt-[80px] text-v-dark-bold dark:text-v-white-300">
        <div className="flex flex-col items-center gap-9 lg:gap-0 lg:flex-row lg:justify-between lg:items-start">
          <div className="flex items-center gap-4 lg:border-r-8 border-white dark:border-v-dark-300 pr-9 lg:h-[108px]">
            <Logo />
            <h2 className="italic font-bold text-xl lg:text-3xl ">
              Step to Go
            </h2>
          </div>
          <div>
            <ul className="flex flex-wrap gap-2 text-sm lg:flex-col  lg:text-base">
              <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
                <Link href="/#about">Sobre</Link>
              </li>
              <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
                <Link href="/#trajectory">Trajetória</Link>
              </li>
              <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
                <Link href="/#projects">Projetos</Link>
              </li>
              <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
                <Link href="/#contact">Contato</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[300px]">
            <h3 className="text-center lg:text-left">
              Estou disponível para novas oportunidades. Entre em contato para
              trabalhar-mos juntos!
            </h3>
          </div>
          <div className="">
            <span className="flex items-center gap-5">
              Desenvolvido com
              <span>
                <NextLogo />
              </span>
            </span>
          </div>
        </div>
        <div className="py-4 flex justify-center mt-9 border-t-2 border-v-white-300 dark:border-v-dark-500 text-xs lg:text-sm">
          <span>&copy; 2024 - Design e desenvolvimento por Lucas Viana</span>
        </div>
      </div>
    </footer>
  );
}
