'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Book, ChartLine, ChevronDown, FilePen, Info, LogOut, MessageCircle, Search, Users } from "lucide-react"
import GroupAvatar from "@/components/group-avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { groupsApi } from "@/services/groupsApi"
import { useParams } from "next/navigation"
import FeedSection from "@/app/[locale]/(root)/groups/[groupId]/[section]/feedSection"
import MembersSection from "@/app/[locale]/(root)/groups/[groupId]/[section]/membersSection"
import RulesSection from "@/app/[locale]/(root)/groups/[groupId]/[section]/rulesSection"
import AboutSection from "@/app/[locale]/(root)/groups/[groupId]/[section]/aboutSection"
import DialogAddMemberToGroup from "@/app/[locale]/(root)/groups/[groupId]/[section]/(component)/dialog-add-member-to-group"
import { useIsGroupOwner } from "@/hooks/useIsGroupOwner"
import { navGroupConfig } from "@/lib/navigationConfig"
import { useTranslations } from "next-intl"
import Loading from "@/components/loading"

export default function Page() {
    const { groupId, section } = useParams();

    const { isLoading: isLoadingGroup, data: group } = groupsApi.query.useGetGroupByGroupId(groupId)
    const { isLoading: isLoadingMember, data: members } = groupsApi.query.useGetAllMember(groupId)
    const { isLoading: isLoadingPendingInvitations, data: pendingInvitations } = groupsApi.query.useGetPendingInvitations(groupId, 100)

    const isOwner = useIsGroupOwner(group);

    const t = useTranslations('Groups.NavbarGroup')

    if (isLoadingGroup || isLoadingMember || isLoadingPendingInvitations) return <Loading />

    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            {/* Background */}
            <Image
                src={group?.avatarUrl || "/group_default.jpg"}
                alt="Movie"
                width={2000}
                height={200}
                className="rounded-lg object-cover h-[200] aspect-ratio-[26/9]"
            />
            <div className="flex flex-1">
                {/* Navbar */}

                <div className="h-full border-r bg-background">
                    <div className="flex h-full flex-col gap-2 p-4">
                        {
                            navGroupConfig(t).map((item, index) => {
                                const { icon: Icon } = item
                                return (
                                    <Link
                                        key={index}
                                        href={item.href(groupId)}
                                        className=
                                        {`flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium transition-colors 
                                            hover:bg-accent hover:text-primary 
                                            ${item.active(section) ? 'text-primary bg-accent' : 'text-muted-foreground'} `}
                                        prefetch={false}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.title}
                                    </Link>
                                )
                            }
                            )
                        }
                        <Link
                            href={`/groups/${groupId}/members`}
                            className={`flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary ${section === 'members' ? 'text-primary bg-accent' : 'text-muted-foreground'} `}
                            prefetch={false}
                        >
                            <Users className="h-4 w-4" />
                            {t('members')}
                            {
                                (isOwner && pendingInvitations.numberOfElements !== 0 &&
                                    <div className="flex items-center bg-primary rounded-full text-primary-foreground h-5 w-5 justify-center">{pendingInvitations.numberOfElements}</div>) || undefined
                            }
                        </Link>
                        {
                            isOwner &&
                            <Link
                                href={`/groups/${groupId}/statistical`}
                                className={`flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary ${section === 'statistical' ? 'text-primary bg-accent' : 'text-muted-foreground'} `}
                                prefetch={false}
                            >
                                <ChartLine className="h-4 w-4" />
                                {t('statistical')}
                            </Link>
                        }
                    </div>
                </div>

                <div className="flex-1 p-4 md:p-6">

                    {/* Header group */}

                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-bold">{group.groupName} </h2>
                        </div>
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                        <Link className="flex items-center gap-2"
                            href={`/groups/${groupId}/members`}
                        >
                            <GroupAvatar images={members.content.map((user) => user.avatar)} names={members.content.map((user) => user.displayName)} size="w-8 h-8" />
                            <div className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">{group.memberCount} {t('members')}</div>
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

                    {/* Content */}

                    {(!section || section === 'feed') && <FeedSection group={group} isOwner={isOwner} />}
                    {section === 'members' && <MembersSection members={members} group={group} pendingInvitations={pendingInvitations} isOwner={isOwner} />}
                    {section === 'rules' && <RulesSection isOwner={isOwner} group={group} />}
                    {section === 'about' && <AboutSection group={group} members={members} isOwner={isOwner} />}
                </div>
            </div>
        </div >
    )
}