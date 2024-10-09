'use client'
import CardActorHorizontal, { CardActorHorizontalSkeleton } from '@/components/card-actor-horizontal'
import { SectionExploreMovies } from '@/components/section-explore-movies'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { actorApi } from '@/services/actorApi'
import { Clock, Filter, Star, TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Actor() {

    const { data, isLoading } = actorApi.query.useGetTopActors(0, 100)
    const t = useTranslations('Actor')

    return (
        <div className='grid grid-cols-3 gap-10'>
            <div className='grid col-span-2'>
                <Title title={t('title')} isMore={false} />
                <div className='mt-4'>
                    {
                        isLoading
                            ?
                            (
                                Array.from({ length: 10 }).map((_, index) => (
                                    <CardActorHorizontalSkeleton key={index} />
                                ))
                            )
                            :
                            (
                                data.content.map((item, index) => (
                                    <CardActorHorizontal key={item.id} actor={item} />
                                ))
                            )
                    }
                </div>
            </div>
            <SectionExploreMovies />
        </div>
    )
}
