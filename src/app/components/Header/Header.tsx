import { useState } from "react";
import ThemeButton from "../ThemeButton";

export default function Header() {
  return (
    <>
      <header className="w-100 bg-v-white-900 dark:bg-v-dark-500 h-20">
        <nav>
          <ul className="flex">
            <li>Oi</li>
            <li>Oi</li>
            <li>Oi</li>
            <li>Oi</li>
          </ul>
          <ThemeButton />
        </nav>
      </header>

    </>
  );
}
