import { BiSolidUpArrow } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import LayoutSection from "../../LayoutSection";

export default function TimeLineCard() {
  return (
    <LayoutSection>
      <div className="flex min-h-[800px] mt-4">
        <div className="w-[14rem] h-[14rem]">
          <div className="relative">
            <div className="rounded-full w-3 h-3 bg-v-dark-900 dark:bg-v-white-500 absolute top-[-4px] left-[143px] md:left-[175px]"></div>
            <div className=" w-full h-1 bg-v-dark-900 dark:bg-v-white-500 rounded"></div>
          </div>
          <div className="w-[10rem] h-[12rem] md:w-[12rem] md:h-[14rem] bg-white dark:bg-v-dark-300 mt-6 relative rounded shadow-md p-2">
            <BiSolidUpArrow
              size={22}
              className="absolute right-0 bottom-[11.6rem] md:bottom-[13.6rem] text-white dark:text-v-dark-300"
            />
            <label className="flex items-center justify-end text-xs lg:text-base gap-1 font-semibold mb-1">
              <MdDateRange 
              size={18}/>
              fev/2016
            </label>
            <article className="max-h-[170px] overflow-hidden text-ellipsis line-clamp-[7] text-sm lg:text-base">Iniciei meu curso técnico e tive meu primeiro contato com programação meu curso técnico e tive meu primeiro contato com programação meu curso técnico e tive meu primeiro contato com programação</article>
          </div>
        </div>
        <div className="w-[14rem] h-[14rem]">
          <div className="relative">
            <div className="rounded-full w-3 h-3 bg-v-dark-900 dark:bg-v-white-500 absolute top-[-4px] left-[143px] md:left-[175px]"></div>
            <div className=" w-full h-1 bg-v-dark-900 dark:bg-v-white-500 rounded"></div>
          </div>
          <div className="w-[10rem] h-[12rem] md:w-[12rem] md:h-[14rem] bg-white dark:bg-v-dark-300 mt-6 relative rounded shadow-md p-2">
            <BiSolidUpArrow
              size={22}
              className="absolute right-0 bottom-[11.6rem] md:bottom-[13.6rem] text-white dark:text-v-dark-300"
            />
            <label className="flex items-center justify-end text-xs lg:text-base gap-1 font-semibold mb-1">
              <MdDateRange 
              size={18}/>
              fev/2016
            </label>
            <article className="max-h-[170px] overflow-hidden text-ellipsis line-clamp-[7] text-sm lg:text-base">Iniciei meu curso técnico e tive meu primeiro contato com programação meu curso técnico e tive meu primeiro contato com programação meu curso técnico e tive meu primeiro contato com programação</article>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
}
