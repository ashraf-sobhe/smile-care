import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/header";
import SecondaryHeader from "../components/Header/SecondaryHeader";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import HeroSection from "../components/Hero/heroSection";
import OurPartners from "../components/OurPartners/ourPartners";
import About from "../components/About/about";
import Provid from "../components/Provid/provid";
import Numbers from "../components/Numbers/numbers";
import Slider from "../components/Slider/slider";
import Asset from "../components/Asset/asset"
import Confidence from "../components/Confidence/confidence"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"], // semibold
  variable: "--font-jakarta",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300"], // light
  variable: "--font-dmsans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jakarta.variable} ${dmSans.variable} font-sans`}>
      {/* كل الصفحة بخلفية بيضاء */}
      <div className="bg-white">
        <Header />
        <SecondaryHeader />
        <HeroSection />
        <OurPartners />
        <About />
        <Provid />
        <Numbers />
        <Slider />
        <Asset />
        <Confidence />
      </div>
    </main>
  );
}
