import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MyWorkButton() {
    const translate = useTranslations("Hero");

    return (
        <a
            className="group inline-flex min-h-14 items-center justify-center gap-2 border-b border-v-green/30 px-1 text-sm font-semibold text-v-green transition-colors hover:border-v-green hover:text-[#b3eb7a] sm:text-base mb-3"
            href="#my-work"
        >
            {translate("workButton")}
            <ChevronDown
                size={18}
                strokeWidth={2.4}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
            />
        </a>
    );
}
