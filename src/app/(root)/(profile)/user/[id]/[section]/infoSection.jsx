import { DatePickerPopover } from '@/components/date-picker-popover'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { schemaProfileUser } from '@/lib/schemas/profile-user.schema'
import { getUserInfoById, updateUserProfile } from '@/services/userApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dialog } from '@radix-ui/react-dialog'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Copy, MoreHorizontal, Pencil } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function InfoSection({ id }) {
    const [openDialogEdit, setOpenDialogEdit] = useState(false)
    const pathname = usePathname()
    const url = pathname.replace('/info', '');
    const queryClient = useQueryClient();
    const { data: infoUser, isSuccess } = useQuery({
        queryKey: ['info_user', id],
        queryFn: ({ queryKey }) => getUserInfoById(queryKey[1]),
    })

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schemaProfileUser),
    });

    useEffect(() => {
        if (isSuccess && infoUser) {
            reset({
                displayName: infoUser.displayName || '',
                dob: infoUser.dob ? new Date(infoUser.dob) : undefined, // Chuyển đổi dob về dạng Date
                bio: infoUser.bio || '',
            });
        }
    }, [isSuccess, infoUser]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                toast.success('Liên kết đã được sao chép!');
            })
            .catch(err => {
                toast.error('Không thể sao chép liên kết.');
            });
    };

    const updateProfileMutation = useMutation({
        mutationFn: (data) => updateUserProfile(data),
        onSuccess: () => {
            toast.success('Chỉnh sửa thông tin thành công')
            reset()
            setOpenDialogEdit(false)
            queryClient.invalidateQueries(['info_user', id])
        },
        onError: () => {
            toast.error('Chỉnh sửa thông tin thất bại')
        }
    })

    const onSubmit = (data) => {
        console.log('🚀 ~ onSubmit ~ data:', data)
        updateProfileMutation.mutate(data)
    };

    return (
        <>
            <Card className="w-full mx-auto shadow-xl">
                <CardContent className="p-4 grid gap-4">
                    <div className="grid gap-2">
                        <div className='flex justify-between items-center'>
                            <p className="text-base font-semibold">Thông tin</p>
                            <DropdownMenu model={false}>
                                <DropdownMenuTrigger asChild>
                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="center">
                                    <DropdownMenuItem onClick={() => { setOpenDialogEdit(true) }}>
                                        <Pencil className="mr-2 h-4 w-4" />
                                        <span>Chỉnh sửa hồ sơ</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleCopyLink()}>
                                        <Copy className="mr-2 h-4 w-4" />
                                        <span>Sao chép liên kết trang cá nhân</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="grid gap-2 text-sm text-muted-foreground grid-cols-2">
                            <div>
                                <span>UserName:</span>
                            </div>
                            <div>
                                <span>{infoUser?.displayName}</span>
                            </div>
                            <div>
                                <span>Sinh nhật:</span>
                            </div>
                            <div>
                                <span>{new Date(infoUser?.dob).toLocaleDateString('vi-VN', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: '2-digit',
                                })}</span>
                            </div>
                            <div>
                                <span>Thành viên</span>
                            </div>
                            <div>
                                <span>{infoUser?.userType}</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <p className="text-base font-semibold">Về bản thân</p>
                        <p className="text-sm text-muted-foreground">
                            {infoUser?.bio}
                        </p>
                    </div>
                </CardContent>
            </Card>
            <Dialog open={openDialogEdit} onOpenChange={setOpenDialogEdit}>
                <DialogContent className="">
                    <DialogHeader>
                        <DialogTitle>Chỉnh sửa hồ sơ</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <div className='flex justify-between items-center'>
                                <p className="text-base font-semibold">Thông tin</p>
                            </div>
                            <div className="grid gap-2 text-sm grid-cols-2 pt-2">
                                <div>
                                    <span>UserName:</span>
                                </div>
                                <div>
                                    <Input
                                        {...register("displayName")}
                                    />
                                    {errors.displayName && <p>{errors.displayName.message}</p>}
                                </div>

                                <div>
                                    <span>Sinh nhật:</span>
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
                                    {errors.dob && <p>{errors.dob.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-2 pt-2">
                            <p className="text-base font-semibold">Về bản thân</p>
                            <Textarea
                                {...register("bio")}
                                placeholder="Nhập bình luận..."
                                rows={5}
                            />
                            {errors.bio && <p>{errors.bio.message}</p>}
                        </div>
                        <DialogFooter>
                            <Button type="submit">Thay đổi</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

