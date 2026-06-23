import { motion } from "framer-motion";
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
            <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                className="inline-flex"
            >
                <ChevronDown
                    size={18}
                    strokeWidth={2.4}
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
            </motion.span>
        </a>
    );
}
