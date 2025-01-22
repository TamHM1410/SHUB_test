import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import CompainionCard from "./compainion-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselCardData } from "@/_mock/carousel-card";

function SVGComponent() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={480}
      height={480}
      style={{
        width: 48,
        height: 48,
        contentVisibility: "visible",
      }}
      viewBox="0 0 480 480"
    >
      <defs>
        <clipPath id="a">
          <path d="M0 0H480V480H0z" />
        </clipPath>
        <mask id="b" mask-type="alpha">
          <path
            fill="#78FFFF"
            d="M-86.59 26.479v-95.582l86.451-60.9 86.64 17.798v96.103C86.59 69.511 4.472 126.979.149 130.003c-4.326-.868-86.651-17.91-86.739-103.524"
            display="block"
            transform="translate(174.577 112.038) translate(86.84 130.253)"
          />
        </mask>
      </defs>
      <g clipPath="url(#a)">
        <g display="block">
          <path
            fill="#FFF"
            d="M21.185-171.235-21.56-180l-116.783 82.269V31.387c.119 115.653 111.328 138.676 117.172 139.848l42.236 8.66c.208.044.39.081.51.105v-.001c5.84-4.087 116.768-81.716 116.648-197.368v-129.823z"
            transform="translate(76.717 32.908) translate(163.343 205)"
          />
          <path
            fill="#E8F5E9"
            d="M-79.707-138.814V-9.697c.12 115.654 111.329 138.676 117.173 139.849l42.241 8.661C69.85 136.76-36.845 112.358-36.963-.931v-120.96c0-4.748-3.339-8.843-7.991-9.797z"
            transform="translate(76.717 32.908) translate(104.706 246.083)"
          />
          <path
            fill="#C5E6FF"
            d="M184.917 385z"
            transform="translate(76.717 32.908)"
          />
          <path
            fill="none"
            stroke="#373A43"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={10}
            d="M21.185-171.235q0 0 0 0L-21.56-180l-116.783 82.269V31.387c.119 115.653 111.328 138.676 117.172 139.848l42.236 8.66c.208.044.39.081.51.105v-.001c5.84-4.087 116.768-81.716 116.648-197.368v-129.823z"
            transform="translate(76.717 32.908) translate(163.343 205)"
          />
          <path
            fill="#4CAF50"
            d="M-86.59 26.479v-95.582l86.451-60.9 86.64 17.798v96.103C86.59 69.511 4.472 126.979.149 130.003c-4.326-.868-86.651-17.91-86.739-103.524"
            transform="translate(76.717 32.908) translate(184.7 209.383)"
          />
        </g>
        <g display="block" mask="url(#b)">
          <path
            fill="#E8F5E9"
            d="m-91.171 220.778-36.8-19.09L91.17-220.778l36.801 19.09z"
            transform="translate(156.891 26.244) translate(128.221 221.028)"
          />
        </g>
        <path
          fill="none"
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={20}
          d="m34.698-37.915-47.029 75.83-22.367-24.853"
          display="block"
          transform="translate(201.595 174.82) translate(59.698 62.915)"
        />
      </g>
    </svg>
  );
}

export default function Compainionship() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [currentMiddleItem, setCurrentMiddleItem] = useState(null);


  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 8000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );
  const getMiddleIndex = (index, length, itemsPerView) => {
    const middleOffset = Math.floor(itemsPerView / 2); // Lấy offset giữa
    return (index + middleOffset) % length;
  };

  const handleItemClick = (index) => {
    console.log(index, "index");
    if (api) {
      api.scrollTo(index - 2);
      setCurrent(index - 2);
    }
  };

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const middleIndex = getMiddleIndex(current, carouselCardData.length, 5);
    setCurrentMiddleItem(carouselCardData[middleIndex]);
  }, [current, carouselCardData]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-auto max-w-[350px]">
        <SVGComponent />
        <p className="text-[32px] font-bold ">Đồng hành và tin cậy</p>
      </div>
      <div className="py-5">
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
              className="w-full max-w-[1120px]"
            >
              <CarouselContent className="-ml-2 md:-ml-4 max-w-[900px]">
                {carouselCardData &&
                  carouselCardData.map((item, index) => {
                    const isMiddle =
                      getMiddleIndex(current, carouselCardData.length, 5) === index;
                    return (
                      <CarouselItem
                        key={index}
                        className={`pl-1 md:pl-4 md:basis-1/3 lg:basis-1/5 ${
                          isMiddle ? "" : " opacity-50 mt-5"
                        }`}
                        onClick={() => handleItemClick(index)}
                      >
                        {" "}
                        <CompainionCard
                          isActive={isMiddle ? true : false}
                          item={item}
                          type="skeleton"
                        />
                      </CarouselItem>
                    );
                  })}
              </CarouselContent>
              <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
                <CarouselPrevious className="h-[53px] w-[53px] hover:opacity-100 transition-opacity bg-white hover:bg-white/80" />
              </div>
              <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2">
                <CarouselNext className="h-[53px] w-[53px] hover:opacity-100 transition-opacity bg-white hover:bg-white/80" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="flex relative">
          <img
            src="https://shub.edu.vn/images/landing/ver3/monument-section/left-decoration.svg"
            className="absolute right-[500px] bottom-20 z-5"
          />{" "}
          <div className="absolut z-50">
            <CompainionCard type="selected" item={currentMiddleItem} />
          </div>
          <img
            src="https://shub.edu.vn/images/landing/ver3/monument-section/right-decoration.svg"
            className="absolute left-[500px] bottom-20 z-5"
          />
        </div>
      </div>
    </div>
  );
}
