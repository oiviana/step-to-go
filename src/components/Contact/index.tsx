import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import EmailForm from "./EmailForm";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Contact() {
  const translate = useTranslations("Home")
  return (
    <LayoutSection>
      <TitleSection title={translate("sectiontitles.3.title")} id="contact"/>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div>
          <h3 className="text-base lg:text-xl text-center lg:text-left max-w-[530px] !leading-8">
            {translate("contact.description")}
          </h3>
          <EmailForm />
        </div>
        <div>
          <div className="flex mb-10">
            <h3 className=" text-base lg:text-xl text-center lg:text-left max-w-[460px] !leading-10 font-bold">
            {translate("contact.whatsapp")}
            </h3>
            <a
            target="_blank"
            href="https://wa.me/5511943488946"
            title="Whatsapp Logo">
              <IoLogoWhatsapp className="text-green-500" size={80} />
            </a>
          </div>
          <h3 className="text-base lg:text-xl my-7">{translate("contact.contacts")}</h3>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lucasviana80/"
            rel="noopener noreferrer"
            className="group flex py-2  justify-start items-end gap-2 leading-[16px] my-1 hover:text-cyan-500 transition-colors"
          >
            <FaLinkedin size={25} />
            LinkedIn
          </a>

          <span className="flex py-2  justify-start items-end gap-2 leading-[20px] my-1 hover:text-cyan-500 transition-colors">
            <MdEmail size={25} />
            vianalucas80@gmail.com
          </span>
          <a
            target="_blank"
            href="https://github.com/oiviana"
            rel="noopener noreferrer"
            className="flex py-2  justify-start items-end gap-2 leading-[20px] my-1 hover:text-cyan-500 transition-colors"
          >
            <FaGithubSquare size={25} />
            Github
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/viana.jpg/"
            rel="noopener noreferrer"
            className="flex py-2  justify-start items-end gap-2 leading-[20px] my-1 hover:text-cyan-500 transition-colors"
          >
            <FaSquareInstagram size={25} />
            @oiviana
          </a>
        </div>
      </div>
    </LayoutSection>
  );
}
