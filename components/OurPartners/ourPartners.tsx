"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function OurPartners() {
  return (
    <section className="w-full bg-white mt-0 md:mt-0 px-6 md:px-12 lg:px-20 pt-20 md:pt-30">
      {/* العنوان */}
      <div className="text-center pb-4 md:pb-0">
        <h2 className="text-[#FF9140] text-[20px] md:text-[20px] font-semibold px-4 md:px-0 py-2 md:py-4 mb-0">
          Our Clinic Partners
        </h2>
      </div>

      {/* نسخة الديسكتوب */}
      <div className="hidden md:flex justify-start gap-6 mt-0 max-w-7xl mx-auto pl-7 pr-0 pt-0">
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

      {/* نسخة الموبايل */}
      <div className="md:hidden mt-6 relative">
      

        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          modules={[Navigation]}
          className="w-full px-8"
        >
          {["/3.png", "/4.png", "/1.png", "/2.png", "/5.png"].map(
            (src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-[150px] h-[90px] mx-auto">
                  <Image
                    src={src}
                    alt={`Partner ${index + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}
