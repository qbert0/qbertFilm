'use client'
import { postAddFavorite, postAddWatchlist } from "@/api/action/current";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BiSolidLike } from "react-icons/bi";
import { FaBookmark, FaHeart } from "react-icons/fa";
interface Props {
    rate: boolean
    setRate : (rate: boolean) => void
    id : string,
}
const toastOptions = {
    autoClose: 1000,
};
const UserCheck = ({rate, setRate, id} : Props) => {

    return (
        <div className=" flex gap-4 ">
            {
                userCheck.map((item, index) => {
                    return (
                        <CircleSS circle={item} id={id} key={index} />
                    )
                })
            }
            <CircleLike rate={rate} setRate={setRate}/>
        </div>
    )
}

interface Circle {
    icon : React.ReactNode
    func : (id : string) => void
    hover : string
}

const CircleSS = ( {circle, id}:{circle : Circle, id : string}) => {
    return (
        <div 
            onClick={() => circle.func(id)}
            className=" p-4 relative rounded-full bg-[#032541] hover:cursor-pointer">
                {circle.icon}
            <div className=" absolute top-0 left-0 flex w-full h-full justify-center opacity-0 hover:opacity-100 ">
                <div className=" hover:opacity-0 hover:cursor-default z-10 flex justify-center absolute top-14 text-xs px-2 py-0.5 text-nowrap bg-[#032541] rounded-xl">
                    {circle.hover}
                    <div className="h-3 w-3 absolute bg-[#032541] rotate-45 -top-1 -z-10">
                    </div>
                </div>
            </div>
        </div>
    )
}

const CircleLike = ({rate, setRate} :{rate : boolean, setRate : (rate:boolean) => void} ) => {
    const [like, setLike] = useState<boolean>(rate)
    const change = () => {
        setRate(!like)
        setLike(!like)
    }
    return (
        <div 
            onClick={change}
            className=" p-3 relative rounded-full bg-[#032541] hover:cursor-pointer ">
                <BiSolidLike color="white" size={20} className={`${like ? "rotate-180 text-green": ""} duration-200`}/>
            <div className=" absolute top-0 left-0 flex w-full h-full justify-center opacity-0 hover:opacity-100 ">
                <div className=" hover:opacity-0 hover:cursor-default z-10 flex justify-center absolute top-14 text-xs px-2 py-0.5 text-nowrap bg-[#032541] rounded-xl">
                    {!like ? "Like it " : "Don't like it "}
                    <div className="h-3 w-3 absolute bg-[#032541] rotate-45 -top-1 -z-10">
                    </div>
                </div>
            </div>
        </div>
    )
}

const userCheck : Circle[] = [
    // {
    //     icon : <CiBoxList color="white" size={12}/>,
    //     func : (id : string) => {
    //         console.log(id)
    //     },
    //     hover : "Add to list"
    // },
    {
        icon : <FaHeart color="white" size={12}/>,
        func : async (id : string) => {
            await postAddFavorite(id)
            toast.success("Add new movie to your watchlist", toastOptions);
        },
        hover : "Mark as favorite"
    }, 
    {
        icon : <FaBookmark color="white" size={12}/>,
        func : async (id : string) => {
            await postAddWatchlist(id)
            toast.success("Add new movie to your watchlist", toastOptions);
        },
        hover : "Add to your watchlist"
    },
    
]
export default UserCheck