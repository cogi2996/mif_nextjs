'use client'
import CardActor from '@/components/card-actor'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

export default function ActorCarousel() {
    return (
        <Carousel
            className="w-full h-auto "
        >
            <CarouselContent>
                {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem key={index} className="flex md:basis-1/2 lg:basis-1/4 justify-center my-8" >
                        <div>
                            <CardActor ActorName='Doctor Thanh' Rank='50'/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
