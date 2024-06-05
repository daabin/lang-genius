
'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from 'embla-carousel-fade'

export default function Banner() {
  return <Carousel className="w-full"
    opts={{
      align: "start",
      loop: true,
    }}
    plugins={[
      Autoplay({
        delay: 4000,
      }),
      Fade(),
    ]}>
    <CarouselContent>
      <CarouselItem>
        <div className="shadow-md w-500 h-500 overflow-hidden">
          <img src="/banner-1.jpg" className="object-cover rounded-lg"/>
        </div>
      </CarouselItem>
      <CarouselItem >
        <div className="shadow-md w-500 h-500 overflow-hidden">
          <img src="/banner-3.jpg" className="object-cover rounded-lg"/>
        </div>
      </CarouselItem>
      <CarouselItem >
        <div className="shadow-md w-500 h-500 overflow-hidden">
          <img src="/banner-4.jpg" className="object-cover rounded-lg"/>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
}