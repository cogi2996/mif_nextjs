'use client'
import CardMovie, { CardMovieSkeleton } from '@/components/card-movie';
import { movieApi } from '@/services/movieApi';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function SectionHotMovie() {

    const { isLoading, data } = movieApi.query.useGetNewestMovie(0, 5)

    if (isLoading)
        return (
            <>
                {Array.from({ length: 4 }, (_, index) => (<CardMovieSkeleton key={index} />))}
            </>
        )

    return (
        <>
            {data?.content?.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
        </>
    )
}
