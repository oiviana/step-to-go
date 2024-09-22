"use client";

import Navbar from "./Navbar";
import TranslateButton from "../TranslateButton";
import Link from "next/link";
import Logo from "../Logo";
import TextLogo from "../Logo/TextLogo";
import { useState } from "react";
import MobileHamburguer from "./MobileHamburguer";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="w-100 flex flex-col px-4 lg:px-0 w-full max-w-[1170px] mx-auto fixed lg:sticky py-4 lg:py-0 bg-v-dark-test">
      <div className="w-full justify-between flex items-center">
        <div className="flex w-full justify-between items-center lg:pt-5">
          <Link
            href="/"
            className=" w-full md:max-w-44  flex gap-4"
            aria-label="Logo do site"
          >
            <Logo />
            <TextLogo />
          </Link>
          <button
            className="flex md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Abrir menu"
          >
            <MobileHamburguer openedMenu={showMobileMenu} />
          </button>
        </div>
        <Navbar
          showMobileMenu={showMobileMenu}
          setShowMenu={setShowMobileMenu}
        />
           <TranslateButton />
      </div>    
    </header>
  );
}
