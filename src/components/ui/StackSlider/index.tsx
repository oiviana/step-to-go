import Image from "next/image";
import { sliderMock } from "./mock";

export default function StackSlider() {
  const sliderItems = sliderMock.map((item, index) => (
    <li className="w-[150px] lg:w-[200px] h-[105px] flex flex-col items-center flex-shrink-0 gap-3  font-bold lg:text-xl text-v-purple" key={index}>
      <Image src={item.techImg} alt={item.techName} width={65} height={65} />
      <span>{item.techName}</span>
    </li>
  ));

  return (
    <div className="stack-slider-container relative w-full overflow-hidden flex z-[-1] my-9">
      <ul className="flex mt-4 gap-6 w-full  stack-slider">
        {sliderItems}
        {sliderItems}
      </ul>
    </div>
  );
}
