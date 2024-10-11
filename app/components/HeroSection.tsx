"use client";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import JobCategoriesList from "./JobCategories";
import { motion } from "framer-motion";

interface Item {
  id: number;
  name: string;
  description: string;
}

const HeroSection = () => {
  const [data, setData] = useState<Item[]>([]);
  const [showTooltip, setShowTooltip] = useState(false);

  setTimeout(() => {
    setShowTooltip(true);
  }, 600);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/facilityData");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col bg-transparent text-white max-md:mt-[120px] mt-[150px] mb-10">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col gap-4 w-full md:w-[53%] font-bold max-md:mx-auto max-md:px-5">
          <Tooltip
            id="h1-tooltip"
            place="top-start"
            content="풀타임, 파트타임"
            delayShow={300}
            isOpen={showTooltip}
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

          <motion.h1
            className="text-[48px]"
            data-tooltip-id="h1-tooltip"
            data-tooltip-offset={20}
            data-tooltip-delay-show={300}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            최고의 실력을 가진 외국인 인재를 찾고 계신가요?
          </motion.h1>
          <motion.p
            className="text-[24px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
          </motion.p>
          <motion.p
            className="text-[18px] max-md:hidden mt-[20px] border-b-2 border-solid border-white block w-[200px] pb-0 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            개발자가 필요하신가요?
          </motion.p>
          <motion.div
            className="flex flex-row max-md:hidden justify-between mt-[50px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {data.map((item: Item, index: number) => (
              <div className="flex flex-col gap-2 w-[190px]" key={index}>
                <h2 className="text-[18px] font-[900] border-t-2 border-solid border-white pt-2 w-[180px]">
                  {item.name}
                </h2>
                <p className="text-[16px] font-[900]">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <Carousel />

        <div className="flex flex-wrap md:hidden mt-[0px] gap-4 justify-center">
          {[
            { text: "한국어 능력" },
            { text: "한국어 능력" },
            { text: "겸업 여부" },
            { text: "평판 조회" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-[45%] flex flex-row gap-2 items-center"
            >
              <div className="flex justify-center items-center bg-white/70 rounded-md p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#110d0d"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <h3 className="text-[18px] font-[900]">{item.text}</h3>
            </div>
          ))}
        </div>
        <div className="flex md:hidden flex-col gap-2 items-start mt-[20px] ml-[10px]">
          <p className="text-[18px] font-[900] text-[#FBFF23] border-b-2 border-solid border-[#FBFF23] leading-none">
            개발자가 필요하신가요?
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-md:hidden"
      >
        <JobCategoriesList />
      </motion.div>
    </div>
  );
};

export default HeroSection;
