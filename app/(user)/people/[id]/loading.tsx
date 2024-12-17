import { Skeleton } from "@mui/material"


const PeopleLoading = () => {

    return (
        <div className="  w-full h-[100vh] flex flex-col">
            <div className="h-full flex bg-white">
                <div className="w-1/4 py-8 pl-24">
                    <Skeleton  variant="rectangular" width={250} height={400} className=" rounded-xl"/>
                    <Skeleton  variant="rectangular" width={200} height={25} className=" rounded-xl mt-10"/>
                    <Skeleton  variant="rectangular" width={160} height={25} className=" rounded-xl my-2 "/>
                    <Skeleton  variant="rectangular" width={120} height={25} className=" rounded-xl my-2"/>

                    <Skeleton  variant="rectangular" width={160} height={25} className=" rounded-xl mt-5 mb-2"/>
                    <Skeleton  variant="rectangular" width={120} height={25} className=" rounded-xl my-2"/>



                </div>
                <div className="w-3/4 py-10 space-y-2">
                    <Skeleton variant="rectangular" width={400} height={40} className=" rounded-xl" />
                    <Skeleton variant="rectangular" width={200} height={25} className=" rounded-xl mt-10" />
                    <Skeleton variant="rectangular" width={900} height={200} className=" rounded-xl" />
                    <Skeleton variant="rectangular" width={100} height={25} className=" rounded-xl" />
                    <div className=" flex gap-2 ">
                        <Skeleton  variant="rectangular" width={150} height={200} className=" rounded-xl"/>
                        <Skeleton  variant="rectangular" width={150} height={200} className=" rounded-xl"/>
                        <Skeleton  variant="rectangular" width={150} height={200} className=" rounded-xl"/>
                        <Skeleton  variant="rectangular" width={150} height={200} className=" rounded-xl"/>
                        <Skeleton  variant="rectangular" width={150} height={200} className=" rounded-xl"/>
                        <Skeleton  variant="rectangular" width={150} height={200} className=" rounded-xl"/>
                        <Skeleton  variant="rectangular" width={150} height={200} className=" rounded-xl"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleLoading