'use client'
import Header from "@/components/header";
import HeaderWithHomeIcon from "@/components/header-with-home-icon";
import { useAppSelector } from "@/redux/store";
import { Clapperboard, ClapperboardIcon, House, HouseIcon, LayoutList, LayoutListIcon, LineChart, LineChartIcon, Newspaper, NewspaperIcon, Package, UserRound, UserRoundIcon, Users, UsersIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const menuConfig = [
    {
        title: 'Home',
        href: '/dashboard',
        icon: HouseIcon,
        active: function (pathname) {
            return pathname === this.href
        }
    },
    {
        title: 'News',
        href: '/dashboard/news',
        icon: NewspaperIcon,
        active: function (pathname) {
            console.log('🚀 ~ this.href:', this.href)
            return pathname === this.href
        }
    },
    {
        title: 'Movies',
        href: '/dashboard/movies',
        icon: ClapperboardIcon,
        active: function (pathname) {
            return pathname === this.href
        }
    },
    {
        title: 'Category Movie',
        href: '/dashboard/categories',
        icon: LayoutListIcon,
        active: function (pathname) {
            return pathname === this.href
        }
    },
    {
        title: 'Actors',
        href: '/dashboard/actors',
        icon: UserRoundIcon,
        active: function (pathname) {
            return pathname === this.href
        }
    },
    {
        title: 'Actors',
        href: '/dashboard/groups',
        icon: UsersIcon,
        active: function (pathname) {
            return pathname === this.href
        }
    },
    {
        title: 'Analytics',
        href: '#',
        icon: LineChartIcon,
        active: function (pathname) {
            return pathname === this.href
        }
    },
]

export default function RootLayout({ children }) {
    const authState = useAppSelector((state) => state.auth.authState);
    const [currentPath, setCurrentPath] = useState('');
    const router = useRouter();
    const pathname = usePathname()
    useEffect(() => {
        if (!authState.isLogin)
            router.push('/home')
    }, [router, authState.isLogin])

    return (
        <main >
            <HeaderWithHomeIcon />
            <main className="xl:px-36 lg:px-2 md:px-2 px-1 pt-24">
                <div className='grid grid-cols-5 gap-4'>
                    <div className='grid col-span-1 h-fit'>
                        <div className="grid items-start text-sm font-medium ">
                            {menuConfig.map((item, index) => {
                                const { href, icon: Icon, title } = item
                                return (
                                    <Link
                                        key={index}
                                        href={href}
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary 
                                            ${item.active(pathname) ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {title}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className='grid col-span-4'>
                        {children}
                    </div>
                </div>
            </main>
        </main >
    );
}