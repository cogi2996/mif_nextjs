'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { schemaPost } from "@/lib/schemas/post-group.schema";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "@/services/groupPostApi";
import { toast } from "react-toastify";

export default function CreatePostDialog({ groupId }) {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schemaPost)
    });
    const [images, setImages] = useState([]);


    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            toast.success('Tạo bài viết thành công')
            reset()
        },
        onError: () => {
            toast.error('Tạo bài viết thất bại')
        }
    })

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

        createPostMutation.mutate(data)
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Tạo bài viết</Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Tạo bài viết</DialogTitle>
                </DialogHeader>
                <Separator />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                        <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8">
                                <AvatarImage />
                                <AvatarFallback className='uppercase'>T</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-semibold">Thanh Nguyễn</p>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <p className="text-sm font-medium">Tiêu đề</p>
                            <Input
                                {...register("title", { required: true })}
                                className="w-full"
                                required
                            />
                            {errors.title && <p className="text-red-500 text-sm">Tiêu đề là bắt buộc</p>}
                        </div>

                        <div className="grid gap-2">
                            <p className="text-sm font-medium">Nội dung</p>
                            <Textarea
                                {...register("content", { required: true })}
                                className="w-full"
                                rows={5}
                            />
                            {errors.content && <p className="text-red-500 text-sm">Nội dung là bắt buộc</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="imageUpload" className="cursor-pointer flex items-center space-x-2">
                                <Upload className="w-5 h-5" />
                                <span>Thêm ảnh</span>
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
                            <Button type="submit" className="">Đăng</Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}