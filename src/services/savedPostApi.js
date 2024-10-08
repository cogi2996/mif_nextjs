import { privateApi } from "@/services/config";

export const getSavedPosts = async ({ queryKey }) => {
    const [_key, { page, size }] = queryKey;
    const res = await privateApi.get('/saved-posts', {
        params: {
            page,
        }
    })
    return res.data
}

export const savePost = async (id) => {
    const res = await privateApi.post(`/saved-posts/{id}`)
    return res.data
}

export const unsavePost = async (id) => {
    const res = await privateApi.delete(`/saved-posts/{id}`)
    return res.data
}

export const batchCheckSavedStatus = async (data) => {
    const res = await privateApi.get('/saved-posts/batch-check', {
        data
    })
    return res.data
}