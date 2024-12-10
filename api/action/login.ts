// 'use server'
import { loginSchema } from "@/lib/defineSchema"
import instance from "../axios"
import { LOGIN, LOGIN_SERVICE, REGISTER } from "../service/Login"


export const postLoginPass = async (user : string, pass : string) => {
    try {
        const login = await instance.post(`${LOGIN_SERVICE}${LOGIN}`, {
            username: user,
            password : pass
        })
        return login
    } catch {
        return "error"
    }
}

export const postRegisterPass = async (user : string, pass : string) => {
    try {
        const login = await instance.post(`${LOGIN_SERVICE}${REGISTER}`, {
            username: user,
            password : pass
        })
        return login
    } catch {
        return "error"
    }
}


