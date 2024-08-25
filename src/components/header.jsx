'use client'
import { useState } from "react"
import Link from "next/link"
import { Film, Search, MessageCircle, AlignJustify } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import BadgeIcon from "@/components/badge-icon"
import { MenuProfile } from "@/components/menu-profile"
import { NotificationPopover } from "@/components/popover-notification"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed w-full z-10">
            <div className="flex items-center justify-between py-3 bg-background border-b xl:px-36 lg:px-2 md:px-2 px-1">
                <div className="md:hidden flex items-center">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <AlignJustify />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-4 ">
                            <nav className="flex flex-col gap-4">
                                <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                                    Trang chủ
                                </Link>
                                <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                                    Phim nổi bật
                                </Link>
                                <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                                    Tin tức
                                </Link>
                                <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                                    Nhóm
                                </Link>
                                <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
                                    Xem phim
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Hiển thị logo trên màn hình lớn */}
                <Link href="#" className="hidden md:flex items-center gap-2" prefetch={false}>
                    <Film />
                    <span className="text-lg font-bold">Movie App</span>
                </Link>

                {/* Navbar cho màn hình lớn */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                        Trang chủ
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                        Phim nổi bật
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                        Tin tức
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                        Nhóm
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                        Xem phim
                    </Link>
                </nav>

                {/* Icon và Avatar */}
                {
                    !true
                        ?
                        <Button>Đăng nhập</Button>
                        :
                        <div className="flex items-center gap-4">
                            <div className="hidden md:block relative">
                                <Input type="text" placeholder="Tìm kiếm..." className="pr-10" />
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                            </div>
                            <NotificationPopover />
                            <Button variant="ghost" size="icon">
                                {/* <BadgeIcon icon={MessageCircle} badgeContent={' '} /> */}
                                <MessageCircle />
                                <span className="sr-only">Messages</span>
                            </Button>
                            <MenuProfile />
                        </div>
                }
            </div>
        </div>
    )
}
