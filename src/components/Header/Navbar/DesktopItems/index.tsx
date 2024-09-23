"use client"

import { useNavigationPage } from "@/utils/Providers";
import { useState } from "react";

export default function DesktopItems() {

    const {setPage, page} = useNavigationPage();
    const [activeSection, setActiveSection] = useState("");

    const handleSetSection = (section:string) => {
        setPage(section)
        setActiveSection(section)
    }

  return (
    <ul className="hidden lg:flex text-v-white-500 items-center gap-8 md:text-lg lg:gap-20 font-semibold text-base">
      <li className={`transition-colors cursor-pointer  ${activeSection === 'about' && activeSection === page && 'text-v-green'} min-w-[104px]`}
      onClick={() => handleSetSection("about")}>
        Carreira
      </li>
      <li className={`transition-colors cursor-pointer  ${activeSection === 'projects' && activeSection === page && 'text-v-green'} min-w-[104px]`}
       onClick={() => handleSetSection("projects")}>
        Projetos
      </li>
    </ul>
  );
}
