'use client'
import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CalendarDays, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { useAppSelector } from '@/redux/store'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addPendingInvitation } from '@/services/groupsApi'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { getCategoryById } from '@/services/movieCategoriesApi'

export default function CardGroups({ initialStatus, group, categories }) {
  const [joinStatus, setJoinStatus] = useState(initialStatus);
  const authState = useAppSelector((state) => state.auth.authState)

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: addPendingInvitation,
    onSuccess: (data) => {
      toast.success('Gửi lời mời thành công')
    },
    onError: (error) => {
      toast.error('Gửi lời mời thất bại')

      setJoinStatus('join')
    },
  });

  const category = categories?.find((category) => group.categoryId === category.id)

  const { data: categoryFromApi, isLoading } = useQuery({
    queryKey: ['category', group?.categoryId],
    queryFn: ({ queryKey }) => getCategoryById(queryKey[1]),
    enabled: !category
  });

  const handleJoinGroup = () => {
    setJoinStatus('pending')
    mutation.mutate({ groupId: group.id, userId: authState.id });

  }
  const handleUnjoinGroup = () => {
    setJoinStatus('join')
  }

  const handleDetailGroup = () => {
    router.push(`/groups/${group.id}`)
  }



  return (
    <Card className="drop-shadow-lg">
      <CardContent className="flex flex-col gap-2 p-0">
        <Image
          // Image1111
          src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
          alt="Movie"
          width={1200}
          height={2500}
          className="rounded-t-lg object-cover w-full aspect-[16/12]"
        />
        <div className='p-2'>
          <div className='mb-2'>
            <h3 className="text-xl font-bold">{group?.groupName}</h3>
            <p className="text-sm text-secondary-foreground bg-secondary inline-block px-2 rounded-full">
              {category?.categoryName || categoryFromApi?.categoryName}
            </p>
            <div className='flex items-center gap-2'>
              <Users className="w-4 h-4" />
              <span className='text-sm text-muted-foreground'>{group?.memberCount} thành viên</span>
            </div>
            <div className='flex items-center gap-2'>
              <CalendarDays className="w-4 h-4" />
              <span className='text-sm text-muted-foreground'>{group?.weeklyPostCount} bài viết tuần này</span>
            </div>
          </div>

          {joinStatus === 'join' && (
            <Button
              onClick={() => handleJoinGroup()}
              variant="outline"
              className="w-full hover:bg-primary hover:text-primary-foreground"
            >
              Tham gia nhóm
            </Button>
          )}
          {joinStatus === 'pending' && (
            <Button
              onClick={() => handleUnjoinGroup()}
              variant="outline"
              className="w-full hover:bg-primary hover:text-primary-foreground text-primary"
            >
              Hủy tham gia
            </Button>
          )}
          {joinStatus === 'joined' && (
            <Button
              className="w-full hover:bg-primary hover:text-primary-foreground"
              onClick={() => handleDetailGroup()}
            >
              Xem Nhóm
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}


export const CardGroupsSkeleton = () => {
  return (
    <Card className="drop-shadow-lg">
      <CardContent className="flex flex-col gap-2 p-0">
        <Skeleton
          width={1200}
          height={2500}
          className="rounded-t-lg object-cover w-full aspect-[16/12]"
        />
        <div className='flex gap-2 flex-col p-2'>
          <Skeleton className='w-3/5 h-8' />
          <Skeleton className='w-2/5 h-6' />
          <Skeleton className='w-2/5 h-6' />
          <Skeleton className='w-full h-12' />
        </div>
      </CardContent>
    </Card>
  )
}
