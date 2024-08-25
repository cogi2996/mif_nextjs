import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function Title({ title, isMore }) {
    return (
        <div className='flex justify-between items-center w-full h-fit'>
            <div className='flex items-center'>
                <div className='w-2 bg-primary h-8 rounded'></div>
                <h1 className='text-xl md:text-xl lg:text-2xl font-bold pl-4'>{title}</h1>
            </div>
            {isMore && <div className='flex gap-1 items-center cursor-pointer'>
                <span className='text-xs text-nowrap font-bold'>Xem thêm</span>
                <ChevronRight />
            </div>}
        </div>
    )
}
