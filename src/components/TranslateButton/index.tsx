"use client";
import { useState } from "react";
import { Link, usePathname } from "../../../navigation";
import { IoLanguage } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";

export default function TranslateButton() {
  const pathName = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="px-2 relative">
      <button
      onClick={()=> setShowDropdown(!showDropdown)} 
      >
        <IoLanguage
          className="text-v-dark-900 dark:text-v-white-500"
          size={30}
        />
      </button>
      <div className={`${showDropdown ? 'flex' : 'hidden'} flex flex-col p-2 absolute right-0 top-[3.9rem] shadow-md rounded bg-v-white-500 dark:bg-v-dark-700 w-32 text-v-dark-bold dark:text-v-white-300 font-semibold`}>
        <BiSolidUpArrow
        className="absolute right-0 bottom-[5rem] text-v-white-500 dark:text-v-dark-700"
        size={25}
        />
      <Link className="p-1 rounded mb-2 hover:bg-v-white-300 hover:dark:bg-v-dark-300 transition-colors" href={pathName} locale="pt" aria-label="botão de traduções">Português</Link>
      <Link  className=" p-1 rounded hover:bg-v-white-300 hover:dark:bg-v-dark-300 transition-colors" href={pathName} locale="en" aria-label="botão de traduções">English</Link>
      </div>
    </div>
  );
}
