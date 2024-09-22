import { ReactNode } from "react";

interface LayoutSectionProps {
  children: ReactNode;
}

export default function LayoutSection({ children }: LayoutSectionProps) {
  return (
    <section className="section-scroll min-h-24 w-full px-2 min-[1170px]:px-0 lg:pb-[180px] text-v-dark-bold dark:text-v-white-300 max-w-[1170px] mx-auto  flex lg:overflow-scroll lg:overflow-x-hidden lg:h-[46rem] pt-4">
      {children}
    </section>
  );
}
