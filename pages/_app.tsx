import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/header";
import SecondaryHeader from "../components/Header/SecondaryHeader";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import HeroSection from "../components/Hero/heroSection";


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
      {/* الجزء اللي لونه من فيجما */}
      <div className="bg-[#C7F0FD]">
        <Header />
        <SecondaryHeader />
        <HeroSection />
        {/* هنا لو في Hero Section أو Banner */}
      </div>

      {/* باقي الصفحة أبيض */}
      <div className="bg-white">
      </div>
    </main>
  );
}
