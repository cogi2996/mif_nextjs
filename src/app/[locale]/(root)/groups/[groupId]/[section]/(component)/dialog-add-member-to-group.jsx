'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { groupsApi } from '@/services/groupsApi'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function DialogAddMemberToGroup({ groupId }) {
    const [isOpen, setIsOpen] = useState(false);

    const { handleSubmit, register, reset } = useForm();

    const mutation = groupsApi.mutation.useAddMemberToGroup()

    const onSubmit = (data) => {
        data = {
            ...data,
            groupId
        }
        mutation.mutate(data, {
            onSuccess: () => {
                reset();
                setIsOpen(false);
            }
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="h-8 gap-1" size='sm' onClick={() => setIsOpen(true)}>
                    <Plus className="h-4 w-4" />
                    Mời
                </Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl w-fit">
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
                    <DialogHeader>
                        <DialogTitle>Mời thành viên</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center gap-4 w-fit">
                        <Label htmlFor="userId" className="text-right">
                            Link/Id của người dùng
                        </Label>
                        <Input
                            id="id"
                            {...register('userId', { required: true })}
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={mutation.isLoading}>Mời</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
