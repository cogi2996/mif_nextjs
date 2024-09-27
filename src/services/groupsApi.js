import { privateApi } from "@/services/config"

export const createGroup = async (data) => {
    const res = await privateApi.post('/groups', data)
    return res.data
}

export const updateGroup = async (data) => {
    const res = await privateApi.patch()
    return res.data
}

export const addMemberToGroup = async (data) => {
    const res = await privateApi.post(`/groups/${data.groupId}/members/${data.userId}`)
    return res.data
}

export const removeMemberFromGroup = async (data) => {
    const res = await privateApi.delete(`/groups/${data.groupId}/members/${data.userId}`)
    return res.data
}
export const findByOwnerId = async ({ queryKey }) => {
    const [_key, { page, size }] = queryKey;
    const res = await privateApi.get('/my-groups', {
        params: {
            page,
            size
        },
    })
    return res.data
}

export const getUserGroups = async ({ queryKey }) => {
    const [_key, { page, size, id }] = queryKey;
    const res = await privateApi.get(`/user/${id}/groups`, {
        params: {
            page,
            size
        },
    })
    return res.data
}

export const findGroupUserNotJoin = async ({ queryKey }) => {
    const [_key, { size }] = queryKey;
    const res = await privateApi.get('/explore-groups', {
        params: {
            size
        },
    })
    return res.data
}


export const addPendingInvitation = async ({ groupId, userId }) => {
    const res = await privateApi.post(`/groups/${groupId}/pending-invitations/${userId}`)
    return res.data
}

export const acceptInvitation = async (data) => {
    const res = await privateApi.post(`/groups/${data.groupId}/accept-invitations/${data.userId}`)
    return res.data
}

export const findGroupByGroupId = async (groupId) => {
    const res = await privateApi.get(`/groups/${groupId}`)
    return res.data
}

export const getAllMembers = async (groupId) => {
    const res = await privateApi.get(`/groups/${groupId}/members`)
    return res.data
}

export const getPendingInvitations = async ({ queryKey }) => {
    const [_key, { groupId, page }] = queryKey
    const res = await privateApi.get(`/groups/${groupId}/pending-invitations`, {
        params: {
            page
        }
    })
    return res.data
}

export const removePendingInvitation = async (data) => {
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