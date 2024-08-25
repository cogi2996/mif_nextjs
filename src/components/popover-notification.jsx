import BadgeIcon from "@/components/badge-icon"
import NotificationItem from "@/components/notification-item"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Bell } from "lucide-react"

export function NotificationPopover() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                    <BadgeIcon icon={Bell} badgeContent={' '} />
                    <span className="sr-only">Notifications</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] pr-0">
                <div className="grid gap-4 divide-y overflow-y-scroll max-h-[600px]">
                    <div>
                        <h4 className="text-xl font-medium">Thông báo</h4>
                    </div>
                    <div className="pt-3 grid gap-2 space-y-2">
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                        <NotificationItem />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
