'use client'
import CardActorHorizontal from '@/components/card-actor-horizontal'
import CardFilmHorizontal from '@/components/card-film-horizontal'
import { ComboboxFilmCategory } from '@/components/combobox-category-film'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { get4RandomMovies, getAllMovies } from '@/services/movieApi'
import { useQuery } from '@tanstack/react-query'
import { Clock, Filter, Star, TrendingUp } from 'lucide-react'
import React from 'react'

export default function FilmPage() {

    const { isLoading, data } = useQuery({
        queryKey: ['movies', { page: 0, size: 10, sort: 'title,asc' }],
        queryFn: getAllMovies,
    })

    const { data: data2, isLoading: isLoading2, isError } = useQuery({
        queryKey: ['radom_film'],
        queryFn: get4RandomMovies,
    });

    if (isLoading || isLoading2) return (<div>Loading...</div>)
    return (
        <div className='grid grid-cols-3 gap-10'>
            <div className='grid col-span-2'>
                <Title title='Phim đang hot' isMore={false} />
                <div className='ml-auto mt-4 gap-2'>
                    <div className='flex gap-2 items-center'>
                        <ComboboxFilmCategory />
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
                        <CardFilmHorizontal film={movie} key={index} />
                    ))}
                </div>
            </div>
            <div className='grid col-span-1 h-fit'>
                <Title title='Khám phá' isMore={false} />
                <div className='grid mt-4 gap-2'>
                    {data2.map((movie, index) => (
                        <CardFilmHorizontal film={movie} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
