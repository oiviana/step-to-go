import { useTranslations } from "next-intl";
import { TiDocumentText } from "react-icons/ti";

export default function CvButton() {
    const translate = useTranslations("Hero");
    return (
        <a
            href={process.env.CV_BUTTON_URL ?? 'https://drive.google.com/file/d/1BAALqxLvbuSeDMygtVv3v0mdtl3Vf6ID/view?usp=sharing'}
            target="_blank"
            className="green-light w-[214px] p-3 h-[60px] flex justify-center gap-2 items-center mt-3 rounded-md  shadow-md font-semibold bg-transparent text-v-green border-2 border-v-green transition-colors"
        >
            <TiDocumentText className="text-v-green" size={30} />
            {translate("button")}
        </a>
    )
}