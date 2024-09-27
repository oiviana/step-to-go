import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TiDocumentText } from "react-icons/ti";
import StackSlider from "../ui/StackSlider";

export default function Hero() {
  const translate = useTranslations("Home");
  return (
    <LayoutSection>
          <div className="flex flex-col items-center justify-center lg:mx-0 w-full">
            <Image
              src="/hero-img-1.png"
              width={250}
              height={250}
              alt="Lucas Viana"
              className="rounded-full border-4 border-v-dark-300"
              priority={true}
            />
            <TitleSection id="test" title="Olá me chamo Lucas Viana" />
            <p className="leading-9 text-center py-4 max-w-[650px]">
              {translate("hero.description")}
            </p>
            <a
              href={process.env.CV_BUTTON_URL ?? 'https://drive.google.com/file/d/1jkeQaAF704JYjthMARTiJPVwI9qobfXR/view?usp=drive_link'}
              target="_blank"
              className="green-light w-[214px] p-3 h-[60px] flex justify-center gap-2 items-center mt-3 rounded-md  shadow-md font-semibold bg-transparent text-v-green border-2 border-v-green transition-colors"
            >
              <TiDocumentText className="text-v-green" size={30} />
              {translate("hero.button")}
            </a>
          </div>
          {/* <div>
          <StackSlider/>
          </div> */}
    </LayoutSection>
  );
}
