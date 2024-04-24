export default function TitleSection({ title }: { title: string }) {
  return (
    <h2 className="text-2xl lg:text-4xl font-bold py-5 lg:pb-16 sm:text-center lg:text-left">
      {title}
    </h2>
  );
}
