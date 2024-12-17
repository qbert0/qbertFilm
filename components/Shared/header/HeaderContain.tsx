import { Location } from "@/app/(user)/search/[id]/page"


interface HeadLink {
    path : string,
    name : string,
}

const defaultLoc : Location = {
    searchName :'',
    page: 1
}
const userString = encodeURIComponent(JSON.stringify(defaultLoc));



export const headerLink : HeadLink[] = [
    {
        path: `/popular/${userString}`,
        name : "Popular"
    },
    {
        path : `/Toprate/${userString}`,
        name : "Top rate"
    },
    {
        path : `/upComming/${userString}`,
        name : "Upcoming"
    }
]