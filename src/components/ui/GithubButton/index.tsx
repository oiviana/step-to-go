import { FiGithub } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function GithubButton(){
    const translate = useTranslations("Header");

    return(
        <a className="inline-flex items-center justify-center leading-none cursor-pointer"
        target="_blank"
         rel="noreferrer"
         aria-label={translate("githubLabel")}
        href="https://github.com/oiviana">
            <FiGithub size={22} className="text-v-green hover:text-[#b3eb7a] transition-colors"/>
        </a>
    )
}
