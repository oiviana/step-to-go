// import Link from "next/link";
// import Logo from "../Logo";
// import NextLogo from "../Logo/NextLogo";
import { useTranslations } from "next-intl";

export default function Footer() {
  const translate = useTranslations("Footer");

  return (
    <footer className="w-full lg:fixed bottom-0">
      <div className="max-w-[1170px] flex flex-col mx-auto px-2 pt-[20px] text-v-dark-bold dark:text-v-white-300 bg-slate-300">
        <div className="flex flex-col items-center gap-9 lg:gap-0 lg:flex-row lg:justify-between lg:items-start">

        </div>
        <div className="py-4 flex justify-center mt-9 border-t-2 border-v-white-300 dark:border-v-dark-500 text-xs lg:text-sm">
          <span>&copy; 2024 - {translate("copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
