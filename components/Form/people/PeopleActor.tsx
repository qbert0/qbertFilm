'use server'
import instance, { API_KEY } from "@/api/axios"
import { convertPeopleCast, filterActorsByYear,PeopleCast } from "./PeopleData";
import Link from "next/link";

interface Props {
    id : string
}

const PeopleActor = async ({id} : Props ) => {
    const data : any = await instance.get(`person/${id}/movie_credits${API_KEY}`)
    const newdata = convertPeopleCast(data.cast);
    const record = filterActorsByYear(newdata);
    const years = Object.keys(record).map(Number).reverse();
    return (
        <div className=" ">
            <div className=" text-xl font-bold px-5 py-2">
                Acting
            </div>
            <div className=" rounded-xl shadow-sm mx-2 my-2 bg-white overflow-hidden border border-gray-400/40">
            {
            years.map((item, index) => (
                <CastYear key={index} cast={record[item]} />
            ))
            }
            </div>
        </div>
    )
}

export default PeopleActor


const CastYear = ({cast} : {cast : PeopleCast[]}) => {
    return (
        <div className="px-x py-2 border border-gray-400/40">
            {
                cast.map((item, index) => (
                    <CastMovie key={index} movie={item}/>
                ))
            }
        </div>
    )
}

const CastMovie = ({movie} : {movie: PeopleCast}) => {
    return (
        <div className=" flex px-2 py-1">
            <div className="text-base font-light flex-none w-20 flex justify-center">
                {!movie.year ? "--" : movie.year}
            </div>
            <div className=" flex-1 flex flex-col gap-2">
                <Link href={`/movie/${movie.id}`} className=" hover:text-blue-600" >
                {movie.name}
                    </Link>
                <div className=" px-5 text-sm font-light text-slate-400">
                    {movie.char && "as " + movie.char} 
                </div>
            </div>
        </div>
    )
}