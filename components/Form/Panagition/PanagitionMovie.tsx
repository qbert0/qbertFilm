'use client'
import { Location } from "@/app/(user)/search/[id]/page"
import { Pagination, PaginationItem } from "@mui/material"
import { useRouter } from "next/navigation"

interface Props {
    page : number,
    total : number,
    params? : string,
    path : string
}

const PanagitionMovie = ({page, total, params, path} : Props) => {
    const router = useRouter()
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        const location : Location = {
            searchName : params,
            page : value
        }
        const userString = encodeURIComponent(JSON.stringify(location));
        router.push(`/${path}/${userString}`)
    }
    if (total == 1) return
    return (
        <div className="w-full flex justify-center my-4">
            <Pagination  count={total} page={page} onChange={handleChange} color="primary" 
                renderItem={(item) => (
                    <PaginationItem
                        sx={{
                            color : "white",
                        }}
                        className="hover:bg-slate-600 hover:rounded-full"
                      {...item}
                    />
                )}
            />
        </div>
    )
}

export default PanagitionMovie