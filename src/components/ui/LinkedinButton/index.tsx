import { CiLinkedin } from "react-icons/ci";

export default function LinkedinButton(){

    return(
        <a className="inline-flex items-center justify-center leading-none cursor-pointer"
        target="_blank"
         aria-label="Perfil de Lucas Viana no Linkedin"
        href="https://www.linkedin.com/in/lucasviana80/">
            <CiLinkedin size={28} className="text-v-green hover:text-[#b3eb7a] transition-colors"/>
        </a>
    )
}
