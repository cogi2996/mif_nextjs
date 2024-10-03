'use client'
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Film, MessageCircle, AlignJustify } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import BadgeIcon from "@/components/badge-icon"
import { MenuProfile } from "@/components/menu-profile"
import { NotificationPopover } from "@/components/popover-notification"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import "@/components/css/header.css"
import useIsLogin from "@/hooks/useIsLogin"
import useUserId from "@/hooks/useUserId"
import SearchHeader from "@/components/search-header"
import { headerMenuConfig } from "@/lib/navigationConfig"


export default function Header() {
    const [open, setOpen] = useState(false)
    const isLogin = useIsLogin();
    const userId = useUserId()
    const currentPath = usePathname()
    const linksRef = useRef([])
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const paths = ['/home', '/film', '/news', '/groups'];
        const matchPath = paths.find(path => currentPath.includes(path));
        if (matchPath) {
            const index = paths.indexOf(matchPath);
            setActiveIndex(index);
        }
        const index = paths.indexOf(matchPath);
        setActiveIndex(index !== -1 ? index : -1);
    }, [currentPath]);

    return (
        <div className="fixed w-full z-[15] drop-shadow-xl">
            <div className="xl:px-36 lg:px-2 md:px-2 px-1 flex items-center justify-between py-3 bg-background border-b">
                {/* Navbar for screen telephone */}
                <div className="md:hidden flex items-center z-50">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <AlignJustify />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-4 ">
                            <div className="flex flex-col gap-4">
                                {headerMenuConfig.map((item, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className={` text-sm font-bold 
                                                ${item.active(currentPath) ? 'text-primary' : 'hover:text-primary'}
                                                `}
                                            prefetch={false}>
                                            {item.title}
                                        </Link>

                                    )
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Display logo for screen desktop */}
                <Link href="home" className="hidden md:flex items-center gap-2" prefetch={false}>
                    <Film />
                    <span className="text-xl font-bold gap-2 tracking-[.25em]">MIF</span>
                </Link>

                {/* Navbar cho màn hình lớn */}
                <div className="hidden md:flex relative gap-2">
                    <div className="flex items-center gap-6">
                        {headerMenuConfig.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={` text-sm font-bold 
                                        ${item.active(currentPath) ? 'text-primary' : 'hover:text-primary'}
                                        `}
                                    prefetch={false}
                                    ref={el => linksRef.current[index] = el}
                                >
                                    {item.title}
                                </Link>

                            )
                        })}
                    </div>
                    <div
                        className="absolute h-1 bg-red-600 rounded-lg -bottom-2 transition ease-in-out"
                        style={{
                            left: linksRef.current[activeIndex]?.offsetLeft,
                            width: linksRef.current[activeIndex]?.offsetWidth,
                            transition: 'left 0.3s ease, width 0.3s ease'
                        }}
                    />
                </div>

                {/* Icon and Avatar */}
                {
                    !isLogin
                        ?
                        <Link href='sign-in'>
                            <Button>Đăng nhập</Button>
                        </Link>
                        :
                        <div className="flex items-center gap-4">
                            <SearchHeader />
                            <NotificationPopover />
                            <Link href='chat'>
                                <Button variant="ghost" size="icon">
                                    {/* <BadgeIcon icon={MessageCircle} badgeContent={' '} /> */}
                                    <MessageCircle />
                                    <span className="sr-only">Messages</span>
                                </Button>
                            </Link>
                            <ModeToggle />
                            <MenuProfile id={userId} />
                        </div>
                }
            </div>
        </div>
    )
}
