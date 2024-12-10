

import { Button } from "@/components/ui/button"
import InputPassword from "./InputPassword"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { postRegisterPass } from "@/api/action/login"
import ErrorMe from "./ErrorMe"


interface Props {
    change : (change : boolean) => void
}


const RegisterForm = ({change} : Props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pass2, setPass2] = useState('')
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)
    const [label, setLabel] = useState('')
    const router = useRouter()

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const registerPass = async () => {
        if (username === "" || password === "") {
            setLabel('username or password ?')
            setError(true)
            return
        }
        if (pass2 !== password) {
            setLabel('Password not correct.')
            setError(true)
            return
        }
        setLoad(true)
        const token : any = await postRegisterPass(username, password)
        setLoad(false)
        console.log(token)
        if (token === 'error') {
            setError(true)
            setPassword('')
            setPass2('')
            setLabel("A user with that username already exists.")
            return
        } 
        
        // localStorage.setItem('token', token )
        change(true)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        if (pass2 === '0') {
            return
        } else {
            registerPass()
        }
    }
    };
    return (
        <div className="bg-black/80 px-10 py-5 ">
            <div className="text-white font-bold text-3xl mt-4 mb-8 ">
                Register
            </div>
            <div className=" flex flex-col gap-6 w-full my-6 ">
                {
                    error && <ErrorMe label={label} />
                }
                <input type="text" 
                value={username}
                onChange={handleUsername}
                className="h-10 w-72 flex items-center pl-5 bg-gray-700 text-black"
                placeholder="username"
                />
                <InputPassword value={password} setValue={setPassword} press={handleKeyPress}/>
                <InputPassword value={pass2} setValue={setPass2} press={handleKeyPress}/>

            </div>
            <div 
                onClick={registerPass}
                className=" bg-orange-600/90 hover:cursor-pointer w-full py-2 text-xl flex justify-center items-center text-white font-bold">
                {!load ? "Register" : "Register ... "}
            </div>
            <div className="flex items-center justify-between my-3 text-base">
                <div className=" flex gap-2 items-center ">
                    
                </div>
                <div className="text-white font-light ">
                    <a>Need help?</a>
                </div>
            </div>

            <div className="my-10 px-2 ">
                <span className="text-gray-400 text-md font-light">Already have account?</span> 
                <Button onClick={() => change(true)} className="text-white font-bold text-md">Login now</Button>
            </div>



        </div>
    )
}

export default RegisterForm