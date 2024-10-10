"use client";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import JobCategoriesList from "./JobCategories";

interface Item {
  id: number;
  name: string;
  description: string;
}

const HeroSection = () => {
  const [data, setData] = useState<Item[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/facilityData");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col bg-transparent text-white mt-[150px]">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col gap-4 w-[53%] font-bold">
          <Tooltip
            id="h1-tooltip"
            place="top-start"
            content="풀타임, 파트타임"
            delayShow={300}
            defaultIsOpen={true}
            opacity={1}
            style={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              color: "rgba(64, 226, 232, 1)",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            classNameArrow="cutomed-arrow-of-tooltip"
          />
          <h1
            className="text-[48px]"
            data-tooltip-id="h1-tooltip"
            data-tooltip-offset={20}
          >
            최고의 실력을 가진 외국인 인재를 찾고 계신가요?
          </h1>
          <p className="text-[24px] ">
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
          </p>
          <p className="text-[18px] mt-[20px] border-b-2 border-solid border-white block w-[200px] pb-0 leading-none">
            개발자가 필요하신가요?
          </p>
          <div className="flex flex-row justify-between mt-[50px]">
            {data.map((item: Item) => (
              <div className="flex flex-col gap-2 w-[190px]">
                <h2 className="text-[18px] font-[900] border-t-2 border-solid border-white pt-2 w-[180px]">
                  {item.name}
                </h2>
                <p className="text-[16px] font-[900]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Carousel />
      </div>
      <JobCategoriesList />
    </div>
  );
};

export default HeroSection;
