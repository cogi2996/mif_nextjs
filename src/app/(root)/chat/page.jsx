'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { AlignJustify, AtSign, Bell, EyeOff, Search, Send, Settings } from "lucide-react"
import { useState } from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import MessageReceived from "@/components/message-received"
import MessageSent from "@/components/message-sent"


export default function Chat() {
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        setShowNotifications(prev => !prev);
    };

    return (
        <div className={`grid border max-w-full mb-12 h-[600] rounded-lg transition-all duration-300 grid-cols-1 grid-rows-[auto_1fr_auto] ${showNotifications ? 'md:grid-cols-[300px_1fr_300px]' : 'md:grid-cols-[300px_1fr]'}`}>

            <div className="h-[600] bg-muted/20 p-4 border-r md:border-b md:col-span-1 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                    <div className="font-medium text-base">Chats</div>
                </div>
                <div className="hidden md:block relative mb-4">
                    <Input type="text" placeholder="Tìm kiếm..." className="pr-10 h-8" />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground " />
                </div>

                <div className="grid gap-2 h-full pb-3">
                    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50 bg-muted" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Alex Johnson</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">Just finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj📚</p>
                            <p className="text-xs text-muted-foreground">&middot; 45m</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Alex's Image" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Alex Johnson</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">Just finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj📚</p>
                            <p className="text-xs text-muted-foreground">&middot; 45m</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Alex's Image" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Alex Johnson</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">Just finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj📚</p>
                            <p className="text-xs text-muted-foreground">&middot; 45m</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Alex's Image" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Alex Johnson</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">Just finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj📚</p>
                            <p className="text-xs text-muted-foreground">&middot; 45m</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Alex's Image" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Alex Johnson</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">Just finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj📚</p>
                            <p className="text-xs text-muted-foreground">&middot; 45m</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Alex's Image" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Alex Johnson</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">Just finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj📚</p>
                            <p className="text-xs text-muted-foreground">&middot; 45m</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Alex's Image" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Alex Johnson</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">Just finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj📚</p>
                            <p className="text-xs text-muted-foreground">&middot; 45m</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Alex's Image" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Alex Johnson</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">Just finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj📚</p>
                            <p className="text-xs text-muted-foreground">&middot; 45m</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                        <Avatar className="border w-10 h-10">
                            <AvatarImage src="/placeholder-user.jpg" alt="Alex's Image" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="text-sm font-medium leading-none">Alex Johnson</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">Just finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj ust finished a great book! hehehehehhe hihi hohahsj📚</p>
                            <p className="text-xs text-muted-foreground">&middot; 45m</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Content */}
            <div className="transition-transform duration-300 w-full md:col-span-1 h-[600]">
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
                        <Button variant="ghost" size="icon" onClick={toggleNotifications}>
                            <span className="sr-only">Settings</span>
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="grid gap-4 p-3 overflow-auto h-[472px] w-full">
                    <MessageSent />
                    <MessageReceived />
                    <MessageReceived />
                    <MessageReceived />
                    <MessageReceived />
                    <MessageReceived />
                    <MessageReceived />
                    <MessageSent />
                    <MessageSent />
                    <MessageSent />
                    <MessageSent />
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
                    <div className="font-medium text-base">Cài đặt</div>
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
