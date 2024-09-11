'use client'
import News from '@/components/news'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React, { useState } from 'react'
import { parseHtmlWithClasses } from '@/lib/utils.js'
import parse from 'html-react-parser'
import Link from 'next/link'
import CardNew from '@/components/card-new'
import Title from '@/components/title'

export default function DetailNews() {
    const [content, setContent] = useState('');

    const options = {
        replace: parseHtmlWithClasses,
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 pt-8 md:pt-12 lg:pt-16">

            <div className="col-span-2">
                <div className="mb-4 lg:mb-24 grid gap-2">
                    <p className='text-3xl font-bold'>Cú nhảy dù thành công đầu tiên trên thế giới</p>
                    <p className='text-xs text-muted-foreground'> Ngày đăng : 20/10/2004 &middot; Người viết: Nguyễn Chí Thanh</p>
                    <div className='text-xs text-muted-foreground italic gap-2 flex'>
                        <Badge>#Hành động</Badge>
                        <Badge>#Hoạt hình</Badge>
                    </div>
                    <div>
                        {parse(content, options)}
                    </div>
                </div>
            </div>

            <div className="grid mb-8 gap-6 md:gap-8 lg:gap-8 h-fit">
                <Title title='Tin khác' isMore={false}/>
                <CardNew/>
                <CardNew/>
                <CardNew/>
                <CardNew/>
                <CardNew/>
                <CardNew/>
            </div>
        </div>
    )
}
