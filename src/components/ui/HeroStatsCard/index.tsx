"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const HERO_STATS = [
    { value: 6, accent: "+", labelKey: "statsYearsLabel" },
    { value: 20, accent: "+", labelKey: "statsProjectsLabel" },
    { value: 10, accent: "+", labelKey: "statsTechnologiesLabel" },
] as const;

type HeroStatsCardProps = {
    isActive: boolean;
};

type CountUpValueProps = {
    accent: string;
    delay: number;
    isActive: boolean;
    value: number;
};

function CountUpValue({ accent, delay, isActive, value }: CountUpValueProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let animationFrame = 0;
        let startTime = 0;
        let timeoutId = 0;
        const duration = 850;

        if (!isActive) return;

        timeoutId = window.setTimeout(() => {
            const animateCount = (timestamp: number) => {
                if (!startTime) startTime = timestamp;

                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(Math.round(progress * value));

                if (progress < 1) {
                    animationFrame = window.requestAnimationFrame(animateCount);
                }
            };

            animationFrame = window.requestAnimationFrame(animateCount);
        }, delay);

        return () => {
            window.clearTimeout(timeoutId);
            window.cancelAnimationFrame(animationFrame);
        };
    }, [delay, isActive, value]);

    return (
        <>
            {isActive ? count : 0}
            <span className="text-v-green">{accent}</span>
        </>
    );
}

export default function HeroStatsCard({ isActive }: HeroStatsCardProps) {
    const translate = useTranslations("Hero");

    return (
        <div className="w-full max-w-[33rem] rounded-[1.25rem] border border-white/[0.07] bg-white/[0.02] px-5 py-5 backdrop-blur-sm sm:max-w-[36rem] sm:px-6">
            <div className="grid gap-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/[0.08]">
                {HERO_STATS.map((item, index) => (
                    <div key={item.labelKey} className="px-2 text-center sm:px-5">
                        <div className="text-[2rem] font-bold leading-none tracking-[-0.04em] text-v-white-300">
                            <CountUpValue
                                accent={item.accent}
                                delay={index * 90}
                                isActive={isActive}
                                value={item.value}
                            />
                        </div>
                        <p className="mt-2 text-xs text-v-white-900/60 sm:text-[0.82rem]">
                            {translate(item.labelKey)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
