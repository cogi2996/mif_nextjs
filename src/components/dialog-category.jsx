import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { schemaCategory } from '@/lib/schemas/category.schema'
import { categoryApi } from '@/services/movieCategoriesApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function DialogCategory({ isOpenDialog, setIsOpenDialog, queryClient, idEdit }) {
    const { handleSubmit, register, reset } = useForm({
        resolver: zodResolver(schemaCategory),
    });

    useEffect(() => {
        if (category) {
            reset({
                categoryName: category.categoryName,
                description: category.description,
            });
        }
    }, [category, reset]);

    const { data: category, isLoading: isLoadingCategory } = categoryApi.query.useGetCategoryById(idEdit, !!idEdit)
    const createCategoryMutation = categoryApi.mutation.useCreateCategory()
    const updateCategoryMutation = categoryApi.mutation.useDeleteCategory()

    const onSubmit = (data) => {
        idEdit ?
            updateCategoryMutation.mutate({
                id: idEdit,
                ...data
            }, {
                onSuccess: () => {
                    reset();
                    setIsOpenDialog(false);
                }
            })
            :
            createCategoryMutation.mutate(data, {
                onSuccess: () => {
                    reset();
                    setIsOpenDialog(false);
                }
            });
    };

    return (
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogContent className="w-fit">
                {isLoadingCategory ? (
                    <div>Loading...</div>
                )
                    : (
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                            <DialogHeader>
                                <DialogTitle>Category</DialogTitle>
                            </DialogHeader>
                            <div className="flex items-center gap-4">
                                <Label htmlFor="categoryName" className="w-40 text-right">
                                    Category Name
                                </Label>
                                <Input
                                    id="categoryName"
                                    {...register('categoryName', { required: true })}
                                    required
                                    className="flex-1"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <Label htmlFor="description" className="w-40 text-right">
                                    Description
                                </Label>
                                <Input
                                    id="description"
                                    {...register('description', { required: true })}
                                    required
                                    className="flex-1"
                                />
                            </div>

                            <DialogFooter>
                                <Button type="submit" disabled={createCategoryMutation.isLoading || updateCategoryMutation.isLoading}>Save</Button>
                            </DialogFooter>
                        </form>
                    )}
            </DialogContent>
        </Dialog>
    )
}
