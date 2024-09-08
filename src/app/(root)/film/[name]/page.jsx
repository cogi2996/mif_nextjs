import CardActorHorizontal from "@/components/card-actor-horizontal"
import CardFilm from "@/components/card-film"
import CardReview from "@/components/card-review"
import DynamicImageGallery from "@/components/dynamic-image-gallery"
import Rating from "@/components/rating"
import Title from "@/components/title"
import { Button } from "@/components/ui/button"
import { Heart, Star, Triangle } from "lucide-react"
import Image from "next/image"

export default function Page() {
    return (
        <div className="w-full md:py-12">
            <div className="grid gap-4">
                <div className="">
                    <p className="text-2xl md:text-3xl font-bold">The Shawshank Redemption</p>
                    <div className="flex justify-between">
                        <Rating
                            ratingInPercent={63}
                            iconSize="l"
                            showOutOf={true}
                            enableUserInteraction={false}
                        />
                        <div className="flex items-center gap-4">
                            <Button size="lg">Rate</Button>
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
                            src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
                            alt="Movie Poster"
                            width="300"
                            height="450"
                            className="w-auto h-auto object-cover"
                        />
                    </div>
                    <div className="col-span-7 flex justify-center">
                        <div className="overflow-hidden w-full aspect-video">
                            <video className="w-full h-full object-cover" src="https://www.youtube.com/watch?v=6hB3S9bIaco" controls />
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
                                        Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of
                                        common decency.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Năm phát hành:</div>
                                    <div>1994</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Thời lượng:</div>
                                    <div>142 min</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-muted-foreground">Thể loại:</div>
                                    <div>Drama, Crime</div>
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
                            <Button size="lg">Share</Button>
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
                            <CardFilm />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
