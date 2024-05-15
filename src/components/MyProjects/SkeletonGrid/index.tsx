import SkeletonCard from "./SkeletonCard";

export default function SkeletonGrid(){

    return(
        <>
        <div className=" md:hidden">
            <SkeletonCard/>
        </div>
        <div className=" hidden md:flex justify-between lg:justify-center lg: gap-x-16 min-[1246px]:hidden">
            <SkeletonCard/>
            <SkeletonCard/>
        </div>
        <div className=" hidden min-[1246px]:flex justify-between">
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
        </div>
        </>
    )
}