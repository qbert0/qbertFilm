import { Skeleton } from "@mui/material"


const SearchLoading = () => {

    return (
        <div className="w-full h-[100vh] flex flex-col">
            <div className="w-full px-40 pt-10 ">
                <Skeleton  variant="rectangular" width={200} height={25} className=" rounded-xl"/>
            </div>
            <div className="w-full px-40 my-10">
                <div className="grid grid-cols-5 gap-1.5"> 
                    <Skeleton  variant="rectangular" width={220} height={300} className=" rounded-xl"/>
                    <Skeleton  variant="rectangular" width={220} height={300} className=" rounded-xl"/>
                    <Skeleton  variant="rectangular" width={220} height={300} className=" rounded-xl"/>
                    <Skeleton  variant="rectangular" width={220} height={300} className=" rounded-xl"/>
                    <Skeleton  variant="rectangular" width={220} height={300} className=" rounded-xl"/>
                    <Skeleton  variant="rectangular" width={220} height={300} className=" rounded-xl"/>
                    <Skeleton  variant="rectangular" width={220} height={300} className=" rounded-xl"/>
                    <Skeleton  variant="rectangular" width={220} height={300} className=" rounded-xl"/>
                    <Skeleton  variant="rectangular" width={220} height={300} className=" rounded-xl"/>
                    <Skeleton  variant="rectangular" width={220} height={300} className=" rounded-xl"/>
                    
                </div>
            </div>
                
        </div>
    )
}

export default SearchLoading