import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CvButton() {
    const translate = useTranslations("Hero");

    return (
        <a
            href={process.env.CV_BUTTON_URL ?? "https://drive.google.com/file/d/1BAALqxLvbuSeDMygtVv3v0mdtl3Vf6ID/view?usp=sharing"}
            target="_blank"
            rel="noreferrer"
            className="green-light inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-v-green px-6 py-3 text-sm font-semibold text-v-dark-test transition-transform hover:-translate-y-0.5 hover:bg-[#b3eb7a] sm:text-base"
        >
            <Download size={18} strokeWidth={2.4} />
            {translate("button")}
        </a>
    );
}
