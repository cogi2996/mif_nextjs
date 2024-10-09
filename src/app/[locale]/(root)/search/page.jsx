'use client'
import CardActor from '@/components/card-actor'
import CardActorHorizontal from '@/components/card-actor-horizontal'
import CardMovie from '@/components/card-movie'
import CardMovieHorizontal from '@/components/card-movie-horizontal'
import CardGroups from '@/components/card-groups'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { searchGroupByGroupName } from '@/services/groupsApi'
import { movieApi } from '@/services/movieApi'
import { useQuery } from '@tanstack/react-query'
import { Book, ChevronDown, Clock, FilePen, Filter, Info, LogOut, MessageCircle, Plus, Search, Star, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
    const [activeTab, setActiveTab] = useState('all');
    const searchParams = useSearchParams()
    const search = searchParams.get('q')

    const { isLoadingMovies, movies } = movieApi.query.useSearchMoviesByTitle(0, 10, search)

    const { isLoading: isLoadingGroup, data: groups } = useQuery({
        queryKey: ['search_group', { name: search, page: 0, size: 10 }],
        queryFn: searchGroupByGroupName,
    })

    const { data: movieCategories } = categoryApi.query.useGetAllmovieCategories()
    const noResults = groups?.content?.length === 0 && movies?.content?.length === 0;
    return (
        <div className='max-w-2xl mx-auto'>
            <div className='text-2xl font-bold'>
                Từ khóa tìm kiếm : {search}
            </div>
            <div className='flex mt-4 gap-4'>
                <Button
                    size='sm'
                    variant={activeTab === 'all' ? undefined : 'outline'}
                    onClick={() => { setActiveTab('all') }}
                >
                    Tất cả
                </Button>
                <Button size='sm'
                    variant={activeTab === 'movie' ? undefined : 'outline'}
                    className="hidden md:block"
                    onClick={() => { setActiveTab('movie') }}
                >
                    Phim
                </Button>
                <Button
                    size='sm'
                    variant={activeTab === 'group' ? undefined : 'outline'}
                    className="hidden md:block"
                    onClick={() => { setActiveTab('group') }}
                >
                    Nhóm
                </Button>
                <Button
                    size='sm'
                    variant={activeTab === 'actor' ? undefined : 'outline'}
                    className="hidden md:block"
                    onClick={() => { setActiveTab('actor') }}
                >
                    Đạo diễn/ Diễn viên
                </Button>
            </div>
            {noResults && (
                <div className='text-lg font-bold mt-8 flex justify-center'>
                    Không có kết quả nào phù hợp
                </div>
            )}
            {!noResults && (
                <div>
                    {(activeTab === 'all' || activeTab === 'movie') &&
                        <div className='mt-4'>
                            <Title title='Phim' isMore={false} />
                            <div className='grid gap-2 mt-4'>
                                {movies?.content?.map((movie) => {
                                    return (
                                        <CardMovieHorizontal key={movie.id} movie={movie} />
                                    )
                                })}
                            </div>
                        </div>
                    }
                    {(activeTab === 'all' || activeTab === 'group') &&
                        <div className='mt-4'>
                            <Title title='Nhóm' isMore={false} />
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-4">
                                {groups?.content?.map((group) => {
                                    return (
                                        <CardGroups key={group.id} initialStatus='joined' group={group} categories={movieCategories} />
                                    )
                                })}
                            </div>
                        </div>
                    }
                    {(activeTab === 'all' || activeTab === 'actor') &&
                        <div className='mt-4 mb-8'>
                            <Title title='Diễn viên/ Đạo diễn' isMore={false} />
                            <div className='grid gap-2 mt-4'>
                                <CardActorHorizontal />
                                <CardActorHorizontal />
                                <CardActorHorizontal />
                                <CardActorHorizontal />
                            </div>
                        </div>
                    }
                </div>
            )}
        </div >
    )
}
