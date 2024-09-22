// import Link from "next/link";
// import Logo from "../Logo";
// import NextLogo from "../Logo/NextLogo";
import { useTranslations } from "next-intl";

export default function Footer() {
  const translate = useTranslations("Footer");

  return (
    <footer className="w-full lg:fixed bottom-0">
      <div className="max-w-[1170px]  mx-auto px-2 ">
        <div className=" flex justify-center mt-9 border-t-2 border-v-white-300 dark:border-v-dark-500 text-xs lg:text-sm py-4">
          <span>&copy; 2024 - {translate("copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
