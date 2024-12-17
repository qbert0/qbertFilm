import Link from "next/link";
import { MovieCast } from "./PeopleData";
import { IMAGE } from "@/api/axios";


interface Props {
    movie : MovieCast
}

const MovieCastItem = ({movie} : Props) => {
    if (!movie.path) return 
    return (
        <Link href={`/movie/${movie.id}`} className="  rounded-xl overflow-hidden w-36 bg-white shadow-sm ">
            <div className=" overflow-hidden rounded-xl">
                <img src={`${IMAGE}${movie && movie.path}`} alt={movie.path} className=" object-cover w-full" />
            </div>
            <div className=" flex text-sm flex-col py-2  pt-2 gap-1 px-2">
                <div className=" font-bold text-wrap line-clamp-3">
                    {movie.name}
                </div>
            </div>
        </Link>
    )
}

export default MovieCastItem