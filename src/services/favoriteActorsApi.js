import { privateApi } from "@/services/config"

export const addFavoriteActor = (actorId) => {
    const res = privateApi.post(`/favoriteActors/${actorId}`)
    return res.data
}

export const isActorFavorite = (actorId) => {
    const res = privateApi.get(`/favoriteActors/${actorId}`)
    return res.data
}

export const removeFavoriteActor = (actorId) => {
    const res = privateApi.delete(`/favoriteActors/${actorId}`)
    return res.data
}

export const getFavoriteActors = ({ queryKey }) => {
    const res = privateApi.get('/favoriteActors')
    return res.data
}