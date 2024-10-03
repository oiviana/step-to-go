import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function LinkedinButton(){

    return(
        <a className="cursor-pointer"
        target="_blank"
         aria-label="Perfil de Lucas Viana no Linkedin"
        href="https://www.linkedin.com/in/lucasviana80/">
            <FaLinkedin size={25} className="text-v-green hover:text-[#b3eb7a] transition-colors"/>
        </a>
    )
}