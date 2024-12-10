import { TrendingData } from "./TrendingData"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import TrendingItem from "./TrendingItem"

interface Props {
    listTrending : TrendingData[]
}

const Trending = ({listTrending} : Props) => {

    return (
    <div className=" flex flex-col gap-3 pt-3">
        <div className=" w-full flex py-4 ">
            <div className="text-5xl font-bold">
                Trending
            </div>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-4 p-4">
                {
                    listTrending.map((item : TrendingData, index : number) => {
                        return (
                            <TrendingItem key={index} trending={item}/>
                        )
                    })
                }
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    </div>
    )
}

export default Trending