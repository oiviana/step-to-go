"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import Logo from "../../Logo";
import ThemeButton from "../../ThemeButton";
import { useTranslations } from "next-intl";
import TranslateButton from "@/components/TranslateButton";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const translate = useTranslations("Header");
  return (
    <nav className="flex w-full max-w-[1440px] mx-auto">
      <div className="flex w-full justify-between items-center px-5 h-[83px] md:h-16">
        <Link
          href="/"
          className="font-bold text-xl text-gray-900 dark:text-slate-100 w-full md:max-w-44 lg:mt-[2.5rem]"
          aria-label="Logo do site"
        >
          <Logo />
        </Link>
        <button
          className="flex md:hidden"
          onClick={() => setShowMobileMenu(true)}
          aria-label="Abrir menu"
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
        } md:hidden inset-y-0 left-0 z-10 w-full overflow-y-auto bg-v-white-900 dark:bg-v-dark-700 flex flex-col gap-7 text-v-dark-500 dark:text-v-white-500 text-base p-3`}
      >
        <div className="flex w-full justify-between px-[16px] py-2 mb-9">
          <Link
            href="/"
            className="font-bold text-xl text-gray-900 dark:text-v-white-500"
            aria-label="Logo do site"
          >
            <Logo />
          </Link>
          <button
            className="flex md:hidden items-center"
            onClick={() => setShowMobileMenu(false)}
            aria-label="Fechar menu"
          >
            <IoClose
              size={40}
              className="text-v-dark-500 dark:text-v-white-500"
            />
          </button>
        </div>
        <div className="flex flex-col gap-10 ml-3">
          <li>
            <Link href="/#about" onClick={() => setShowMobileMenu(false)}>
              {translate(`navbar.0`)}
            </Link>
          </li>
          <li>
            <Link href="/#trajectory" onClick={() => setShowMobileMenu(false)}>
              {translate(`navbar.1`)}
            </Link>
          </li>
          <li>
            <Link href="/#projects" onClick={() => setShowMobileMenu(false)}>
              {translate(`navbar.2`)}
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setShowMobileMenu(false)}>
              {translate(`navbar.3`)}
            </Link>
          </li>
          <div className="flex gap-2">
            <ThemeButton />
            <TranslateButton />
          </div>
        </div>
      </ul>
      <ul className="hidden md:flex text-v-dark-500 dark:text-v-white-500 items-center gap-8 md:text-lg lg:gap-24">
        <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
          <Link href="/#about">{translate(`navbar.0`)}</Link>
        </li>
        <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
          <Link href="/#trajectory">{translate(`navbar.1`)}</Link>
        </li>
        <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
          <Link href="/#projects">{translate(`navbar.2`)}</Link>
        </li>
        <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
          <Link href="/#contact">{translate(`navbar.3`)}</Link>
        </li>
      </ul>
    </nav>
  );
}
