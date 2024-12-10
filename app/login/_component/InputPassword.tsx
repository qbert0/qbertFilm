'use client'
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

interface Props {
    value : string,
    setValue : (value : string) => void,
    press: (event: React.KeyboardEvent<HTMLInputElement>) => void 
}
const InputPassword = ({value, setValue, press} : Props) => {
    const [open, setOpen] = useState(true)

    const handlepassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <div className="h-10 w-72 relative">
            <input type={`${open ? "password" : "text"}`}
            className="h-full w-full flex items-center pl-5 bg-gray-700 "
            placeholder="password"
            value={value}
            onChange={handlepassword}
            onKeyPress={press}
            />
        <div className=" absolute right-0 top-0 px-2 h-full flex items-center ">
            <button onClick={() => setOpen(!open)}>
                {
                    open ? <FaEyeSlash /> : <FaRegEye />
                }
            </button>
        </div>
        </div>
        
    )
}

export default InputPassword