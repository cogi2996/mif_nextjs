'use client'
import CardActorHorizontal from "@/components/card-actor-horizontal"
import CardMovie from "@/components/card-movie"
import CardReview from "@/components/card-review"
import DialogRating from "@/components/dialog-rating"
import DynamicImageGallery from "@/components/dynamic-image-gallery"
import Rating from "@/components/rating"
import Title from "@/components/title"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { movieApi } from "@/services/movieApi"
import { categoryApi } from "@/services/movieCategoriesApi"
import { useQuery } from "@tanstack/react-query"
import { Copy, Heart, Star, Triangle } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"


export default function DetailMovie() {
    const { id } = useParams();

    const { isLoading: isLoadingMovie, data: movie } = movieApi.query.useGetMovieById(id)

    const { data: movieCategories } = categoryApi.query.useGetAllmovieCategories()

    const categoriesName = movie?.genre?.map((element) => {
        return movieCategories?.find((category) => element?.id === category?.id)
    })

    if (isLoadingMovie) return (<div>Loading...</div>)
    return (
        <div className="w-full md:py-12">
            <div className="grid gap-4">
                <div className="">
                    <p className="text-2xl md:text-3xl font-bold">{movie.title}</p>
                    <div className="flex justify-between">
                        <Rating
                            ratingInPercent={63}
                            iconSize="l"
                            showOutOf={true}
                            enableUserInteraction={false}
                        />
                        <div className="flex items-center gap-4">
                            <DialogRating />
                            <Button size="lg" variant="outline">
                                <Heart className="w-5 h-5 mr-2" />
                                Add to Watchlist
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-10 gap-1">
                    <div className="col-span-3 flex justify-center">
                        <Image
                            src={movie?.posterUrl}
                            // src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
                            alt="Movie Poster"
                            width="300"
                            height="450"
                            className="w-auto h-auto object-cover"
                        />
                    </div>
                    <div className="col-span-7 flex justify-center">
                        <div className="overflow-hidden w-full aspect-video">
                            <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/zA3_Bs8xePE?si=e9oUenQ5nHPhpRJ3" allowFullScreen />
                        </div>
                    </div>
                </div>

                {/* Thông tin phim */}
                <div className="grid gap-8 grid-cols-10">
                    <div className="grid gap-6 col-span-7">
                        <div className="grid gap-4">
                            <div className="grid gap-2 text-sm">
                                <div className="bg-muted rounded-lg p-6">
                                    <h2 className="text-xl font-bold mb-4">Về phim</h2>
                                    <p className="text-sm leading-relaxed">
                                        {movie.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Năm phát hành:</div>
                                    <div>{movie.releaseDate?.split('-')[0]}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Thời lượng:</div>
                                    <div>{movie.duration} min</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Thể loại:</div>
                                    <div>{categoriesName?.map((category) => {
                                        return category?.categoryName
                                    }).join(', ')}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Điểm đánh giá:</div>
                                    <div>R</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Đạo diễn:</div>
                                    <div>R</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid col-span-3 h-fit gap-4">
                        <div className="grid grid-cols-3 gap-2">
                            <div className="grid justify-center h-fit gap-10">
                                <div className="flex">
                                    Điểm đánh giá
                                </div>
                                <div className="flex justify-center">
                                    7.9/10
                                    <Star className="text-yellow-500 fill-yellow-500" />
                                </div>
                            </div>
                            <div className="grid justify-center h-fit gap-10">
                                <div className="flex justify-center">
                                    Xếp hạng
                                </div>
                                <div className='flex justify-center items-center gap-[2px]'>
                                    <span className='text-sm'>#1300(</span>
                                    {
                                        true
                                            ?
                                            <Triangle className="fill-green-500 text-green-500" size="10px" />
                                            :
                                            <Triangle className="rotate-180 fill-red-500 text-red-500" size="10px" />
                                    }
                                    <span className='text-sm '>16)</span>

                                </div>
                            </div>
                            <div className="grid justify-center h-fit gap-10">
                                <div className="flex justify-center">
                                    Nhận xét
                                </div>
                                <div>
                                    1300 nhận xét
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 ">
                            <Button size="lg" variant="outline" className="w-full">
                                <Heart className="w-5 h-5 mr-2" />
                                Add to Watchlist
                            </Button>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button size="lg">Share</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full">
                                    <div className="flex items-center space-x-2">
                                        <div className="grid flex-1 gap-2">
                                            <Label htmlFor="link" className="sr-only">
                                                Link
                                            </Label>
                                            <Input
                                                id="link"
                                                defaultValue={window.location.href}
                                                readOnly
                                            />
                                        </div>
                                        <Button type="submit" size="sm" className="px-3" variant="secondary">
                                            <span className="sr-only">Copy</span>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-10 mt-4 gap-4">
                    <div className="col-span-7 ">
                        <div className="grid gap-4">

                            <Title title="Ảnh" isMore={false} />
                            <DynamicImageGallery />
                        </div>

                        <div className="grid gap-4 mt-4">

                            <Title title="Đánh giá" isMore={true} />
                            <div>
                                <CardReview />
                                <CardReview />
                                <CardReview />
                                <CardReview />
                                <CardReview />
                            </div>
                        </div>


                        <div className="grid gap-4 mt-4">

                            <Title title="Diễn viên" isMore={true} />
                            <div className="grid grid-cols-2 gap-4">
                                <CardActorHorizontal />
                                <CardActorHorizontal />
                                <CardActorHorizontal />
                                <CardActorHorizontal />
                                <CardActorHorizontal />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 ">
                        <div className="grid gap-4">

                            <Title title="Khám phá" isMore={false} />
                            <CardMovie />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
