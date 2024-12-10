import instance from "../axios"
import instanceComment, { COMMENT_SERVICE, CREATE, GET } from "../service/Comment"


export const postCreateComment = async (id : string, token : string, content: string) => {
    try {
        const post = await instanceComment.post(`${CREATE}/${id}`, {
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
    // try{
        const comment = await instanceComment.get(`${GET}/${id}`)
        return comment
    // } catch {
    //     return "error"
    // }
}