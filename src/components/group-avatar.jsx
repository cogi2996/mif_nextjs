'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

export default function
    GroupAvatar({ images, names, size = 'w-12 h-12' }) {

    return (
        <div className={`flex `}>
            {images?.map((src, index) => (
                <Avatar
                    key={index}
                    className={`${size} border-2 border-white ${index !== 0 ? 'ml-[-0.5rem]' : ''}`}
                >
                    <AvatarImage src={src} alt={`Avatar ${index}`} />
                    <AvatarFallback className='uppercase'>{names[index] && names[index][0]}</AvatarFallback>
                </Avatar>
            ))}
            {images?.length > 5 && (
                <div
                    className={`${size} flex items-center justify-center bg-gray-200 rounded-full text-gray-700 border-2 border-white`}
                >
                    +{images.length - 5}
                </div>
            )}
        </div>
    );
};
