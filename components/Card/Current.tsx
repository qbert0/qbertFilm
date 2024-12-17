import { stringAvatar } from "@/lib/avartarColor"
import Avatar from '@mui/material/Avatar';
import bg from "@/public/image/background1.jpg"
import Image from "next/image"

const CurrentHeader = () => {

    return (
        <div className="w-full bg-white relative h-90">
            <Image src={bg} alt="alt" className="  object-cover w-full" />

            <div className="w-full absolute top-0 left-0 h-full flex gap-2 px-10">
                <div className="w-1/4 flex justify-center items-center p-4  ">
                    <Avatar {...stringAvatar('qbert', true)}   />
                </div>
                <div className=" flex items-center text-5xl font-bold text-white">
                    qbert
                </div>
            </div>

        </div>
    )
}

export default CurrentHeader