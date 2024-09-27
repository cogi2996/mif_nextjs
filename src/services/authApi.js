import { publicApi } from "@/services/config"

export const registerApi = async (data) => {
    const res = await publicApi.post('auth/register')
    return res.data
}

export const loginApi = async (data) => {
    const res = await publicApi.post('auth/login', data)
    return res.data
}