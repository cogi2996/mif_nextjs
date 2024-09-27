'use client'
import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Camera, CircleDollarSign, Handshake } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Post from '@/components/post'
import { useQuery } from '@tanstack/react-query'
import { getSavedPosts } from '@/services/savedPostApi'
import { getProfilePostByUserId, getUserInfoById } from '@/services/userApi'

export default function Profile({ params }) {

  const { data: savedPosts, isLoading } = useQuery({
    queryKey: ['saved_posts', { page: 0, size: 10 }],
    queryFn: getSavedPosts,
  })

  const { data: myPosts } = useQuery({
    queryKey: ['my_posts', { page: 0, size: 10 }],
    queryFn: getProfilePostByUserId,
  })

  return (
    <div>

    </div>
  )
}

