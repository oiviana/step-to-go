import Navbar from "./Navbar";
import ThemeButton from "../ThemeButton";
import TranslateButton from "../TranslateButton";


export default function Header() {
  return (
    <>
      <header className="w-100 flex flex-col px-2 shadow w-full max-w-[1170px] mx-auto  sticky">
        <div className="w-full justify-between ">
          <Navbar />
        </div>
        <div className="justify-end  hidden md:flex w-full  mx-auto gap-10 py-2">
          <TranslateButton/>
        </div>
      </header>
    </>
  );
}

// bg-[#2e7dbb]