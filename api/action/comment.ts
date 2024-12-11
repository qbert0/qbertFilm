import axios from "axios"
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

export const getComment = async (path : string) => {
    try {
      const comment = await axios.get(`${COMMENT_SERVICE}${GET}/${path}`)
          return comment
    } catch {
      return "null"
    }
  }