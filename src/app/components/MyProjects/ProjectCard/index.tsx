import Image from "next/image";

export default function ProjectCard(){

    return(
        <div className="flex flex-col w-full max-w-[400px] shadow-md">
            <div className="max-h-[260px]">
                <Image
                src="/building-project.jpg"
                alt="Projeto em construção"
                width={420}
                height={280}
                className="rounded-t"
                />
            </div>
            <div className="flex flex-col p-2 gap-3 rounded-b bg-white dark:bg-v-dark-900">
                <h3 className="text-lg lg:text-xl text-v-dark-bold dark:text-v-white-300 font-bold mb-1">
                    Projeto de aplicativo
                </h3>
                <p className="text-xs lg:text-sm max-h-[80px] overflow-hidden text-ellipsis line-clamp-[4]">
                é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                </p>
                <span className="text-sm font-bold">NextJS - React - PHP - Tudinho</span>


                <div>
                    <button className="text-xs lg:text-sm bg-v-white-500 dark:bg-v-dark-300 p-3 rounded shadow-sm">Mais detalhes</button>
                </div>

            </div>
        </div>
    )
}