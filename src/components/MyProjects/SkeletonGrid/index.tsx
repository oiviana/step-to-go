import SkeletonCard from "./SkeletonCard";

interface SkeletonGridProps {
  label: string;
}

export default function SkeletonGrid({ label }: SkeletonGridProps) {
  return (
    <div
      className="relative mt-12 overflow-hidden lg:px-16"
      role="status"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      <div className="grid auto-cols-[88%] grid-flow-col gap-6 overflow-hidden px-1 pb-5 pt-2 md:auto-cols-[calc((100%_-_24px)/2)] xl:auto-cols-[400px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}
