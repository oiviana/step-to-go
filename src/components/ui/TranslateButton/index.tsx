"use client";
import { useEffect, useRef, useState } from "react";
import { Link, usePathname } from "../../../../navigation";
import { BiSolidUpArrow } from "react-icons/bi";
import { MdOutlineGTranslate } from "react-icons/md";

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
    <div className="relative">
      <button
      className="inline-flex items-center justify-center leading-none mt-2"
      onClick={()=> setShowDropdown(!showDropdown)} 
      aria-label="Botão de tradução"
      >
        <MdOutlineGTranslate
          className="text-v-green transition-colors"
          size={25}
        />
      </button>
      <div className={`${showDropdown ? 'flex' : 'hidden'} flex flex-col p-2 absolute right-0 top-[2.9rem] shadow-md rounded bg-v-dark-700 w-32 text-v-white-300 font-semibold`} ref={dropdownRef}>
        <BiSolidUpArrow
        className="absolute right-0 bottom-[5.1rem] text-v-dark-700"
        size={25}
        />
      <Link className="p-1 text-center rounded mb-2  hover:bg-v-dark-300 transition-colors" href={pathName} locale="pt" aria-label="botão de traduções" onClick={()=>setShowDropdown(false)}>Português</Link>
      <Link  className=" p-1 text-center rounded hover:bg-v-dark-300 transition-colors" href={pathName} locale="en" aria-label="botão de traduções" onClick={()=>setShowDropdown(false)}>English</Link>
      </div>
    </div>
  );
}
