import { motion } from "framer-motion";
import { FaCircleChevronDown } from "react-icons/fa6";

export default function MyWorkButton() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <a className="mx-auto flex flex-col gap-6 items-center cursor-pointer" href="#my-work">
                <span className="text-xl font-semibold text-v-green">
                    Conheça meu trabalho
                </span>
                <FaCircleChevronDown size={45} className="text-v-green animate-bounce" />
            </a>
        </motion.div>
    );
}