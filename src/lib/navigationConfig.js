import { BookIcon, ClapperboardIcon, FilePenIcon, HouseIcon, InfoIcon, LayoutListIcon, LineChartIcon, MessageCircleIcon, NewspaperIcon, UserRoundIcon, UsersIcon } from "lucide-react"

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

export const navDashboardMenuConfig = (t) => [
    {
        title: t('home'),
        href: '/dashboard',
        icon: HouseIcon,
        active: function (pathname) {
            return pathname.replace(/^\/[a-z]{2}/, '') == this.href
        }
    },
    {
        title: t('news'),
        href: '/dashboard/news',
        icon: NewspaperIcon,
        active: function (pathname) {
            return pathname.includes(this.href)
        }
    },
    {
        title: t('movies'),
        href: '/dashboard/movies',
        icon: ClapperboardIcon,
        active: function (pathname) {
            return pathname.includes(this.href)
        }
    },
    {
        title: t('category'),
        href: '/dashboard/categories',
        icon: LayoutListIcon,
        active: function (pathname) {
            return pathname.includes(this.href)
        }
    },
    {
        title: t('actor'),
        href: '/dashboard/actors',
        icon: UserRoundIcon,
        active: function (pathname) {
            return pathname.includes(this.href)
        }
    },
    {
        title: t('group'),
        href: '/dashboard/groups',
        icon: UsersIcon,
        active: function (pathname) {
            return pathname.includes(this.href)
        }
    },
    {
        title: t('analytics'),
        href: '/dashboard/analytics',
        icon: LineChartIcon,
        active: function (pathname) {
            return pathname.includes(this.href)
        }
    },
]

export const navProfileUserConfig = (t) => [
    {
        title: t('my_posts'),
        href: (id) => `/user/${id}`,
        active: function (pathname, id) {
            return pathname.replace(/^\/[a-z]{2}/, '') == this.href(id)
        }
    },
    {
        title: t('info'),
        href: (id) => `/user/${id}/info`,
        active: function (pathname, id) {
            return pathname.includes(this.href(id))
        }
    },
    {
        title: t('posts_saved'),
        href: (id) => `/user/${id}/posts_saved`,
        active: function (pathname, id) {
            return pathname.includes(this.href(id))
        }
    },
    {
        title: t('movies_saved'),
        href: (id) => `/user/${id}/movie_saved`,
        active: function (pathname, id) {
            return pathname.includes(this.href(id))
        }
    },
    {
        title: t('favorate_actors'),
        href: (id) => `/user/${id}/favorate_actors`,
        active: function (pathname, id) {
            return pathname.includes(this.href(id))
        }
    },
]

export const navGroupConfig = (t) => [
    {
        title: t('feed'),
        href: (groupId) => `/groups/${groupId}/`,
        icon: FilePenIcon,
        active: function (section) {
            return (!section || section === 'feed')
        }
    },
    {
        title: t('message'),
        href: (groupId) => '/chat',
        icon: MessageCircleIcon,
        active: function (section) {
            return null
        }
    },
    {
        title: t('rules'),
        href: (groupId) => `/groups/${groupId}/rules`,
        icon: BookIcon,
        active: function (section) {
            return (section === 'rules')
        }
    },
    {
        title: t('about'),
        href: (groupId) => `/groups/${groupId}/about`,
        icon: InfoIcon,
        active: function (section) {
            return (section === 'about')
        }
    }
]