'use client'
import Rating from '@/components/rating'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { BookmarkPlus } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CardFilm({ direction, film }) {
    const router = useRouter();

    const handleDetailFilm = () => {
        router.push(`/film/${film.id}`)
    }

    const handleSaveFilm = (e) => {
        e.stopPropagation()
    }

    const yearRelease = film?.releaseDate?.split('-')[0]

    return (
        <div className={`gap-4 h-fit ${direction == 'vertical' ? 'flex-col w-fit flex' : 'grid grid-cols-2'}`} onClick={() => handleDetailFilm()}>
            <div className='relative'>
                <Image
                    src={film?.posterUrl}
                    // src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
                    alt="Movie"
                    height={100}
                    width={200}
                    className="rounded-lg object-cover aspect-[3/4] h-full"
                />
                <div className='absolute -right-1 -top-0.5' onClick={(e) => handleSaveFilm(e)}>
                    <BookmarkPlus size={32} />
                </div>
            </div>

            <div className="grid gap-2">
                <p className="text-lg md:text-xl lg:text-2xl font-bold line-clamp-2 max-w-44 sm:max-w-64 md:max-w-full">{film?.title}

                </p>
                {direction == 'vertical' ? (
                    <p className="text-muted-foreground text-sm">{yearRelease} &middot; {film?.duration}</p>
                ) : (
                    <>
                        <p className="text-muted-foreground text-sm">Năm: {yearRelease}</p>
                        <p className="text-muted-foreground text-sm">Thời lượng: {film?.duration}p</p>
                    </>
                )}
                <div className="flex items-center space-x-1">
                    <Rating
                        // Rating 1111
                        ratingInPercent={film?.ratings?.averageRating * 10}
                        iconSize="m"
                        showOutOf={true}
                        enableUserInteraction={false}
                    />
                    <span className="text-xs md:text-sx lg:text-sx">{film?.ratings?.averageRating}/10</span>
                </div>
                <Button>Xem trailer</Button>
            </div>
        </div>
    )
}

export const CardFilmSkeleton = ({ direction }) => {
    return (
        <div className={`grid grid-cols-2 gap-4 h-fit ${direction == 'vertical' ? 'flex-col w-fit' : ''}`}>
            <div>
                <Skeleton
                    height={100}
                    width={200}
                    className="rounded-lg object-cover aspect-[3/4] h-full"
                />
            </div>

            <div className="flex gap-2 flex-col h-full justify-around">
                <Skeleton className='h-2/6' />
                <Skeleton className='w-3/4 h-1/6' />
                <Skeleton className='w-3/4 h-1/6' />
                <Skeleton className='h-1/6' />
            </div>
        </div>
    )
}