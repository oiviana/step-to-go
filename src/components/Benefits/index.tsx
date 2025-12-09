import { IoCodeSlash } from "react-icons/io5";
import { RiSeoFill } from "react-icons/ri";
import { GrDocumentPerformance } from "react-icons/gr";
export default function Benefits() {
    return (
        <div className=" rounded-lg w-full min-h-10 mt-32 lg:mt-[15rem] flex flex-col  pt-7 pb-7">
            <span className="text-v-green text-base lg:text-lg mb-3">Impulsione seu negócio</span>
            <h2 className="font-semibold text-lg lg:text-2xl max-w-[600px] text-left">Serviços completos para impulsionar o crescimento do seu negócio digital</h2>
            <div className="flex flex-col lg:flex-row lg: justify-between gap-8 mt-20">
                <div className="w-full max-w-[350px] flex flex-col items-center mb-12 lg:mb-0">
                    <IoCodeSlash size={48} className="mb-6 h-12"/>
                    <h3 className="text-center font-semibold text-lg py-3 min-h-20">Desenvolvimento de sites e aplicativos</h3>
                    <p className="text-center font-light">Crio sua aplicação web ou mobile utilizando as melhores tecnologias do mercado, garantindo escalabilidade, performance e uma experiência moderna do início ao fim.</p>
                </div>
                <div className="w-full max-w-[350px] flex flex-col items-center mb-12 lg:mb-0">
                    <GrDocumentPerformance size={40} className="mb-6 h-12"/>
                    <h3 className="text-center font-semibold text-lg py-3 min-h-20 flex items-center">Implementação e documentação</h3>
                    <p className="text-center font-light">Atuo na implementação, evolução e sustentação de aplicações, entregando soluções bem estruturadas e totalmente documentadas de ponta a ponta.</p>
                </div>
                <div className="w-full max-w-[350px] flex flex-col items-center ">
                    <RiSeoFill  size={48} className="mb-6 h-12"/>
                    <h3 className="text-center font-semibold text-lg py-3 min-h-20 flex items-center">Otimização e SEO</h3>
                    <p className="text-center font-light">Desenvolvo páginas rápidas, acessíveis e bem estruturadas, aplicando práticas de SEO para melhorar desempenho, ranqueamento e experiência do usuário.</p>
                </div>
            </div>
        </div>
    );
}