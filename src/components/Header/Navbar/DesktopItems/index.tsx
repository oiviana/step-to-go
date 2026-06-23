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

    const handleOpenAbout = () => {
        setPage("hero");
        setActiveSection("about");

        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                document.getElementById("my-work")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        });
    }

  return (
    <ul className="hidden lg:flex text-v-white-500 items-center gap-8 md:text-base lg:gap-14 font-semibold text-base lg:mr-6">
      <li className={`transition-colors cursor-pointer whitespace-nowrap ${activeSection === 'about' && 'text-v-green'} min-w-[104px]`}
      onClick={handleOpenAbout}>
         {translate(`navbar.0`)}
      </li>
      <li className={`transition-colors cursor-pointer whitespace-nowrap ${activeSection === 'projects' && activeSection === page && 'text-v-green'} min-w-[132px]`}
       onClick={() => handleSetSection("projects")}>
         {translate(`navbar.1`)}
      </li>
    </ul>
  );
}
