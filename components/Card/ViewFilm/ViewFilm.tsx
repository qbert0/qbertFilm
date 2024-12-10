import { IMAGE } from "@/api/axios";
import { Movie } from "./ViewMovieData";
import RateCircle from "./RateCircle";
import UserCheck from "./Usercheck";
import VibeDot from "../vibe/VibeDot";
import { Skeleton } from "@mui/material";
import { getDecision, postDecision } from "@/api/action/decision";

interface Props {
    movie : Movie
}

const ViewFilm = async({movie} : Props) => {
    const rate : any = await getDecision(movie.id)

    const handleLike = async(like : boolean) => {
        'use server'
        await postDecision(movie.id, like ? 1.0 : 0.0)
    }
    
    return (
        <div className="w-full  flex justify-end relative">
                <div className="w-2/3  overflow-hidden">
                {
                    movie.image ? 
                    <img src={`${IMAGE}${movie && movie.image}`} alt={movie.image} className=" object-top w-full "/>
                    :
                    <Skeleton width="100%" height={600}/>
                }
                </div>
                <div className=" absolute w-full h-full flex ">
                    <div className="w-1/3 pt-8 pb-24 flex justify-center bg-[#4A5F9E] ">
                        {
                            movie.poster ? 
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster}`} alt={movie.image} className="object-cover h-full rounded-xl"/>
                            :
                            <Skeleton width={300} height={500}/>
                        }
                    </div>

                    {/*      */}
                    <div className=" w-2/3 text-xl text-gray-300 font-bold flex flex-col items-start pt-10 bg-gradient-to-r from-[#4A5F9E] from-5% via-[#4A5F9E]/50 to-95% to-[#4A5F9E]">
                        <div className="text-3xl font-bold">
                            {movie.name} ({shotYear(movie.date)})
                        </div>
                        <div className="flex gap-1 text-base ">
                            {sortYear(movie.date)} . 
                            {movie.genres.map((item) =>{ 
                                return (
                                <div key={item.id} className="mx-1 hover:text-white duration-75 cursor-pointer">
                                    {item.name}
                                </div>
                            )})}
                            <div>
                                . {convertStringMinutesToHours(movie.time)}
                            </div>
                        </div>
                        <div className=" my-2 gap-3 flex items-center ">
                            <RateCircle rate={movie.vote} />
                            <div className="flex items-center">
                                User score
                            </div>
                            <VibeDot movideId={movie.id} name={movie.name}/>
                        </div>

                        <div className=" my-4">
                            {rate !== "error" && 
                                <UserCheck rate={rate !== 1 ? true : false} setRate={handleLike}/>
                            }
                        </div>

                        <div className=" my-1 text-gray-400">
                            {movie.tagline}
                        </div>
                        <div className="text-2xl">
                            Overview
                        </div>
                        <div className="w-4/5 line-clamp-5 text-base">
                            {movie.overView}
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default ViewFilm

function shortenDecimal(input: string): string {
    // Chuyển đổi chuỗi thành số
    const number = parseFloat(input);
    
    // Sử dụng toFixed để giữ 1 chữ số thập phân
    return number.toFixed(1);
}
function shotYear (input : string) : string {
    const dateString: string = "2024-11-23";
    const year: string = dateString.split("-")[0];
    return year
}

function sortYear (input : string) : string {
    const dateString: string = "2024-11-23";
    const parts: string[] = dateString.split("-");
    const formattedDate: string = `${parts[2]}/${parts[1]}/${parts[0]}`;
    return formattedDate
}

function convertStringMinutesToHours(minutesString: string): string {
    const minutes: number = parseInt(minutesString, 10); // Chuyển đổi chuỗi thành số
    const hours: number = Math.floor(minutes / 60);
    const remainingMinutes: number = minutes % 60;
    return `${hours}h${remainingMinutes}m`;
}