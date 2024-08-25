import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import React from 'react'

export default function News() {
  return (
    <div className='grid gap-3 w-full mt-8'>
      <div className='flex gap-2 items-center'>
        <Avatar className="w-8 h-8 flex items-center justify-center object-contain">
          <AvatarImage src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="@shadcn" />
          <AvatarFallback className="flex items-center justify-center">T</AvatarFallback>
        </Avatar>
        <p className='font-bold'>Nguyễn Chí Thanh</p>
      </div>
      <p className='text-xs italic'>Ngày 1/1/2024</p>
      <p className='text-lg font-bold'>At Least One Arrest Made in Matthew Perry Death Investigation</p>
      <p className='text-sm md:text-lg lg:text-base w-full line-clamp-2'>
        After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos actions and restore order to the universe.
        After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos actions and restore order to the universe.
      </p>
      <p className='text-xs italic'>#Hành động #Hài kịch</p>
      <div className="w-full mb-1">
        <Image
          src="https://intietkiem.com/wp-content/uploads/2019/07/poster-ngang.jpg"
          width={1000}
          height={1000}
          alt="Image"
          className="w-full rounded-lg aspect-[16/6] object-cover"
        />
      </div>
    </div>
  )
}
