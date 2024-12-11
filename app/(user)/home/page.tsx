'use client'

import { testAPiWeb } from "@/api/axiosClient"
import Link from "next/link"
import { useState } from "react"

const HomePage = () => {
    const [username, setUsername] = useState('')
    const [load, setLoad] = useState(false)

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const loginPass = async () => {
        if (username === "" ) return
        setLoad(true)
        const token : any = await testAPiWeb(username)
        setLoad(false)
        console.log(token)
        
    }
    return (
        <div className=" bg-white">
            {/* {
                ec
            } */}
            <div className="bg-amber-400">
                <Link href={username}>{username}</Link>
            </div>
            
            <input type="text" 
                value={username}
                onChange={handleUsername}
                className="h-10 w-72 flex items-center pl-5 bg-gray-700 text-black"
                placeholder="username"
            />

            <div 
                onClick={loginPass}
                className=" bg-orange-600/90 hover:cursor-pointer w-full py-2 text-xl flex justify-center items-center text-white font-bold">
                {!load ? "Login" : "Login ... "}
            </div>
        </div>
    )
}


export default HomePage