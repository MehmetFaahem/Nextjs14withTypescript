import React from "react";
import ServiceCard from "./FooterServiceCard";
import FooterDetailsCard from "./FooterDetailsCard";
import codeIcon from "../assets/icons/icon-code.png";
import avatarIcon from "../assets/icons/icon-avatar.png";
import korIcon from "../assets/icons/icon-kor.png";
import gearIcon from "../assets/icons/icon-gear.png";
import rightArrowIcon from "../assets/icons/icon-right.png";
import logo from "../assets/colored_logo.png";
import Image from "next/image";
const serviceData = [
  {
    iconSrc: codeIcon,
    title: "해외 개발자 원격 채용",
    linkText: "바로가기",
    arrowSrc: rightArrowIcon,
  },
  {
    iconSrc: avatarIcon,
    title: "외국인 원격 채용 (비개발)",
    linkText: "바로가기",
    arrowSrc: rightArrowIcon,
  },
  {
    iconSrc: korIcon,
    title: "한국어 가능 외국인 채용",
    linkText: "바로가기",
    arrowSrc: rightArrowIcon,
  },
  {
    iconSrc: gearIcon,
    title: "해외 개발자 활용 서비스",
    linkText: "바로가기",
    arrowSrc: rightArrowIcon,
  },
];

const Footer: React.FC = () => {
  return (
    <main className="flex flex-col max-w-full w-full py-[90px] bg-[#FBFBFB] mx-auto justify-start items-center max-md:px-5">
      <section className="max-md:max-w-full w-[1190px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-sm font-black text-gray-600 max-md:mt-10">
              <Image
                loading="lazy"
                src={logo}
                alt="Company Logo"
                className="object-contain max-w-full aspect-[5.49] w-[187px]"
              />
              <p className="self-stretch mt-4 text-sm leading-5 text-zinc-700">
                우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
              </p>
              <div className="mt-5">010-0000-0000</div>
              <div className="mt-2">aaaaa@naver.com</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10">
              <div className="flex gap-5 flex-wrap">
                {serviceData.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterDetailsCard
        companyName="하이퍼하이어"
        companyNameEn="Hyperhire India Private Limited"
        ceoName="김주현"
        ceoNameEn="Juhyun Kim"
        businessNumber="427-86-01187"
        cinNumber="U74110DL2016PTC290812"
        addressKo="서울특별시 강남대로 479, 지하 1층 238호"
        addressEn="D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India"
      />
    </main>
  );
};

export default Footer;
