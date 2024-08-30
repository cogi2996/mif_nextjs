import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Camera, CircleDollarSign, Handshake } from 'lucide-react'
import Posts from '@/components/posts'
import { Separator } from '@/components/ui/separator'

export default function Profile() {
  return (
    <div className="grid grid-cols-3 max-w-4xl mx-auto">
      <div className="flex flex-col justify-center items-center gap-2 h-fit">
        <div className='relative'>
          <Avatar className="w-32 h-32">
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>CT</AvatarFallback>
          </Avatar>
          <Button variant="ghost" className="absolute -right-1 -bottom-1 rounded-full bg-card w-12 h-12">
            <Camera />
          </Button>
        </div>
        <div className="font-bold text-lg">Nguyễn Chí Thanh</div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Handshake className="w-4 h-4" />
          <span>Điểm uy tín: 89</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-primary font-bold">
          <CircleDollarSign className="w-4 h-4" />
          <span>1000 Xu</span>
        </div>
        <Button>
          Nạp xu
        </Button>
      </div>
      <div className="mt-28 col-span-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Bài viết
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Phim yêu thích
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Nghệ sĩ yêu thích
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <Separator />
        <div className='grid mt-4 gap-4'>
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
    </div>
  )
}

