import instance, { API_KEY } from "@/api/axios"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { convertTrending, TrendingData } from "../Trending/TrendingData"
import RecommentItem from "./RecommentItem"

interface Props {
    movieId : string
}

const Recomment = async ({movieId} : Props ) => {
    const data : any = await instance.get(`/movie/${movieId}/recommendations${API_KEY}`)
    const film : TrendingData[] = convertTrending(data.results)
    return (
        <div className="flex flex-col gap-2 pt-3 pl-32 pr-1">
            <div className=" w-full flex py-2 ">
                <div className="text-2xl font-bold">
                    Recommendation
                </div>
            </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
            <div className="flex w-max space-x-3 py-2">
                {
                    film.map((item : TrendingData, index : number) => {
                        return (
                            <RecommentItem key={index} comment={item} />
                        )
                    })
                }
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
        </div>
    )
}

export default Recomment