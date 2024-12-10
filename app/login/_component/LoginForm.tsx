'use client'
import { Button } from "@/components/ui/button"
import InputPassword from "./InputPassword"
import {  useState } from "react"
import { postLoginPass } from "@/api/action/login"
import ErrorMe from "./ErrorMe"
import { useRouter } from "next/navigation"
interface Props {
    change : (change : boolean) => void
}

const LoginForm = ({change} : Props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)
    const router = useRouter()


    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const loginPass = async () => {
        if (username === "" || password === "") return
        setLoad(true)
        const token : any = await postLoginPass(username, password)
        setLoad(false)
        if (token === 'error') {
            setError(true)
            setPassword('')
            return
        }
        localStorage.setItem('token', token['token'] )
        localStorage.setItem('name', "qbert")
        router.back()
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        loginPass()
    }
    };
    
    return (
        <div className="bg-black/80 px-10 py-5 ">
            <div className="text-white font-bold text-3xl mt-4 mb-8 ">
                Login
            </div>
            <form  className=" flex flex-col gap-6 w-full my-6">
                {
                    error && <ErrorMe label="User or password not correct!" />
                }
                <input type="text" 
                value={username}
                onChange={handleUsername}
                className="h-10 w-72 flex items-center pl-5 bg-gray-700 text-black"
                placeholder="username"
                />
                <InputPassword 
                value={password} 
                setValue={setPassword} 
                press={handleKeyPress}/>
            </form>
            <div 
                onClick={loginPass}
                className=" bg-orange-600/90 hover:cursor-pointer w-full py-2 text-xl flex justify-center items-center text-white font-bold">
                {!load ? "Login" : "Login ... "}
            </div>
            <div className="flex items-center justify-between my-3 text-base">
                <div className=" flex gap-2 items-center ">
                    
                </div>
                <div className="text-white font-light ">
                    <a>Need help?</a>
                </div>
            </div>
            <div className="my-10 px-2 ">
                <span className="text-gray-400 text-md font-light">New to IMDB?</span> 
                <Button onClick={() => change(false)} className="text-white font-bold text-md">Register now</Button>
            </div>

        </div>
    )
}

export default LoginForm