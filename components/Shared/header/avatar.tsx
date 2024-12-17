'use client'
import Avatar from '@mui/material/Avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
  
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { stringAvatar } from "@/lib/avartarColor";

const Avatars = () => {
    const router = useRouter()
    const [token, setToken] = useState<string| null>(null);
    const [name, setName] = useState<string|null> (null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setToken(localStorage.getItem('token'));
            setName(localStorage.getItem('name'));
        }
    }, []);
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        router.push('/login')
    }

    const refest = () => {
        router.refresh()
    }
    
    if (token === null || name === null) {
        return (
            <div className=" px-3 py-1.5 rounded-xl font-bold text-white bg-slate-700">
                <Link href={'/login'}>Login</Link>
            </div>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className=" rounded-full p-0">
                <Avatar {...stringAvatar(name)} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border border-gray-300 bg-white p-0 rounded-xl overflow-hidden">
                <DropdownMenuLabel className='w-full flex  cursor-pointer line-clamp-1 border-b border-gray-400/20' >{name}</DropdownMenuLabel>
                <DropdownMenuLabel className='hover:bg-gray-100 w-full cursor-pointer'> <Link href={'/watchlist'} className='w-full' onClick={refest}>watchlist</Link></DropdownMenuLabel>
                <DropdownMenuLabel className='hover:bg-gray-100 w-full cursor-pointer'> <Link href={'/favorite'} className='w-full' onClick={refest}>favorite</Link></DropdownMenuLabel>
                <DropdownMenuLabel className='hover:bg-gray-100 w-full cursor-pointer border-t border-gray-400/20' onClick={logout}>Logout</DropdownMenuLabel>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}


export default Avatars

