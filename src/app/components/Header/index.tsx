import { useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import ThemeButton from "../ThemeButton";
import { FaGithub } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <header className="w-100 flex flex-col bg-v-white-500 dark:bg-v-dark-700 px-2 shadow">
        <div className="w-full justify-between ">
          <Navbar />
        </div>
        <div className="justify-end  hidden md:flex w-full max-w-[1440px] mx-auto gap-10 py-2">
          <Link href="/">
            <IoLanguage 
            className="text-v-dark-900 dark:text-v-white-500"
            size={30}/>
          </Link>
          <ThemeButton />
        </div>
      </header>
    </>
  );
}
