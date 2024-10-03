'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowUpDown, Calendar, ChevronLeft, ChevronRight, Ellipsis, Eye, FilePen, Filter, House, LineChart, ListOrdered, MoreHorizontal, Newspaper, Package, Tag, Trash, User, Users } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteCategory, getAllmovieCategories } from '@/services/movieCategoriesApi'
import DialogCategory from '@/components/dialog-category'
import { toast } from 'react-toastify'


export default function CategoriesPage() {
    const queryClient = useQueryClient();
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const [idEdit, setIdEdit] = useState(false);
    const { data: movieCategories } = useQuery({
        queryKey: 'all_movie_categories',
        queryFn: getAllmovieCategories,
    });

    const deleteMutation = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            toast.success('Category deleted successfully');
            queryClient.invalidateQueries('all_movie_categories');
        },
        onError: () => {
            toast.error('Failed to delete category');
        },
    });

    const hanleDeleteCategory = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            deleteMutation.mutate(id);
        }
    }

    return (
        <div>
            <div className="bg-background p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Input placeholder="Search articles..." className="bg-muted text-muted-foreground" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    <Filter className="w-5 h-5 mr-2" />
                                    Filter
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-64">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem>
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Published Date
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    <User className="w-4 h-4 mr-2" />
                                    Author
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    <Tag className="w-4 h-4 mr-2" />
                                    Category
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    <ListOrdered className="w-5 h-5 mr-2" />
                                    Sort
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuRadioGroup value="published_date">
                                    <DropdownMenuRadioItem value="published_date">Published Date</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="author">Author</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button onClick={() => {
                            setIsOpenDialog(true)
                            setIdEdit(null)
                        }}>Add</Button>
                        <DialogCategory isOpenDialog={isOpenDialog} setIsOpenDialog={setIsOpenDialog} queryClient={queryClient} idEdit={idEdit} />
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead>Movies </TableHead>
                            <TableHead>Groups</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {movieCategories?.map(category => {
                            return (
                                <TableRow key={category.id}>
                                    <TableCell>
                                        {category?.categoryName}
                                    </TableCell>
                                    <TableCell>7.9</TableCell>
                                    <TableCell>100</TableCell>
                                    <TableCell className="flex items-center gap-2">
                                        <DropdownMenu model={false}>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem onClick={() => {
                                                    setIsOpenDialog(true)
                                                    setIdEdit(category.id)
                                                }}>Edit</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => { hanleDeleteCategory(category.id) }}>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
