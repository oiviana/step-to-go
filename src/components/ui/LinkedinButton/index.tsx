import { CiLinkedin } from "react-icons/ci";
import { useTranslations } from "next-intl";

export default function LinkedinButton(){
    const translate = useTranslations("Header");

    return(
        <a className="inline-flex items-center justify-center leading-none cursor-pointer"
        target="_blank"
         rel="noreferrer"
         aria-label={translate("linkedinLabel")}
        href="https://www.linkedin.com/in/lucasviana80/">
            <CiLinkedin size={28} className="text-v-green hover:text-[#b3eb7a] transition-colors"/>
        </a>
    )
}
