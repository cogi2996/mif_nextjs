import { privateApi } from '@/services/config'

export const getPostsByGroupId = async ({ pageParam = 0, queryKey }) => {
    const [_key, { groupId }] = queryKey;
    const res = await privateApi.get(`/groups/${groupId}/posts`, {
        params: {
            page: pageParam,
        }
    });
    return res.data;
}

export const upvotePost = async (postId) => {
    const res = await privateApi.post(`/group-posts/${postId}/upvote`)
    return res.data
}

export const downvotePost = async (postId) => {
    const res = await privateApi.post(`/group-posts/${postId}/downvote`)
    return res.data
}

export const removevotePost = async (postId) => {
    const res = await privateApi.delete(`/group-posts/${postId}/vote`)
    return res.data
}

// export const deletePost = async()