import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import EmailForm from "./EmailForm";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Contact() {
  return (
    <LayoutSection>
      <TitleSection title="Contato" id="contact"/>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div>
          <h3 className="text-base lg:text-xl text-center lg:text-left max-w-[530px] !leading-8">
            Gostou do que viu por aqui? Entre em contato comigo por email e
            contrate meus serviços!
          </h3>
          <EmailForm />
        </div>
        <div>
          <div className="flex mb-10">
            <h3 className=" text-base lg:text-xl text-center lg:text-left max-w-[480px] !leading-10 font-bold">
              Você também pode entrar em contato pessoalmente comigo, via
              WhatsApp!
            </h3>
            <a
            target="_blank"
            href="https://wa.me/5511943488946">
              <IoLogoWhatsapp className="text-green-500" size={80} />
            </a>
          </div>
          <h3 className="text-base lg:text-xl my-7">Redes de contato:</h3>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lucasviana80/"
            rel="noopener noreferrer"
            className="flex py-2  justify-start items-end gap-2 leading-[16px] my-1"
          >
            <FaLinkedin size={25} />
            LinkedIn
          </a>

          <button className="flex py-2  justify-start items-end gap-2 leading-[20px] my-1">
            <MdEmail size={25} />
            vianalucas80@gmail.com
          </button>
          <a
            target="_blank"
            href="https://github.com/oiviana"
            rel="noopener noreferrer"
            className="flex py-2  justify-start items-end gap-2 leading-[16px] my-1"
          >
            <FaGithubSquare size={25} />
            Github
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/viana.jpg/"
            rel="noopener noreferrer"
            className="flex py-2  justify-start items-end gap-2 leading-[16px] my-1"
          >
            <FaSquareInstagram size={25} />
            @oiviana
          </a>
        </div>
      </div>
    </LayoutSection>
  );
}
