export default function TitleSection({ title, id }: { title: string, id: string }) {
  return (
    <h2 className="text-2xl lg:text-4xl font-bold py-5 lg:pb-16 text-center lg:text-left" id={id}>
      {title}
    </h2>
  );
}
