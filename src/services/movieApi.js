import { privateApi } from "@/services/config"

export const getNewestMovie = async ({ queryKey }) => {
    const [_key, { page, size, sort }] = queryKey;
    const res = await privateApi.get('/movies/newest', {
        params: {
            page,
            size,
            sort,
        },
    })
    return res.data
}

