"use client"

import { useNavigationPage } from "@/utils/Providers";
import { useState } from "react";

export default function DesktopItems() {

    const {setPage} = useNavigationPage();
    const [activeSection, setActiveSection] = useState("");

    const handleSetSection = (section:string) => {
        setPage(section)
        setActiveSection(section)
    }

  return (
    <ul className="hidden md:flex text-v-dark-500 dark:text-v-white-500 items-center gap-8 md:text-lg lg:gap-24">
      <li className={`transition-colors cursor-pointer  ${activeSection === 'about' && 'text-v-green'}`}
      onClick={() => handleSetSection("about")}>
        Sobre mim
      </li>
      <li className={`transition-colors cursor-pointer  ${activeSection === 'projects' && 'text-v-green'}`}
       onClick={() => handleSetSection("projects")}>
        Projetos
      </li>
    </ul>
  );
}
