'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

export default function GroupAvatar({ images, size = 'w-12 h-12'}) {
    const displayImages = images.slice(0, 3);

    return (
        <div className={`flex `}>
            {displayImages.map((src, index) => (
                <Avatar
                    key={index}
                    className={`${size} border-2 border-white ${index !== 0 ? 'ml-[-0.5rem]' : ''}`}
                >
                    <AvatarImage src={src} alt={`Avatar ${index}`} />
                    <AvatarFallback>N</AvatarFallback>
                </Avatar>
            ))}
            {images.length > 3 && (
                <div
                    className={`${size} flex items-center justify-center bg-gray-200 rounded-full text-gray-700 border-2 border-white`}
                >
                    +{images.length - 3}
                </div>
            )}
        </div>
    );
};
