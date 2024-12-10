import Image from "next/image"
import { EmblaData } from "./EmblaData"
import { FaStar } from "react-icons/fa";
import Link from "next/link";

interface Props {

    data : EmblaData
}

const EmblaCarouselItem = ({data} : Props) => {

    return (
        <div className="w-full bg-black">
            <Link href={`/movie/${data.id}`} className="w-full">
                <div className=" block w-full m-auto">
                    <img src={`https://image.tmdb.org/t/p/original${data && data.image}`} alt={data.image} className=" object-cover w-full"/>
                </div>
                <div className=" absolute bottom-32 left-32 w-1/2 space-y-10">
                    <div className="text-7xl text-white font-bold mb-0">
                        {data.name}
                    </div>
                    <div className="flex gap-24 text-white text-5xl font-light">
                        <div>
                            {data.date}
                        </div>
                        <div className="flex gap-2">
                            <div>{shortenDecimal(data.vote)}</div>
                            <FaStar color="white"/>
                        </div>
                    </div>

                    <div className="text-2xl italic text-white ">
                        {data.overView}
                    </div>
                    

                </div>
        </Link>
        </div>
    )
}

export default EmblaCarouselItem

function shortenDecimal(input: string): string {
    // Chuyển đổi chuỗi thành số
    const number = parseFloat(input);
    
    // Sử dụng toFixed để giữ 1 chữ số thập phân
    return number.toFixed(1);
}