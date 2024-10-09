import { privateApi } from "@/services/config"
import { QUERY_KEY } from "@/services/key"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { toast } from "react-toastify"

const getAllmovieCategories = async () => {
    const res = await privateApi.get('/movies-category')
    return res.data
}

const getCategoryById = async (categoryId) => {
    const res = await privateApi.get(`/movies-category/${categoryId}`)
    return res.data
}

const createCategory = async (data) => {
    const res = await privateApi.post('/movies-category', data)
    return res.data
}

const deleteCategory = async (id) => {
    const res = await privateApi.delete(`/movies-category/${id}`)
    return res.data
}

const updateCategory = async (data) => {
    const { id, ...updateData } = data
    const res = await privateApi.put(`/movies-category/${id}`, updateData)
    return res.data
}

export const categoryApi = {
    query: {
        useGetAllmovieCategories() {
            return useQuery({
                queryKey: QUERY_KEY.allmovieCategories,
                queryFn: getAllmovieCategories,
            });
        },
        useGetCategoryById(id, enabled = true) {
            return useQuery({
                queryKey: QUERY_KEY.categoryById(id),
                queryFn: ({ queryKey }) => getCategoryById(queryKey[1]),
                enabled,
            });
        }
    },
    mutation: {
        useCreateCategory() {
            const t = useTranslations('Toast');
            const queryClient = useQueryClient();
            return useMutation({
                mutationFn: createCategory,
                onSuccess: () => {
                    toast.success(t('create_category_successful'))
                    queryClient.invalidateQueries(QUERY_KEY.allmovieCategories);
                },
                onError: () => {
                    toast.error(t('create_category_failed'))
                }
            });
        },
        useDeleteCategory() {
            const t = useTranslations('Toast');
            const queryClient = useQueryClient();
            return useMutation({
                mutationFn: deleteCategory,
                onSuccess: () => {
                    toast.success(t('delete_category_successful'));
                    queryClient.invalidateQueries(QUERY_KEY.allmovieCategories);
                },
                onError: () => {
                    toast.error(t('delete_category_failed'));
                },
            });
        },
        useUpdateCategory() {
            const t = useTranslations('Toast');
            const queryClient = useQueryClient();
            return useMutation({
                mutationFn: updateCategory,
                onSuccess: () => {
                    toast.success('Update Cateogry Successfully')
                    queryClient.invalidateQueries(QUERY_KEY.allmovieCategories);
                },
                onError: () => {
                    toast.error('Update Cateogry Fail')

                }
            })
        },

    }
}