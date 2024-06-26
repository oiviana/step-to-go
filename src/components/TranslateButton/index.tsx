"use client";
import { useEffect, useRef, useState } from "react";
import { Link, usePathname } from "../../../navigation";
import { IoLanguage } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";

export default function TranslateButton() {
  const pathName = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: TouchEvent | MouseEvent) {
      if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-2 relative">
      <button
      onClick={()=> setShowDropdown(!showDropdown)} 
      aria-label="Botão de tradução"
      >
        <IoLanguage
          className="text-v-dark-900 dark:text-v-white-500 hover:text-v-dark-300 hover:dark:text-v-white-900 transition-colors"
          size={30}
        />
      </button>
      <div className={`${showDropdown ? 'flex' : 'hidden'} flex flex-col p-2 absolute right-0 top-[3.9rem] shadow-md rounded bg-v-white-500 dark:bg-v-dark-500 md:dark:bg-v-dark-700 w-32 text-v-dark-bold dark:text-v-white-300 font-semibold`} ref={dropdownRef}>
        <BiSolidUpArrow
        className="absolute right-0 bottom-[5rem] text-v-white-500 dark:text-v-dark-500 md:dark:text-v-dark-700"
        size={25}
        />
      <Link className="p-1 text-center rounded mb-2 hover:bg-v-white-300 hover:dark:bg-v-dark-300 transition-colors" href={pathName} locale="pt" aria-label="botão de traduções" onClick={()=>setShowDropdown(false)}>Português</Link>
      <Link  className=" p-1 text-center rounded hover:bg-v-white-300 hover:dark:bg-v-dark-300 transition-colors" href={pathName} locale="en" aria-label="botão de traduções" onClick={()=>setShowDropdown(false)}>English</Link>
      </div>
    </div>
  );
}
