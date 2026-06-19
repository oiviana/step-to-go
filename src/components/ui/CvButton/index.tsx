import { Newspaper } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CvButton() {
    const translate = useTranslations("Hero");

    return (
        <a
            href="https://vianarchives.com.br"
            target="_blank"
            rel="noreferrer"
            className="green-light inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-v-green px-6 py-3 text-sm font-semibold text-v-dark-test transition-transform hover:-translate-y-0.5 hover:bg-[#b3eb7a] sm:text-base"
        >
            <Newspaper size={18} strokeWidth={2.4} />
            {translate("button")}
        </a>
    );
}
