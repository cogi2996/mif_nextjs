'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2, Upload } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { schemaPost } from "@/lib/schemas/post-group.schema";
import { useMutation } from "@tanstack/react-query";
import { groupPostApi } from "@/services/groupPostApi";
import useUserId from "@/hooks/useUserId";
import { userApi } from "@/services/userApi";
import { useTranslations } from "next-intl";

export default function CreatePostDialog({ groupId }) {
    const [open, setOpen] = useState(false)
    const [images, setImages] = useState([]);

    const userId = useUserId()
    const { data: userInfo } = userApi.query.useGetUserInfoById(userId)
    const t = useTranslations('Groups.DialogCreatePost')

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schemaPost)
    });

    const createPostMutation = groupPostApi.mutation.useCreatePost()

    useEffect(() => {
        if (groupId) {
            setValue("groupId", groupId);
        }
    }, [groupId, setValue]);

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("content", data.content);

        images.forEach((image) => {
            formData.append("images", image);
        });

        createPostMutation.mutate(data, {
            onSuccess: () => {
                reset()
                setOpen(false)
            }
        })
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size='sm'>{t('create_post')}</Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-2xl">
                <DialogHeader>
                    <DialogTitle>{t('create_post')}</DialogTitle>
                </DialogHeader>
                <Separator />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                        <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8">
                                <AvatarImage src={userInfo?.profilePictureUrl} />
                                <AvatarFallback className='uppercase'>{userInfo?.displayName && userInfo?.displayName[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-semibold">{userInfo?.displayName}</p>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <p className="text-sm font-medium">{t('title')}</p>
                            <Input
                                {...register("title", { required: true })}
                                className="w-full"
                                placeholder={t('title_placeholder')}
                                required
                            />
                            {errors.title && <p className="text-red-500 text-sm">{t('title_error')}</p>}
                        </div>

                        <div className="grid gap-2">
                            <p className="text-sm font-medium">{t('content')}</p>
                            <Textarea
                                {...register("content", { required: true })}
                                className="w-full"
                                placeholder={t('content_placeholder')}
                                rows={5}
                            />
                            {errors.content && <p className="text-red-500 text-sm">{t('content_error')}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="imageUpload" className="cursor-pointer flex items-center space-x-2">
                                <Upload className="w-5 h-5" />
                                <span>{t('add_picture')}</span>
                            </Label>
                            <input
                                type="file"
                                id="imageUpload"
                                className="hidden"
                                multiple
                                onChange={handleImageChange}
                            />

                            <div className="flex flex-wrap gap-2">
                                {images.map((image, index) => (
                                    <div key={index} className="relative">
                                        <Image
                                            src={URL.createObjectURL(image)}
                                            alt={`image-${index}`}
                                            width={400} height={400}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <Button
                                            size="icon"
                                            onClick={() => removeImage(index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full size-6"
                                        >
                                            &times;
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end mt-4">
                            <Button
                                type="submit"
                                disabled={createPostMutation.isPending}>
                                {createPostMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {t('button_submit')}</Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}