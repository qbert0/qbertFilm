import { IMAGE } from "@/api/axios"
import { People } from "./PeopleData"


interface Props {
    people : People
}


const PeopleSide = ({people} : Props) => {

    return (
        <div className="w-full flex flex-col gap-10 mb-6 ">
            <div className=" overflow-hidden rounded-xl ">
                <img src={`${IMAGE}${people && people.profilePath}`} alt={people.profilePath} className=" object-cover h-full" />
            </div>

        <div className="">
            <div className="text-xl font-bold">
                Personal Info  
            </div>
            <div className=" flex flex-col gap-4 text-xl font-bold">
                <div className=" text-lg font-bold">
                    Know for 
                    <div className="text-lg font-light">
                        {people.knowFor}
                    </div>
                </div>

                <div className=" text-lg font-bold">
                    Gender 
                    <div className="text-lg font-light">
                        {male(people.gender)}
                    </div>
                </div>
                <div className=" text-lg font-bold">
                Birthday 
                    <div className="text-lg font-light">
                        {people.birday} {calculateAge(people.birday)}
                    </div>
                </div>
                <div className=" text-lg font-bold">
                Place of Birth 
                    <div className="text-lg font-light">
                        {people.placeOfBirth}
                    </div>
                </div>
                {
                    people.deathday && <div className=" text-lg font-bold">
                    Deathday 
                        <div className="text-lg font-light">
                            {people.deathday}
                        </div>
                    </div>
                }
                <div className=" text-lg font-bold">
                Also Known As
                    <div className="text-sm font-light flex flex-col gap-2">
                        {
                            people.alsoKnowAs.map((item) => {
                                return (
                                    <div key={item}>
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </div>


        </div>
    )
}

export default PeopleSide

const male = (male : number) => {
    if (male === 1) {
        return 'female'
    } else {
        return 'male'
    }
}

function calculateAge(birthDate: string): string {
    const birth = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    // Điều chỉnh nếu ngày sinh chưa đến trong năm hiện tại
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return `(${age} years old)`;
}