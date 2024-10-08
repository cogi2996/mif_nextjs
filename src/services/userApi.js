import { privateApi } from "@/services/config"


export const getProfilePostByUserId = async (id) => {
    const res = await privateApi.get(`users/${id}/posts`, {
        params:
            page
    })
    return res.data
}


export const getUserInfoById = async (id) => {
    const res = await privateApi.get(`/users/${id}/info`)
    return res.data
}


export const updateUserProfile = async (data) => {
    const res = await privateApi.patch('/my-profile', data)
    return res.data
}