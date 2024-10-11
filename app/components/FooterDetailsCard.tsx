import React from "react";

type FooterDetailsProps = {
  companyName: string;
  companyNameEn: string;
  ceoName: string;
  ceoNameEn: string;
  businessNumber: string;
  cinNumber: string;
  addressKo: string;
  addressEn: string;
};

const FooterDetailsCard: React.FC<FooterDetailsProps> = ({
  companyName,
  companyNameEn,
  ceoName,
  ceoNameEn,
  businessNumber,
  cinNumber,
  addressKo,
  addressEn,
}) => {
  return (
    <footer className="mt-11 max-w-full mx-auto max-md:mt-10 self-start w-[1190px] ">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full text-sm font-black text-gray-600 max-md:mt-10">
            <div className="flex gap-5 justify-between max-w-full text-xs text-zinc-700 w-[300px]">
              <div>상호명</div>
              <div>대표 CEO</div>
            </div>
            <div className="flex gap-3 self-stretch mt-2">
              <div className="flex flex-col self-start">
                <div className="self-start">{companyName}</div>
                <div className="mt-1.5">{companyNameEn}</div>
              </div>
              <div className="flex flex-col">
                <div className="self-start">{ceoName}</div>
                <div className="mt-2">{ceoNameEn}</div>
              </div>
            </div>
            <div className="mt-12 max-md:mt-10 max-md:hidden">
              ⓒ 2023 Hyperhire
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-wrap gap-10 text-sm font-black text-gray-600 max-md:mt-10">
            <div className="flex flex-col items-start self-start max-md:w-full">
              <div className="text-xs text-zinc-700">사업자등록번호 CIN</div>
              <div className="mt-2.5">{businessNumber}</div>
              <div className="self-stretch mt-1.5">{cinNumber}</div>
            </div>
            <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit max-md:max-w-full">
              <div className="text-xs text-zinc-700">주소 ADDRESS</div>
              <div className="mt-2.5">{addressKo}</div>
              <div className="self-stretch mt-1.5 leading-5 max-md:max-w-full">
                {addressEn}
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:block hidden font-[900] opacity-50">
            ⓒ 2023 Hyperhire
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDetailsCard;
