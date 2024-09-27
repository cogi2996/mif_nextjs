import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { schemaCategory } from '@/lib/schemas/category.schema'
import { createCategory, getCategoryById, updateCategory } from '@/services/movieCategoriesApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function DialogCategory({ isOpenDialog, setIsOpenDialog, queryClient, idEdit }) {
    console.log('🚀 ~ DialogCategory ~ idEdit:', idEdit)
    const { handleSubmit, register, reset } = useForm({
        resolver: zodResolver(schemaCategory),
    });

    const { data: category, isLoading: isLoadingCategory } = useQuery({
        queryKey: ['category', idEdit],
        queryFn: ({ queryKey }) => getCategoryById(queryKey[1]),
        enabled: !!idEdit,
    });

    console.log('🚀 ~ DialogCategory ~ category:', category)
    useEffect(() => {
        if (category) {
            reset({
                categoryName: category.categoryName,
                description: category.description,
            });
        }
    }, [category, reset]);



    const createCategoryMutation = useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            toast.success('Create Cateogry Successfully')
            reset();
            queryClient.invalidateQueries('all_movie_categories');
            setIsOpenDialog(false);
        },
        onError: () => {
            toast.error('Create Cateogry Fail')

        }
    });

    const updateCategoryMutation = useMutation({
        mutationFn: updateCategory,
        onSuccess: () => {
            toast.success('Update Cateogry Successfully')
            reset();
            queryClient.invalidateQueries('all_movie_categories');
            setIsOpenDialog(false);
        },
        onError: () => {
            toast.error('Update Cateogry Fail')

        }
    })

    const onSubmit = (data) => {
        idEdit ?
            updateCategoryMutation.mutate({
                id: idEdit,
                ...data
            })
            :
            createCategoryMutation.mutate(data);
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
