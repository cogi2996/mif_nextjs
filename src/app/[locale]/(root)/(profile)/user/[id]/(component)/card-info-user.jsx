import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Copy, MoreHorizontal, Pencil } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

export function CardInfoUser({ setOpenDialogEdit, infoUser, t }) {

    const pathname = usePathname()
    const url = pathname.replace('/info', '');

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                toast.success(t('copy_link_profile_successful'));
            })
            .catch(() => {
                toast.error(t('copy_link_profile_successful'));
            });
    };
    return (
        <Card className="w-full mx-auto shadow-xl">
            <CardContent className="p-4 grid gap-4">
                <div className="grid gap-2">
                    <div className='flex justify-between items-center'>
                        <p className="text-base font-semibold">{t('info')}</p>
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="center">
                                <DropdownMenuItem onClick={() => { setOpenDialogEdit(true) }}>
                                    <Pencil className="mr-2 h-4 w-4" />
                                    <span>{t('edit_profile')}</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleCopyLink()}>
                                    <Copy className="mr-2 h-4 w-4" />
                                    <span>{t('copy_link_profile')}</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="grid gap-2 text-sm text-muted-foreground grid-cols-2">
                        <div>
                            <span>{t('display_name')}:</span>
                        </div>
                        <div>
                            <span>{infoUser.displayName}</span>
                        </div>
                        <div>
                            <span>{t('dob')}:</span>
                        </div>
                        <div>
                            <span>{new Date(infoUser.dob).toLocaleDateString('vi-VN', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '2-digit',
                            })}</span>
                        </div>
                        <div>
                            <span>{t('member_type')}</span>
                        </div>
                        <div>
                            <span>{infoUser.userType}</span>
                        </div>
                    </div>
                </div>
                <div className="grid gap-2">
                    <p className="text-base font-semibold">{t('bio')}</p>
                    <p className="text-sm text-muted-foreground">
                        {infoUser.bio}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
