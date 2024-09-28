'use client'
import Post, { PostSkeleton } from '@/components/post'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { getPostsByGroupId } from '@/services/groupPostApi'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Clock, Eye, Filter, Lock, SquareLibrary, Star, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

export default function FeedSection({ group }) {
    const observerElem = useRef()
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError
    } = useInfiniteQuery({
        queryKey: ['group_posts', { groupId: group?.id }],
        queryFn: getPostsByGroupId,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length;
            return lastPage.last ? undefined : nextPage;
        },
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );
        if (observerElem.current) observer.observe(observerElem.current);
        return () => {
            if (observerElem.current) observer.unobserve(observerElem.current);
        };
    }, [hasNextPage, fetchNextPage]);
    return (
        <div class="grid md:grid-cols-3 gap-4 grid-cols-2">
            <div className="grid gap-8 mt-4 col-span-2">
                <div className="flex justify-between mt-2 items-center">
                    <Button className="h-8">
                        Tạo bài viết
                    </Button>
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
                    <div className="text-center my-4 text-sm text-muted-foreground">Bạn đã xem hết bài viết</div>
                )}
            </div>
            <div className="mt-6 hidden md:block">
                <Card className="w-full drop-shadow-lg">
                    <CardHeader className='font-bold'>
                        Giới thiệu
                    </CardHeader>
                    <CardContent className='grid text-sm gap-2'>
                        <p>
                            Nơi giao lưu, trao đổi, học hỏi kiến thức về Front-end.
                            Có thể đăng tin tuyển dụng IT, mọi hình thức quảng cáo,câu kéo member khác sẽ bị ban.
                            Chỉ được phép đăng bài tuyển dụng nhân sự, các khoá học lập trình vào CN.
                            Cố tình vi phạm sẽ rời khỏi nhóm
                            Chung tay vì 1 cộng đồng Front-end phát triển..
                        </p>
                        {
                            group?.isPublic
                                ?
                                <div>
                                    <p className="flex gap-2 font-bold">
                                        <Users className="h-4 w-4" />
                                        Công khai
                                    </p>
                                    <p> &middot; Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng. </p>
                                </div>
                                :
                                <div>
                                    <p className="flex gap-2 font-bold">
                                        <Lock className="h-4 w-4" />
                                        Riêng tư
                                    </p>
                                    <p> &middot; Chỉ thành viên mới nhìn thấy mọi người trong nhóm và những gì họ đăng. </p>
                                </div>
                        }
                        <p className="flex gap-2 font-bold">
                            <Eye className="h-4 w-4" />
                            Hiển thị </p>
                        <p>&middot; Ai cũng có thể tìm thấy nhóm này. </p>
                        <p className="flex gap-2 font-bold">
                            <SquareLibrary className="h-4 w-4" />
                            Thể loại</p>
                        <p>&middot; Phim hành động</p>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full' variant="secondary" >
                            <Link
                                href={`/groups/${group?.id}/about`}
                                className='w-full'
                            >
                                Xem thêm
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
