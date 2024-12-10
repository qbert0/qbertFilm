import instance from "../axios"
import { DECISION_SERVICE, GET, POST } from "../service/Decision"


export const postDecision = async (id : string, rate :1.0 | 0.0) => {

    try {
        const post = await instance.post(`${DECISION_SERVICE}${POST}/${id}`, {
            rate: rate
        })
        return post
    } catch {
        return "error"
    }
}

export const getDecision = async (id : string) => {
    try {
        const get = await instance.get(`${DECISION_SERVICE}${GET}/${id}`)
        return get
    } catch {
        return "error"
    }
}