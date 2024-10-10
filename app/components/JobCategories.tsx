import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import JobCategoryCard from "./JobCategoryCard";

interface JobCategory {
  icon: string;
  title: string;
}

const jobCategories: JobCategory[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c2848ac64512434b3fb2d8f5f7241278d42d0245407f9243895aea19e8e026d?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "해외 마케팅",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/41dd35d78cd6b5089c7120830994ddd68a54a1ca4ec10f399da08cdfee756150?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "퍼블리셔",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be300978c9207090edcd65db2f0ebac89065baa22ecbb2165001c45ff5fee738?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "캐드원(제도사)",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5d0d8eadb381d967799e77113edf259e2f825214d0e7ed2cfa4a494d0037be2?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "해외 세일즈",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e82be0729d76aab471783d95385a6c9bd6f345793f0c43a016e3811a93cda80?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "해외 CS",
  },
];

const JobCategoriesList: React.FC = () => {
  return (
    <section className="my-[100px] h-[100px]">
      <Swiper
        spaceBetween={50}
        slidesPerView="auto"
        className="flex flex-wrap gap-2.5 items-start"
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
