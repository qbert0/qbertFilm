import instance, { API_KEY } from "@/api/axios";
import {  convertCardData } from "./cardData";
import CardFilm from "./CardFilm";
import {  Skeleton } from "@mui/material";
import { convertTrain } from "@/api/action/recommendation";
import PanagitionMovie from "@/components/Form/Panagition/PanagitionMovie";
import { Location } from "@/app/(user)/search/[id]/page";

interface Props {
    type? : string,
    location? : Location
    path : string,
}

const GridCardFilm = async ({type, location, path} : Props) => {
    
    if (type === "train") {

        const listCard = await convertTrain()
        return (
            <div className="w-full p-2 ">
                <div className="grid grid-cols-5 gap-1.5"> 
                    {
                        listCard.map((item,index) => {
                            return (
                                <CardFilm move={item} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    const data : any  = await instance.get(`/movie/${type? type : "popular"}${API_KEY}&page=${location?.page}`)
    const listCard = convertCardData(data.results)
    if (!listCard || !location) return (
        <GridSekeleton />
    )

    return (
        <div className="w-full p-2 ">
            <PanagitionMovie page={data.page} total={data.total_pages} params={''} path={path}/>
            <div className="grid grid-cols-5 gap-1.5"> 
                {
                    listCard.map((item,index) => {
                        return (
                            <CardFilm move={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

const GridSekeleton = () => {
    return (
        <div className="w-full p-2 bg-blue-400">
            <div className="grid grid-cols-5 gap-1.5">
                <Skeleton animation='wave' width="100%" height={500}/>
                <Skeleton animation='wave' width="100%" height={500}/>
                <Skeleton animation='wave' width="100%" height={500}/>
                <Skeleton animation='wave' width="100%" height={500}/>
                <Skeleton animation='wave' width="100%" height={500}/>

            </div>
        </div>
    )
}


export default GridCardFilm