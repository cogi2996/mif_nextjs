'use client'
import CardMovie, { CardMovieSkeleton } from '@/components/card-movie';
import { get4RandomMovies } from '@/services/movieApi';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function SectionRandomMovie() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['radom_movie'],
        queryFn: get4RandomMovies,
    });
    if (isLoading)
        return (
            <>
                {Array.from({ length: 4 }, (_, index) => (<CardMovieSkeleton key={index} />))}
            </>
        )


    return (
        <>
            {data?.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
        </>
    )
}
