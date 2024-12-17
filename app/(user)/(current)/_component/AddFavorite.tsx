'use client'
import { postAddFavorite } from "@/api/action/current";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface Props {
    id : string
}

const AddFavorite = ({id} : Props) => {
    const toastOptions = {
        autoClose: 1000,
    };
    const click = async () => {
        await postAddFavorite(id)
        toast.success("Add new movie to your watchlist", toastOptions);
    }
    return (
        <div className="flex justify-center items-center p-2 hover:bg-gray-300 bg-white rounded-full border"
            onClick={click}
        >
            <FaHeart className="w-5 h-5"/>
        </div>
    )
}

export default AddFavorite