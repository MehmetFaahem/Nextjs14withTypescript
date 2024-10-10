import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-auto bg-gradient-to-r from-[#26C2B9] to-[#288BE7]">
      <div className="w-[1190px] flex flex-col">
        <Navbar />
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}
