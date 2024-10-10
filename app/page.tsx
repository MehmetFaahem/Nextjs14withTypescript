import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-r from-[#26C2B9] to-[#288BE7]">
      <div className="w-[1190px] flex flex-col">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
