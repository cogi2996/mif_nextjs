'use client'
import CardMember, { CardMemberSkeleton } from '@/components/card-member'
import Post, { PostSkeleton } from '@/components/post'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { getPostsByGroupId } from '@/services/groupPostApi'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Plus, Search } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

export default function MembersSection({ members, group, pendingInvitations, isOwner }) {
    return (
        <>
            {
                (isOwner && pendingInvitations?.numberOfElements !== 0 &&
                    <Card className="w-full max-w-3xl mx-auto my-8 drop-shadow-lg">
                        <CardContent>
                            <div className='grid gap-4 mt-4'>
                                <p className='font-bold'>Yêu cầu tham gia nhóm</p>
                                {pendingInvitations?.content?.map((invitation) =>
                                    <CardMember key={invitation.id} groupId={group?.id} member={invitation} type='invitation' />
                                )}
                            </div>
                        </CardContent>
                    </Card >)
            }

            <Card className="w-full max-w-3xl mx-auto my-8 drop-shadow-lg">
                <CardContent>
                    <div className="mt-6">
                        <p className="font-bold flex items-center">Thành viên &middot; &nbsp;<p className='text-xs leading-3 text-muted-foreground'>{group?.memberCount}</p></p>
                        <div className="hidden md:block relative mt-2">
                            <Input type="text" placeholder="Tìm kiếm..." className="pr-10" />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        </div>
                    </div>
                    <div className='grid gap-4 mt-4'>
                        <p className='font-bold'>Người thành lập</p>
                        <CardMember />
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <p className='font-bold'>Tham gia gần đây</p>
                        {/* <CardMemberSkeleton /> */}
                        {
                            members && members?.content?.map((member) => {
                                return (

                                    <CardMember key={member.id} member={member} groupId={group?.id} isOwner={isOwner} />
                                )
                            })}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}