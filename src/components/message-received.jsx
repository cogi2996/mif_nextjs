import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Image from 'next/image'
import React from 'react'

export default function MessageReceived() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-start gap-2">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="/user-avatar.jpg" alt="User Avatar" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-xl text-sm">
                            <Image
                                src="https://intietkiem.com/wp-content/uploads/2019/07/poster-ngang.jpg"
                                width={300}
                                height={300}
                                alt="Image"
                                className="w-full rounded-lg aspect-auto object-cover"
                            />
                        </div>
                        {/* <div className="flex max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm bg-muted">
                            Sure! I&apos;m free this weekend if you want to grab a coffee.

                        </div> */}
                    </div>
                </TooltipTrigger>
                <TooltipContent side='left'>
                    <p className="text-xs">Thứ 3</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
