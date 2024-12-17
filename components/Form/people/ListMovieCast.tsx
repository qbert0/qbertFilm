import instance, { API_KEY } from "@/api/axios"
import { convertMovieCast, MovieCast } from "./PeopleData"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import MovieCastItem from "./MovieCastItem"


interface Props {
    id : string
}

const ListMovieCast = async ({id} : Props) => {
    const data = await instance.get(`person/${id}/movie_credits${API_KEY}`)
    const newData = convertMovieCast(data);
    return (
        <div className="flex flex-col gap-2 ">
        <div className=" w-full flex ">
            <div className="text-2xl font-bold">
                Known For
            </div>
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
            <div className="flex w-max space-x-3 py-2">
                {
                    newData.map((item : MovieCast, index : number) => {
                        return (
                            <MovieCastItem key={index} movie={item} />
                        )
                    })
                }
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    </div>
    )
}

export default ListMovieCast