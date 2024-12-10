import instance, { API_KEY } from "@/api/axios"
import { convertReview, convertReviewMe, ReviewData } from "./ReviewData"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ReviewItem from "./ReviewItem"
import ReviewInput from "./ReviewInput"
import { getComment } from "@/api/action/comment"
import TestLog from "@/components/Card/text"

interface Props {
    movieId : string
}


const Review = async ({movieId} : Props) => {
    const data : any = await instance.get(`/movie/${movieId}/reviews${API_KEY}`)
    const listReview = convertReview(data.results)

    const comment : any = await getComment(movieId)
    const listComment = comment !== 'error' ? convertReviewMe(comment) : []
    return (
        <div className="flex flex-col pl-32 pr-1 ">
            <div className="w-full fle py-4">
                <div className="text-3xl font-bold">
                Review
                </div> 
                <TestLog text={comment}/>
            </div>
        <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-full flex-col-reverse px-4">
                {
                    listReview.map((item : ReviewData, index : number) => {
                        return (
                            <ReviewItem key={index} review={item}/>
                        )
                    })
                }
                { 
                    listComment.map((item : ReviewData, index : number) => {
                        return (
                            <ReviewItem key={index} review={item}/>
                        )
                    })
                }
            </div>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
        {
        comment !== "error" && <ReviewInput id={movieId}/>
        }

        </div>
    )
}

export default Review
