export default function TitleSection({ title, id }: { title: string, id: string }) {
  return (
    <h2 className="text-xl lg:text-2xl font-bold py-7 pb-5 text-center lg:text-left" id={id}>
      {title}
    </h2>
  );
}
