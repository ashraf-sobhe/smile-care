import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Background split: 3/4 blue - 1/4 white */}
      <div className="absolute inset-0 flex">
        <div className="w-[71.5%] bg-[#EFF6FF]" /> {/* الأزرق */}
        <div className="w-[28.5%] bg-white" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-2 items-center gap-8 px-6 py-20">
        {/* Left Content */}
        <div>
          {/* Title */}
          <h1 className="text-[76px] leading-[110%] font-semibold text-[#142349] font-serif tracking-[-0.04em] w-[649px] h-[168px]">
            High quality & <span className="text-[#3366FF]">painless</span>{" "}
            dentistry
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-[#142349] text-[19px] leading-[30px] font-[var(--font-dmsans)] font-light max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam, quis nostrud.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center space-x-6">
            <button className="bg-[#3366FF] text-white px-8 py-3 rounded-full text-[15px] font-[var(--font-jakarta)] font-semibold tracking-[0.15em] hover:bg-blue-600 transition">
              CONTACT US
            </button>

            {/* Watch Video */}
            <div className="flex items-center space-x-3 cursor-pointer">
              <Image
                src="/play-icon.png"
                alt="Play Icon"
                width={50}
                height={50}
              />
              <span className="text-[#142349] text-[17px] font-[var(--font-jakarta)] font-semibold">
                Watch Video Profile
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <Image
            src="/hero-image.png"
            alt="Hero"
            width={500}
            height={500}
            className="object-contain -mt-12"
          />
        </div>
      </div>
    </section>
  );
}
