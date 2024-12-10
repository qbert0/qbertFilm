import instance, { API_KEY } from "@/api/axios"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Cast, convertListCast } from "./CastData"
import CastItem from "./CastItem"
interface Props {
    movieId : string
}


const ListCast = async ({movieId} : Props) => {
    const data : any = await instance.get(`/movie/${movieId}/credits${API_KEY}`)
    const listCast : Cast[] = convertListCast(data.cast)
    return (
        <div className=" flex flex-col gap-2 pt-3 pl-32 pr-1">
        <div className=" w-full flex py-2 ">
            <div className="text-xl font-bold">
                Top cast
            </div>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-3">
                {
                    listCast.map((item : Cast, index : number) => {
                        if(index > 10 ) return
                        return (
                            <CastItem key={index} more={false} cast={item}/>
                        )
                    })
                }
                <CastItem more={true} cast={listCast[0]} />
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    </div>
    )
}

export default ListCast