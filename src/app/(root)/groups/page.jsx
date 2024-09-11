'use client'
import Title from '@/components/title'
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Search } from 'lucide-react'
import CardGroups from '@/components/card-groups'
import { DialogCreateGroup } from '@/components/dialog-create-group'
import { getAllNews } from '@/services/newsApi'

export default function Groups() {

    const handleFetchData = async () => {
        const data = await getAllNews()
        console.log('🚀 ~ handleFetchData ~ data:', data)
    }

    return (
        <div className="flex flex-col w-full min-h-screen">
            <Button onClick={handleFetchData}>Fetch Data</Button>
            <div>
                <Title
                    title="Nhóm"
                    isMore={false}
                />
            </div>

            <div className='flex justify-between mt-4 items-center'>
                <div className='flex gap-2'>
                    <Button size='sm'>Tất cả</Button>
                    <Button size='sm' variant='outline' className="hidden md:block">Nhóm bạn đã tạo</Button>
                    <Button size='sm' variant='outline' className="hidden md:block">Nhóm bạn tham gia</Button>
                </div>
                <div className='flex gap-2'>
                    <div className="hidden md:block relative">
                        <Input type="text" placeholder="Tìm kiếm..." className="pr-10" />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    </div>
                    <DialogCreateGroup />
                </div>
            </div>

            <div className="flex-1 mt-4">
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    <CardGroups initialStatus='joined' />
                    <CardGroups initialStatus='joined' />
                    <CardGroups initialStatus='joined' />
                    <CardGroups initialStatus='joined' />
                    <CardGroups initialStatus='joined' />
                    <CardGroups initialStatus='joined' />
                    <CardGroups initialStatus='joined' />
                    <CardGroups initialStatus='joined' />
                    <CardGroups initialStatus='joined' />
                    <CardGroups initialStatus='joined' />
                </div>
            </div>

            <div className='mt-4'>
                <Title
                    title="Có thể bạn quan tâm"
                    isMore={false}
                />
            </div>

            <div className="flex-1 mt-4 mb-8">
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    <CardGroups initialStatus='join' />
                    <CardGroups initialStatus='join' />
                    <CardGroups initialStatus='join' />
                    <CardGroups initialStatus='join' />
                </div>
            </div>
        </div>
    )
}


