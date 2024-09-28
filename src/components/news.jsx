import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import React from 'react'

export default function News() {
  return (
    <div className='grid w-full mt-8 bg-card rounded-lg drop-shadow-2xl grid-cols-2'>
      <div className="w-full">
        <Image
          src="https://intietkiem.com/wp-content/uploads/2019/07/poster-ngang.jpg"
          width={1000}
          height={1000}
          alt="Image"
          className="w-full rounded-l-lg aspect-[16/9] object-cover h-[200]"
        />
      </div>
      <div className='grid gap-2 p-2 pt-4 h-fit'>
        <p className='text-xs md:text-xs lg:text-xs italic '> Ngày 12/12/2003</p>
        <p className='text-lg font-bold line-clamp-2'>At Least One Arrest Made in Matthew Perry Death Investigation</p>
        <p className='text-sm md:text-base lg:text-sm w-full line-clamp-4'>
          After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos actions and restore order to the universe. After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos actions and restore order to the universe.
        </p>
      </div>
    </div>
  )
}

export function NewsSkeleton() {
  return (
    <div className='grid w-full mt-8 bg-card rounded-lg drop-shadow-2xl grid-cols-2'>
      <div className="w-full">
        <Skeleton
          className="w-full rounded-l-lg aspect-[16/9] object-cover h-[200]"
        />
      </div>
      <div className='flex gap-2 p-2 pt-4 h-full flex-col w-full'>
        <Skeleton className='w-2/5 h-1/5' />
        <Skeleton className='w-full h-1/5' />
        <Skeleton className='w-full h-3/5' />
      </div>
    </div>
  )
}