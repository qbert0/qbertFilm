import { IMAGE } from "@/api/axios";
import { Cast } from "./CastData";
import { FaArrowRight } from "react-icons/fa";

interface Props {
    cast : Cast
    more : boolean
}

const CastItem = ({cast, more} : Props) => {
    if (!cast.profile_path) return
    if (!more) { 
    return (
        <div className=" border border-gray-400 rounded-xl overflow-hidden w-32 shadow-lg ">
            <div className=" overflow-hidden">
                <img src={`${IMAGE}${cast && cast.profile_path}`} alt={cast.profile_path} className=" object-cover h-full" />
            </div>
            <div className=" flex text-sm flex-col pb-6 pt-2 gap-1 px-2">
                <div className=" font-bold text-wrap">
                    {cast.name}
                </div>
                <div>
                    {cast.character}
                </div>
            </div>
        </div>
    )}
    else {
        return (
            <div className="  flex items-center justify-center w-32 ">
                <div className="hover:text-blue-400 flex gap-2 text-nowrap items-center">
                    View More <FaArrowRight />
                </div> 
            </div>
        )
    }
}

export default CastItem