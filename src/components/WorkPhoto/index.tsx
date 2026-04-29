import Image from "next/image";

export default function WorkPhoto() {
  return (
    <div className="relative mx-auto flex w-full items-center justify-center px-3 sm:px-5">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,230,85,0.1)_0%,transparent_72%)] sm:h-[24rem] sm:w-[24rem]"
      />

      <div className="group relative z-[1] w-full max-w-[30rem]">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-b-[1.25rem] border border-v-green/[0.18] bg-v-green/[0.025] sm:translate-x-4 sm:translate-y-4" />

        <div className="pointer-events-none absolute left-0 top-[12%] z-[4] h-[55%] w-[3px] rounded-full bg-[linear-gradient(180deg,transparent,rgba(158,230,85,0.9)_40%,rgba(158,230,85,0.9)_60%,transparent)]" />

        <div className="relative z-[2] aspect-[4/3] overflow-hidden rounded-b-[1.25rem] border border-white/[0.06] bg-[linear-gradient(135deg,#141414_0%,#1c1c1c_100%)] shadow-[0_20px_45px_rgba(0,0,0,0.22)]">
          <Image
            src="/me-working.png"
            alt="Lucas Viana trabalhando em seu setup"
            fill
            priority={false}
            sizes="(min-width: 1024px) 30rem, (min-width: 640px) 70vw, 92vw"
            className="object-cover object-center [filter:brightness(0.88)_saturate(0.9)] transition-[filter,transform] duration-500 ease-out group-hover:[filter:brightness(0.97)_saturate(1.05)] group-hover:scale-[1.015]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(13,13,13,0.75)_100%)]" />
        </div>

        <div className="pointer-events-none absolute left-0 top-0 z-[5] h-[1.375rem] w-[1.375rem] rounded-tl-[0.25rem] border-l-2 border-t-2 border-v-green" />
        <div className="pointer-events-none absolute right-0 top-0 z-[5] h-[1.375rem] w-[1.375rem] rounded-tr-[0.25rem] border-r-2 border-t-2 border-v-green" />
        <div className="pointer-events-none absolute bottom-0 left-0 z-[5] h-[1.375rem] w-[1.375rem] rounded-bl-[0.25rem] border-b-2 border-l-2 border-v-green" />
        <div className="pointer-events-none absolute bottom-0 right-0 z-[5] h-[1.375rem] w-[1.375rem] rounded-br-[0.25rem] border-b-2 border-r-2 border-v-green" />
      </div>
    </div>
  );
}
