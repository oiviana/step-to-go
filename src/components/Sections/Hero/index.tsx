import LayoutSection from "../../ui/LayoutSection";
import TitleSection from "../../TitleSection";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TiDocumentText } from "react-icons/ti";
import { motion } from 'framer-motion';
import CvButton from "@/components/ui/CvButton";

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
            src="/myselff.png"
            width={250}
            height={250}
            alt="Lucas Viana"
            className="rounded-full border-4 border-v-dark-500"
            priority={true}
          />
          <TitleSection id="test" title={translate("title")} />
          <p className="leading-9 text-center py-4 max-w-[720px]">
            {translate("description")}
          </p>
          <CvButton />
        </div>
      </motion.div>
    </LayoutSection>
  );
}
