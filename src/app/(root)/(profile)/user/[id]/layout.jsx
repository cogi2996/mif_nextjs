'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getUserInfoById } from '@/services/userApi'
import { useQuery } from '@tanstack/react-query'
import { Camera, CircleDollarSign } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

export default function RootLayout({ children }) {
    const { id } = useParams()
    const { data: infoUser } = useQuery({
        queryKey: ['info_user', id],
        queryFn: ({ queryKey }) => getUserInfoById(queryKey[1])
    })
    return (
        <div className="grid grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col justify-center items-center gap-2 h-fit">
                <div className='relative'>
                    <Avatar className="w-32 h-32">
                        <AvatarImage src={infoUser?.profilePictureUrl} alt={infoUser?.displayName} />
                        <AvatarFallback className='uppercase'>{infoUser?.displayName && infoUser?.displayName[0]}</AvatarFallback>
                    </Avatar>
                    <Button variant="ghost" className="absolute -right-1 -bottom-1 rounded-full bg-card w-12 h-12">
                        <Camera />
                    </Button>
                </div>
                <div className="font-bold text-lg">{infoUser?.displayName}</div>
                <div className="flex items-center gap-2 text-sm text-primary font-bold">
                    <CircleDollarSign className="w-4 h-4" />
                    <span>1000 Xu</span>
                </div>
                <Button>
                    Nạp xu
                </Button>
            </div>
            <div className="mt-28 col-span-2">
                <Link
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                >
                    Bài viết của tôi
                </Link>
                <Link
                    href={`/user/${id}/info`}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                >
                    Thông tin
                </Link>
                <Link
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                >
                    Bài viết đã lưu
                </Link>
                <Link
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                >
                    Phim yêu thích
                </Link>
                <Link
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                >
                    Nghệ sĩ yêu thích
                </Link>
                <Separator />
                <div className='grid mt-4 gap-4'>
                    {children}
                </div>
            </div >
        </div >
    )
}