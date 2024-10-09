'use client'
import CardActor from '@/components/card-actor'
import CardMovie from '@/components/card-movie'
import DynamicImageGallery from '@/components/dynamic-image-gallery'
import Title from '@/components/title'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { actorApi } from '@/services/actorApi'
import { addFavoriteActor, favoriteActorsApi, removeFavoriteActor } from '@/services/favoriteActorsApi'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Award, Camera, ChevronDown, HeartOff, Triangle } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function Actor({ params }) {
  const [liked, setLiked] = useState(false);

  const { data: actor } = actorApi.query.useGetActorById(params.id)
  const { data: actorMovieography } = actorApi.query.useGetActorMovieography(params.id)
  const { data: isliked, isLoading } = favoriteActorsApi.query.useIsActorFavorite(params.id)

  const addFavoriteActorMutation = useMutation({
    mutationFn: addFavoriteActor,
    onSuccess: () => {
      setLiked(true)
      toast.success('Yêu thích')
    },
    onError: () => {
      toast.error('Có lỗi')
    }
  })

  const removeFavoriteActorMutation = useMutation({
    mutationFn: removeFavoriteActor,
    onSuccess: () => {
      setLiked(false)
      toast.success('Hủy yêu thích')
    },
    onError: () => {
      toast.error('Có lỗi')
    }
  })

  const handleAddFavoriteActor = () => {
    addFavoriteActorMutation.mutate(params.id)
  }

  const handleRemoveFavoriteActor = () => {
    setLiked(false)
    removeFavoriteActorMutation.mutate(params.id)
  }

  // useEffect(() => {
  //   if (isliked !== undefined) {
  //     setLiked(isliked);
  //   }
  // }, [isliked]);

  return (
    <div className=" max-w-4xl mx-auto">
      <div className="flex flex-col justify-center items-center gap-2 h-fit">
        <div className='relative'>
          <Avatar className="w-32 h-32">
            <AvatarImage src={actor?.profilePictureUrl} alt="User Avatar" />
            <AvatarFallback>Actor</AvatarFallback>
          </Avatar>
          <Button variant="ghost" className="absolute -right-1 -bottom-1 rounded-full bg-card w-12 h-12">
            <Camera />
          </Button>
        </div>
        <div className="font-bold text-xl">{actor?.name}</div>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span>Mức độ yêu thích: 10</span>
        </div>
        <div className='flex justify-center items-center text-sm font-semibold gap-[2px]'>
          <span className='text-sm'>Rank: #16(</span>
          {
            true
              ?
              <Triangle className="fill-green-500 text-green-500" size="10px" />
              :
              <Triangle className="rotate-180 fill-red-500 text-red-500" size="10px" />
          }
          <span className='text-sm '>16)</span>
        </div>
        {
          liked
            ?
            <Button onClick={() => { handleAddFavoriteActor() }}>
              Yêu thích
            </Button>
            :
            <DropdownMenu modal={false} >
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="gap-1">
                  <span className="sr-only sm:not-sr-only font-bold">Đã yêu thích</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => { handleRemoveFavoriteActor() }}>
                  <HeartOff className="h-4 w-4 mr-2 font-bold" />
                  Hủy yêu thích
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        }
      </div>
      <div className="mt-10 bg-card rounded-lg drop-shadow-xl">
        <p className='text-justify px-8 py-4'>
          {actor?.bio}
        </p>
      </div>
      {actor?.awards.length != 0 &&
        <div className='mt-8 grid gap-4'>
          <Title title="Giải thưởng" isMore={false} />
          {actor?.awards.map((award) => {
            return (<div className='flex gap-2 font-bold' key={award.id}>
              <Award className='text-yellow-500' />
              <p>
                {award.name}
              </p>
              <p>
                - {award?.date?.split('-')[0]}
              </p>
            </div>)
          })}
        </div>}
      <div className='mt-4'>
        <Title title="Ảnh" isMore={false} />
        <div className='flex mt-4 w-full'>
          <DynamicImageGallery />
        </div>
      </div>
      <div className='mt-4'>
        <Title title="Phim tham gia" isMore={false} />
        {
          !actorMovieography
            ?
            <div className='flex mt-4 font-bold justify-center mb-8'>Chưa tham gia bộ phim nào</div>
            :
            <div className='flex mt-4'>
              <Carousel className='w-full h-auto'>
                <CarouselContent>
                  {/* {actorMovieography} */}
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center">
                    <CardMovie direction='vertical' />
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center">
                    <CardMovie direction='vertical' />
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center">
                    <CardMovie direction='vertical' />
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center">
                    <CardMovie direction='vertical' />
                  </CarouselItem>
                  <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center">
                    <CardMovie direction='vertical' />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
        }
      </div>
    </div>
  )
}
