import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import CvButton from "../ui/CvButton";
import MyWorkButton from "../ui/MyWorkButton";

export default function Greeting() {
    const translate = useTranslations("Hero");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative w-full overflow-hidden  px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
                <div className="absolute inset-x-0 top-[70px] h-44 bg-[radial-gradient(ellipse_58%_72%_at_50%_0%,rgba(158,230,85,0.03),rgba(158,230,85,0.014)_40%,transparent_78%)] blur-2xl" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative mb-8 flex items-center justify-center">
                        <div className="absolute h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(158,230,85,0.14),transparent_70%)] blur-md sm:h-64 sm:w-64" />
                        <div className="relative h-40 w-40 rounded-full border border-v-green/30 bg-[linear-gradient(135deg,rgba(158,230,85,0.28),rgba(20,18,23,0.18)_58%,rgba(158,230,85,0.24))] p-[3px] sm:h-48 sm:w-48 lg:h-52 lg:w-52">
                            <div className="h-full w-full overflow-hidden rounded-full bg-v-dark-900">
                                <Image
                                    src="/myselff.png"
                                    width={250}
                                    height={250}
                                    alt="Lucas Viana"
                                    className="h-full w-full rounded-full object-cover"
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>

                    <h1 className="max-w-[14ch] text-xl font-bold !leading-[48px] tracking-[-0.04em] text-v-white-300 sm:text-5xl lg:text-[2.5rem]">
                        <span>{translate("titleLead")} </span>
                        <span className="text-v-green mt-2">{translate("titleName")}</span>
                    </h1>

                    <p className="mt-5 max-w-[43rem] text-sm leading-8 text-v-white-900 sm:text-base sm:leading-9">
                        {translate("description")}
                    </p>

                    <div className="my-8 h-10 w-px bg-gradient-to-b from-transparent via-v-green/45 to-transparent" />

                    <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
                        <CvButton />
                        <MyWorkButton />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
