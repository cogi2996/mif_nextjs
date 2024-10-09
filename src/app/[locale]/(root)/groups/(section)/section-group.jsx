'use client'
import CardGroups, { CardGroupsSkeleton } from '@/components/card-groups'
import { DialogCreateGroup } from '@/app/[locale]/(root)/groups/(component)/dialog-create-group'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { groupsApi } from '@/services/groupsApi'
import { Search } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'


const tab = (t) => [
    {
        title: "all",
        display_title: t('all'),
    },
    {
        title: "ownerGroups",
        display_title: t('groups_you_have_created'),
    },
    {
        title: "userGroups",
        display_title: t('groups_you_have_joined'),
    }
]


export function SectionGroup({ movieCategories, userId }) {
    const [activeTab, setActiveTab] = useState('all');

    const { isLoading: loadingOwnerGroups, data: ownerGroups } = groupsApi.query.useFindByOwnerId(0, 24)
    const { isLoading: loadingUserGroups, data: userGroups } = groupsApi.query.useGetUserGroups(0, 24, userId)

    const t = useTranslations('Groups')
    return (
        <>
            <div>
                <Title title={t('title')} isMore={false} />
            </div>

            <div className="flex justify-between mt-4 items-center">
                <div className="flex gap-2">
                    {
                        tab(t).map((item, index) => (
                            <Button
                                key={index}
                                size="sm"
                                variant={activeTab === item.title ? undefined : 'outline'}
                                onClick={() => setActiveTab(item.title)}
                            >
                                {item.display_title}
                            </Button>
                        ))
                    }
                </div>

                <div className="flex gap-2">
                    {/* <div className="hidden md:block relative">
                        <Input type="text" placeholder="Tìm kiếm..." className="pr-10" />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    </div> */}
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
                                ownerGroups.content.map(group => (
                                    <CardGroups key={group.id} group={group} initialStatus="joined" categories={movieCategories} />
                                ))}
                            {activeTab === 'userGroups' &&
                                userGroups.content.map(group => (
                                    <CardGroups key={group.id} group={group} initialStatus="joined" categories={movieCategories} />
                                ))}
                            {activeTab === 'all' && (
                                <>
                                    {ownerGroups.content.map(group => (
                                        <CardGroups key={group.id} group={group} initialStatus="joined" categories={movieCategories} />
                                    ))}
                                    {userGroups.content.map(group => (
                                        <CardGroups key={group.id} group={group} initialStatus="joined" categories={movieCategories} />
                                    ))}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
