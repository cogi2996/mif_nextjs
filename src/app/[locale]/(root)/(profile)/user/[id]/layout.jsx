'use client'
import Loading from '@/components/loading'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { navProfileUserConfig } from '@/lib/navigationConfig'
import { userApi } from '@/services/userApi'
import { useQuery } from '@tanstack/react-query'
import { Camera, CircleDollarSign } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'


export default function RootLayout({ children }) {
    const t = useTranslations('Profile.User.Navbar')
    const pathname = usePathname()
    const { id } = useParams()
    const { data: infoUser, isLoading } = userApi.query.useGetUserInfoById(id)

    if (isLoading) return <Loading />

    return (
        <div className="grid grid-cols-3 max-w-5xl mx-auto">

            <div className="flex flex-col justify-center items-center gap-2 h-fit">
                <div className='relative'>
                    <Avatar className="w-32 h-32">
                        <AvatarImage src={infoUser.profilePictureUrl} alt={infoUser.displayName} />
                        <AvatarFallback className='uppercase'>{infoUser.displayName[0]}</AvatarFallback>
                    </Avatar>
                    <Button variant="ghost" className="absolute -right-1 -bottom-1 rounded-full bg-card w-12 h-12">
                        <Camera />
                    </Button>
                </div>
                <div className="font-bold text-lg">{infoUser.displayName}</div>
                <div className="flex items-center gap-2 text-sm text-primary font-bold">
                    <CircleDollarSign className="w-4 h-4" />
                    <span>1000 Xu</span>
                </div>
                <Button>
                    Nạp xu
                </Button>
            </div>

            {/* Navbar */}
            <div className="mt-28 col-span-2">
                {
                    navProfileUserConfig(t).map((item, index) => {
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