import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProjectsBanner() {
  const translate = useTranslations("Projects")

  return (
    <div className="h-[15rem] lg:h-[20rem] mb-[6rem] flex relative rounded-2xl overflow-hidden wave-content z-[-1]">
      <div className="flex flex-col text-center lg:text-left">
        <motion.h1 className="text-2xl lg:text-4xl text-v-green font-bold mb-8"
             initial={{ opacity: 0, y: -20 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.7 }}>
          {translate("bannerTitle")}
        </motion.h1>
        <motion.p className="text-v-white-900 text-lg lg:text-2xl font-semibold max-w-[800px]"
            initial={{ opacity: 0, y: -40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.0 }}>
           {translate("bannerSubtitle")}
        </motion.p>
      </div>
      <div className="w-full wave-container absolute bottom-0 z-[-2] ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
      fill="#9ee655"
      fill-opacity="1"
      d="M0,240L40,220C80,200,160,180,240,180C320,180,400,220,480,250C560,280,640,310,720,300C800,290,880,230,960,180C1040,130,1120,90,1200,110C1280,130,1360,160,1400,180L1440,200L1440,400L1400,400C1360,400,1280,400,1200,400C1120,400,1040,400,960,400C880,400,800,400,720,400C640,400,560,400,480,400C400,400,320,400,240,400C160,400,80,400,40,400L0,400Z"
    ></path>
        </svg>
      </div>
    </div>
  );
}
