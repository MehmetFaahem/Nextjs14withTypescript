"use client";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-transparent">
      <div className="text-2xl font-bold">
        <Image src={logo} alt="logo" className="w-full max-md:w-[150px]" />
      </div>
      <div className="hidden md:flex gap-4 font-bold">
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
      <div className="hidden md:block">
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-bold">
          문의하기
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setShowDrawer(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#e6e6e6"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
      </div>
      {showDrawer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-4">
            <button
              className="text-black mb-4"
              onClick={() => setShowDrawer(false)}
            >
              Close
            </button>
            <div className="flex flex-col gap-4 font-bold">
              <div
                className="cursor-pointer"
                onClick={() => setShowDrawer(false)}
              >
                해외 개발자 원격 채용
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setShowDrawer(false)}
              >
                외국인 원격 채용 (비개발 직군)
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setShowDrawer(false)}
              >
                한국어 가능 외국인 채용
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setShowDrawer(false)}
              >
                해외 개발자 활용 서비스
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold">
                문의하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
