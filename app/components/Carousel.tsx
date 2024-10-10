"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

interface CarouselItem {
  id: number;
  name: string;
  image: string;
  experience: string;
  title: string;
  tags: string[];
}

const Carousel = () => {
  const [data, setData] = useState<CarouselItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/staticData");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-[44%] mt-[-20px]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 155,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {[...data, ...data, ...data, ...data, ...data, ...data].map(
          (item: CarouselItem, index: number) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-lg shadow-lg w-[292px] h-[408px] p-[20px] flex flex-col gap-4 justify-center items-center"
            >
              <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-full max-w-[100px] max-h-[100px]"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] font-bold text-center text-black">
                    {item.name}
                  </h3>
                  <p className="text-[18px] text-center text-blue-500 font-bold">
                    {item.title} • {item.experience}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-white text-black/70 border border-black/10 px-2 py-1 rounded-md text-[12px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
      {/* These styles are added to make the carousel work */}
      <style jsx global>{`
        .swiper {
          width: 100%;
        }
        .swiper-slide {
          width: 292px;
          height: 408px;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
