import React from "react";
import ServiceCard from "./FooterServiceCard";
import FooterDetailsCard from "./FooterDetailsCard";

const serviceData = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dc61238082ab48f79f4f3613a3553045bea97f8991873e8e0dc5836d8c8893f8?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "해외 개발자 원격 채용",
    linkText: "바로가기",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/837748f99c5d3e4034a0192fe96365b74eb25a726eb6050d85043583d6981c73?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/55e3987dcdca131940aeb2900bd710cfc75c82a8db03c8901f686a3c57832144?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "외국인 원격 채용 (비개발)",
    linkText: "바로가기",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/837748f99c5d3e4034a0192fe96365b74eb25a726eb6050d85043583d6981c73?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/384addfe918e649ca343d3ad2c39a93318f7b14d08a9ea1f8eecaa095a44a6d6?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "한국어 가능 외국인 채용",
    linkText: "바로가기",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2f545f1b4f3502077f1a7941d3fd4689caf2a503b877f9483aa717ed1b711542?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a62f96c04bf4ead5790f08e6782d365499fd6143b29915b6372bbe182319b644?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
    title: "해외 개발자 활용 서비스",
    linkText: "바로가기",
    arrowSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/47e75efa01e8a2d9b4292f39ee34ce01761a445b2c7e9f55d0ae61b2db781f83?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b",
  },
];

const Footer: React.FC = () => {
  return (
    <main className="flex flex-col max-w-full w-full py-[90px] bg-[#FBFBFB] mx-auto justify-start items-center">
      <section className="max-md:max-w-full w-[1190px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-sm font-black text-gray-600 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3765c4f810f70edb2bbcf9c5362549a0bf2a7e442566fa5677e8671794385c69?placeholderIfAbsent=true&apiKey=2372ca227ccb46eeb978f53bfef9667b"
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
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
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
