import { FaGithub } from "react-icons/fa";

export default function GithubButton(){

    return(
        <a className="cursor-pointer"
        target="_blank"
         aria-label="Perfil de Lucas Viana no Github"
        href="https://github.com/oiviana">
            <FaGithub size={25} className="text-v-green hover:text-[#b3eb7a] transition-colors"/>
        </a>
    )
}