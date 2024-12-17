'use client'
import { postAddWatchlist } from "@/api/action/current";
import { FaList } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface Props {
    id : string
}

const AddListwatch = ({id} : Props) => {
    const toastOptions = {
        autoClose: 1000,
    };

    const click = async () => {
        await postAddWatchlist(id)
        toast.success("Add new movie to your watchlist", toastOptions);
    }
    return (
        <div className="flex justify-center items-center p-2 hover:bg-gray-300 bg-white rounded-full border"
            onClick={click}
        >
            <FaList className="w-5 h-5"/>
        </div>
    )
}

export default AddListwatch