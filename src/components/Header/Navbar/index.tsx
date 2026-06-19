"use client";
import React from "react";
import { useTranslations } from "next-intl";
import TranslateButton from "../../ui/TranslateButton";
import DesktopItems from "./DesktopItems";
import { useNavigationPage } from "@/utils/Providers";
import GithubButton from "@/components/ui/GithubButton";
import LinkedinButton from "@/components/ui/LinkedinButton";

type NavbarProps = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar() {
  return (
    <nav className="flex w-full max-w-[450px]">
      <DesktopItems />
    </nav>
  );
}

export function MobileNavbarOverlay({ setShowMenu }: NavbarProps) {
  const { setPage } = useNavigationPage();
  const translate = useTranslations("Header");

  return (
    <div className="fixed inset-0 z-30 flex bg-[rgba(20,18,23,0.78)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[rgba(20,18,23,0.58)] lg:hidden">
      <div className="relative flex h-full w-full flex-col overflow-hidden">
        <div className="main-grid-pattern pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative flex h-full w-full flex-col gap-8 overflow-y-auto px-8 pb-10 pt-[7.25rem] text-base text-v-white-500">
          <button
            type="button"
            className="w-fit text-left font-semibold transition-colors hover:text-v-green"
            onClick={() => {
              setPage('about')
              setShowMenu(false)
            }}
          >
            {translate(`navbar.0`)}
          </button>
          <button
            type="button"
            className="w-fit text-left font-semibold transition-colors hover:text-v-green"
            onClick={() => {
              setPage('projects')
              setShowMenu(false)
            }}
          >
            {translate(`navbar.1`)}
          </button>
          <button
            type="button"
            className="w-fit text-left font-semibold transition-colors hover:text-v-green"
            onClick={() => {
              setPage('contact')
              setShowMenu(false)
            }}
          >
            {translate(`navbar.2`)}
          </button>
          <div className="mt-4 flex w-fit gap-8 border-t border-white/[0.08] pt-6">
            <LinkedinButton />
            <GithubButton />
            <TranslateButton />
          </div>
        </div>
      </div>
    </div>
  );
}
