import CardActorHorizontal from '@/components/card-actor-horizontal'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Clock, Filter, Star, TrendingUp } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div className='grid grid-cols-3 gap-10'>
            <div className='grid col-span-2'>
                <Title title='Top 100 diễn viên' isMore={false} />
                <div className='ml-auto mt-4 '>
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
                <div className='mt-4'>
                    {Array.from({ length: 100 }).map((_, index) => (
                        <CardActorHorizontal key={index} />
                    ))}
                </div>
            </div>
            <div className='grid col-span-1 h-fit'>
                <Title title='Khám phá' isMore={false} />
                <div className='mt-4'>
                    <CardActorHorizontal />
                    <CardActorHorizontal />
                    <CardActorHorizontal />
                </div>
            </div>
        </div>
    )
}
