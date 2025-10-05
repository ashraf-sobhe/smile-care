"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EFF6FF] ">
      {/* Background split for desktop */}
      <div className="absolute inset-0 flex hidden md:flex">
        <div className="w-[71.5%] bg-[#EFF6FF]" /> {/* الأزرق */}
        <div className="w-[28.5%] bg-white" /> {/* الأبيض */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 md:pl-48 flex flex-col md:flex-row items-start md:items-center">
        {/* Left content */}
        <div className="relative flex flex-col md:flex-1 mt-14  md:mt-0 md:pr-10">
          <h3 className="text-[15px] md:hidden text-[#FF9140] font-semibold mb-1 mt-0">
            Welcome to CONFIDENT
          </h3>

          <h1 className="mt-4 text-[40px] md:mt-0 md:text-[70px] leading-[110%] font-semibold font-serif tracking-tight">
            High Quality & <br />
            <span className="text-[#3366FF]">Painless</span>
            <span className="text-[#142349]"> Dentistry</span>
          </h1>

          <p className="mt-4 md:mt-6 pb-2 text-[#142349] text-[14px] md:text-[19px] leading-[24px] md:leading-[30px] font-[var(--font-dmsans)] font-light max-w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-row items-center gap-4 md:flex-row md:gap-12 pb-8 md:pb-50">
            <button className="bg-[#3366FF] text-white px-5 py-2 rounded-full text-[14px] md:text-[15px] font-[var(--font-jakarta)] font-semibold tracking-[0.15em] hover:bg-blue-600 transition">
              CONTACT US
            </button>

            <div className="flex items-center space-x-2 cursor-pointer">
              <Image
                src="/play-icon.png"
                alt="Play Icon"
                width={20}
                height={20}
                className="md:w-12 md:h-12"
              />
              <span className="text-[#142349] text-[14px] md:text-[17px] font-[var(--font-jakarta)] font-semibold">
                Watch Video Profile
              </span>
            </div>
          </div>
        </div>

        {/* Right Image for Desktop */}
        <div className="hidden md:flex mt-8 md:mt-0 relative md:absolute md:top-10 md:right-5 justify-end md:flex-1">
          <Image
            src="/hero-image.png"
            alt="Hero Desktop"
            width={550}
            height={550}
            className="object-contain md:w-[550px] md:h-[550px] md:translate-x-38 md:-translate-y-20"
          />
        </div>
      </div>

      {/* Right Image for Mobile only */}
      <div className="md:hidden w-full flex justify-center mt-0 px-0">
        <div className="relative w-full max-w-[350px] aspect-[4/5]">
          <Image
            src="/hero-image2.png"
            alt="Hero Mobile"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
