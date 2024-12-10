import { Skeleton } from "@mui/material"


const MovieLoading = () => {

    return (
        <div className="  w-full h-[100vh] flex flex-col">
            <div className="h-4/5 flex bg-white">
                <div className="w-1/3 py-8 pl-24">
                    <Skeleton  variant="rectangular" width={300} height={500} className=" rounded-xl"/>
                </div>
                <div className="w-2/3 py-10 space-y-2">
                    <Skeleton variant="rectangular" width={800} height={40} className=" rounded-xl" />
                    <Skeleton variant="rectangular" width={200} height={30} className=" rounded-xl" />
                    <Skeleton variant="rectangular" width={300} height={80} className=" rounded-xl" />
                    <Skeleton variant="rectangular" width={400} height={60} className=" rounded-lg" />
                    <Skeleton variant="rectangular" width={200} height={30} className=" rounded-lg" />
                    <Skeleton variant="rectangular" width={100} height={30} className=" rounded-lg" />
                    <Skeleton variant="rectangular" width={800} height={80} className=" rounded-lg" />
                </div>
            </div>
            <div className="h-1/5 bg-white border-t border-gray-200">

            </div>
        </div>
    )
}

export default MovieLoading