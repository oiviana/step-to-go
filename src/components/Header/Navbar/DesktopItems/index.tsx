"use client"

import { useNavigationPage } from "@/utils/Providers";

export default function DesktopItems() {
    const {setPage} = useNavigationPage();
  return (
    <ul className="hidden md:flex text-v-dark-500 dark:text-v-white-500 items-center gap-8 md:text-lg lg:gap-24">
      <li className="hover:text-black hover:dark:text-v-white-900 transition-colors"
      onClick={() => setPage("about")}>
        Sobre mim
      </li>
      <li className="hover:text-black hover:dark:text-v-white-900 transition-colors"
       onClick={() => setPage("projects")}>
        Projetos
      </li>
    </ul>
  );
}
