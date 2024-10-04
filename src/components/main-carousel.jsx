'use client'
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import Autoplay from "embla-carousel-autoplay"
import Rating from "@/components/rating"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"
import { useState } from "react"
import clsx from "clsx"
import { movieApi } from "@/services/movieApi"
import { Skeleton } from "@/components/ui/skeleton"

export function MainCarousel() {
    const [saved, setSaved] = useState(false);
    const router = useRouter();
    const { isLoading, data } = movieApi.query.useGetNewestMovie(0, 6)

    const handleDetailMovie = (id) => {
        router.push(`/movies/${id}`);
    }

    if (isLoading) return (
        <Skeleton className='w-full h-[300px] md:h-[450px] lg:h-[550px] drop-shadow-2xl rounded-lg'></Skeleton>
    )

    return (
        <div className="relative">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                className="w-full h-[300px] md:h-[450px] lg:h-[550px] drop-shadow-2xl rounded-lg"
            >
                <CarouselContent>
                    {data?.content?.map((movie) => (
                        <CarouselItem key={movie?.id}>
                            <div className="p-1">
                                <Card>
                                    <CardContent
                                        className="relative flex items-center justify-center p-6 h-[300px] md:h-[450px] lg:h-[550px]"
                                        onClick={() => handleDetailMovie(movie?.id)}
                                    >
                                        <Image
                                            src={movie?.posterUrl}
                                            fill={true}
                                            alt={movie?.title}
                                            className="absolute rounded-lg object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-0 left-0 flex flex-col items-start p-2 md:p-8 lg:p-110 space-y-2 md:space-y-2 lg:space-y-6 w-full">
                                            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
                                                {movie?.title}
                                            </h1>
                                            <div className="flex items-center space-x-2 md:space-x-4">
                                                <Rating
                                                    ratingInPercent={movie.ratings?.averageRating * 10}
                                                    iconSize="l"
                                                    showOutOf={true}
                                                    enableUserInteraction={false}
                                                />
                                                <span className="text-white text-sm md:text-lg font-medium">
                                                    {movie.ratings?.averageRating}/10
                                                </span>
                                                <div onClick={() => setSaved(!saved)}
                                                    className="cursor-pointer">
                                                    <Bookmark
                                                        className={clsx({
                                                            "text-yellow-500 fill-yellow-500": saved,
                                                            "text-white fill-none": !saved
                                                        })}
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-white text-sm md:text-lg lg:text-base w-full line-clamp-2 text-justify">
                                                {movie?.description}
                                            </p>
                                            <Button
                                                size="lg"
                                                className="text-base font-bold"
                                                onClick={() => handleDetailMovie(movie?.id)}
                                            >
                                                Xem Trailer
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}