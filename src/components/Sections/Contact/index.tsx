import EmailForm from "@/components/Contact/EmailForm";
import LayoutSection from "@/components/LayoutSection";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { IoHardwareChip } from "react-icons/io5";
import { FiFigma } from "react-icons/fi"
import { motion } from "framer-motion";
export default function Contact() {

    return (
        <LayoutSection>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                    <div>
                        <h2 className="text-xl lg:text-2xl text-v-purple-light font-semibold mb-8 text-center lg:text-left">Entre em contato!</h2>
                        <p className="text-base max-w-[35rem] text-center lg:text-left">Estou disponível para novas oportunidades. Vamos conversar para trabalharmos juntos!</p>

                        <ul className="flex flex-col lg:flex-row my-14 gap-8 lg:gap-1 text-v-green contact-services">
                            <li className="flex flex-col items-center ">
                                <BsFileEarmarkCodeFill size={35} />
                                <span className="flex lg:max-w-[200px] text-center mt-2">Desenvolvimento Web e Mobile</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <IoHardwareChip size={35} />
                                <span className="flex lg:max-w-[200px] text-center mt-2">Consultoria e manutenção de hardware</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <FiFigma size={35} />
                                <span className="flex lg:max-w-[200px] text-center mt-2">Criação de layouts e interfaces</span>
                            </li>
                        </ul>
                    </div>
                    <EmailForm />
                </div>
            </motion.div>
        </LayoutSection>
    )
}