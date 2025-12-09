"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import TranslateButton from "../../ui/TranslateButton";
import DesktopItems from "./DesktopItems";
import { useNavigationPage } from "@/utils/Providers";
import GithubButton from "@/components/ui/GithubButton";
import LinkedinButton from "@/components/ui/LinkedinButton";

type NavbarProps = {
  showMobileMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ showMobileMenu, setShowMenu }: NavbarProps) {
  const { setPage } = useNavigationPage();
  const translate = useTranslations("Header");
  return (
    <nav className="flex w-full max-w-[450px]">
      {showMobileMenu && (
        <div
          className="
    fixed inset-0 top-[5rem] z-50
    lg:hidden
    bg-v-dark-test
    flex
  "
        >
          <ul
            className="
      w-full overflow-y-auto
      flex flex-col gap-7
      text-v-white-500 text-base
      px-3 pt-16 h-screen
      bg-transparent 
    "
          >
            <div className="flex flex-col gap-10 ml-3">

              <li
                onClick={() => {
                  setPage('about')
                  setShowMenu(false)
                }}
              >
                {translate(`navbar.0`)}
              </li>
              <li
                onClick={() => {
                  setPage('projects')
                  setShowMenu(false)
                }}
              >
                {translate(`navbar.1`)}
              </li>
              <li
                onClick={() => {
                  setPage('contact')
                  setShowMenu(false)
                }}
              >
                {translate(`navbar.2`)}
              </li>
              <div className="flex gap-8 mt-4">
                <LinkedinButton />
                <GithubButton />
                <TranslateButton />
              </div>
            </div>
          </ul>
        </div>
      )}

      <DesktopItems />
    </nav>
  );
}
