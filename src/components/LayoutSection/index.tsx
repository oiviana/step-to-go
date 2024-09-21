import { ReactNode } from "react";

interface LayoutSectionProps {
  children: ReactNode;
}

export default function LayoutSection({ children }: LayoutSectionProps) {
  return (
    <section className="min-h-24 w-full px-2 min-[1170px]:px-0 lg:pb-[180px] text-v-dark-bold dark:text-v-white-300 max-w-[1170px] mx-auto bg-red-400 flex lg:overflow-scroll lg:overflow-x-hidden lg:h-[44rem]">
      {children}
    </section>
  );
}
