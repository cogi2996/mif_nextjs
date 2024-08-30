'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Forward, MessageCircle, Play } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function ContentWithReadMore({ content, hashtags, maxLength = 200 }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const isContentLong = content.length > maxLength;

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p className='text-sm md:text-base lg:text-base w-full inline'>
                {isContentLong && !isExpanded ? content.slice(0, maxLength) + "..." : content}
            </p>
            {isContentLong && (
                <Button
                    variant="link"
                    onClick={toggleContent}
                    className="ml-2 text-blue-600 h-4"
                >
                    {isExpanded ? "" : "Xem thêm"}
                </Button>
            )}
            {isExpanded && (
                <p className='text-xs italic mt-2'>{hashtags}</p>
                
            )}
        </div>
    );
}

export default function Posts({ className }) {
    const content = `After the devastating events of Avengers: Infinity War, the universe is in ruins. 
    With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.
    After the devastating events of Avengers: Infinity War, the universe is in ruins. 
    With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.`;

    const hashtags = "#Hành động #Hài kịch";

    return (
        <div className={`grid w-full bg-card rounded-lg drop-shadow-2xl ${className}`}>
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
                <ContentWithReadMore content={content} hashtags={hashtags} maxLength={200} />
            </div>
            <div className="w-full">
                <Image
                    src="https://intietkiem.com/wp-content/uploads/2019/07/poster-ngang.jpg"
                    width={1000}
                    height={1000}
                    alt="Image"
                    className="w-full aspect-[16/6] object-cover"
                />
            </div>
            <Separator />
            <div className='flex justify-around items-center'>
                <div className='flex items-center'>
                    <Button variant="ghost rounded-full	">
                        <Play className='-rotate-90 ' strokeWidth={1.5}/>
                    </Button>
                    200
                    <Button variant="ghost rounded-full	">
                        <Play className='rotate-90 text-indigo-600 fill-indigo-600' strokeWidth={1.5}/>
                    </Button>
                </div>
                <Button variant="ghost" className="gap-1 items-center rounded-full">
                    <MessageCircle />
                    Bình luận
                </Button>
                <Button variant="ghost" className="gap-1 items-center rounded-full">
                    <Forward />
                    Chia sẻ
                </Button>
            </div>
        </div>
    )
}