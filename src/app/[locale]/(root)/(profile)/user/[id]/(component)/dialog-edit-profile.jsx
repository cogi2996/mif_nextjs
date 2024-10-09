import { DatePickerPopover } from '@/components/date-picker-popover'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { schemaProfileUser } from '@/lib/schemas/profile-user.schema'
import { userApi } from '@/services/userApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dialog } from '@radix-ui/react-dialog'
import { Copy, MoreHorizontal, Pencil } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export function DialogEditProfile({ openDialogEdit, setOpenDialogEdit, infoUser, t }) {

    const { register, handleSubmit, control, reset } = useForm({
        resolver: zodResolver(schemaProfileUser),
    });

    useEffect(() => {
        if (infoUser) {
            reset({
                displayName: infoUser.displayName || '',
                dob: infoUser.dob ? new Date(infoUser.dob) : undefined,
                bio: infoUser.bio || '',
            });
        }
    }, [infoUser]);

    const updateProfileMutation = userApi.mutation.useUpdateUserProfile(infoUser.id)

    const onSubmit = (data) => {
        updateProfileMutation.mutate(data, {
            onSuccess: () => {
                reset()
                setOpenDialogEdit(false)
            }
        })
    };

    return (
        <Dialog open={openDialogEdit} onOpenChange={setOpenDialogEdit}>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>{t('edit_profile')}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <div className='flex justify-between items-center'>
                            <p className="text-base font-semibold">Thông tin</p>
                        </div>
                        <div className="grid gap-2 text-sm grid-cols-2 pt-2">
                            <div>
                                <span>{t('display_name')}:</span>
                            </div>
                            <div>
                                <Input
                                    {...register("displayName")}
                                />
                            </div>

                            <div>
                                <span>{t('dob')}:</span>
                            </div>
                            <div>
                                {/* Sử dụng Controller để bọc DatePickerPopover */}
                                <Controller
                                    control={control}
                                    name="dob"
                                    render={({ field }) => (
                                        <DatePickerPopover
                                            selected={field.value ?? undefined}
                                            onSelect={field.onChange}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-2 pt-2">
                        <p className="text-base font-semibold">{t('bio')}</p>
                        <Textarea
                            {...register("bio")}
                            placeholder={t('bio_placeholder')}
                            rows={5}
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">{t('button_submit_edit_profile')}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
