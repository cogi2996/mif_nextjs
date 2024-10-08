'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar, ChevronLeft, ChevronRight, Clock, Ellipsis, Eye, FilePen, Filter, House, LineChart, ListOrdered, MoreHorizontal, Newspaper, Package, Star, Tag, Trash, TrendingUp, User, Users } from 'lucide-react'
import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteActor, getTopActors } from '@/services/actorApi'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'


export default function Actors() {
    const [currentPage, setCurrentPage] = useState(0)
    const [pageSize] = useState(10)

    const router = useRouter();
    const queryClient = useQueryClient();

    const { isLoading: isLoadingActors, data: actorsData } = useQuery({
        queryKey: ['top_actors', { page: 0, size: 10 }],
        queryFn: getTopActors,
    })

    const deleteMutation = useMutation({
        mutationFn: deleteActor,
        onSuccess: () => {
            toast.success('Actor deleted successfully');
            queryClient.invalidateQueries('all_movie_categories');
        },
        onError: () => {
            toast.error('Failed to delete actor');
        },
    });

    const hanleDeleteActor = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            deleteMutation.mutate(id);
        }
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const hanleEditActor = (id) => {
        router.push(`/dashboard/actors/edit?id=${id}`)
    }

    return (
        <div>
            <div className="bg-background p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Input placeholder="Search articles..." className="bg-muted text-muted-foreground" />
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
                    </div>
                    <div className='flex items-center gap-2'>
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
                        <Button onClick={() => { router.push('/dashboard/actors/create') }}>Add Actor</Button>
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Movies</TableHead>
                            <TableHead>Rank</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Award</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {actorsData?.content?.map((actor) => {
                            return (
                                <TableRow key={actor.id}>
                                    <TableCell>{actor.name}</TableCell>
                                    <TableCell>10</TableCell>
                                    <TableCell>10</TableCell>
                                    <TableCell>10</TableCell>
                                    <TableCell>{actor.awards.length}</TableCell>
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
                                                <DropdownMenuItem onClick={() => hanleEditActor(actor.id)}>Edit</DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => hanleDeleteActor(actor.id)}>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>

                            )
                        })}
                    </TableBody>
                </Table>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0} />
                        </PaginationItem>
                        {Array.from({ length: Math.ceil((actorsData?.totalPages || 1)) }).map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink href="#" isActive={index === currentPage} onClick={() => handlePageChange(index)}>
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= (actorsData?.totalPages || 1) - 1} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
