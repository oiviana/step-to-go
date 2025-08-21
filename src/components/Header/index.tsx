"use client";

import Navbar from "./Navbar";
import TranslateButton from "../ui/TranslateButton";
import Link from "next/link";
import Logo from "../Logo";
import TextLogo from "../Logo/TextLogo";
import { useState } from "react";
import MobileHamburguer from "../ui/MobileHamburguer";
import { useNavigationPage } from "@/utils/Providers";
import GithubButton from "../ui/GithubButton";
import LinkedinButton from "../ui/LinkedinButton";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {setPage} = useNavigationPage()
  return (
    <header className="w-100 flex flex-col px-4 lg:px-0 w-full max-w-[1170px] mx-auto fixed z-50 lg:sticky py-4 lg:py-0 bg-v-dark-test lg:h-[74px]">
      <div className="flex items-center h-full">
        <div className="w-full justify-between items-center h-full hidden lg:flex ">
          <div className="flex w-full justify-between items-center">
            <Link
              href="#"
              className=" w-full md:max-w-44 flex gap-4"
              aria-label="Logo do site"
              onClick={()=>{setPage('hero')}}
            >
              <Logo width={95} height={45}/>
             <span className="min-w-[150px] flex items-center text-v-purple italic font-semibold text-3xl logo-text-gradient">Oi Viana</span>
            </Link>
          </div>
        </div>
        <Navbar
          showMobileMenu={showMobileMenu}
          setShowMenu={setShowMobileMenu}
        />
        <div className="hidden lg:flex gap-6 lg:ml-5">
          <LinkedinButton/>
          <GithubButton/>
          <TranslateButton />
        </div>
      </div>
      <div className="w-full justify-between items-center h-full flex lg:hidden ">
        <div className="flex w-full justify-between items-center">
          <Link
            href="#"
            className=" w-full max-w-48 flex gap-4"
            aria-label="Logo do site"
            onClick={()=>{{
              setPage('hero')
              setShowMobileMenu(false)
            }}}
          >
            <Logo width={80} height={42}/>
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
    </header>
  );
}
