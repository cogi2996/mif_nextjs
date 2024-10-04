const { privateApi } = require("@/services/config");

export const getTopActors = async ({ queryKey }) => {
    const [_key, { page, size }] = queryKey;
    const res = await privateApi.get('/actors', {
        params: {
            page,
            size,
        },
    })
    return res.data
}
export const getActorById = async (actorId) => {
    const res = await privateApi.get(`/actors/${actorId}`)
    return res.data
}

export const getActorMovieography = async (actorId) => {
    const res = await privateApi.get(`/actors/${actorId}/movieography`)
    return res.data
}

export const createActor = async (data) => {
    const res = await privateApi.post('/actors', data)
    return res.data
}

export const deleteActor = async (id) => {
    const res = await privateApi.delete(`/actors/${id}`)
    return res.data
}


