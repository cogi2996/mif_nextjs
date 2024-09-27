import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { MessageCircle, Play } from 'lucide-react'
import React from 'react'

export default function Comment({ comment, setReplyTo, replyTo }) {
    return (
        <div className='grid gap-1 '>
            <div className='flex gap-2 items-center'>
                <Avatar className="w-8 h-8 flex items-center justify-center object-contain">
                    <AvatarImage src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="@shadcn" />
                    <AvatarFallback className="flex items-center justify-center">T</AvatarFallback>
                </Avatar>
                <p className='font-bold'>{comment.author} &middot;</p>
                <p className='text-xs text-muted-foreground'>{comment.timestamp}</p>
            </div>
            <p className="ml-10 text-sm">{comment.content}</p>
            <div className="ml-4 flex items-center text-sm">
                <Button variant="ghost rounded-full	" className="size-12">
                    <Play className='-rotate-90 ' strokeWidth={1.5} size={16} />
                </Button>
                200
                <Button variant="ghost rounded-full">
                    <Play className='rotate-90 text-indigo-600 fill-indigo-600' strokeWidth={1.5} size={16} />
                </Button>
                <Button variant="ghost" className="gap-1 items-center rounded-full text-sm"
                    onClick={() => {

                        if (replyTo == null) {
                            console.log('🚀 ~ Comment ~ replyTo ~ if:', replyTo)
                            setReplyTo(comment.id)
                        } else {
                            console.log('🚀 ~ Comment ~ replyTo ~ else:', replyTo)
                            setReplyTo(null)
                        }
                    }}>
                    <MessageCircle size={16} />
                    Phản hồi
                </Button>
            </div>
        </div>
    )
}
