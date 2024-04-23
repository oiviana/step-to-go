export default function TimeLineCard() {
  return (
    <div className="w-[12rem] h-[14rem]">
      <div className="relative">
        <div className="rounded-full w-4 h-4 bg-red-600 absolute top-[-5px]"></div>
        <div className=" w-full h-1 bg-red-600"></div>
      </div>
      <div className="w-[12rem] h-[14rem] bg-slate-600 mt-6">
        Card da time line
      </div>
    </div>
  );
}
