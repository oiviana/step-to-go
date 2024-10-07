// import Link from "next/link";
// import Logo from "../Logo";
// import NextLogo from "../Logo/NextLogo";
import { useTranslations } from "next-intl";

export default function Footer() {
  const translate = useTranslations("Footer");

  return (
    <footer className="w-full lg:fixed bottom-0 text-v-white-900 bg-v-dark-test">
      <div className="max-w-[1170px]  mx-auto px-2 ">
        <div className=" flex justify-center mt-5 border-v-dark-500 text-xs lg:text-sm pb-3">
          <span>&copy; 2024 - {translate("copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
