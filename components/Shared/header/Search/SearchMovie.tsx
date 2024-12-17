'use client'

import instance, { IMAGE } from "@/api/axios"
import { useEffect, useState } from "react"
import { convertSearchData, SearchData } from "./SearchData"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Location } from "@/app/(user)/search/[id]/page"


const SearchMovie = () => {
    const router = useRouter()
    const [movie, setMovie] = useState('')
    const [list, setList] = useState<SearchData[]>([])
    const handleChangeMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMovie(event.target.value)
    }

    const getData = async() => {
        const data : any = await instance.get(`search/movie?query=${movie}&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        console.log(data)
        const list = convertSearchData(data.results, 6)
        setList(list)
    }
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const location : Location = {
                searchName : movie,
                page : 1
            }
            const userString = encodeURIComponent(JSON.stringify(location));
            router.push(`/search/${userString}`)
            setMovie('')
        }
        };
    useEffect(() => {
        getData()
    }, [movie])

    return (
        <div className=" max-w-96  h-full py-2  relative ">

            <input 
                type="text" 
                className="w-full rounded-xl px-3 py-0.5 bg-white"
                value={movie}
                onChange={handleChangeMovie}
                onKeyPress={handleKeyPress}
                placeholder="Search movie"
            />
            {
                list?.length > 0 && 
                <div className=" absolute flex flex-col top-10 bg-white z-20 w-full border border-gray-400/40 shadow-sm">
                    {
                        list.map((item, index) => {
                            return (
                                <div key={index} className=" pb-2 border-y border-gray-400/20" onClick={() => setMovie('')}>
                                <Link href={`/movie/${item.id}`} className=" flex gap-2 h-16 ">
                                    <img src={`${IMAGE}${item && item.path}`} alt={item.path} className=" object-cover h-full flex-none w-12 "/>
                                    <div className="px-2 flex-1 line-clamp-2 text-sm text-wrap">
                                        {item.name}
                                    </div>
                                </Link>
                                </div>
                            )
                        })
                    }
                </div>
            }
            

        </div>
    )
}

export default SearchMovie
