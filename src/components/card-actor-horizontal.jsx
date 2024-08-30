import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bookmark } from 'lucide-react'
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
                    <div className="grid gap-0.5">
                        <p className="text-sm font-medium leading-none">Sofia Davis</p>
                        <p className="text-xs text-muted-foreground">Đạo diễn</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 ml-auto">
                    <Bookmark />
                </div>
            </div>
        </div>
    )
}
