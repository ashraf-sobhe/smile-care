"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function OurPartners() {
  const partners = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <section className="w-full bg-white mt-0 md:mt-0 px-6 md:px-12 lg:px-20 pt-20 md:pt-30">
      {/* العنوان */}
      <div className="text-center pb-4 md:pb-0">
        <h2 className="text-[#FF9140] text-[20px] font-semibold py-2 md:py-4 mb-0">
          Our Clinic Partners
        </h2>
      </div>

      {/* نسخة الديسكتوب */}
      <div className="hidden md:block max-w-7xl mx-auto pt-6">
        <Swiper
          spaceBetween={40}
          slidesPerView={5}
          loop={true}
          speed={3000} // سرعة الحركة
          autoplay={{
            delay: 0, // مفيش توقف بين الحركات
            disableOnInteraction: false, // يفضل شغال حتى لو المستخدم لمس
            pauseOnMouseEnter: false, // مايقفش عند المرور بالماوس
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {[...partners, ...partners].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-[230px] h-[150px] mx-auto">
                <Image
                  src={src}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* نسخة الموبايل */}
      <div className="md:hidden mt-6 relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay]}
          className="w-full px-8"
        >
          {[...partners, ...partners].map((src, index) => (
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
          ))}
        </Swiper>
      </div>
    </section>
  );
}
