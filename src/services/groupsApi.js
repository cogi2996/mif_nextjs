import { privateApi } from "@/services/config"
import { QUERY_KEY } from "@/services/key"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { toast } from "react-toastify"

const createGroup = async (data) => {
    const res = await privateApi.post('/groups', data)
    return res.data
}

const updateGroup = async (data) => {
    const res = await privateApi.patch()
    return res.data
}

const addMemberToGroup = async (data) => {
    const res = await privateApi.post(`/groups/${data.groupId}/members/${data.userId}`)
    return res.data
}

const removeMemberFromGroup = async (data) => {
    const res = await privateApi.delete(`/groups/${data.groupId}/members/${data.userId}`)
    return res.data
}
const findByOwnerId = async ({ queryKey }) => {
    const [_key, { page, size }] = queryKey;
    const res = await privateApi.get('/my-groups', {
        params: {
            page,
            size
        },
    })
    return res.data
}

const getUserGroups = async ({ queryKey }) => {
    const [_key, { page, size, id }] = queryKey;
    const res = await privateApi.get(`/user/${id}/groups`, {
        params: {
            page,
            size
        },
    })
    return res.data
}

const findGroupUserNotJoin = async ({ queryKey }) => {
    const [_key, { size }] = queryKey;
    const res = await privateApi.get('/explore-groups', {
        params: {
            size
        },
    })
    return res.data
}

const addPendingInvitation = async ({ groupId, userId }) => {
    const res = await privateApi.post(`/groups/${groupId}/pending-invitations/${userId}`)
    return res.data
}

const acceptInvitation = async (data) => {
    const res = await privateApi.post(`/groups/${data.groupId}/accept-invitations/${data.userId}`)
    return res.data
}

const getGroupByGroupId = async (groupId) => {
    const res = await privateApi.get(`/groups/${groupId}`)
    return res.data
}

const getAllMembers = async (groupId) => {
    const res = await privateApi.get(`/groups/${groupId}/members`)
    return res.data
}

const getPendingInvitations = async ({ queryKey }) => {
    const [_key, { groupId, page }] = queryKey
    const res = await privateApi.get(`/groups/${groupId}/pending-invitations`, {
        params: {
            page
        }
    })
    return res.data
}

const removePendingInvitation = async (data) => {
    const res = await privateApi.delete(`/groups/${data.groupId}/pending-invitations/${data.userId}`)
    return res.data
}

export const searchGroupByGroupName = async ({ queryKey }) => {
    const [_key, { page, size, name }] = queryKey
    const res = await privateApi.get('/groups/search', {
        params: {
            name,
            page,
            size,
        }
    })
    return res.data
}

export const groupsApi = {
    query: {
        useFindByOwnerId(page, size) {
            return useQuery({
                queryKey: QUERY_KEY.groupsByOwnerId(page, size),
                queryFn: findByOwnerId,
            })
        },
        useGetUserGroups(page, size, id) {
            return useQuery({
                queryKey: QUERY_KEY.userGroups(page, size, id),
                queryFn: getUserGroups,
            })
        },
        useFindGroupUserNotJoin(size) {
            return useQuery({
                queryKey: QUERY_KEY.groupsUserNotJoin(size),
                queryFn: findGroupUserNotJoin,
            })
        },
        useGetGroupByGroupId(groupId) {
            return useQuery({
                queryKey: QUERY_KEY.detailGroup(groupId),
                queryFn: ({ queryKey }) => getGroupByGroupId(queryKey[1]),
            })
        },
        useGetAllMember(groupId) {
            return useQuery({
                queryKey: QUERY_KEY.memberGroup(groupId),
                queryFn: ({ queryKey }) => getAllMembers(queryKey[1]),

            })
        },
        useGetPendingInvitations(groupId, size) {
            return useQuery({
                queryKey: QUERY_KEY.pendingInvitations(groupId, size),
                queryFn: getPendingInvitations,
            })
        }
    },
    mutation: {
        useCreateGroup(reset, setIsOpen) {
            const t = useTranslations('Toast');
            const queryClinet = useQueryClient()
            return useMutation({
                mutationFn: createGroup,
                onSuccess: () => {
                    toast.success(t('create_group_successful'))
                    reset();
                    setIsOpen(false);
                },
                onError: () => {
                    toast.error(t('create_group_failed'))
                }
            })
        },
        useAddPendingInvitation(setJoinStatus) {
            const t = useTranslations('Toast');
            return useMutation({
                mutationFn: addPendingInvitation,
                onSuccess: () => {
                    toast.success(t('add_pending_invitation_successful'))
                },
                onError: () => {
                    toast.error(t('add_pending_invitation_failed'))
                    setJoinStatus('join')
                }
            })
        },
        useAcceptInvitation() {
            const t = useTranslations('Toast');
            return useMutation({
                mutationFn: acceptInvitation,
                onSuccess: () => {
                    toast.success(t('accept_invitation_successful'))
                },
                onError: () => {
                    toast.error(t('accept_invitation_failed'))
                }
            })
        },
        useRejectInvation() {
            const t = useTranslations('Toast');
            return useMutation({
                mutationFn: removePendingInvitation,
                onSuccess: () => {
                    toast.success(t('reject_invitation_successful'))
                },
                onError: () => {
                    toast.error(t('reject_invitation_failed'))
                }
            })
        },
        useRemoveMemberFromGroup() {
            const t = useTranslations('Toast');
            return useMutation({
                mutationFn: removeMemberFromGroup,
                onSuccess: () => {
                    toast.success(t('remove_member_group_successful'))
                },
                onError: () => {
                    toast.error(t('remove_member_group_failed'))
                }
            })
        },
        useAddMemberToGroup() {
            const t = useTranslations('Toast');
            return useMutation({
                mutationFn: addMemberToGroup,
                onSuccess: () => {
                    toast.success(t('add_member_group_successful'))
                },
                onError: () => {
                    toast.error(t('add_member_group_failed'))
                }
            })
        }
    },
}
