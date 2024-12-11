import instance from "../axios"
import { COMMENT_SERVICE, CREATE, GET } from "../service/Comment"


export const postCreateComment = async (id : string, token : string, content: string) => {
    try {
        const post = await instance.post(`${COMMENT_SERVICE}${CREATE}/${id}`, {
            content: content
        }, {
            headers : {
                Authorization : token
            }
        })
    } catch {
        return "error"
    }
}

export const getComment = async (id : string) => {
    try{
        const comment = await instance.get(`${COMMENT_SERVICE}${GET}/${id}`)
        return comment
    } catch {
        return "null"
    }
}