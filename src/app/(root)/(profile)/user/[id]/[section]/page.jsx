'use client'
import InfoSection from '@/app/(root)/(profile)/user/[id]/[section]/infoSection'
import { useParams } from 'next/navigation'
import React from 'react'

export default function UserSection() {
    const { section } = useParams()
    console.log('🚀 ~ UserSection ~ section:', section)
    return (
        <div>
            {(section === 'info') && <InfoSection />}
        </div>
    )
}
