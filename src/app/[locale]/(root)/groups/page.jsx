'use client'
import Title from '@/components/title'
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from 'lucide-react'
import CardGroups, { CardGroupsSkeleton } from '@/components/card-groups'
import { DialogCreateGroup } from '@/components/dialog-create-group'
import { useQuery } from '@tanstack/react-query'
import { findByOwnerId, findGroupUserNotJoin, getUserGroups } from '@/services/groupsApi'
import { getAllmovieCategories } from '@/services/movieCategoriesApi'

export default function Groups() {
    const [activeTab, setActiveTab] = useState('all');

    const { isLoading: loadingOwnerGroups, data: ownerGroups } = useQuery({
        queryKey: ['owner_groups', { page: 0, size: 24 }],
        queryFn: findByOwnerId,
    });

    const { isLoading: loadingUserGroups, data: userGroups } = useQuery({
        queryKey: ['user_groups', { page: 0, size: 12 }],
        queryFn: getUserGroups,
    });

    const { isLoading: loadingGroupNotJoin, data: groupNotJoin } = useQuery({
        queryKey: ['group_not_join', { size: 4 }],
        queryFn: findGroupUserNotJoin,
    });

    const { data: movieCategories } = useQuery({
        queryKey: 'all_movie_categories',
        queryFn: getAllmovieCategories,
    });

    return (
        <div className="flex flex-col w-full min-h-screen">
            <div>
                <Title title="Nhóm" isMore={false} />
            </div>

            <div className="flex justify-between mt-4 items-center">
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant={activeTab === 'all' ? undefined : 'outline'}
                        onClick={() => setActiveTab('all')}
                    >
                        Tất cả
                    </Button>
                    <Button
                        size="sm"
                        variant={activeTab === 'ownerGroups' ? undefined : 'outline'}
                        onClick={() => setActiveTab('ownerGroups')}
                    >
                        Nhóm bạn đã tạo
                    </Button>
                    <Button
                        size="sm"
                        variant={activeTab === 'userGroups' ? undefined : 'outline'}
                        onClick={() => setActiveTab('userGroups')}
                    >
                        Nhóm bạn tham gia
                    </Button>
                </div>

                <div className="flex gap-2">
                    <div className="hidden md:block relative">
                        <Input type="text" placeholder="Tìm kiếm..." className="pr-10" />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    </div>
                    <DialogCreateGroup movieCategories={movieCategories} />
                </div>
            </div>

            <div className="flex-1 mt-4">
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {loadingOwnerGroups || loadingUserGroups ? (
                        <>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <CardGroupsSkeleton key={index} />
                            ))}
                        </>
                    ) : (
                        <>
                            {activeTab === 'ownerGroups' &&
                                ownerGroups?.content?.map(group => (
                                    <CardGroups key={group.id} group={group} initialStatus="joined" categories={movieCategories} />
                                ))}
                            {activeTab === 'userGroups' &&
                                userGroups?.content?.map(group => (
                                    <CardGroups key={group.id} group={group} initialStatus="joined" categories={movieCategories} />
                                ))}
                            {activeTab === 'all' && (
                                <>
                                    {ownerGroups?.content?.map(group => (
                                        <CardGroups key={group.id} group={group} initialStatus="joined" categories={movieCategories} />
                                    ))}
                                    {userGroups?.content?.map(group => (
                                        <CardGroups key={group.id} group={group} initialStatus="joined" categories={movieCategories} />
                                    ))}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>

            <div className="mt-4">
                <Title title="Có thể bạn quan tâm" isMore={false} />
            </div>

            <div className="flex-1 mt-4 mb-8">
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {loadingGroupNotJoin ?? (
                        <>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <CardGroupsSkeleton key={index} />
                            ))}
                        </>
                    )}

                    {groupNotJoin?.content?.map(group => (
                        <CardGroups key={group.id} group={group} initialStatus="join" categories={movieCategories} />
                    ))}
                </div>
            </div>
        </div>
    );
}


