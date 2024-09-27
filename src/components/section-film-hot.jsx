'use client'
import CardFilm, { CardFilmSkeleton } from '@/components/card-film';
import { getNewestMovie } from '@/services/movieApi';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function SectionFilmHot() {
    const { isLoading, data } = useQuery({
        queryKey: ['movies', { page: 0, size: 5, sort: 'title,asc' }],
        queryFn: getNewestMovie,
    })

    if (isLoading)
        return (
            <>
                {Array.from({ length: 4 }, (_, index) => (<CardFilmSkeleton key={index} />))}
            </>
        )

    return (
        <>
            {data?.content?.map((film) => <CardFilm key={film.id} film={film} />)}
        </>
    )
}
