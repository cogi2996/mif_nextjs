'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getUserInfoById } from '@/services/userApi'
import { useQuery } from '@tanstack/react-query'
import { Camera, CircleDollarSign } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const menuConfig = [
    {
        title: 'Bài viết của tôi',
        href: (id) => `/user/${id}`,
        active: function (pathname, id) {
            return pathname === this.href(id)
        }
    },
    {
        title: 'Thông tin',
        href: (id) => `/user/${id}/info`,
        active: function (pathname, id) {
            return pathname === this.href(id)
        }
    },
    {
        title: 'Bài viết đã lưu',
        href: (id) => `/user/${id}/saved_posts`,
        active: function (pathname, id) {
            return pathname === this.href(id)
        }
    },
    {
        title: 'Phim đã lưu',
        href: (id) => `/user/${id}/saved_movies`,
        active: function (pathname, id) {
            return pathname === this.href(id)
        }
    },
    {
        title: 'Nghệ sĩ yêu thích',
        href: (id) => `/user/${id}/favorite_artist`,
        active: function (pathname, id) {
            return pathname === this.href(id)
        }
    },
]

export default function RootLayout({ children }) {
    const pathname = usePathname()
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
                {
                    menuConfig?.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                href={item.href(id)}
                                className={`h-8 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-bold transition-colors ${item.active(pathname, id) ? 'bg-muted text-primary' : ''}`}
                                prefetch={false}
                            >
                                {item.title}
                            </Link>
                        )
                    })
                }
                <Separator className='mt-4' />
                <div className='grid mt-4 gap-4'>
                    {children}
                </div>
            </div >
        </div >
    )
}