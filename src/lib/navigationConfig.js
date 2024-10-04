import { ClapperboardIcon, HouseIcon, LayoutListIcon, LineChartIcon, NewspaperIcon, UserRoundIcon, UsersIcon } from "lucide-react"

export const headerMenuConfig = (t) => [
    {
        title: t('home_link'),
        href: '/home',
        active: function (pathname) {
            return pathname.includes(this.href)
        }
    },
    {
        title: t('movie_link'),
        href: '/movies',
        active: function (pathname) {
            return pathname.includes(this.href)
        }
    },
    {
        title: t('news_link'),
        href: '/news',
        active: function (pathname) {
            return pathname.includes(this.href)
        }
    },
    {
        title: t('groups_link'),
        href: '/groups',
        active: function (pathname) {
            return pathname.includes(this.href)
        }
    },
]



export const navDashboardMenuConfig = [
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
        title: 'Groups',
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