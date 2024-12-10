import Image, { StaticImageData } from "next/image"
import { Mood, MoodShopda, shop } from "./MoodData"

interface Props {
    name : string
    mood? : string | StaticImageData
    setMood : (mood : string|StaticImageData) => void
}

const MoodShop = ({ name,mood,  setMood} : Props) => {

    return (
        <div className="py-1">
            <div className="text-2xl font-bold text-black">
                Mood
            </div>
            <div className="text-base text-black/60 mb-2">
                How did {name} make you feel?
            </div>
            <div className="">
            {
                shop.map((item, index) => 
                    <SubMood name={item} key={index} value={setMood} mood={mood}/>
                )
            }
            </div>
            
        </div>
    )
}

export default MoodShop


const SubMood = ({name, value, mood}:{name : MoodShopda, value : (value : string | StaticImageData) => void, mood? : string | StaticImageData}) => {
    return (
        <div className=" flex items-center border-b-2 border-gray-200 py-0.5">
            <div className=" flex-none w-32 text-black text-base">
                {name.name}
            </div>
            <div className="flex-1 grid grid-cols-5">
                {name.sub.map((item, index) => 
                    <Sub mood={item} key={index} value={value} cur={mood}/>
                )}
            </div>

        </div>
    )
}   

const Sub = ({mood, value, cur}:{mood : Mood ,value : (value : string | StaticImageData) => void, cur? : string| StaticImageData}) => {
    return (
        <div className="flex justify-center items-center">
            <div onClick={() => value(mood.mood)} className={`${mood.mood === cur ? "scale-105 border-4 shadow-sm border-white" : ""} flex justify-center items-center p-0 rounded-full hover:scale-105 hover:border-4 border-4 border-[#F4F4F5] hover:shadow-sm hover:border-white`}>
                <Image src={mood.mood} alt="a" className=" rounded-full w-14 h-14" />
            </div>
        </div>
    )
}