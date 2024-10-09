import { privateApi } from "@/services/config"
import { QUERY_KEY } from "@/services/key"
import { useQuery, useQueryClient } from "@tanstack/react-query"

export const addFavoriteActor = (actorId) => {
    const res = privateApi.post(`/favoriteActors/${actorId}`)
    return res.data
}

export const removeFavoriteActor = (actorId) => {
    const res = privateApi.delete(`/favoriteActors/${actorId}`)
    return res.data
}

const isActorFavorite = (actorId) => {
    const res = privateApi.get(`/favoriteActors/${actorId}`)
    return res.data
}

const getFavoriteActors = ({ queryKey }) => {
    const res = privateApi.get('/favoriteActors')
    return res.data
}

export const favoriteActorsApi = {
    query: {
        useIsActorFavorite(actorId) {
            return useQuery({
                queryKey: QUERY_KEY.isActorFavorite(actorId),
                queryFn: ({ queryKey }) => isActorFavorite(queryKey[1]),
            });
        },
    },
    mutation: {

    }
}