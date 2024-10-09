import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { Bookmark, Heart, Triangle } from 'lucide-react'
import React from 'react'

export default function CardActorHorizontal({ actor, heart }) {

    if (!actor) return null;

    return (
        <div>
            <div className="flex p-1 rounded border-b-2 items-center">
                <div className="flex items-center gap-2">
                    <Avatar className="border w-10 h-10">
                        <AvatarImage src={actor.profilePictureUrl} alt={actor.name} />
                        <AvatarFallback>X</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-2 py-2">
                        <p className="leading-none font-bold">{actor.name}</p>
                        <div className='flex items-center gap-[2px]'>
                            <span className='text-sm'>#1(</span>
                            {
                                true
                                    ?
                                    <Triangle className="fill-green-500 text-green-500" size="10px" />
                                    :
                                    <Triangle className="rotate-180 fill-red-500 text-red-500" size="10px" />
                            }
                            <span className='text-sm '>16)</span>

                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1 ml-auto">
                    <Heart />
                </div>
            </div>
        </div>
    )
}


export function CardActorHorizontalSkeleton() {
    return (
        <div>
            <div className="flex p-1 rounded border-b-2 items-center">
                <div className="flex items-center gap-2">
                    <Skeleton className='rounded-full size-10' />
                    <div className="grid gap-2 py-2">
                        <Skeleton className='w-24 h-4' />
                        <Skeleton className='w-20 h-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}