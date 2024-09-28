import { privateApi } from "@/services/config"

export const getAllmovieCategories = async () => {
    const res = await privateApi.get('/movies-category')
    return res.data
}

export const getCategoryById = async (categoryId) => {
    const res = await privateApi.get(`/movies-category/${categoryId}`)
    return res.data
}

export const createCategory = async (data) => {
    const res = await privateApi.post('/movies-category', data)
    return res.data
}

export const deleteCategory = async (id) => {
    const res = await privateApi.delete(`/movies-category/${id}`)
    return res.data
}

export const updateCategory = async (data) => {
    const { id, ...updateData } = data
    const res = await privateApi.put(`/movies-category/${id}`, updateData)
    return res.data
}