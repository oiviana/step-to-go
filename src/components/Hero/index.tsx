import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TiDocumentText } from "react-icons/ti";
import { motion } from 'framer-motion';

export default function Hero() {
  const translate = useTranslations("Hero");
  return (
    <LayoutSection>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center justify-center lg:mx-0 w-full">
          <Image
            src="/hero-img-1.png"
            width={250}
            height={250}
            alt="Lucas Viana"
            className="rounded-full border-4 border-v-dark-500"
            priority={true}
          />
          <TitleSection id="test" title={translate("title")} />
          <p className="leading-9 text-center py-4 max-w-[650px]">
            {translate("description")}
          </p>
          <a
            href={process.env.CV_BUTTON_URL ?? 'https://drive.google.com/file/d/11rGXp37xvs19eD2DwpygRKc6yu0_36Ta/view?usp=sharing'}
            target="_blank"
            className="green-light w-[214px] p-3 h-[60px] flex justify-center gap-2 items-center mt-3 rounded-md  shadow-md font-semibold bg-transparent text-v-green border-2 border-v-green transition-colors"
          >
            <TiDocumentText className="text-v-green" size={30} />
            {translate("button")}
          </a>
        </div>
      </motion.div>
    </LayoutSection>
  );
}
