"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import TranslateButton from "@/components/TranslateButton";
import DesktopItems from "./DesktopItems";

type NavbarProps = {
  showMobileMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({showMobileMenu, setShowMenu}:NavbarProps) {

  const translate = useTranslations("Header");
  return (
    <nav className="flex w-full max-w-[1440px] mx-auto">
      <ul
        className={`${
          showMobileMenu ? "fixed" : "hidden"
        } lg:hidden inset-y-0 left-0 top-16 z-10 w-full overflow-y-auto bg-v-dark-test flex flex-col gap-7 text-v-dark-500 dark:text-v-white-500 text-base px-3 pt-9`}
      >
        <div className="flex flex-col gap-10 ml-3">
          <li>
            <Link href="/#about" onClick={() => setShowMenu(false)}>
              {translate(`navbar.0`)}
            </Link>
          </li>
          <div className="flex gap-2">
            <TranslateButton />
          </div>
        </div>
      </ul>
      <DesktopItems/>
    </nav>
  );
}
