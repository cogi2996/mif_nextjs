'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Book, ChartLine, ChevronDown, FilePen, Info, LogOut, MessageCircle, Plus, Search, Users } from "lucide-react"
import GroupAvatar from "@/components/group-avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { findGroupByGroupId, getAllMembers, getPendingInvitations } from "@/services/groupsApi"
import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import FeedSection from "@/app/(root)/groups/[groupId]/[section]/feedSection"
import MembersSection from "@/app/(root)/groups/[groupId]/[section]/membersSection"
import RulesSection from "@/app/(root)/groups/[groupId]/[section]/rulesSection"
import AboutSection from "@/app/(root)/groups/[groupId]/[section]/aboutSection"
import useIsGroupOwner from "@/hooks/useIsGroupOwner"
import DialogAddMemberToGroup from "@/components/dialog-add-member-to-group"

export default function Page() {
    const { groupId, section } = useParams();

    const { isLoading: isLoadingGroup, data: group } = useQuery({
        queryKey: ['group', groupId],
        queryFn: ({ queryKey }) => findGroupByGroupId(queryKey[1]),
    })

    const isOwner = useIsGroupOwner(group);

    const { isLoading: isLoadingMember, data: members } = useQuery({
        queryKey: ['member_group', groupId],
        queryFn: ({ queryKey }) => getAllMembers(queryKey[1]),
    })

    const { data: pendingInvitations } = useQuery({
        queryKey: ['pending_invitations', { groupId, size: 100 }],
        queryFn: getPendingInvitations,
    })

    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Image
                src={group?.avatarUrl || "https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"}
                alt="Movie"
                width={2000}
                height={1000}
                className="rounded-lg object-cover h-[200] aspect-ratio-[26/9]"
            />
            <div className="flex flex-1">

                <div className="h-full border-r bg-background">
                    <div className="flex h-full flex-col gap-2 p-4">
                        <Link
                            href={`/groups/${groupId}/`}
                            className={`flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary ${(!section || section === 'feed') ? 'text-primary bg-accent' : 'text-muted-foreground'} `}
                            prefetch={false}
                        >
                            <FilePen className="h-4 w-4" />
                            Bài viết
                        </Link>
                        <Link
                            href={`/groups/${groupId}/members`}
                            className={`flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary ${section === 'members' ? 'text-primary bg-accent' : 'text-muted-foreground'} `}
                            prefetch={false}
                        >
                            <Users className="h-4 w-4" />
                            Thành viên
                            {
                                (isOwner && pendingInvitations?.numberOfElements !== 0 &&
                                    <div className="flex items-center bg-primary rounded-full text-primary-foreground h-5 w-5 justify-center">{pendingInvitations?.numberOfElements}</div>) || undefined
                            }
                        </Link>
                        <Link
                            href={'/chat'}
                            className={`flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary ${section === 'messenger' ? 'text-primary bg-accent' : 'text-muted-foreground'} `}
                            prefetch={false}
                        >
                            <MessageCircle className="h-4 w-4" />
                            Nhắn tin
                        </Link>
                        <Link
                            href={`/groups/${groupId}/rules`}
                            className={`flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary ${section === 'rules' ? 'text-primary bg-accent' : 'text-muted-foreground'} `}
                            prefetch={false}
                        >
                            <Book className="h-4 w-4" />
                            Quy tắc
                        </Link>
                        <Link
                            href={`/groups/${groupId}/about`}
                            className={`flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary ${section === 'about' ? 'text-primary bg-accent' : 'text-muted-foreground'} `}
                            prefetch={false}
                        >
                            <Info className="h-4 w-4" />
                            Giới thiệu
                        </Link>
                        {
                            isOwner &&
                            <Link
                                href={`/groups/${groupId}/statistical`}
                                className={`flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary ${section === 'about' ? 'text-primary bg-accent' : 'text-muted-foreground'} `}
                                prefetch={false}
                            >
                                <ChartLine className="h-4 w-4" />
                                Thống kê
                            </Link>
                        }
                    </div>
                </div>
                <div className="flex-1 p-4 md:p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-bold">{group?.groupName} </h2>
                        </div>
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                        <Link className="flex items-center gap-2"
                            href={`/groups/${groupId}/members`}
                        >
                            <GroupAvatar images={members?.content?.map((user) => user.avatar)} names={members?.content?.map((user) => user?.displayName)} size="w-8 h-8" />
                            <div className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">{group?.memberCount} thành viên</div>
                        </Link>
                        <div className="flex items-center gap-2">
                            <div className="hidden md:block relative">
                                <Input type="text" placeholder="Tìm kiếm..." className="pr-10 h-8" />
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5" />
                            </div>
                            {
                                isOwner &&
                                <DialogAddMemberToGroup groupId={groupId} />
                            }
                            <DropdownMenu modal={false}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-8 gap-1">
                                        <span className="sr-only sm:not-sr-only">Đã tham gia</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Tham gia</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {
                                        !isOwner &&
                                        <DropdownMenuItem>
                                            <LogOut className="h-4 w-4 mr-2" />
                                            Rời nhóm
                                        </DropdownMenuItem>
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <Separator />
                    {(!section || section === 'feed') && <FeedSection group={group} isOwner={isOwner} />}
                    {section === 'members' && <MembersSection members={members} group={group} pendingInvitations={pendingInvitations} isOwner={isOwner} />}
                    {section === 'rules' && <RulesSection isOwner={isOwner} />}
                    {section === 'about' && <AboutSection group={group} members={members} isOwner={isOwner} />}
                </div>
            </div>
        </div >
    )
}