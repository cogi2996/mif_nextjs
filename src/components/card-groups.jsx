'use client'
import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CalendarDays, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function CardGroups({ initialStatus }) {
  const [joinStatus, setJoinStatus] = useState(initialStatus);

  const handleJoinGroup = () => {
    setJoinStatus('pending')
  }
  const handleUnjoinGroup = () => {

    setJoinStatus('join')
  }
  return (
    <Card className="group">
      <CardContent className="flex flex-col gap-2 p-0">
        <Image
          src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
          alt="Movie"
          width={1200}
          height={2500}
          className="rounded-t-lg object-cover w-full aspect-[16/12]"
        />
        <div className='p-2'>
          <div className='mb-2'>
            <h3 className="text-xl font-bold">Acme Developers</h3>
            <p className="text-sm text-muted-foreground">
              Hành động
            </p>
            <div className='flex items-center gap-2'>
              <Users className="w-4 h-4" />
              <span className='text-sm text-muted-foreground'>120 thành viên</span>
            </div>
            <div className='flex items-center gap-2'>
              <CalendarDays className="w-4 h-4" />
              <span className='text-sm text-muted-foreground'>12 bài viết tuần này</span>
            </div>
          </div>

          {joinStatus === 'join' && (
            <Button
              onClick={handleJoinGroup}
              variant="outline"
              className="w-full hover:bg-primary hover:text-primary-foreground"
            >
              Tham gia nhóm
            </Button>
          )}
          {joinStatus === 'pending' && (
            <Button
              onClick={handleUnjoinGroup}
              variant="outline"
              className="w-full hover:bg-primary hover:text-primary-foreground text-primary"
            >
              Hủy tham gia
            </Button>
          )}
          {joinStatus === 'joined' && (
            <Button
              className="w-full hover:bg-primary hover:text-primary-foreground"
            >
              Xem Nhóm
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
