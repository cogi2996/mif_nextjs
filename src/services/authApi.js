import { publicApi } from "@/services/config"

export const loginApi = async (data) => {
    const res = await publicApi.post('auth/login',data)
    return res.data
}