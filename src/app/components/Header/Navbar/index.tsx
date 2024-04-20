"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="flex w-full">
      <div className="flex w-full justify-between items-center px-4">
        <Link
          href="/"
          className="font-bold text-xl text-gray-900 dark:text-slate-100"
        >
          Logo
        </Link>
        <button
          className="flex md:hidden"
          onClick={() => setShowMobileMenu(true)}
        >
          <GiHamburgerMenu size={30} className="text-v-dark-500 dark:text-v-white-500" />
        </button>
      </div>

      <ul
        className={`${
          showMobileMenu ? "fixed" : "hidden"
        } md:hidden inset-y-0 left-0 z-10 w-full overflow-y-auto bg-v-white-900 dark:bg-v-dark-500 flex flex-col gap-5 text-v-dark-500 dark:text-v-white-500 text-base p-3`}
      >
        <div className="flex w-full justify-between p-2 mt-3">
          <Link
            href="/"
            className="font-bold text-xl text-gray-900 dark:text-v-white-500"
          >
            Logo
          </Link>
          <button
            className="flex md:hidden"
            onClick={() => setShowMobileMenu(false)}
          >
            <IoClose size={40} className="text-v-dark-500 dark:text-v-white-500" />
          </button>
        </div>
        <li>Sobre mim</li>
        <li>Profissional</li>
        <li>Acadêmico</li>
        <li>Projetos</li>
      </ul>
    </nav>
  );
}
