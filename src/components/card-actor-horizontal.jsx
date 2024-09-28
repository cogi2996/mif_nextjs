import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bookmark, Triangle } from 'lucide-react'
import React from 'react'

export default function CardActorHorizontal() {
    return (
        <div>
            <div className="flex p-1 rounded border-b-2 items-center">
                <div className="flex items-center gap-2">
                    <Avatar className="border w-10 h-10">
                        <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 py-1">
                        <p className="leading-none font-bold">Sofia Davis</p>
                        <p className="text-xs text-muted-foreground">Đạo diễn</p>
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
                    <Bookmark />
                </div>
            </div>
        </div>
    )
}
