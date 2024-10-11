"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

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
  const [showTooltip, setShowTooltip] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/staticData");
      const data = await response.json();
      setData(data);
    };
    fetchData();

    const tooltipTimeout = setTimeout(() => {
      setShowTooltip(true);
    }, 300);

    const swiperTimeout = setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(1);
      }
    }, 1000);

    return () => {
      clearTimeout(tooltipTimeout);
      clearTimeout(swiperTimeout);
    };
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <motion.div
      className="w-[340px] md:w-[44%] mt-[-20px] max-md:mt-32 relative max-md:mx-auto max-md:mb-10"
      data-tooltip-id="carousel-tooltip"
      data-tooltip-offset={30}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Swiper
        initialSlide={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch:
            typeof window !== "undefined" && window.screen.availWidth < 768
              ? 192
              : 155,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {[...data, ...data, ...data, ...data, ...data].map(
          (item: CarouselItem, index: number) => (
            <SwiperSlide
              key={index}
              style={{
                height: "408px",
                width:
                  typeof window !== "undefined" &&
                  window.screen.availWidth < 768
                    ? "250px"
                    : "292px",
              }}
              className="bg-white rounded-lg shadow-lg w-[292px] h-[408px] p-[20px] flex flex-col gap-4 justify-center items-center"
            >
              <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={292}
                  height={408}
                  className=" max-w-[100px] max-h-[100px]"
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
                      className="bg-white text-black/70 border-2 border-black/10 px-2 py-1 rounded-md text-[12px] font-bold"
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
      <div
        onClick={handlePrev}
        className="absolute -left-[60px] top-[43%] transform -translate-y-1/2 z-10 cursor-pointer p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="#f5f5f5"
          viewBox="0 0 256 256"
        >
          <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
        </svg>
      </div>
      <div
        onClick={handleNext}
        className="absolute -right-[60px] top-[43%] transform -translate-y-1/2 z-10 cursor-pointer p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="#f5f5f5"
          viewBox="0 0 256 256"
        >
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
        </svg>
      </div>
      <Tooltip
        id="carousel-tooltip"
        isOpen={showTooltip}
        positionStrategy="fixed"
        place="top"
        content={"월 100만원"}
        delayShow={300}
        render={() => (
          <p className="flex flex-row gap-1 place-items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="rgba(0, 198, 150, 0.9)"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm12,152h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24a28,28,0,0,1,0,56Z"></path>
              </svg>
            </span>
            월<span className="font-[900]">100</span>만원
          </p>
        )}
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          color: "rgba(0, 198, 150, 1)",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      />
    </motion.div>
  );
};

export default Carousel;
