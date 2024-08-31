import Rating from '@/components/rating'
import { Button } from '@/components/ui/button'
import { BookmarkPlus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function CardFilm({ direction }) {
    return (
        <div className={`flex gap-4 ${direction == 'vertical' ? 'flex-col w-fit' : ''}`}>
            <div className='relative'>
                <Image
                    src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
                    alt="Movie"
                    height={200}
                    width={180}
                    className="rounded-lg object-cover aspect-[15/20]"
                />
                <div className='absolute -right-1 -top-0.5'>
                    <BookmarkPlus size={32} />
                </div>
            </div>

            <div className="grid gap-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold line-clamp-2 max-w-44">Avengers: Endgame </h3>
                {direction == 'vertical' ? (
                    <p className="text-muted-foreground text-sm">2023 &middot; 23 tập</p>
                ) : (
                    <>
                        <p className="text-muted-foreground text-sm">2023</p>
                        <p className="text-muted-foreground text-sm">2h30p</p>
                    </>
                )}
                <div className="flex items-center space-x-1">
                    <Rating
                        ratingInPercent={70}
                        iconSize="m"
                        showOutOf={true}
                        enableUserInteraction={false}
                    />
                    <span className="text-sm md:text-sm lg:text-sm">8.4/10</span>
                </div>
                <Button>Xem trailer</Button>
            </div>
        </div>
    )
}
