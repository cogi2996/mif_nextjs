import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import React from 'react'

export default function News() {
  return (
    <div className='grid w-full mt-8 bg-card rounded-lg drop-shadow-2xl'>
      <div className='grid gap-3 p-2 pt-4'>

        <div className='flex gap-2 items-center'>
          <Avatar className="w-8 h-8 flex items-center justify-center object-contain">
            <AvatarImage src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="@shadcn" />
            <AvatarFallback className="flex items-center justify-center">T</AvatarFallback>
          </Avatar>
          <p className='font-bold'>Nguyễn Chí Thanh &middot;</p>
          <p className='text-xs text-muted-foreground'>Ngày 1/1/2024</p>
        </div>
        <p className='text-lg font-bold'>At Least One Arrest Made in Matthew Perry Death Investigation</p>
        <p className='text-sm md:text-lg lg:text-base w-full line-clamp-2'>
          After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos actions and restore order to the universe.
          After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos actions and restore order to the universe.
        </p>
        <p className='text-xs italic'>#Hành động #Hài kịch</p>
      </div>
      <div className="w-full">
        <Image
          src="https://intietkiem.com/wp-content/uploads/2019/07/poster-ngang.jpg"
          width={1000}
          height={1000}
          alt="Image"
          className="w-full rounded-b-lg aspect-[16/6] object-cover"
        />
      </div>
    </div>
  )
}
