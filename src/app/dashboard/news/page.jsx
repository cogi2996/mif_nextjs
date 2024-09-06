import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar, ChevronLeft, ChevronRight, Eye, FilePen, Filter, House, LineChart, ListOrdered, Newspaper, Package, Tag, Trash, User, Users } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination"


export default function page() {
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
                        <Button size=''>Tạo bài báo</Button>
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Published Date</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Link href="#" className="font-medium" prefetch={false}>
                                    Introduction to React
                                </Link>
                            </TableCell>
                            <TableCell>John Doe</TableCell>
                            <TableCell>2023-04-15</TableCell>
                            <TableCell className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                    <FilePen className="w-5 h-5" />
                                    <span className="sr-only">Edit</span>
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Eye className="w-5 h-5" />
                                    <span className="sr-only">View</span>
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Trash className="w-5 h-5" />
                                    <span className="sr-only">Delete</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Link href="#" className="font-medium" prefetch={false}>
                                    Building a Blog with Next.js
                                </Link>
                            </TableCell>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell>2023-05-01</TableCell>
                            <TableCell className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                    <FilePen className="w-5 h-5" />
                                    <span className="sr-only">Edit</span>
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Eye className="w-5 h-5" />
                                    <span className="sr-only">View</span>
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Trash className="w-5 h-5" />
                                    <span className="sr-only">Delete</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Pagination className="mt-6">
                    <PaginationContent>
                        <PaginationItem>
                            <Button variant="outline" size="icon">
                                <ChevronLeft className="w-5 h-5" />
                                <span className="sr-only">Previous</span>
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="w-5 h-5" />
                                <span className="sr-only">Next</span>
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
