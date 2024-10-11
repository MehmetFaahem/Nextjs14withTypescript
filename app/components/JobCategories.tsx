import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import JobCategoryCard from "./JobCategoryCard";
import marketingIcon from "../assets/icons/icon-marketing.png";
import imageEditorIcon from "../assets/icons/icon-image.png";
import boxIcon from "../assets/icons/icon-box.png";
import targetIcon from "../assets/icons/icon-target.png";
import callIcon from "../assets/icons/icon-call.png";
import { StaticImageData } from "next/image";
import { Autoplay } from "swiper/modules";
interface JobCategory {
  icon: StaticImageData;
  title: string;
}

const jobCategories: JobCategory[] = [
  {
    icon: marketingIcon,
    title: "해외 마케팅",
  },
  {
    icon: imageEditorIcon,
    title: "퍼블리셔",
  },
  {
    icon: boxIcon,
    title: "캐드원(제도사)",
  },
  {
    icon: targetIcon,
    title: "해외 세일즈",
  },
  {
    icon: callIcon,
    title: "해외 CS",
  },
];

const JobCategoriesList: React.FC = () => {
  return (
    <section className="my-[100px] h-[100px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={160}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="flex flex-wrap items-start"
      >
        {jobCategories.map((category, index) => (
          <SwiperSlide key={index} className="w-[200px]">
            <JobCategoryCard icon={category.icon} title={category.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default JobCategoriesList;
