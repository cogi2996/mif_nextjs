import { Film } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HeaderWithHomeIcon() {

    return (
        <div className="fixed w-full z-10 drop-shadow-xl">
            <div className="flex items-center justify-between py-3 bg-background border-b xl:px-36 lg:px-2 md:px-2 px-1">
                <Link href="#" className="hidden md:flex items-center gap-2" prefetch={false}>
                    <Film />
                    <span className="text-xl font-bold gap-2 tracking-[.25em]">MIF</span>
                </Link>
            </div>
        </div>
    )
}
