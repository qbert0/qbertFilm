'use client'
import Link from "next/link"
import { headerLink } from "./HeaderContain"
import Image from "next/image"
import logo from "@/public/image/logo.png"
import Avatars from "./avatar"


const Header =() => {

    return (
        <div className="w-full flex items-center justify-between px-32 py-4  bg-black">
            <div className="flex gap-8 items-center justify-start">
                <div className="">
                    <Link href={"/"} className="flex  items-center">
                        <Image src={logo} alt="logo"  className=" object-cover h-8 w-full" />
                    </Link>
                </div>
                {
                    headerLink.map((item, index) => {
                        return (
                            <div key={index} className="text-xl text-white font-bold">
                                <Link href={item.path}>{item.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
            <Avatars />
        </div>
    )
}

export default Header