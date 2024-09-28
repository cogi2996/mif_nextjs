'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

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
import { getAllmovieCategories } from "@/services/movieCategoriesApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createGroup } from '@/services/groupsApi';
import { toast } from 'react-toastify';
import { useState } from 'react';

export function DialogCreateGroup({ movieCategories }) {
    const [isOpen, setIsOpen] = useState(false);

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

    const mutation = useMutation({
        mutationFn: createGroup,
        onSuccess: () => {
            toast.success('Tạo nhóm thành công')
            reset();
            setIsOpen(false);
        },
        onError: () => {
            toast.error('Tạo nhóm thất bại')

        }
    });

    const onSubmit = (data) => {
        mutation.mutate(data);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button size='sm' onClick={() => setIsOpen(true)}>Tạo nhóm</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px]">
                <DialogHeader>
                    <DialogTitle>Tạo nhóm</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="groupName" className="text-right">
                                Tên nhóm
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
                                Thể loại
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
                                                <SelectLabel>Thể loại</SelectLabel>
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
                                        <Label htmlFor="small">500 thành viên</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="MEDIUM" id="medium" />
                                        <Label htmlFor="medium">1000 thành viên</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="LARGE" id="large" />
                                        <Label htmlFor="large">1500 thành viên</Label>
                                    </div>
                                </RadioGroup>
                            )}
                        />

                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={mutation.isLoading}>Tạo nhóm</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}