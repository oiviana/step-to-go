"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import Logo from "../../Logo";
import ThemeButton from "../../ThemeButton";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="flex w-full max-w-[1440px] mx-auto">
      <div className="flex w-full justify-between items-center px-5 h-20 md:h-16">
        <Link
          href="/"
          className="font-bold text-xl text-gray-900 dark:text-slate-100 w-full md:max-w-44 lg:mt-[2.5rem]"
        >
          <Logo />
        </Link>
        <button
          className="flex md:hidden"
          onClick={() => setShowMobileMenu(true)}
        >
          <GiHamburgerMenu
            size={30}
            className="text-v-dark-500 dark:text-v-white-500"
          />
        </button>
      </div>

      <ul
        className={`${
          showMobileMenu ? "fixed" : "hidden"
        } md:hidden inset-y-0 left-0 z-10 w-full overflow-y-auto bg-v-white-900 dark:bg-v-dark-500 flex flex-col gap-7 text-v-dark-500 dark:text-v-white-500 text-base p-3`}
      >
        <div className="flex w-full justify-between p-2 mt-3 mb-9">
          <Link
            href="/"
            className="font-bold text-xl text-gray-900 dark:text-v-white-500"
          >
            <Logo />
          </Link>
          <button
            className="flex md:hidden items-center"
            onClick={() => setShowMobileMenu(false)}
          >
            <IoClose
              size={40}
              className="text-v-dark-500 dark:text-v-white-500"
            />
          </button>
        </div>
        <li>
        <Link href="/#about"
         onClick={() => setShowMobileMenu(false)}>Sobre</Link>
        </li>
        <li>
        <Link href="/#trajectory"
         onClick={() => setShowMobileMenu(false)}>Trajetória</Link>
        </li>
        <li>
          <Link href="/#projects"
           onClick={() => setShowMobileMenu(false)}>Projetos</Link>
        </li>
        <li>
        <Link href="/#contact"
         onClick={() => setShowMobileMenu(false)}>Contato</Link>
        </li>
        <ThemeButton/>
      </ul>
      <ul className="hidden md:flex text-v-dark-500 dark:text-v-white-500 items-center gap-8 md:text-lg lg:gap-24">
        <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
        <Link href="/#about">Sobre</Link>
        </li>
        <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
        <Link href="/#trajectory">Trajetória</Link>
        </li>
        <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
          <Link href="/#projects">Projetos</Link>
        </li>
        <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
        <Link href="/#contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
