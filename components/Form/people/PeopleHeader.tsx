import Biography from "./Biography";
import ListMovieCast from "./ListMovieCast";
import { People } from "./PeopleData";


interface Props {
    people : People
}


const PeopleHeader = async ({people} : Props) => {
    
    return (
        <div className=" flex flex-col gap-4">
            <div className=" text-4xl font-bold">
                {people.name}
            </div>
            <Biography bio={people.biography}/>

            <ListMovieCast id={people.id} />
        </div>
    )
}

export default PeopleHeader
