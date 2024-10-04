'use client'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Title({ title, isMore, redirect }) {
    const t = useTranslations();
    const router = useRouter();

    const handleRedirect = () => {
        redirect && router.push(redirect)
    }

    return (
        <div className='flex justify-between items-center w-full h-fit cursor-pointer' onClick={() => handleRedirect()}>
            <div className='flex items-center'>
                <div className='w-2 bg-primary h-8 rounded'></div>
                <h1 className='text-xl md:text-xl lg:text-2xl font-bold pl-4'>{title}</h1>
            </div>
            {isMore && <div className='flex gap-1 items-center'>
                <span className='text-xs text-nowrap font-bold'>{t('is_more')}</span>
                <ChevronRight />
            </div>}
        </div>
    )
}
