import instance, { API_KEY } from "@/api/axios"
import PeopleActor from "@/components/Form/people/PeopleActor"
import { convertPeople, People } from "@/components/Form/people/PeopleData"
import PeopleHeader from "@/components/Form/people/PeopleHeader"
import PeopleSide from "@/components/Form/people/PeopleSide"



const PeoplePage = async ({params} : {params : {id : string}}) => {
    const data = await instance.get(`person/${params.id}${API_KEY}`)
    const newData : People = convertPeople(data)
    return (
        <div className=" w-full bg-[#F5F5F5] flex gap-6 px-2 pt-10">
            <div className=" w-1/4 flex flex-col pl-24">
                <PeopleSide people={newData} />
            </div>

            <div className="w-3/4 flex flex-col pr-10 ">
                <PeopleHeader people={newData} />

                <PeopleActor id={params.id} />
            </div>

        </div>
    )
}


export default PeoplePage