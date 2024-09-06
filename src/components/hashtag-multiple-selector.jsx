'use client'
import React, { useState } from 'react';
import MultipleSelector from '@/components/ui/multiple-selector';

const OPTIONS = [
    { label: 'nextjs', value: 'nextjs' },
    { label: 'React', value: 'react' },
    { label: 'Remix', value: 'remix' },
    { label: 'Vite', value: 'vite' },
    { label: 'Nuxt', value: 'nuxt' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Angular', value: 'angular' },
    { label: 'Ember', value: 'ember' },
    { label: 'Gatsby', value: 'gatsby' },
    { label: 'Astro', value: 'astro' },
];

export default function HashtagMultipleSelector({ setValue, value}) {
    const handleChange = (newOptions) => {
        setValue(newOptions)

    };

    return (
        <div className="w-full">
            <MultipleSelector
                defaultOptions={OPTIONS}
                creatable
                emptyIndicator={
                    <p className="text-center text-lg ">
                        no results found.
                    </p>
                }
                onChange={handleChange}
                value={value}
            />
        </div>
    );
};
