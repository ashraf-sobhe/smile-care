import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background split */}
      <div className="absolute inset-0 flex">
        <div className="w-[71.5%] bg-[#EFF6FF]" /> {/* الأزرق */}
        <div className="w-[28.5%] bg-white" />
      </div>

<div className="relative max-w-7xl mx-auto">
  {/* Left Content (متحكم فيه بالـ position) */}
  <div className="absolute top-[13px] left-[200px]">

    <h1 className="text-[60px] lading-[110%] font-semibold text-[#142349] font-serif tracking-tight">
      High Quality & <br />
      <span className="text-[#3366FF]">Painless</span>{" "}
      <span className="text-[#142349]">Dentistry</span>
    </h1>

    <p className="mt-6 text-[#142349] text-[19px] leading-[30px] font-[var(--font-dmsans)] font-light max-w-[550px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
    </p>

    <div className="mt-10 flex items-center space-x-6">
      <button className="bg-[#3366FF] text-white px-8 py-3 rounded-full text-[15px] font-[var(--font-jakarta)] font-semibold tracking-[0.15em] hover:bg-blue-600 transition">
        CONTACT US
      </button>

      <div className="flex items-center space-x-3 cursor-pointer">
        <Image
          src="/play-icon.png"
          alt="Play Icon"
          width={48}
          height={48}
        />
        <span className="text-[#142349] text-[17px] font-[var(--font-jakarta)] font-semibold">
          Watch Video Profile
        </span>
      </div>
    </div>
  </div>




        {/* Right Image */}
        <div className="relative flex justify-end">
          <Image
            src="/hero-image.png"
            alt="Hero"
            width={648}
            height={648}
            className="object-contain -mt-[35px] mr-[-180px]"
          />
        </div>
      </div>
    </section>
  );
}
