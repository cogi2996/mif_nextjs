'use client'
import { Badge } from '@/components/ui/badge'
import React, { useState } from 'react'
import { parseHtmlWithClasses } from '@/lib/utils.js'
import parse from 'html-react-parser'
import { useAppSelector } from '@/redux/store'
import { Button } from '@/components/ui/button'
import { convertDeltaToHtml } from '@/lib/convert'

export default function PreviewNews() {
    const newsState = useAppSelector((state) => state.news.newsState);

    const options = {
        replace: parseHtmlWithClasses,
    };

    const handleBack = () => {
        window.history.back()
    }

    return (

        <div >
            <div className='flex justify-between'>
                <Button onClick={handleBack}>Quay lại</Button>
                <Button>Đăng</Button>

            </div>
            <div className="mb-4 lg:mb-24 grid gap-2">
                <p className='text-3xl font-bold'>{newsState?.title}</p>
                <div className='text-xs text-muted-foreground italic gap-2 flex'>
                    {JSON.parse(newsState?.hashTags).map((item, index) => (
                        <Badge key={index}># {item?.value}</Badge>
                    ))
                    }
                </div>
                <div>
                    {parse(convertDeltaToHtml(newsState?.content), options)}
                </div>
            </div>
        </div>
    )
}

