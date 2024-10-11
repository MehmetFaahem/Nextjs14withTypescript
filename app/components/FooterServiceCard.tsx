import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
type ServiceCardProps = {
  iconSrc: StaticImageData;
  title: string;
  linkText: string;
  arrowSrc: StaticImageData;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconSrc,
  title,
  linkText,
  arrowSrc,
}) => {
  return (
    <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-[46%]">
      <div className="flex overflow-hidden flex-col items-start p-4 mx-auto w-full bg-white rounded-xl max-md:mt-4">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center px-2 w-10 h-10 bg-gray-100 rounded-lg">
            <Image
              loading="lazy"
              src={iconSrc}
              alt=""
              className="object-contain w-full aspect-square"
            />
          </div>
          <h3 className="mt-3 text-sm font-black text-zinc-700">{title}</h3>
        </div>
        <div className="flex gap-1 items-start mt-4 text-sm font-black text-gray-600 whitespace-nowrap">
          <div>{linkText}</div>
          <Image
            loading="lazy"
            src={arrowSrc}
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
