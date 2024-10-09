'use client'
import CardMovieHorizontal, { CardMovieHorizontalSkeleton } from '@/components/card-movie-horizontal'
import { ComboboxMovieCategory } from '@/components/combobox-category-movie'
import Loading from '@/components/loading'
import { SectionExploreMovies } from '@/components/section-explore-movies'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { movieApi } from '@/services/movieApi'
import { Clock, Filter, Star, TrendingUp } from 'lucide-react'
import React from 'react'

export default function MoviePage() {

    const { isLoading, data } = movieApi.query.useGetAllMovies(0, 10)

    if (isLoading) return (<Loading />)
    return (
        <div className='grid grid-cols-3 gap-10'>
            <div className='grid col-span-2'>
                <Title title='Phim đang hot' isMore={false} />
                <div className='ml-auto mt-4 gap-2'>
                    <div className='flex gap-2 items-center'>
                        <ComboboxMovieCategory />
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-8 gap-1">
                                    <Filter className="h-4 w-4" />
                                    <span className="sr-only sm:not-sr-only">Filter</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Clock className="h-4 w-4 mr-2" />
                                    Latest
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Star className="h-4 w-4 mr-2" />
                                    Top
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <TrendingUp className="h-4 w-4 mr-2" />
                                    Trending
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className='grid mt-4 gap-2'>
                    {data.content.map((movie, index) => (
                        <CardMovieHorizontal movie={movie} key={index} />
                    ))}
                </div>
            </div>
            <SectionExploreMovies />
        </div>
    )
}
