import Rating from '@/components/rating'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function DialogRating() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg">Rate</Button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Đánh giá</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className='flex items-center gap-4'>
                        <p className='font-bold'>Điếm đánh giá</p>
                        <Rating enableUserInteraction iconSize='xl' />
                    </div>
                    <p className='font-bold'>Nội dung đánh giá</p>
                    <Textarea />
                </div>
                <DialogFooter>
                    <Button type="submit">Đánh giá</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
