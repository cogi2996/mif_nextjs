import { privateApi } from "@/services/config"
import { QUERY_KEY } from "@/services/key"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

const getNewestMovie = async ({ queryKey }) => {
    const [_key, { page, size }] = queryKey;
    const res = await privateApi.get('/movies/newest', {
        params: {
            page,
            size,
        },
    })
    return res.data
}

const getRandomMovies = async () => {
    const res = await privateApi.get('/movies/random')
    return res.data
}

const getAllMovies = async ({ queryKey }) => {
    const [_key, { page, size }] = queryKey
    console.log('🚀 ~ getAllMovies ~ page:', page, size)
    const res = await privateApi.get('/movies', {
        params: {
            page,
            size,
        }
    })
    return res.data
}

const searchMoviesByTitle = async ({ queryKey }) => {
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

const getMovieById = async (id) => {
    const res = await privateApi.get(`/movies/${id}`)
    return res.data
}

export const createMovie = async (data) => {
    const res = await privateApi.post('/movies', data)
    return res.data
}

export const movieApi = {
    query: {
        useGetNewestMovie(page, size) {
            // const queryClinet = useQueryClient()
            return useQuery({
                queryKey: QUERY_KEY.newestMovies(page, size),
                queryFn: getNewestMovie,
            })
        },
        useGetRandomMovies() {
            return useQuery({
                queryKey: QUERY_KEY.randomMovies,
                queryFn: getRandomMovies,
            })
        },
        useGetAllMovies(page, size) {
            return useQuery({
                queryKey: QUERY_KEY.allMovies(page, size),
                queryFn: getAllMovies,
            })
        },
        useSearchMoviesByTitle(page, size, title) {
            return useQuery({
                queryKey: QUERY_KEY.searchMoviesByTitle(page, size, title),
                queryFn: searchMoviesByTitle,
            })
        },
        useGetMovieById(id) {
            return useQuery({
                queryKey: QUERY_KEY.movieById(id),
                queryFn: ({ queryKey }) => getMovieById(queryKey[1]),
            })
        },
    },
    mutation: {
        useCreateMovieMutation() {
            const t = useTranslations('Toast');
            return useMutation({
                mutationFn: createMovie,
                onSuccess: () => {
                    toast.success(t('create_movie_successful'))
                },
                onError: () => {
                    toast.error(t('create_movie_failed'))
                }
            })
        }
    }
}
