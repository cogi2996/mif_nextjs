import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function DialogCreateGroup() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size='sm'>Tạo nhóm</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Tạo nhóm</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Tên nhóm
                        </Label>
                        <Input
                            id="name"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Thể loại
                        </Label>
                        <Input
                            id="username"
                            className="col-span-3"
                        />
                    </div>
                    <RadioGroup defaultValue="comfortable" className='flex justify-evenly mt-2'>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label htmlFor="r2">100 thành viên</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">500 thành viên</Label>
                        </div>
                    </RadioGroup>
                </div>
                <DialogFooter>
                    <Button type="submit">Tạo nhóm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
