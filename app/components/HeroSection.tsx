import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between bg-transparent text-white mt-[150px]">
      <div className="flex flex-col gap-4 w-[50%] font-bold">
        <h1 className="text-[48px]">
          최고의 실력을 가진 외국인 인재를 찾고 계신가요?
        </h1>
        <p className="text-[24px] ">
          법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
        </p>
        <p className="text-[18px] border-b-2 border-solid border-white block w-[200px]">
          개발자가 필요하신가요?
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default HeroSection;
