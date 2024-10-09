import CardMovieHorizontal, { CardMovieHorizontalSkeleton } from '@/components/card-movie-horizontal'
import Title from '@/components/title'
import { movieApi } from '@/services/movieApi'
import React from 'react'

export function SectionExploreMovies() {
    const { data: data, isLoading: isLoading } = movieApi.query.useGetRandomMovies()

    return (
        <div className='grid col-span-1 h-fit'>
            <Title title='Khám phá' isMore={false} />
            <div className='grid mt-8 gap-2'>
                {
                    isLoading
                        ?
                        Array.from({ length: 4 }).map((_, index) => (
                            <CardMovieHorizontalSkeleton key={index} />
                        ))
                        :
                        data.map((movie, index) => (
                            <CardMovieHorizontal movie={movie} key={index} />
                        ))
                }
            </div>
        </div>
    )
}
