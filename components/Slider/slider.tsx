"use client";
import Image from "next/image";
import { useState } from "react";

export default function BestDentistSection() {
  const images = ["/Dentist1.png", "/Dentist2.png", "/Dentist3.png"];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full bg-white py-5 px-5 sm:px-8 lg:px-20 text-center overflow-hidden mt-5">
      {/* العنوان الصغير */}
      <p className="text-[#FF9140] font-semibold tracking-wider text-sm sm:text-base">
        OUR BEST DENTIST
      </p>

      {/* العنوان الكبير */}
      <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Dentist For Specialized And{" "}
        <span className="block text-[#0047FF]">Experienced Dentistry</span>
      </h2>

      {/* الصور + الأسهم نسخة الديسكتوب */}
      <div className="hidden md:flex relative mt-12 flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-6 sm:gap-10 transition-all duration-500">
          {images.map((src, index) => {
            const isActive = index === current;
            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isActive
                    ? "scale-110 opacity-100 z-10"
                    : "scale-90 opacity-50 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Dentist ${index + 1}`}
                  width={isActive ? 280 : 220}
                  height={isActive ? 280 : 220}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            );
          })}
        </div>

        {/* الأسهم */}
        <button
          onClick={prevSlide}
          className="absolute z-10 p-2 sm:p-3"
          style={{ left: "190px" }}
        >
          <Image src="/denl.png" alt="Previous" width={40} height={40} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-10 p-2 sm:p-3"
          style={{ right: "190px" }}
        >
          <Image src="/denr.png" alt="Next" width={40} height={40} />
        </button>
      </div>

      {/* الصور + الأسهم نسخة الموبايل */}
      <div className="md:hidden flex flex-col items-center mt-12 relative">
        {/* الصور */}
        <div className="flex flex-col items-center gap-4">
          {images.map((src, index) => {
            const isActive = index === current;
            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isActive
                    ? "scale-110 opacity-100 z-10"
                    : "scale-90 opacity-50 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Dentist ${index + 1}`}
                  width={isActive ? 250 : 220}
                  height={isActive ? 250 : 200}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            );
          })}
        </div>

        {/* الأسهم */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 sm:p-3"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <Image src="/denl.png" alt="Previous" width={40} height={40} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 sm:p-3"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <Image src="/denr.png" alt="Next" width={40} height={40} />
        </button>
      </div>

      {/* النقط لجميع الأجهزة */}
      <div className="mt-6 flex justify-center gap-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === current ? "bg-[#FF9140] w-6 h-2" : "bg-gray-300 w-2 h-2"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
