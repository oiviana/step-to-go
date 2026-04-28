import { FiGithub } from "react-icons/fi";

export default function GithubButton(){

    return(
        <a className="inline-flex items-center justify-center leading-none cursor-pointer"
        target="_blank"
         aria-label="Perfil de Lucas Viana no Github"
        href="https://github.com/oiviana">
            <FiGithub size={22} className="text-v-green hover:text-[#b3eb7a] transition-colors"/>
        </a>
    )
}
