import instance, { API_KEY} from "@/api/axios"
import { convertTrending, TrendingData } from "../Trending/TrendingData"
import AICommentItem from "./AiCommentItem"
import { getRecommentdation } from "@/api/action/recommendation"

interface Props {
    movieId : string
}

 const AiComment = async ({movieId} : Props) => {

    const film : TrendingData[] | "error" = await getRecommentdation(movieId)
    if (film === "error") return
    return (
        <div className=" flex flex-col gap-2">
            <div className=" text-xl font-semibold">
                AI Recommendation
            </div>

            <div className="px-3 space-y-1.5">
                { 
                    film.map((item, index) => {
                        if(index > 4) return
                        return (<AICommentItem movie={item} key={index} />)
                    })
                }
            </div>

        </div>
    )
}

export default AiComment