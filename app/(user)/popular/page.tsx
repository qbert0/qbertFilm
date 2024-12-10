import GridCardFilm from "@/components/Card/ViewCrad/GridCardFilm"


const PopularPage =async () => {
    
    return (
        <div className="w-full">
        <div className="text-white text-5xl font-bold mt-32 mb-20 mx-20">
            POPULAR
        </div>
        <div className="w-full px-40 my-10">
            
            <GridCardFilm />
        </div>
        </div>
    )
}

export default PopularPage