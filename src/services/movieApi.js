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

export const get4RandomMovies = async () => {
    const res = await privateApi.get('/movies/random')
    return res.data
}

export const createMovie = async (data) => {
    const res = await privateApi.post('/movies', data)
    return res.data
}

export const getAllMovies = async ({ queryKey }) => {
    const [_key, { page, size }] = queryKey
    const res = await privateApi.get('/movies', {
        params: {
            page,
            size,
        }
    })
    return res.data
}

export const searchMoviesByTitle = async ({ queryKey }) => {
    const [_key, { page, size, title }] = queryKey
    const res = await privateApi.get('/movies/search', {
        params: {
            title,
            page,
            size,
        }
    })
    return res.data
}

export const getMovieById = async (id) => {
    const res = await privateApi.get(`/movies/${id}`)
    return res.data
}