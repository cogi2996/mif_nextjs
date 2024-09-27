'use client'
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Film, Search, MessageCircle, AlignJustify } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import BadgeIcon from "@/components/badge-icon"
import { MenuProfile } from "@/components/menu-profile"
import { NotificationPopover } from "@/components/popover-notification"
import { ModeToggle } from "@/components/mode-toggle"
import { useAppSelector } from "@/redux/store"
import { usePathname, useRouter } from "next/navigation"
import "@/components/css/header.css"
import { useQuery } from "@tanstack/react-query"
import { getUserInfoById } from "@/services/userApi"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const router = useRouter()
    const authState = useAppSelector((state) => state.auth.authState)

    const currentPath = usePathname()

    const [activeIndex, setActiveIndex] = useState(0);
    const linksRef = useRef([])

    const linkClass = 'text-sm font-bold hover:text-primary transition-colors'
    const activeLinkClass = 'text-sm font-bold text-primary transition-colors'

    useEffect(() => {
        const paths = ['/home', '/film', '/news', '/groups', '#'];
        const matchPath = paths.find(path => currentPath.startsWith(path));
        const index = paths.indexOf(matchPath);
        setActiveIndex(index !== -1 ? index : -1);
    }, [currentPath]);

    const handleSearch = () => {
        if (search.trim()) {
            router.push(`/search?q=${search}`)
            setSearch('')
        }
    }

    return (
        <div className="fixed w-full z-[15] drop-shadow-xl">
            <div className="flex items-center justify-between py-3 bg-background border-b xl:px-36 lg:px-2 md:px-2 px-1">
                <div className="md:hidden flex items-center z-[200]">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <AlignJustify />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-4 ">
                            <nav className="flex flex-col gap-4">
                                <Link href="/home" className={currentPath === '/home' ? activeLinkClass : linkClass} prefetch={false}>
                                    Trang chủ
                                </Link>
                                <Link href="/film" className={currentPath === '/film' ? activeLinkClass : linkClass} prefetch={false}>
                                    Phim nổi bật
                                </Link>
                                <Link href="/news" className={currentPath === '/news' ? activeLinkClass : linkClass} prefetch={false}>
                                    Tin tức
                                </Link>
                                <Link href="/groups" className={currentPath === '/groups' ? activeLinkClass : linkClass} prefetch={false}>
                                    Nhóm
                                </Link>
                                <Link href="#" className={currentPath === '#' ? activeLinkClass : linkClass} prefetch={false}>
                                    Xem phim
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Hiển thị logo trên màn hình lớn */}
                <Link href="/home" className="hidden md:flex items-center gap-2" prefetch={false}>
                    <Film />
                    <span className="text-xl font-bold gap-2 tracking-[.25em]">MIF</span>
                </Link>

                {/* Navbar cho màn hình lớn */}
                <div className="hidden md:flex relative gap-2">
                    <nav className="flex items-center gap-6 nav-links">
                        <Link
                            href="/home"
                            className={activeIndex === 0 ? activeLinkClass : linkClass}
                            prefetch={false}
                            ref={el => linksRef.current[0] = el}
                        >
                            Trang chủ
                        </Link>
                        <Link
                            href="/film"
                            className={activeIndex === 1 ? activeLinkClass : linkClass}
                            prefetch={false}
                            ref={el => linksRef.current[1] = el}
                        >
                            Phim nổi bật
                        </Link>
                        <Link
                            href="/news"
                            className={activeIndex === 2 ? activeLinkClass : linkClass}
                            prefetch={false}
                            ref={el => linksRef.current[2] = el}
                        >
                            Tin tức
                        </Link>
                        <Link
                            href="/groups"
                            className={activeIndex === 3 ? activeLinkClass : linkClass}
                            prefetch={false}
                            ref={el => linksRef.current[3] = el}
                        >
                            Nhóm
                        </Link>
                        <Link
                            href="#"
                            className={activeIndex === 4 ? activeLinkClass : linkClass}
                            prefetch={false}
                            ref={el => linksRef.current[4] = el}
                        >
                            Xem phim
                        </Link>
                    </nav>
                    <div
                        className="absolute h-1 bg-red-600 rounded-lg -bottom-2 transition ease-in-out"
                        style={{
                            left: linksRef.current[activeIndex]?.offsetLeft,
                            width: linksRef.current[activeIndex]?.offsetWidth,
                            transition: 'left 0.3s ease, width 0.3s ease'
                        }}
                    />
                </div>

                {/* Icon và Avatar */}
                {
                    !authState.isLogin
                        ?
                        <Link href='/sign-in'>
                            <Button>Đăng nhập</Button>
                        </Link>
                        :
                        <div className="flex items-center gap-4">
                            <div className="hidden md:block relative">
                                <Input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className="pr-10"
                                    onChange={(e) => { setSearch(e.target.value) }}
                                    value={search}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSearch();
                                        }
                                    }} />
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:cursor-pointer" onClick={() => { handleSearch() }} />
                            </div>
                            <NotificationPopover />
                            <Link href='/chat'>
                                <Button variant="ghost" size="icon">
                                    {/* <BadgeIcon icon={MessageCircle} badgeContent={' '} /> */}
                                    <MessageCircle />
                                    <span className="sr-only">Messages</span>
                                </Button>
                            </Link>
                            <ModeToggle />
                            <MenuProfile id={authState.id} />
                        </div>
                }
            </div>
        </div>
    )
}
