'use client'
import CardActor from '@/components/card-actor'
import CardActorHorizontal from '@/components/card-actor-horizontal'
import CardFilm from '@/components/card-film'
import CardFilmHorizontal from '@/components/card-film-horizontal'
import CardGroups from '@/components/card-groups'
import GroupAvatar from '@/components/group-avatar'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Book, ChevronDown, Clock, FilePen, Filter, Info, LogOut, MessageCircle, Plus, Search, Star, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Input } from 'postcss'

export default function Page() {
    const searchParams = useSearchParams()
    const search = searchParams.get('term')
    return (
        <div className='max-w-2xl mx-auto'>
            <div className='text-2xl font-bold'>
                Từ khóa tìm kiếm : {search}
            </div>
            <div className='flex mt-4 gap-4'>
                <Button size='sm'>Tất cả</Button>
                <Button size='sm' variant='outline' className="hidden md:block">Phim</Button>
                <Button size='sm' variant='outline' className="hidden md:block">Nhóm</Button>
                <Button size='sm' variant='outline' className="hidden md:block">Đạo diễn/ Diễn viên</Button>
            </div>
            <div>
                <div className='mt-4'>
                    <Title title='Phim' isMore={false} />
                    <div className='grid gap-2 mt-4'>
                        <CardFilmHorizontal />
                        <CardFilmHorizontal />
                        <CardFilmHorizontal />
                        <CardFilmHorizontal />
                        <CardFilmHorizontal />
                    </div>
                </div>
                <div className='mt-4'>

                    <Title title='Nhóm' isMore={false} />
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-4">
                        <CardGroups initialStatus='joined' />
                        <CardGroups initialStatus='joined' />
                        <CardGroups initialStatus='joined' />
                        <CardGroups initialStatus='joined' />
                        <CardGroups initialStatus='joined' />
                    </div>
                </div>
                <div className='mt-4 mb-8'>
                    <Title title='Diễn viên/ Đạo diễn' isMore={false} />
                    <div className='grid gap-2 mt-4'>
                        <CardActorHorizontal />
                        <CardActorHorizontal />
                        <CardActorHorizontal />
                        <CardActorHorizontal />
                    </div>
                </div>
            </div>
        </div>
    )
}
