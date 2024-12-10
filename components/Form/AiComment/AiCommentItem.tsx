import { IMAGE } from "@/api/axios";
import { TrendingData } from "../Trending/TrendingData";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { Skeleton } from "@mui/material";

interface Props {
    movie : TrendingData
}

const AICommentItem = ({movie} : Props) => {

    return (
        <Link href={`/movie/${movie.id}`} className="flex gap-2 h-32 bg-slate-700/80 border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className=" h-full flex-none overflow-hidden relative">
                {
                    movie.poster ? 
                    <img src={`${IMAGE}${movie && movie.poster}`} alt={movie.poster} className=" object-cover h-full"/>
                    :
                    <Skeleton variant="rounded" width={85} height={200} className=" top-0"/>
                }
            </div>
            <div className=" py-4 px-2 space-y-1.5">
                <div className=" text-lg text-white line-clamp-1">
                    {movie.name}
                </div>
                <div className="text-white">
                    {movie.date}
                </div>
                <div className="flex items-center gap-2 font-semibold text-white">
                    {shortenDecimal(movie.vote)} <FaStar  color="white" className="h-5"/>
                </div>
            </div>
        </Link>
    )
}

export default AICommentItem

function shortenDecimal(input: string): string {
    // Chuyển đổi chuỗi thành số
    const number = parseFloat(input);
    
    // Sử dụng toFixed để giữ 1 chữ số thập phân
    return number.toFixed(1);
}