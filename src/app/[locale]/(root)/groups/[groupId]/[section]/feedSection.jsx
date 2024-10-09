'use client'
import CreatePostDialog from '@/app/[locale]/(root)/groups/[groupId]/[section]/(component)/dialog-create-post'
import Post, { PostSkeleton } from '@/components/post'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import { groupPostApi } from '@/services/groupPostApi'
import { Clock, Eye, Filter, Lock, SquareLibrary, Star, TrendingUp, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

export default function FeedSection({ group }) {

    const t = useTranslations('Groups')

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = groupPostApi.query.useGetPostsByGroupIdInfinite(group.id)

    const observerElem = useInfiniteScroll(hasNextPage, fetchNextPage);

    return (
        <div className="grid md:grid-cols-3 gap-4 grid-cols-2">

            <div className="grid gap-8 mt-4 col-span-2">
                <div className="flex justify-between mt-2 items-center">
                    <CreatePostDialog groupId={group?.id} />
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-8 gap-1">
                                <Filter className="h-4 w-4" />
                                <span className="sr-only sm:not-sr-only">Filter</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Clock className="h-4 w-4 mr-2" />
                                Latest
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Star className="h-4 w-4 mr-2" />
                                Top
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <TrendingUp className="h-4 w-4 mr-2" />
                                Trending
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                {isLoading && (
                    <>
                        <PostSkeleton />
                        <PostSkeleton />
                        <PostSkeleton />
                    </>
                )}
                {data?.pages?.map((page, pageIndex) =>
                    page.content.map((post) => (
                        <Post key={post.id} post={post} />
                    ))
                )}
                {isFetchingNextPage && (
                    <PostSkeleton />
                )}
                <div ref={observerElem}></div>
                {!hasNextPage && (
                    <div className="text-center my-4 text-sm text-muted-foreground">{t('no_more_posts')}</div>
                )}
            </div>

            {/* Left content */}
            <div className="mt-6 hidden md:block">
                <Card className="w-full drop-shadow-lg">
                    <CardHeader className='font-bold'>
                        {t('introduce')}
                    </CardHeader>
                    <CardContent className='grid text-sm gap-2'>
                        {group.description &&
                            <p>
                                {group.description}
                            </p>
                        }
                        {
                            group.isPublic
                                ?
                                <div>
                                    <p className="flex gap-2 font-bold">
                                        <Users className="h-4 w-4" />
                                        {t('public_mode')}
                                    </p>
                                    <p> &middot; {t('public_mode_description')} </p>
                                </div>
                                :
                                <div>
                                    <p className="flex gap-2 font-bold">
                                        <Lock className="h-4 w-4" />
                                        {t('private_mode')}
                                    </p>
                                    <p> &middot; {t('private_mode_description')} </p>
                                </div>
                        }
                        <p className="flex gap-2 font-bold">
                            <Eye className="h-4 w-4" />
                            {t('display_mode')}
                        </p>
                        <p>&middot; {t('display_mode_description')} </p>
                        <p className="flex gap-2 font-bold">
                            <SquareLibrary className="h-4 w-4" />
                            {t('category')}
                        </p>
                        <p>&middot; Phim hành động</p>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full' variant="secondary" >
                            <Link
                                href={`/groups/${group?.id}/about`}
                                className='w-full'
                            >
                                {t('more')}
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
