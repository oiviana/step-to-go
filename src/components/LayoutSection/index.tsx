import { ReactNode } from "react";

interface LayoutSectionProps {
  children: ReactNode;
}

export default function LayoutSection({ children }:LayoutSectionProps) {
  return (
    <section className="bg-v-white-300 dark:bg-v-dark-500 min-h-24 w-full py-16 px-2 text-v-dark-bold dark:text-v-white-300">
      <div className="w-full max-w-[1440px] mx-auto overflow-hidden">{children}</div>
    </section>
  );
}
