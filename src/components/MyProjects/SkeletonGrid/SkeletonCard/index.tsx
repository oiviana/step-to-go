import Image from "next/image";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col w-full max-w-[400px] shadow-md mx-auto lg:mx-0 p-2 bg-white dark:bg-v-dark-300 rounded animate-pulse">
      <div className="max-h-[260px] group overflow-hidden rounded flex justify-center animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="390"
          height="260"
          version="1"
          viewBox="0 0 400 260"
          className="fill-v-white-900 dark:fill-v-dark-900 "
        >
          <path
            d="M0 1300V0h4000v2600H0V1300zm992 1113c223-105 279-369 113-539-183-187-508-147-630 78-37 67-46 180-21 255 33 101 119 183 231 222 92 33 217 26 307-16zm1736-817c55-29 54-28 716-1110 90-147 146-249 146-265 0-15-7-37-16-50-38-53 33-51-1568-51-1003 0-1494 3-1512 10-15 6-33 18-40 28-31 40-18 69 192 411 114 185 223 362 242 395 20 32 50 69 67 82 38 29 105 44 149 34 77-17 98-40 257-293 83-133 166-262 182-286 53-78 156-102 239-54 18 11 62 68 115 153 48 74 199 313 336 530s259 406 271 419c39 44 77 61 139 61 32 0 70-6 85-14z"
            transform="matrix(.1 0 0 -.1 0 260)"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col w-full gap-4 animate-pulse">
        <div className="flex flex-col gap-1">
          <div className="h-3 w-full bg-v-white-900 rounded dark:bg-v-dark-900"></div>
          <div className="h-3 w-full bg-v-white-900 rounded dark:bg-v-dark-900"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-2 w-full bg-v-white-900 rounded dark:bg-v-dark-900"></div>
          <div className="h-2 w-full bg-v-white-900 rounded dark:bg-v-dark-900"></div>
          <div className="h-2 w-full bg-v-white-900 rounded dark:bg-v-dark-900"></div>
        </div>
        <div className="flex  gap-1">
          <div className="h-3 w-14 bg-v-white-900 rounded dark:bg-v-dark-900"></div>
          <div className="h-3 w-14 bg-v-white-900 rounded dark:bg-v-dark-900"></div>
          <div className="h-3 w-14 bg-v-white-900 rounded dark:bg-v-dark-900"></div>
          <div className="h-3 w-14 bg-v-white-900 rounded dark:bg-v-dark-900"></div>
     
        </div>
        <div className="h-10 w-full bg-v-white-900 rounded dark:bg-v-dark-900"></div>
      </div>
    </div>
  );
}
