import LayoutSection from "../LayoutSection";
import TitleSection from "../TitleSection";
import TechnologySlider from "./TechnologySlider";
import Image from "next/image";
import {useTranslations} from "next-intl"

export default function Hero() {
  const translate = useTranslations("Home")
  return (
    <LayoutSection>
      <div className="relative">
        <TitleSection title={translate("sectiontitles.0.title")} id="about"/>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div className=" max-w-[40rem] mt-[2rem] lg:mt-0 sm:mx-auto lg:mx-0">
            <p className="leading-9 text-center lg:text-left py-5 lg:py-0">
         {translate("hero.description")}
            </p>
            <h3 className="text-xl py-6 text-center lg:text-left">{translate("hero.technologies")}</h3>
            <TechnologySlider />
          </div>
          <div>
            <div className="lg:absolute top-7 right-0 flex justify-center lg:mx-0">
              <Image
                src="/hero.png"
                width={400}
                height={400}
                alt="Lucas Viana"
                className="rounded-full"
                priority={true}
              />
            </div>
            <div className="bottom-[15rem] mt-2 lg:flex items-end lg:h-[378px] min-w-[300px] flex justify-center lg:justify-normal">
              <a
                href="https://drive.google.com/file/d/1ECKbFSpiaXA81bCPgWU8F2RNxCV8Seq7/view?usp=drive_link"
                target="_blank"
                className="w-[214px] p-5 h-[60px] flex  justify-center items-center rounded-md lg:absolute shadow-md font-semibold bg-v-dark-900 dark:bg-v-white-500 text-v-white-300 dark:text-v-dark-bold hover:bg-v-dark-500 hover:dark:bg-v-white-900 transition-colors"
              >
                {translate("hero.button")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
}
