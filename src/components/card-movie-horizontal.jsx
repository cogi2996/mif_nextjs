import { Bookmark, BookMarked } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function CardMovieHorizontal({ movie }) {
    const router = useRouter();

    const handleDetailMovie = () => {
        router.push(`/movie/${movie.id}`)
    }
    const yearRelease = movie?.releaseDate?.split('-')[0]
    return (
        <div className="flex items-center w-full">
            <div className="flex items-center gap-2 hover:cursor-pointer" onClick={() => { handleDetailMovie() }}>
                <Image
                    //1111
                    src={movie?.posterUrl}
                    // src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
                    alt="Movie"
                    width='90'
                    height='200'
                    className="rounded-lg object-cover"
                />
                <div className="grid gap-0.5">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold line-clamp-2 ">{movie?.title} </h3>
                    <p className="text-muted-foreground text-sm">{yearRelease}</p>
                    <p className="text-muted-foreground text-sm">{movie?.duration}</p>
                </div>
            </div>
            <div className="flex items-center gap-1 ml-auto">
                <Bookmark />
            </div>
        </div>
    )
}
