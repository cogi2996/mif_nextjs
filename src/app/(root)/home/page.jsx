import ActorCarousel from "@/components/actor-carousel"
import CardFilm from "@/components/card-film"
import { MainCarousel } from "@/components/main-carousel"
import News from "@/components/news"
import Title from "@/components/title"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="w-full">

      <div className="relative">
        <MainCarousel />
      </div>

      <div className="pt-8 md:pt-12 lg:pt-16">
        <Title title='Diễn viên nổi bật' isMore='true' />
        <ActorCarousel />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 pt-8 md:pt-12 lg:pt-16">

        <div className="col-span-2">
          <Title title='Tin tức' isMore='true' />
          <div className="mb-4 lg:mb-24">
            <News />
            <News />
            <News />
            <News />
            <div className="w-full flex justify-center mt-12 drop-shadow-lg">
              <Button>Xem thêm</Button>
            </div>
          </div>
        </div>

        <div className="grid mb-8 gap-6 md:gap-8 lg:gap-8 h-fit">
          <Title title='Phim hot gần đây' isMore='true' />
          <div className="grid gap-5">
            <CardFilm />
            <CardFilm />
            <CardFilm />
            <CardFilm />
          </div>
          <Title title='Phim ngẫu nhiên' isMore='true' />
          <div className="grid gap-5">
            <CardFilm />
            <CardFilm />
            <CardFilm />
            <CardFilm />
          </div>
        </div>
      </div>
    </div>
  )
}

