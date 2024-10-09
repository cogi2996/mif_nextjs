import { privateApi } from '@/services/config'
import { QUERY_KEY } from '@/services/key';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

export const getPostsByGroupId = async ({ pageParam = 0, queryKey }) => {
    const [_key, { groupId }] = queryKey;
    const res = await privateApi.get(`/groups/${groupId}/posts`, {
        params: {
            page: pageParam,
        }
    });
    return res.data;
}

const upvotePost = async (postId) => {
    const res = await privateApi.post(`/group-posts/${postId}/upvote`)
    return res.data
}

const downvotePost = async (postId) => {
    const res = await privateApi.post(`/group-posts/${postId}/downvote`)
    return res.data
}

const removevotePost = async (postId) => {
    const res = await privateApi.delete(`/group-posts/${postId}/vote`)
    return res.data
}

export const createPost = async (data) => {
    const res = await privateApi.post(`/group-posts`, data)
    return res.data
}

export const groupPostApi = {
    query: {
        useGetPostsByGroupIdInfinite(groupId) {
            return useInfiniteQuery({
                queryKey: QUERY_KEY.groupPosts(groupId),
                queryFn: getPostsByGroupId,
                getNextPageParam: (lastPage, allPages) => {
                    const nextPage = allPages.length;
                    return lastPage.last ? undefined : nextPage;
                },
            });
        }
    },
    mutation: {
        useUpVotePost() {
            const queryClient = useQueryClient()
            return useMutation({
                mutationFn: upvotePost,
                onSuccess: () => {
                    queryClient.invalidateQueries('group_posts')
                },
            })
        },
        useDownVotePost() {
            const queryClient = useQueryClient()
            return useMutation({
                mutationFn: downvotePost,
                onSuccess: () => {
                    queryClient.invalidateQueries('group_posts')
                },
            })
        },
        useRemoveVotePost() {
            const queryClient = useQueryClient()
            return useMutation({
                mutationFn: removevotePost,
                onSuccess: () => {
                    queryClient.invalidateQueries('group_posts')
                },
            })
        },
        useCreatePost() {
            const t = useTranslations('Toast')
            return useMutation({
                mutationFn: createPost,
                onSuccess: () => {
                    toast.success(t('create_post_successful'))
                },
                onError: () => {
                    toast.error(t('create_post_failed'))
                }
            })
        }
    },
}