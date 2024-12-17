'use client'
import instance, { IMAGE, TOKEN, WATCHLIST } from "@/api/axios"
import AddFavorite from "../_component/AddFavorite"
import TrashIcon from "../_component/Trash"
import { useEffect, useState } from "react"


const WatchlistPage = () => {
    const [data, setData] = useState<ListwatchData[]>([])
    const [load, setLoad] = useState(false)
    const loadload = () => {
        setLoad(!load)
    }
    const fetch = async () => {
        const data : any = await instance.get(`${WATCHLIST}`, {
            headers : {
                Authorization : `Bearer ${TOKEN}` ,
                Accept: 'application/json'
            }
        })
        const newdata = convert(data.results)
        setData(newdata)
    }

    useEffect (() => {
        fetch()
    }, [])
    useEffect (() => {
        fetch()
    }, [load])

    return (
        <div className=" bg-[#F5F5F5] py-2">

            <div className="text-black font-bold text-3xl py-4 px-32">
                My watchlist
            </div>
            <div className="flex flex-col gap-2 px-32 ">
                {
                    data.map((item, index) => (
                        <WatchListItem key={index} movie={item} setLoad={loadload}/>
                    ))
                }
            </div>

        </div>
    )
}

export default WatchlistPage

interface ListwatchData {
    path : string,
    id : string,
    name : string,
    overview : string,
    date : string
    vote : number,
}

const WatchListItem = ({movie, setLoad} : {movie : ListwatchData, setLoad : () => void}) => {
    return (
        <div className=" flex gap-4 h-48 w-full bg-white  rounded-xl shadow-sm border border-gray-400/40">
            <img src={`${IMAGE}${movie && movie.path}`} alt={movie.path} className=" object-cover h-full rounded-l-xl"/>
            <div className=" flex-1 py-1">
                <div className=" text-black font-bold text-xl ">
                    {movie.name}
                </div>
                <div className=" text-black font-light text-base flex gap-2">
                    {movie.date}
                    {movie.vote}
                </div>

                <div className=" text-black font-medium text-base pt-4 line-clamp-2">
                    {movie.overview}
                </div>
                <div className=" flex gap-2 items-center my-2">
                    <AddFavorite id={movie.id} />
                    <TrashIcon id={movie.id} type="w" setLoad={setLoad}/>
                </div>
            </div>
        </div>
    )
}

const convert = (data : any[]): ListwatchData[] => {
    const newdata : ListwatchData[] =  data.map((item) => {
        return {
            path : item.poster_path,
            id : item.id,
            name : item.original_title,
            overview: item.overview,
            date : item.release_date,
            vote : item.vote_average
        }
    })

    return newdata
}