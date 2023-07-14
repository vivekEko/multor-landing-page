// components
import FifthSection from "@/components/homePage/FifthSection";
import FirstSection from "@/components/homePage/FirstSection";
import FourthSection from "@/components/homePage/FourthSection";
import SecondSection from "@/components/homePage/SecondSection";
import SixthSection from "@/components/homePage/SixthSection";
import ThirdSection from "@/components/homePage/ThirdSection";
import Footer from "@/components/universal/Footer";

export default function Home() {
  return (
    <main className="font-workSans text-accentColor">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </main>
  );
}
