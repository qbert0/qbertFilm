'use client'
import { TiTick } from "react-icons/ti";
import { useState } from "react"
import { TiTimes } from "react-icons/ti";
import VibeProgress from "./VibeProgress";
import MoodShop from "./MoodShop";
import ToneForm from "./Tone";
import Image, { StaticImageData } from "next/image";
interface Props {
    movideId? : string
    name : string
}


const VibeDot = ({ name} : Props) => {
    const [vibe, setVibe] = useState(0)
    const [explo, setExplo] = useState(false)
    const [mood, setMood] = useState<string | StaticImageData>()
    const [tone, setTone] = useState('')

    const handle  = (change : boolean) => {
        setExplo(change)
    }
    const clear = () => {
        setExplo(false)
        setVibe(0)
        setMood('')
        setTone('')
    }
    return (
        <>
        <div onClick={() => handle(true)}
         className=" rounded-full flex items-center gap-2 px-3 bg-[#032541] py-1.5 text-xl font-semibold hover:scale-105 hover:cursor-pointer duration-200">
            <div>
                Your vibe 
            </div>
            <div>
                {vibe}%
            </div>
            {
                mood && 
                <div className="flex items-center border-l-2 px-2 border-gray-600">
                    <Image src={mood} alt="a" className=" rounded-full w-8 h-8" />
                </div>
            }
            {
                tone !== '' && 
                <div className="flex items-center border-l-2 px-2 border-gray-600">
                    {tone}
                </div>
            }
            
        </div>
        {
                explo && 
            <div className="absolute backdrop-brightness-75 z-20 w-full h-full top-0 left-0 flex justify-center items-center">
                <div className=" w-[40rem] h-[32rem] bg-[#F4F4F5] px-6 py-6 relative ">
                    <div className="w-full h-full space-y-2 overflow-y-scroll rounded-xl no-scrollbar">
                        <VibeProgress proge={vibe} name={name} setProge={setVibe}/>
                        <div className="border-t-2 border-gray-200 my-4"></div>
                        <MoodShop mood={mood} name={name}  setMood={setMood}/>
                        <ToneForm name={name} tone={tone} setTone={setTone}/>
                    </div>


                    <div className=" absolute top-0 right-0 px-3 py-3" onClick={() => handle(false)}>
                        <TiTimes size={30}/>
                    </div>
                    <div  className=" absolute bottom-0 text-white right-0 px-3 py-3 flex flex-col gap-2">
                        <div onClick={() => clear()} className=" bg-yellow-400 rounded-xl hover:cursor-pointer px-2 py-1 flex gap-1 items-center">
                            Clear my rating
                        </div>
                        <div onClick={() => handle(false)} className=" bg-[#032A40] rounded-xl hover:cursor-pointer px-2 py-1 flex items-center gap-1 ">
                            <TiTick /> <div>{"I'm Done"}</div>
                        </div>

                    </div>
                    
                </div>
            </div>
        }
        </>
    )
}

export default VibeDot