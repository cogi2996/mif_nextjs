import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

export default function NotificationItem() {
  return (
    <div className='flex gap-2'>
      <Avatar className="size-8 flex items-center justify-center">
        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
        <AvatarFallback className="flex items-center justify-center">T</AvatarFallback>
      </Avatar>
      <div>
        <span className='text-sm gap-2 line-clamp-2'>
          <strong>
            Nguyễn Chí Thanh&nbsp;
          </strong>
          đã like bài viết của bạn nguyen chi thanh nguyen chi thanh nguyen chi thanh nguyen chi thanh nguyen chi thanh
        </span>
        <span className='text-xs text-muted-foreground'>2 giờ trước</span>
      </div>
    </div>
  )
}
