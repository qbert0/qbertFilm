'use client'
import { ReviewData } from "./ReviewData";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { stringAvatar } from "@/lib/avartarColor";
interface Props {
    review : ReviewData
}

const ReviewItem = ({review} : Props) => {
    const [explore, setExplore] = useState(false)

    
    return (
        <div className=" bg-white shadow-md border-2 border-gray-100 px-2 py-1 rounded-xl my-1" onClick={() => setExplore(!explore)}>
            <div className="flex gap-4 items-center text-black font-bold px-1 pt-2 ">
                <div className=" rounded-full flex-none h-10 w-10 p-0 overflow-hidden">
                    {/* <img src={`${IMAGE}${review.authorDetail.avatar}`} alt="a" className=" object-cover w-full" /> */}
                    <Avatar {...stringAvatar(review.authorDetail.userName)} />
                </div>
                <div className="">
                    {review.authorDetail.userName}
                </div>
                <div className="text-sm ">
                    {formatTimeAgo(review.createAt)}
                </div>
                {
                    review.sentiment && <div className={`font-bold ml-4 ${review.sentiment === "negative" ? "text-red-500" : "text-green-500"}`}>{review.sentiment}</div>
                }
            </div>

            <div className={`px-2 py-1 text-wrap text-base text-black ${explore ? "" :" line-clamp-2"}`}>
                {review.content}
            </div>
            
            <div className=" flex gap-2 px-2 items-center py-2 ">
                <CiHeart />
                {review.authorDetail.rating}
            </div>

        </div>
    )
}

export default ReviewItem


function formatTimeAgo(inputDate: string): string {
    // Thay thế "UTC" bằng "Z" để chỉ định múi giờ UTC
    const formattedDate = inputDate.replace("UTC", "Z");
    const now = new Date();
    const pastDate = new Date(formattedDate);
    
    const diffInMilliseconds = now.getTime() - pastDate.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    
    const secondsInMinute = 60;
    const secondsInHour = secondsInMinute * 60;
    const secondsInDay = secondsInHour * 24;
    const secondsInMonth = secondsInDay * 30; // Giả định 1 tháng = 30 ngày
    const secondsInYear = secondsInDay * 365; // Giả định 1 năm = 365 ngày

    if (diffInSeconds < secondsInHour) {
        const minutes = Math.floor(diffInSeconds / secondsInMinute);
        return `${minutes} phút trước`;
    } else if (diffInSeconds < secondsInDay) {
        const hours = Math.floor(diffInSeconds / secondsInHour);
        return `${hours} giờ trước`;
    } else if (diffInSeconds < secondsInMonth) {
        const days = Math.floor(diffInSeconds / secondsInDay);
        return `${days} ngày trước`;
    } else if (diffInSeconds < secondsInYear) {
        const months = Math.floor(diffInSeconds / secondsInMonth);
        return `${months} tháng trước`;
    } else {
        const years = Math.floor(diffInSeconds / secondsInYear);
        return `${years} năm trước`;
    }
}



