'use client'
import Rating from '@/components/rating'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { BookmarkPlus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CardMovie({ direction, movie }) {
    const router = useRouter();
    const t = useTranslations('Movie')

    const handleDetailMovie = () => {
        router.push(`/movie/${movie.id}`)
    }
    const yearRelease = movie?.releaseDate?.split('-')[0]

    return (
        <div
            className={`gap-4 h-fit ${direction == 'vertical' ? 'flex-col w-fit flex' : 'grid grid-cols-2'}`}
            onClick={() => handleDetailMovie()}
        >
            <div className='relative'>
                <Image
                    src={movie?.posterUrl}
                    alt="Movie"
                    height={400}
                    width={300}
                    className="rounded-lg object-cover aspect-[3/4]"
                />
            </div>

            <div className="grid gap-2">
                <p className="text-lg md:text-xl lg:text-2xl sm:max-w-64 max-w-full font-bold line-clamp-2 h-fit">
                    {movie?.title}
                </p>
                {direction == 'vertical' ? (
                    <p className="text-muted-foreground text-sm">{yearRelease} &middot; {movie?.duration}</p>
                ) : (
                    <>
                        <p className="text-muted-foreground text-sm">{t('year_release')}: {yearRelease}</p>
                        <p className="text-muted-foreground text-sm">{t('duration')}: {movie?.duration}p</p>
                    </>
                )}
                <div className="flex items-center space-x-1">
                    <Rating
                        // Rating 1111
                        ratingInPercent={movie?.ratings?.averageRating * 10}
                        iconSize="m"
                        showOutOf={true}
                        enableUserInteraction={false}
                    />
                    <span className="text-xs md:text-sx lg:text-sx">{movie?.ratings?.averageRating}/10</span>
                </div>
                <Button>{t('button_watch_trailer')}</Button>
            </div>
        </div>
    )
}

export const CardMovieSkeleton = ({ direction }) => {
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