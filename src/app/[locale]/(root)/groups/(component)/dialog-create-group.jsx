'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { schemaGroup } from "@/lib/schemas/group.schema";
import { groupsApi } from '@/services/groupsApi';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function DialogCreateGroup({ movieCategories }) {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Groups')
    const { control, handleSubmit, register, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schemaGroup),
        defaultValues: {
            groupName: '',
            description: '',
            categoryId: '',
            isPublic: false,
            groupType: 'SMALL',
        }
    });

    const mutation = groupsApi.mutation.useCreateGroup(reset, setIsOpen)

    const onSubmit = (data) => {
        mutation.mutate(data);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button size='sm' onClick={() => setIsOpen(true)}>{t('DialogCreateGroup.create_group')}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px]">
                <DialogHeader>
                    <DialogTitle>{t('DialogCreateGroup.create_group')}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="groupName" className="text-right">
                                {t('DialogCreateGroup.group_name')}
                            </Label>
                            <Input
                                id="groupName"
                                {...register('groupName')}
                                className="col-span-3"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="categoryId" className="text-right">
                                {t('DialogCreateGroup.category')}
                            </Label>
                            <Controller
                                name="categoryId"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        onValueChange={(value) => field.onChange(value)}
                                    >
                                        <SelectTrigger className="col-span-3">
                                            <SelectValue placeholder="Chọn thể loại" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>{t('DialogCreateGroup.category')}</SelectLabel>
                                                {movieCategories?.map((category) => (
                                                    <SelectItem key={category.id} value={category.id}>
                                                        {category.categoryName}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>
                        {errors.categoryId && <div className="grid grid-cols-4 items-center gap-4">
                            <p></p>
                            <p className="text-red-500 col-span-3 text-xs font-bold">{errors.categoryId.message}</p>
                        </div>}
                        <Controller
                            name="groupType"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup value={field.value} onValueChange={field.onChange} className="flex justify-evenly mt-2">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="SMALL" id="small" />
                                        <Label htmlFor="small">500 {t('members')}</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="MEDIUM" id="medium" />
                                        <Label htmlFor="medium">1000 {t('members')}</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="LARGE" id="large" />
                                        <Label htmlFor="large">1500 {t('members')}</Label>
                                    </div>
                                </RadioGroup>
                            )}
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit"
                            disabled={mutation.isPending}>
                            {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {t('DialogCreateGroup.create_group')}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}