import Link from "next/link";
import Logo from "../Logo";
import NextLogo from "../Logo/NextLogo";
import { useTranslations } from "next-intl";

export default function Footer() {
  const translate = useTranslations("Footer");

  return (
    <footer className="w-full bg-v-white-500 dark:bg-v-dark-700 isolate ">
      <div className="max-w-[1440px] flex flex-col mx-auto px-2 pt-[80px] text-v-dark-bold dark:text-v-white-300">
        <div className="flex flex-col items-center gap-9 lg:gap-0 lg:flex-row lg:justify-between lg:items-start">
          <div className="flex items-center gap-4 lg:border-r-8 border-white dark:border-v-dark-300 pr-9 lg:h-[108px]">
            <Logo />
            <h2 className="italic font-bold text-xl lg:text-3xl ">
              Step to Go
            </h2>
          </div>
          <div>
            <ul className="flex flex-wrap gap-2 text-sm lg:flex-col  lg:text-base">
              <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
                <Link href="/#about">{translate("links.0")}</Link>
              </li>
              <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
                <Link href="/#trajectory">{translate("links.1")}</Link>
              </li>
              <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
                <Link href="/#projects">{translate("links.2")}</Link>
              </li>
              <li className="hover:text-black hover:dark:text-v-white-900 transition-colors">
                <Link href="/#contact">{translate("links.3")}</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[300px]">
            <h3 className="text-center lg:text-left">
              {translate("description")}
            </h3>
          </div>
          <div className="">
            <span className="flex items-center gap-5">
            {translate("development")}
              <span>
                <NextLogo />
              </span>
            </span>
          </div>
        </div>
        <div className="py-4 flex justify-center mt-9 border-t-2 border-v-white-300 dark:border-v-dark-500 text-xs lg:text-sm">
          <span>&copy; 2024 - {translate("copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
