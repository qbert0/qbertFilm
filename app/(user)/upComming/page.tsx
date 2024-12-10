import GridCardFilm from "@/components/Card/ViewCrad/GridCardFilm"

const UpComing = async () => {
    return (
        <div className="w-full">
        <div className="text-white text-5xl font-bold mt-32 mb-20 mx-20">
            UPCOMING
        </div>
        <div className="w-full px-40 my-10">
            
            <GridCardFilm type="upcoming" />
        </div>
        </div>
    )
}

export default UpComing