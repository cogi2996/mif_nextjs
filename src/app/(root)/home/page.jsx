import ActorCarousel from "@/components/actor-carousel"
import { MainCarousel } from "@/components/main-carousel"
import SectionFilmHot from "@/components/section-film-hot"
import SectionNews from "@/components/section-news-home"
import SectionRandomFilm from "@/components/section-random-film"
import Title from "@/components/title"

export default function Home() {

  return (
    <div className="w-full">

      <div className="relative">
        <MainCarousel />
      </div>

      <div className="pt-8 md:pt-12 lg:pt-16">
        <Title title='Diễn viên nổi bật' isMore='true' redirect='/actor' />
        <ActorCarousel />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 pt-8 md:pt-12 lg:pt-16">

        <div className="col-span-2">
          <Title title='Tin tức' isMore='true' redirect='/news' />
          <div className="mb-4 lg:mb-24">
            <SectionNews />
          </div>
        </div>

        <div className="grid mb-8 gap-6 md:gap-8 lg:gap-8 h-fit">
          <Title title='Phim hot gần đây' isMore='true' redirect='/film' />
          <div className="grid gap-5">
            <SectionFilmHot />
          </div>
          <Title title='Phim ngẫu nhiên' isMore='true' redirect='/film' />
          <div className="grid gap-5">
            <SectionRandomFilm />
          </div>
        </div>
      </div>
    </div>
  )
}

