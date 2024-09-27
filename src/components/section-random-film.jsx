'use client'
import CardFilm, { CardFilmSkeleton } from '@/components/card-film';
import { get4RandomMovies } from '@/services/movieApi';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function SectionRandomFilm() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['radom_film'],
        queryFn: get4RandomMovies,
    });
    if (isLoading)
        return (
            <>
                {Array.from({ length: 4 }, (_, index) => (<CardFilmSkeleton key={index} />))}
            </>
        )


    return (
        <>
            {data?.map((film) => <CardFilm key={film.id} film={film} />)}
        </>
    )
}
