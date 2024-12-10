'use client'

import { postCreateComment } from "@/api/action/comment";
import { Button } from "@/components/ui/button";
import { stringAvatar } from "@/lib/avartarColor";
import { Avatar } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    id : string
}

const ReviewInput = ({id} : Props) => {
    const [token, setToken] = useState<string| null>(null);
    const [name, setName] = useState<string|null> (null)
    const [content, setContent] = useState('')
    const [load, setLoad] = useState(false)
    const router = useRouter()
    const handleContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const press = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
           postCommit()
        }
    };

    const postCommit = async () => {
        if (token === null || content === '') return
        setLoad(true)
        const comment = await postCreateComment(id, token, content)
        setContent('')
        setLoad(false)
        if (comment === 'error') return
        router.refresh()
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setToken(localStorage.getItem('token'));
            setName(localStorage.getItem('name'));
        }
    }, []);

    if (name === null ) {
        return (
            <div className=" bottom-2 border-gray-200 mt-2 py-2 flex w-full gap-4 justify-between px-6 ">

                <Link href={'/login'} className="bg-gray-200 rounded-xl px-2 py-1 "> Login for comment </Link>
            </div>
        )
    }

    return (
        <div className=" bottom-2 border-gray-200 mt-2 py-2 flex w-full gap-4 justify-between px-6 ">
            <Avatar {...stringAvatar(name)} />
            <input type="text" 
                value={content}
                onChange={handleContent}
                onKeyPress={press}
                className="h-10 w-72 flex-1 items-center pl-5 bg-white border-2 border-gray-200 shadow-sm rounded-xl text-black"
                placeholder="review "
            />
            <Button className="bg-blue-400 rounded-xl px-2 py-1 " onClick={postCommit}>{load? "Send..." : "Send"}</Button>
        </div>
    )
}

export default ReviewInput