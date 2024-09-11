import { privateApi } from "@/services/config"


export const getAllNews = async () => {
    const res = await privateApi.get('/news')
    return res.data
}
