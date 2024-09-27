import { Skeleton } from '@/components/ui/skeleton';
import { Triangle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function CardActor({ actor }) {
    return (
        <div className='grid rounded-lg gap-4 w-40'>
            <Image
                src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
                alt="Image"
                width="200"
                height="200"
                className="h-full w-full object-cover rounded-full aspect-square"
            />
            <div className='pb-2'>
                <p className='flex justify-center text-base font-bold'>
                    {actor.name}
                </p>
                <div className='flex justify-center items-center gap-[2px]'>
                    <span className='text-sm'>#{actor.rank}(</span>
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
    );
}

export const CardActorSkeleton = () => {
    return (
        <div className='grid rounded-lg gap-4 w-40'>
            <Skeleton className="h-full w-full object-cover rounded-full aspect-square" />
            <div className='grid pb-2 gap-2'>
                <Skeleton className='flex justify-center h-4' />
                <Skeleton className='flex justify-center h-4' />
            </div>
        </div>
    )
}

