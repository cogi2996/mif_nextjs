'use client'
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchHeader() {
    const [search, setSearch] = useState('')

    const router = useRouter()

    const handleSearch = () => {
        if (search.trim()) {
            router.push(`search?q=${search}`)
            setSearch('')
        }
    }

    return (
        <div className="hidden md:block relative">
            <Input
                type="text"
                placeholder="Tìm kiếm..."
                className="pr-10"
                onChange={(e) => { setSearch(e.target.value) }}
                value={search}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }} />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:cursor-pointer" onClick={() => { handleSearch() }} />
        </div>
    )
}
