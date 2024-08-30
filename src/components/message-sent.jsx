import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'


export default function MessageSent() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-start justify-end gap-2">
                        {/* <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                            Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
                        </div> */}
                        <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-xl text-sm ml-auto">
                            <Image
                                src="https://intietkiem.com/wp-content/uploads/2019/07/poster-ngang.jpg"
                                width={300}
                                height={300}
                                alt="Image"
                                className="w-full rounded-lg aspect-auto object-cover"
                            />
                        </div>
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="/your-avatar.jpg" alt="Your Avatar" />
                            <AvatarFallback>Y</AvatarFallback>
                        </Avatar>
                    </div>
                </TooltipTrigger>
                <TooltipContent side='left'>
                    <p className="text-xs">Thứ 3</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
