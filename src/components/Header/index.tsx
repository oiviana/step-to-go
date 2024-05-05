import Navbar from "./Navbar";
import ThemeButton from "../ThemeButton";
import TranslateButton from "../TranslateButton";


export default function Header() {
  return (
    <>
      <header className="w-100 flex flex-col bg-v-white-500 dark:bg-v-dark-700 px-2 shadow">
        <div className="w-full justify-between ">
          <Navbar />
        </div>
        <div className="justify-end  hidden md:flex w-full max-w-[1440px] mx-auto gap-10 py-2">
          <TranslateButton/>
          <ThemeButton />
        </div>
      </header>
    </>
  );
}
