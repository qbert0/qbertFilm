import Link from "next/link";
import { TrendingData } from "../Trending/TrendingData";
import { IMAGE } from "@/api/axios";
import { Skeleton } from "@mui/material";

interface Props {
    comment : TrendingData
}

const RecommentItem = ({comment} : Props) => {

    return (
        <div className=" flex flex-col gap-3 rounded-lg w-64 ">
            <Link href={`/movie/${comment.id}`} className="w-full">
                <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:scale-105 hover:z-10 duration-200 border-opacity-20">
                    {
                        comment.image ? 
                        <img src={`${IMAGE}${comment && comment.image}`} alt={comment.image} className=" object-cover h-full"/>
                        :
                        <Skeleton variant="rectangular"  width="100%" height={143} className=" object-cover h-full" />
                    }
                </div>
            </Link>
            <div className="px-2 py-2 text-base flex gap-1 justify-between">
                <div className="text-xl font-semibold line-clamp-2 text-wrap">
                    {comment.name}
                </div>
                <div>
                    {/* 50% */}
                </div>
            </div>
        </div>
    )
}

export default RecommentItem