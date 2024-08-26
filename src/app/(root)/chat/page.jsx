'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { AtSign, Bell, EyeOff, MoreHorizontal, Phone, Plus, Send, Settings, Video } from "lucide-react"
import { useState } from "react"


export default function Chat() {
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        setShowNotifications(prev => !prev);
    };

    return (
        <div className={`grid h-screen max-w-[1200px] mx-auto border rounded-lg overflow-hidden ${showNotifications ? 'grid-cols-[300px_1fr_300px]' : 'grid-cols-[300px_1fr]'
            }  transition-all duration-300`}>
                {/* md:grid-cols-1 md:grid-rows-[auto_1fr_auto] */}
            {/* Sidebar Chat */}
            <div className="bg-muted/20 p-4 border-r md:border-b md:col-span-1">
                <div className="flex items-center justify-between mb-4">
                    <div className="font-medium text-sm">Chats</div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">New chat</span>
                    </Button>
                </div>
                <Input placeholder="Search" className="h-8 mb-4" />
                <div className="grid gap-2">
                    <Link href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50 bg-muted" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Sofia Davis</p>
                            <p className="text-xs text-muted-foreground">hey what&apos;s going on? &middot; 2h</p>
                        </div>
                    </Link>
                    <Link href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Alex's Image" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Alex Johnson</p>
                            <p className="text-xs text-muted-foreground">Just finished a great book! 📚 &middot; 45m</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Chat Content */}
            <div className="transition-transform duration-300 md:col-span-1">
                <div className="p-3 flex border-b items-center">
                    <div className="flex items-center gap-2">
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Sofia Davis</p>
                            <p className="text-xs text-muted-foreground">Active 2h ago</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 ml-auto">
                        <Button variant="ghost" size="icon">
                            <span className="sr-only">Call</span>
                            <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <span className="sr-only">Video call</span>
                            <Video className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={toggleNotifications}>
                            <span className="sr-only">More</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="grid gap-4 p-3">
                    <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                        Hey hope you&apos;re doing well! We should catch up sometime soon. 🙏
                    </div>
                    <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm bg-muted">
                        Sure! I&apos;m free this weekend if you want to grab a coffee.
                    </div>
                    <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-xl overflow-hidden text-sm ml-auto">
                        <Image
                            src="/placeholder.svg"
                            alt="photo"
                            width={200}
                            height={150}
                            className="object-cover"
                            style={{ aspectRatio: "200/150", objectFit: "cover" }}
                        />
                    </div>
                    <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                        Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
                    </div>
                    <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm bg-muted">
                        I&apos;ll message you on Saturday.
                    </div>
                </div>
                <div className="border-t">
                    <form className="flex w-full items-center space-x-2 p-3">
                        <Input id="message" placeholder="Type your message..." className="flex-1" autoComplete="off" />
                        <Button type="submit" size="icon">
                            <span className="sr-only">Send</span>
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>

            {/* Notifications Panel */}
            <div className={`bg-muted/20 p-4 border-l transition-transform duration-300 transform ${showNotifications ? 'translate-x-0' : 'translate-x-full hidden'
                } md:col-span-1 md:border-t md:border-l-0`}>
                <div className="flex items-center justify-between mb-4">
                    <div className="font-medium text-sm">Notifications</div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Settings className="h-4 w-4" />
                        <span className="sr-only">Settings</span>
                    </Button>
                </div>
                <div className="grid gap-4">
                    <div className="-mx-2 flex items-start gap-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                        <Bell className="mt-px h-5 w-5" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">New message</p>
                            <p className="text-sm text-muted-foreground">You have a new message from Alex.</p>
                        </div>
                    </div>
                    <div className="-mx-2 flex items-start gap-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                        <AtSign className="mt-px h-5 w-5" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Mentioned</p>
                            <p className="text-sm text-muted-foreground">You were mentioned in a group chat.</p>
                        </div>
                    </div>
                    <div className="-mx-2 flex items-start gap-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                        <EyeOff className="mt-px h-5 w-5" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Muted</p>
                            <p className="text-sm text-muted-foreground">You have muted a group chat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
