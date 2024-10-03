import CardNew from '@/components/card-new'
import Title from '@/components/title'
import React from 'react'

export default function page() {
    return (
        <div>
            <Title title="Tin tức" isMore={false} />
            <div className='mt-4 grid gap-4'>
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
                <CardNew />
            </div>
        </div>
    )
}
