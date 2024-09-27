'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'
import { formatDateTime, timeAgo } from '@/lib/formatter'
import { acceptInvitation, removeMemberFromGroup, removePendingInvitation } from '@/services/groupsApi'
import { useMutation } from '@tanstack/react-query'
import { Check, EllipsisVertical, LogOut, Plus, User, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

export default function CardMember({ member, groupId, type, isOwner }) {
    const date = new Date(member?.joinedAt)

    const acceptInvitationMutation = useMutation({
        mutationFn: (data) => acceptInvitation(data),
        onSuccess: (data) => {
            toast.success("Chấp nhận lời mời thành công")
        },
        onError: (error) => {
            toast.error("Chấp nhận lời mời thất bại")
        }
    })

    const rejectInvationMutation = useMutation({
        mutationFn: (data) => removePendingInvitation(data),
        onSuccess: (data) => {
            toast.success("Xóa lời mời thành công")
        },
        onError: (error) => {
            toast.error("Xóa lời mời thất bại")
        }
    })

    const removeMemberFromGroupMutation = useMutation({
        mutationFn: (data) => removeMemberFromGroup(data),
        onSuccess: (data) => {
            toast.success("Xóa thành viên thành công")
        },
        onError: (error) => {
            toast.error("Xóa thành viên thất bại")
        }
    })

    const handleAcceptInvitation = () => {
        acceptInvitationMutation.mutate({
            groupId,
            userId: member?.id
        })
    }

    const handleRejectInvitation = () => {
        rejectInvationMutation.mutate({
            groupId,
            userId: member?.id
        })
    }

    const handleRemoveMemberFromGroup = () => {
        removeMemberFromGroupMutation.mutate({
            groupId,
            userId: member?.id
        })
    }

    return (
        <div className="bg-background rounded-lg shadow-md p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage src={member?.avatar} alt={member?.displayName} />
                    <AvatarFallback className='uppercase'>{member?.displayName && member?.displayName[0]}</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-bold">{member?.displayName}</h3>
                    {type === 'invitation' || <p className="text-muted-foreground text-xs font-bold">Tham gia cách đây {timeAgo(date)} trước</p>}
                </div>
            </div>
            {type === 'invitation'
                ?
                <div>
                    <Button variant="ghost" size="icon" onClick={() => handleRejectInvitation()}>
                        <X className='w-4 h-4 text-red-500' />
                        <span className="sr-only">Add to team</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleAcceptInvitation()}>
                        <Check className='w-4 h-4 text-green-500' />
                        <span className="sr-only">Add to team</span>
                    </Button>
                </div>
                :

                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <EllipsisVertical className='w-4 h-4' />
                            <span className="sr-only">Add to team</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {
                            isOwner ?
                                <DropdownMenuItem onClick={() => handleRemoveMemberFromGroup()}>
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Rời nhóm
                                </DropdownMenuItem>
                                : ''
                        }
                        <DropdownMenuItem>
                            <Link className='flex'
                                href={`/user/${member?.id}`}>
                                <User className="h-4 w-4 mr-2" />
                                Xem trang cá nhân
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            }
        </div>
    )
}

export const CardMemberSkeleton = () => {
    return (
        <div className='shadow-md w-full flex p-4 gap-2 rounded-lg'>
            <Skeleton className='w-12 h-12 rounded-full' />
            <div className='grid gap-2'>
                <Skeleton className='h-4 w-32' />
                <Skeleton className='h-4 w-40' />
            </div>
        </div>
    )
}
