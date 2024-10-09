import { QUERY_KEY } from "@/services/key";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

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

const getActorById = async (actorId) => {
    const res = await privateApi.get(`/actors/${actorId}`)
    return res.data
}

const getActorMovieography = async (actorId) => {
    const res = await privateApi.get(`/actors/${actorId}/movieography`)
    return res.data
}

const createActor = async (data) => {
    const res = await privateApi.post('/actors', data)
    return res.data
}

const deleteActor = async (id) => {
    const res = await privateApi.delete(`/actors/${id}`)
    return res.data
}


export const actorApi = {
    query: {
        useGetActorMovieography(actorId) {
            return useQuery({
                queryKey: QUERY_KEY.actorMovieography(actorId),
                queryFn: ({ queryKey }) => getActorMovieography(queryKey[1]),
            })
        },
        useGetActorById(actorId, enabled = true) {
            return useQuery({
                queryKey: QUERY_KEY.actorById(actorId),
                queryFn: ({ queryKey }) => getActorById(queryKey[1]),
                enabled,
            })
        },
        useGetTopActors(page, size) {
            return useQuery({
                queryKey: QUERY_KEY.topActors(page, size),
                queryFn: getTopActors,
            })
        }
    },
    mutation: {
        useCreateActor() {
            const t = useTranslations('Toast');
            return useMutation({
                mutationFn: createActor,
                onSuccess: () => {
                    toast.success(t('create_actor_successful'))
                },
                onError: () => {
                    toast.error(t('create_actor_failed'))
                }
            })
        },
        useDeleteActor() {
            const t = useTranslations('Toast');
            return useMutation({
                mutationFn: deleteActor,
                onSuccess: () => {
                    toast.success(t('delete_actor_successful'))
                },
                onError: () => {
                    toast.error(t('delete_actor_failed'))
                }
            })
        },
    }
}
