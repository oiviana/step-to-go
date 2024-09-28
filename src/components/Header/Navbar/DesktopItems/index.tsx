"use client"

import { useNavigationPage } from "@/utils/Providers";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function DesktopItems() {
   const translate = useTranslations("Header");
    const {setPage, page} = useNavigationPage();
    const [activeSection, setActiveSection] = useState("");

    const handleSetSection = (section:string) => {
        setPage(section)
        setActiveSection(section)
    }

  return (
    <ul className="hidden lg:flex text-v-white-500 items-center gap-6 md:text-base lg:gap-14 font-semibold text-base lg:mr-6">
      <li className={`transition-colors cursor-pointer  ${activeSection === 'about' && activeSection === page && 'text-v-green'} min-w-[104px]`}
      onClick={() => handleSetSection("about")}>
         {translate(`navbar.0`)}
      </li>
      <li className={`transition-colors cursor-pointer  ${activeSection === 'projects' && activeSection === page && 'text-v-green'} min-w-[104px]`}
       onClick={() => handleSetSection("projects")}>
         {translate(`navbar.1`)}
      </li>
      <li className={`transition-colors cursor-pointer  ${activeSection === 'contact' && activeSection === page && 'text-v-green'} min-w-[104px]`}
       onClick={() => handleSetSection("contact")}>
        {translate(`navbar.2`)}
      </li>
    </ul>
  );
}
