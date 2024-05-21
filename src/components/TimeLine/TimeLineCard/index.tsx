import { BiSolidUpArrow } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import LayoutSection from "../../LayoutSection";

interface TimeLineCardProps {
event: string;
eventDate: string;
}

export default function TimeLineCard({event, eventDate}:TimeLineCardProps) {
  return (

    
        <div className="w-[10.5rem] md:w-[14rem] lg:w-[18rem] h-fit mb-7 ">
          <div className="relative">
            <div className="rounded-full w-3 h-3 bg-v-dark-900 dark:bg-v-white-500 absolute top-[-4px] left-[148px] md:left-[192px] lg:left-[240px]"></div>
            <div className=" w-full h-1 bg-v-dark-900 dark:bg-v-white-500 rounded "></div>
          </div>
          <div className="mx-auto w-[10rem] h-[12rem] md:w-[12rem] md:h-[14rem] lg:w-[14rem] lg:h-[16rem] bg-white dark:bg-v-dark-300 mt-6 relative rounded shadow-md p-2">
            <BiSolidUpArrow
              size={22}
              className="absolute right-0 bottom-[11.6rem] md:bottom-[13.6rem] lg:bottom-[15.6rem] text-white dark:text-v-dark-300"
            />
            <label className="flex items-center justify-end text-xs lg:text-base gap-1 font-semibold mb-2">
              <MdDateRange 
              size={18}/>
              {eventDate}
            </label>
            <article className="max-h-[155px] lg:max-h-[230px] !leading-[1rem] lg:!leading-[1.4rem] overflow-hidden text-ellipsis line-clamp-[9] text-xs lg:text-sm">{event}</article>
          </div>
        </div>
  );
}
