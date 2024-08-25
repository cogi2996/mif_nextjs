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

import Autoplay from "embla-carousel-autoplay"
import Rating from "@/components/rating"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"
import { useState } from "react"
import clsx from "clsx"


export function MainCarousel() {
    const [saved, setSaved] = useState(false);
    return (
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
            className="w-full h-[300px] md:h-[450px] lg:h-[550px]"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="relative flex items-center justify-center p-6 h-[300px] md:h-[450px] lg:h-[550px]">
                                    <Image
                                        src="https://intietkiem.com/wp-content/uploads/2019/07/poster-ngang.jpg"
                                        width={1600}
                                        height={1050}
                                        alt="Image"
                                        className="absolute rounded-lg w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <div className="absolute bottom-0 left-0 flex flex-col items-start p-2 md:p-8 lg:p-110 space-y-2 md:space-y-2 lg:space-y-6 w-full">
                                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
                                            Avengers: Endgame
                                        </h1>
                                        <div className="flex items-center space-x-2 md:space-x-4">
                                            <Rating
                                                ratingInPercent={70}
                                                iconSize="l"
                                                showOutOf={true}
                                                enableUserInteraction={false}
                                            />
                                            <span className="text-white text-sm md:text-lg font-medium">
                                                8.4/10
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
                                            After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos actions and restore order to the universe.
                                            After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos actions and restore order to the universe.
                                        </p>
                                        <Button size="lg" className="text-base font-bold">Xem Trailer</Button>
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
    );
}