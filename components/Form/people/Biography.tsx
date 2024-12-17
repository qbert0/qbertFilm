'use client'
import { useState } from "react"


interface Props {
    bio : string
}


const Biography = ({bio} : Props) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex flex-col gap-0.5 relative">
            <div className="text-lg font-bold">Biography</div>
            <div className={`${open ? "" : "line-clamp-6"}`}>
                {splitTextIntoArray(bio).map((item ) => {
                    return (
                        <div key={item} className="my-2">
                            {item}
                        </div>
                    )
                })
                }
            </div>

            <div className=" w-full absolute -bottom-8 flex justify-end px-10 ">
                <div onClick={() => setOpen(!open)} className=" px-2 py-1 text-lg rounded-xl text-blue-700 hover:text-green-700 font-bold bg-white/60">
                    {!open ? "Read more" : "close"}
                </div>
            </div>
        </div>
    )
}

export default Biography

function splitTextIntoArray(input: string): string[] {
    return input.split('\n');
}