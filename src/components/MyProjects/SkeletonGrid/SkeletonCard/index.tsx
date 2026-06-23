export default function SkeletonCard() {
  return (
    <div className="flex min-h-[560px] w-full max-w-[400px] snap-start flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015)),#181820] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="h-[210px] bg-white/[0.035] p-3">
        <div className="h-full w-full animate-pulse rounded-2xl bg-white/[0.08]" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="h-4 w-28 animate-pulse rounded bg-v-green/20" />
        <div className="mt-5 h-7 w-4/5 animate-pulse rounded bg-white/[0.1]" />

        <div className="mt-5 space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-white/[0.07]" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-white/[0.07]" />
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <div className="h-8 w-20 animate-pulse rounded-full bg-v-green/[0.12]" />
          <div className="h-8 w-24 animate-pulse rounded-full bg-v-green/[0.12]" />
          <div className="h-8 w-16 animate-pulse rounded-full bg-v-green/[0.12]" />
          <div className="h-8 w-28 animate-pulse rounded-full bg-v-green/[0.12]" />
        </div>

        <div className="mt-auto h-11 w-full animate-pulse rounded bg-v-green/25" />
      </div>
    </div>
  );
}
