import { privateApi } from "@/services/config"
import { useQuery, useQueryClient } from "@tanstack/react-query"

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




// const keys = {
//     favouriteActors: ['favouriteActors']

// }
// const favoriteApi = {
//     query: {
//         useGetFavouriteActors() {
//             const queryClinet = useQueryClient()
//             return useQuery({
//                 queryKey: keys.favouriteActors,
//                 queryFn: () => {
//                     const res = privateApi.get('/favoriteActors')
//                     queryClinet.invalidateQueries
//                     return res.data
//                 }
//             })
//         }
//     },
//     mutation: {}
// }