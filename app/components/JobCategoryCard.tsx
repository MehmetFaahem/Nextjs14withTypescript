import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
interface JobCategoryCardProps {
  icon: StaticImageData;
  title: string;
}

const JobCategoryCard: React.FC<JobCategoryCardProps> = ({ icon, title }) => {
  return (
    <div className="flex overflow-hidden gap-6 items-center p-4 rounded-xl bg-white bg-opacity-20 min-w-[240px] w-[332px]">
      <div className="flex gap-2.5 items-center self-stretch p-3 my-auto w-14 h-14 rounded-lg bg-white bg-opacity-40">
        <Image
          loading="lazy"
          src={icon}
          alt={title}
          className="object-contain w-8 aspect-square"
        />
      </div>
      <h2 className="flex-1 shrink self-stretch my-auto text-2xl font-black text-white basis-6">
        {title}
      </h2>
    </div>
  );
};

export default JobCategoryCard;
