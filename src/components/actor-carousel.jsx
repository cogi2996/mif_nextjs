'use client'
import CardActor, { CardActorSkeleton } from '@/components/card-actor'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { actorApi, getTopActors } from '@/services/actorApi'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ActorCarousel() {
    const router = useRouter();
    const { data, isLoading } = actorApi.query.useGetTopActors(0, 8)

    const handleDetailActor = (id) => {
        router.push(`/actor/${id}`);
    }

    if (isLoading)
        return (
            <Carousel
                className="w-full h-auto "
            >
                <CarouselContent>
                    {Array.from({ length: 5 }, (_, index) => (
                        <CarouselItem
                            key={index}
                            className="lg:basis-1/4 md:basis-1/2 flex justify-center my-8"
                        >
                            <div>
                                <CardActorSkeleton />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        )

    return (
        <Carousel
            className="w-full h-auto "
        >
            <CarouselContent>
                {data?.content?.map((actor) => (
                    <CarouselItem
                        key={actor?.id}
                        className="lg:basis-1/5 md:basis-1/2 flex justify-center my-8"
                        onClick={() => handleDetailActor(actor?.id)}
                    >
                        <div>
                            <CardActor actor={actor} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
