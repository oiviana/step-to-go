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
    <header className="w-100 flex flex-col px-4 lg:px-0 w-full max-w-[1170px] mx-auto fixed lg:sticky py-4 lg:py-0 bg-v-dark-test lg:h-[74px]">
      <div className="flex items-center h-full">
        <div className="w-full justify-between items-center h-full hidden lg:flex">
          <div className="flex w-full justify-between items-center">
            <Link
              href="/"
              className=" w-full md:max-w-44 flex gap-4"
              aria-label="Logo do site"
            >
              <Logo width={100} height={53}/>
              <TextLogo width={150} height={30}/>
            </Link>
          </div>
        </div>
        <Navbar
          showMobileMenu={showMobileMenu}
          setShowMenu={setShowMobileMenu}
        />
        <div className="hidden lg:flex">
          <TranslateButton />
        </div>
      </div>
      <div className="w-full justify-between items-center h-full flex lg:hidden">
        <div className="flex w-full justify-between items-center">
          <Link
            href="/"
            className=" w-full md:max-w-44  flex gap-4"
            aria-label="Logo do site"
          >
            <Logo width={80} height={42}/>
            <TextLogo width={112} height={17}/>
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
