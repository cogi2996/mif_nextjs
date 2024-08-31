import { Bookmark, BookMarked } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function CardFilmHorizontal() {
    return (
        <div className="flex items-center w-full">
            <div className="flex items-center gap-2">
                <Image
                    src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
                    alt="Movie"
                    width='90'
                    height='200'
                    className="rounded-lg object-cover"
                />
                <div className="grid gap-0.5">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold line-clamp-2 ">Avengers: Endgame </h3>
                    <p className="text-muted-foreground text-sm">2023</p>
                    <p className="text-muted-foreground text-sm">2h30p</p>
                </div>
            </div>
            <div className="flex items-center gap-1 ml-auto">
                <Bookmark />
            </div>
        </div>
    )
}
