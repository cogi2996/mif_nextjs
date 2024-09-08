// export default function Page({ params }) {
//     return <div>My Post: {params.name}</div>
// }

import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { Book, ChevronDown, Clock, DoorOpen, FilePen, Filter, Info, LogOut, MessageCircle, Plus, Search, Star, TrendingUp, Users } from "lucide-react"
import { AvatarGroup } from "@nextui-org/avatar"
import GroupAvatar from "@/components/group-avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import News from "@/components/news"
import Posts from "@/components/posts"

const avatars = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
]


export default function Page({ params }) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Image
                src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
                alt="Movie"
                width={2000}
                height={1000}
                className="rounded-lg object-cover h-[200] aspect-ratio-[26/9]"
            />
            <div className="flex flex-1">

                <div className="hidden h-full border-r bg-background md:block">
                    <div className="flex h-full flex-col gap-4 p-4">
                        <Link
                            href="#"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            prefetch={false}
                        >
                            <FilePen className="h-4 w-4" />
                            Bài viết
                        </Link>
                        <Link
                            href="#"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            prefetch={false}
                        >
                            <Users className="h-4 w-4" />
                            Thành viên
                        </Link>
                        <Link
                            href="#"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            prefetch={false}
                        >
                            <MessageCircle className="h-4 w-4" />
                            Nhắn tin
                        </Link>
                        <Link
                            href="#"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            prefetch={false}
                        >
                            <Book className="h-4 w-4" />
                            Quy tắc
                        </Link>
                        <Link
                            href="#"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            prefetch={false}
                        >
                            <Info className="h-4 w-4" />
                            Giới thiệu
                        </Link>
                    </div>
                </div>
                <div className="flex-1 p-4 md:p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-bold">Phim hành động </h2>
                        </div>
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <GroupAvatar images={avatars} size="w-8 h-8" />
                            <div className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">1,234 members</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="hidden md:block relative">
                                <Input type="text" placeholder="Tìm kiếm..." className="pr-10 h-8" />
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5" />
                            </div>
                            <Button className="h-8 gap-1">
                                <Plus className="h-4 w-4" />
                                Mời
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-8 gap-1">
                                        <span className="sr-only sm:not-sr-only">Đã tham gia</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Tham gia</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Rời nhóm
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <Separator />
                    <div class="grid grid-cols-3 gap-4">
                        <div className="grid gap-8 mt-4 col-span-2">
                            <div className="flex justify-between mt-4 items-center">
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
                            <Posts />
                            <Posts />
                            <Posts />
                            <Posts />
                            <Posts />
                        </div>
                        <div>
                            Booking quảng cáo liên hệ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
