'use client'
import InfoSection from '@/app/[locale]/(root)/(profile)/user/[id]/[section]/infoSection'
import { useParams } from 'next/navigation'
import React from 'react'

export default function UserSection() {
    const { id, section } = useParams()
    return (
        <div>
            {(section === 'info') && <InfoSection id={id} />}
        </div>
    )
}
