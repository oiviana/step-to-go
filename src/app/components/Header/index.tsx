import { useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import ThemeButton from "../ThemeButton";

export default function Header() {
  return (
    <>
      <header className="w-100 flex bg-v-white-900 dark:bg-v-dark-500 h-20 "> 
          <Navbar />
          <ThemeButton />
      </header>
    </>
  );
}
