'use client'
import TextEditor from '@/components/text-editor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setNewsState } from '@/redux/slices/newsSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaNewsRequest } from '@/lib/schemas/news.schema'
import HashtagMultipleSelector from '@/components/hashtag-multiple-selector'

export default function CreateNews() {
    const newsState = useAppSelector((state) => state.news.newsState);

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: zodResolver(schemaNewsRequest),
        defaultValues: newsState
    })
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [selectedHashTag, setSelectedHashTag] = useState(JSON.parse(newsState?.hashTags));
    const [content, setContent] = useState(newsState?.content)

    const hanlePreview = () => {
        const title = getValues('title')
        const dataNews = {
            title,
            hashTags: JSON.stringify(selectedHashTag),
            content,
        };
        dispatch(setNewsState(dataNews))
        router.push('/dashboard/news/create/preview');
    }

    const onSubmit = (data) => {
        const hashTags = selectedHashTag?.map((item)=> item?.value)
        const finalData = {
            ...data,
            content,
            hashTags,
        };
        // Call Api
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
                <div className='flex justify-between'>
                    <p className='text-2xl'>Tạo tin tức</p>
                    <div className='flex gap-2'>
                        <Button onClick={hanlePreview} type="button">Xem trước</Button>
                        <Button type='Submit'>Đăng</Button>
                    </div>
                </div>
                <div>
                    <p className='text-base pb-2'>Nhập tiêu đề:</p>
                    <Input
                        {...register('title')}
                    />
                </div>
                <div>
                    <p className='text-base pb-2'>Hashtag:</p>
                    <HashtagMultipleSelector setValue={setSelectedHashTag} value={selectedHashTag} />
                </div>
                <div>
                    <p className='text-base pb-2'>Thumbnail:</p>
                    <Input type='file'
                    />
                </div>
                <div className='mb-8'>
                    <p className='text-base pb-2'>Nội dung:</p>
                    <TextEditor setValue={setContent} value={content} />
                </div>
            </div>
        </form>
    )
}
