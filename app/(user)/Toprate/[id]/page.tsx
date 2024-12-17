import GridCardFilm from "@/components/Card/ViewCrad/GridCardFilm"
import { Location } from "../../search/[id]/page"


const TopRatePage = async  ({params} : {params : {id : string}}) => {
    const user : Location = params.id ? JSON.parse(decodeURIComponent(params.id)) : {
        searchName:'',
        page:1
    }
    return (
        <div className="w-full bg-black pt-8">
            <div className="text-white text-5xl font-bold  mb-10 mx-20">
                Top rate
            </div>
            <div className="w-full px-40 py-10">
                
                <GridCardFilm type="top_rated" location={user} path="Toprate"/>
            </div>
        </div>
    )
}

export default TopRatePage