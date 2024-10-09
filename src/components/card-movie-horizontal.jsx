import { Skeleton } from '@/components/ui/skeleton';
import { Bookmark, BookMarked } from 'lucide-react'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function CardMovieHorizontal({ movie }) {
    const router = useRouter();
    const t = useTranslations('Movie')
    const handleDetailMovie = () => {
        router.push(`/movies/${movie.id}`)
    }
    const yearRelease = movie?.releaseDate?.split('-')[0]
    return (
        <div className="flex items-center w-full">
            <div className="flex items-stretch gap-2 hover:cursor-pointer" onClick={() => { handleDetailMovie() }}>
                <Image
                    src={movie?.posterUrl}
                    alt="Movie"
                    width='80'
                    height='300'
                    className="rounded-lg object-cover aspect-[3/4]"
                />
                <div className="grid gap-0.5 my-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold line-clamp-2 ">{movie?.title} </h3>
                    <p className="text-muted-foreground text-sm">{t('year_release')}: {yearRelease}</p>
                    <p className="text-muted-foreground text-sm">{t('duration')}: {movie?.duration}{t('minutes')}</p>
                </div>
            </div>
            <div className="flex items-center gap-1 ml-auto hover:cursor-pointer">
                <Bookmark />
            </div>
        </div>
    )
}



export function CardMovieHorizontalSkeleton() {
    return (
        <div className="flex items-center w-full">
            <div className="flex items-stretch gap-2">
                <Skeleton
                    alt="Movie"
                    className="rounded-lg aspect-[3/4] h-[100] w-[80]"
                />
                <div className="grid gap-0.5 my-1">
                    <Skeleton className='w-32 h-8' />
                    <Skeleton className='w-24 h-4' />
                    <Skeleton className='w-24 h-4' />
                </div>
            </div>
        </div>
    )
}
