"use client";

import Navbar from "./Navbar";
import TranslateButton from "../ui/TranslateButton";
import Link from "next/link";
import Logo from "../ui/Logo";
import { useState } from "react";
import MobileHamburguer from "../ui/MobileHamburguer";
import { useNavigationPage } from "@/utils/Providers";
import GithubButton from "../ui/GithubButton";
import LinkedinButton from "../ui/LinkedinButton";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { setPage } = useNavigationPage()
  return (
   <header className="w-full flex flex-col px-4 lg:px-0 fixed z-40 lg:sticky py-4 lg:py-0 bg-v-dark-test shadow-lg">
      <div className="w-full max-w-[1170px] mx-auto">


        <div className="flex items-center h-full">
          <div className="w-full justify-between items-center h-full hidden lg:flex ">
            <div className="flex w-full justify-between items-center">
              <Link
                href="#"
                className=" w-full  flex gap-4"
                aria-label="Logo do site"
                onClick={() => { setPage('hero') }}
              >
                <Logo className="w-[95px]" variant="gradient" />
                <span className="min-w-[150px] font-jetbrains flex items-center italic logo-text-gradient font-semibold text-lg lg:text-3xl lg:pt-2">Oi Viana</span>
              </Link>
            </div>
          </div>
          <Navbar
            showMobileMenu={showMobileMenu}
            setShowMenu={setShowMobileMenu}
          />
          <div className="hidden lg:flex gap-6 lg:ml-5">
            <LinkedinButton />
            <GithubButton />
            <TranslateButton />
          </div>
        </div>
        <div className="w-full justify-between items-center h-full flex lg:hidden ">
          <div className="flex w-full justify-between items-center">
            <Link
              href="#"
              className=" w-full max-w-48 flex gap-4"
              aria-label="Logo do site"
              onClick={() => {
                {
                  setPage('hero')
                  setShowMobileMenu(false)
                }
              }}
            >
              <Logo className="w-20" variant="solid" />
              <span className="min-w-[120px] flex items-center italic font-semibold text-xl logo-text-gradient">Oi Viana</span>
            </Link>
          </div>
          <button
            className="flex lg:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Abrir menu"
          >
            <MobileHamburguer openedMenu={showMobileMenu} />
          </button>
        </div>
      </div>
    </header>
  );
}
