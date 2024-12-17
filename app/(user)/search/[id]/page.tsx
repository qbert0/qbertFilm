import instance from "@/api/axios"
import { convertCardData } from "@/components/Card/ViewCrad/cardData"
import CardFilm from "@/components/Card/ViewCrad/CardFilm";
import PanagitionMovie from "@/components/Form/Panagition/PanagitionMovie";

export interface Location {
    searchName? : string,
    page? : number,
}

const SearchPage = async ({params} : {params : {id : string}}) => {
    if(!params.id) return
    const user : Location = JSON.parse(decodeURIComponent(params.id));

    const data : any = await instance.get(`search/movie?query=${user.searchName}&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${user.page}`)
    const newData = convertCardData(data.results);
    return (
        <div className=" w-full  flex flex-col px-2 pt-10">
            <div className=" text-white font-bold text-3xl px-40">
                Search : {user.searchName}
            </div>
             
            <div className="w-full px-40 my-10">
                <PanagitionMovie page={data.page} total={data.total_pages} params={user.searchName} path="search" />
                <div className="grid grid-cols-5 gap-1.5"> 
                    {
                        newData.map((item,index) => {
                            // if (!item.image) return 
                            return (
                                <CardFilm move={item} key={index}/>
                            )
                        })
                    }
                </div>
                <PanagitionMovie page={data.page} total={data.total_pages} params={user.searchName} path="search"  />
            </div>
        </div>
    )
}


export default SearchPage