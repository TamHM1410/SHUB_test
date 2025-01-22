import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { dataCarousel } from "@/_mock/carousel";

export default function EnhancedCarousel() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const extendedData = [
    ...dataCarousel,
    ...dataCarousel,
    ...dataCarousel,
    ...dataCarousel,
  ];

  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    api.scrollTo(dataCarousel.length);
  }, [api]);

  return (
    <div className="relative px-4 py-8">
      <div className="mx-auto max-w-7xl relative max-w-[1120px]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            containScroll: "trimSnaps",
          }}
          plugins={[plugin]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {extendedData.map((imgSrc, index) => (
              <CarouselItem
                key={index}
                className={`pl-1 md:pl-4 md:basis-1/3 lg:basis-1/5 ${
                  index % 2 === 0 ? "" : "mt-5"
                }`}
              >
                <div className="relative group flex justify-center">
                <img
                        src={imgSrc}
                        alt={`Slide ${index + 1}`}
                        className="object-cover w-[160px] h-[400px] transition-transform duration-300 group-hover:brightness-110 object-fit"
                      />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
            <CarouselPrevious className="h-[53px] w-[53px] hover:opacity-100 transition-opacity bg-white hover:bg-white/80" />
          </div>
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
            <CarouselNext className="h-[53px] w-[53px] hover:opacity-100 transition-opacity bg-white hover:bg-white/80" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
