import { getFavorite } from "@/api/action/current"
import { IMAGE } from "@/api/axios"
import AddListwatch from "../_component/AddListwatch"
import TrashIcon from "../_component/Trash"


const FavoritePage = async () => {
    const data : any = await getFavorite()

    const newdata = convert(data.results)
    return (
        <div className=" bg-[#F5F5F5] py-2">

            <div className="text-black font-bold text-3xl py-4 px-32">
                My Favorite
            </div>
            <div className="flex flex-col gap-2 px-32 ">
                {
                    newdata.map((item, index) => (
                        <WatchListItem key={index} movie={item}/>
                    ))
                }
            </div>

        </div>
    )
}

export default FavoritePage

interface ListwatchData {
    path : string,
    id : string,
    name : string,
    overview : string,
    date : string
    vote : number,
}

const WatchListItem = ({movie} : {movie : ListwatchData}) => {
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
                    <AddListwatch id={movie.id} />
                    <TrashIcon id={movie.id} type="f" />
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