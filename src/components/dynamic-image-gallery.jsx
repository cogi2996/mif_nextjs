'use client'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import Image from 'next/image';
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';


const images = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1724830909783-b50ab4e263ec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1724870069803-ee8d7119d608?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1723832348105-2e69f948135a?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1723908021871-f76201c6db1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1724726561649-c94ea9057a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1723126004556-4ecfcbab3908?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1723053145751-9aacd7c47df1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1724403903272-45c14388cd64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1724690416947-3cdc197ffab1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
]

export default function DynamicImageGallery() {
    const maxVisibleImages = 7;
    const remainingImages = images.length - maxVisibleImages;
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsDialogOpen(true);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="grid grid-cols-12 gap-2 w-full">
            {images.slice(0, maxVisibleImages).map((image, index) => (
                <div
                    key={image.id}
                    className={`relative w-full h-[150px] ${index < 3 ? 'col-span-4' : 'col-span-3'}`}
                >
                    <Image
                        src={image.src}
                        alt={`Image ${image.id}`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover"
                        onClick={() => handleImageClick(index)}
                    />
                    {index === maxVisibleImages - 1 && remainingImages > 0 && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold" onClick={() => handleImageClick(index)}>
                            +{remainingImages}
                        </div>
                    )}
                </div>
            ))}

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} className='h-fit w-[950px]'>
                <DialogContent className='h-fit max-w-2xl'>
                    <DialogHeader>{currentImageIndex + 1}/{images.length}</DialogHeader>
                    <div className="flex items-center justify-between gap-4 ">
                        <ChevronLeft className='cursor-pointer border-2 hover:text-primary' size={32} strokeWidth={1} onClick={() => handlePrev()} />
                        <div className=" h-[550px] flex items-center justify-center">
                            <Image
                                src={images[currentImageIndex].src}
                                alt={`Image ${currentImageIndex}`}
                                width={400}
                                height={500}
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                        <ChevronRight className='cursor-pointer border-2 hover:text-primary' size={32} strokeWidth={1} onClick={() => handleNext()} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
