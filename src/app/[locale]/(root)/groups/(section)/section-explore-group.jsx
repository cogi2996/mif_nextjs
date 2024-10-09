import CardGroups, { CardGroupsSkeleton } from '@/components/card-groups'
import Title from '@/components/title'
import { groupsApi } from '@/services/groupsApi'
import React from 'react'

export default function SectionExploreGroup({ movieCategories }) {
    const { isLoading, data: groupNotJoin } = groupsApi.query.useFindGroupUserNotJoin(4)
    return (
        <>
            <div className="mt-4">
                <Title title="Có thể bạn quan tâm" isMore={false} />
            </div>

            <div className="flex-1 mt-4 mb-8">
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {isLoading ? (
                        <>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <CardGroupsSkeleton key={index} />
                            ))}
                        </>
                    )
                        :
                        (groupNotJoin.content.map(group => (
                            <CardGroups key={group.id} group={group} initialStatus="join" categories={movieCategories} />
                        )))
                    }

                </div>
            </div>
        </>
    )
}
