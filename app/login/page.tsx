'use client'
import background from "@/public/image/background.jpg"
import Image from "next/image"
import LoginForm from "./_component/LoginForm"
import { useState } from "react"
import RegisterForm from "./_component/RegisterForm"

const Login = () => {
    const [login, setLogin] = useState(true)

    const change = (change : boolean) => {
        setLogin(change)
    }
    return (
        <div className="h-[100vh] w-full absolute top-0 ">
            <Image src={background} alt="" className=" h-full object-cover w-full"/>

            <div className=" top-0 bg-black/10 absolute flex justify-center items-center w-full h-full">
                    {
                        login ? 
                        <LoginForm change={change}/>
                        :
                        <RegisterForm change={change}/>
                    }
            </div>

        </div>
    )
}


export default Login