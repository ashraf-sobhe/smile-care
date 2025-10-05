"use client";
import Image from "next/image";

export default function OurPartners() {
  return (
    <section className="w-full bg-white mt-0 md:mt-0 px-6 md:px-12 lg:px-20 pt-20 md:pt-30">
      {/* العنوان */}
      <div className="text-center mb-8">
        <h2 className="text-[#FF9140] text-[20px] md:text-[20px] font-semibold">
          Our Clinic Partners
        </h2>
      </div>

      {/* صورة البارتنرز */}
      <div className="flex justify-start gap-6 mt-6 max-w-7xl mx-auto pl-7 pr-0">
        {/* الصور جنب بعض للديسكتوب */}
        <div className="hidden md:flex justify-center gap-6">
          <div className="relative w-[230px] h-[150px]">
            <Image
              src="/1.png"
              alt="Partner 1"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-[230px] h-[150px]">
            <Image
              src="/2.png"
              alt="Partner 2"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-[230px] h-[150px]">
            <Image
              src="/3.png"
              alt="Partner 3"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-[230px] h-[150px]">
            <Image
              src="/4.png"
              alt="Partner 4"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-[230px] h-[150px]">
            <Image
              src="/5.png"
              alt="Partner 5"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
