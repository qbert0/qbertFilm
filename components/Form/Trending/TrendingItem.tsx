import { IMAGE } from "@/api/axios";
import { TrendingData } from "./TrendingData";
import Link from "next/link";

interface Props {
    trending : TrendingData
}

const TrendingItem = ({trending} : Props) => {

    return (
        <div className=" flex flex-col gap-3  rounded-lg ">
            <Link href={`/movie/${trending.id}`}>
                <div className=" w-72 overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:scale-105 hover:z-10 duration-200 border-opacity-20">
                    <img src={`${IMAGE}${trending && trending.poster}`} alt={trending.poster} className=" object-cover h-full"/>
                </div>
            </Link>
            <div className="px-4 py-2 text-base flex flex-col gap-1">
                <div className="text-2xl font-semibold line-clamp-1 text-nowrap">
                    {trending.name}
                </div>
                <div>
                    {trending.date}
                </div>
            </div>
        </div>
        
    )
}

export default TrendingItem