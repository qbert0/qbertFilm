'use client'
import { postClearFavorite, postClearWatchlist } from "@/api/action/current";
import { CiTrash } from "react-icons/ci";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    id : string
    type : "w" | "f"
    setLoad : () => void
}


const TrashIcon = ({id, type, setLoad} : Props) => {
    const toastOptions = {
        autoClose: 1000,
    };
    const clickw = async () => {
        await postClearWatchlist(id)
        toast.success("Remove form your watchlist", toastOptions);
        setLoad()
    }

    const clickf = async () => {
        await postClearFavorite(id)
        toast.success("Remove from your favorite", toastOptions);
        setLoad()
    }
    return (
        <div className="flex justify-center items-center p-2 hover:bg-gray-300 bg-white rounded-full border"
            onClick={type === 'f' ? clickf : clickw}
        >
            <CiTrash className="w-5 h-5"/>
        </div>
    )
}

export default TrashIcon