import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import Tools from "@/components/Tools";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#FBFCFD]">
      <Navbar />
      <HeroPage />
      <Tools />
      <Deals />
      <Footer />
    </div>
  );
}
