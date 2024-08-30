import CardActor from '@/components/card-actor'
import CardFilm from '@/components/card-film'
import DynamicImageGallery from '@/components/dynamic-image-gallery'
import Title from '@/components/title'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Award, Camera, CircleDollarSign, Handshake, Heart, Triangle } from 'lucide-react'
import React from 'react'

export default function Actor() {
  return (
    <div className=" max-w-4xl mx-auto">
      <div className="flex flex-col justify-center items-center gap-2 h-fit">
        <div className='relative'>
          <Avatar className="w-32 h-32">
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>CT</AvatarFallback>
          </Avatar>
          <Button variant="ghost" className="absolute -right-1 -bottom-1 rounded-full bg-card w-12 h-12">
            <Camera />
          </Button>
        </div>
        <div className="font-bold text-xl">Nguyễn Chí Thanh</div>
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
        <Button>
          Yêu thích
        </Button>
      </div>
      <div className="mt-10 bg-card rounded-lg drop-shadow-xl">
        <p className='text-justify px-8 py-4'>
          Anthony Edward Stark, thường được gọi là Tony Stark, là một nhân vật hư cấu do Robert Downey Jr. thủ vai trong nhượng quyền điện ảnh Vũ trụ Điện ảnh Marvel (MCU), dựa trên nhân vật truyện tranh cùng tên của Marvel Comics và thường được biết đến với bản ngã Người Sắt. Trong các phim điện ảnh, Tony Stark là một nhà tư bản công nghiệp, nhà phát minh thiên tài và tay chơi cừ khôi, kiêm giữ chức vụ CEO của tập đoàn Stark Industries. Vào giai đoạn đầu của loạt phim, anh là nhà sản xuất vũ khí cho quân đội Hoa Kỳ, cho đến khi anh thay đổi trái tim và chuyển kiến thức kĩ thuật của mình để tạo một bộ giáp siêu năng lực.
        </p>
      </div>
      <div className='mt-8 grid gap-4'>
        <Title title="Giải thưởng" isMore={false} />
        <div className='flex gap-2 font-bold'>
          <Award className='text-yellow-500' />
          Top 1 sever
        </div>
        <div className='flex gap-2 font-bold'>
          <Award className='text-yellow-500' />
          Top 1 sever
        </div>
      </div>
      <div className='mt-4'>
        <Title title="Ảnh" isMore={false} />
        <div className='flex mt-4 w-full'>
          <DynamicImageGallery/>
        </div>
      </div>
      <div className='mt-4'>
        <Title title="Phim tham gia" isMore={false} />
        <div className='flex mt-4'>
          <Carousel className='w-full h-auto'>
            <CarouselContent>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center">
                  <CardFilm direction='vertical' />
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center">
                  <CardFilm direction='vertical' />
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center">
                  <CardFilm direction='vertical' />
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center">
                  <CardFilm direction='vertical' />
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center">
                  <CardFilm direction='vertical' />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  )
}
