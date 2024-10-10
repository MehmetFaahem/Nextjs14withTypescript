"use client";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-transparent">
      <div className="text-2xl font-bold">
        <Image src={logo} alt="logo" className="w-full" />
      </div>
      <div className="flex gap-4 font-bold">
        <div className="relative">
          <div
            className="flex items-center gap-2 text-white cursor-pointer "
            onClick={() => setShowDropdown(!showDropdown)}
          >
            채용{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#eee7e7"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </span>
          </div>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-[8px] shadow-lg w-[260px]">
              <div className="py-2">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  해외 개발자 원격 채용
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  외국인 원격 채용 (비개발 직군)
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  한국어 가능 외국인 채용
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-white">해외 개발자 활용 서비스</div>
      </div>
      <div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-bold">
          문의하기
        </button>
      </div>
    </div>
  );
};

export default Navbar;
