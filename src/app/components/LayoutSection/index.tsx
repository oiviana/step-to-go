export default function LayoutSection({ children }) {
  return (
    <section className="bg-v-white-300 dark:bg-v-dark-500 min-h-24 w-full py-14 px-2 text-v-dark-900 dark:text-v-white-500">
      <div className="w-full max-w-[1440px] mx-auto overflow-hidden">{children}</div>
    </section>
  );
}
