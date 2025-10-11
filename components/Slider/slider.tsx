"use client";
import Image from "next/image";
import { useState } from "react";

export default function BestDentistSection() {
  const dentists = [
    {
      main: "/Dentist1.png",
      name: "Dr. Marteen Bryant",
      title: "General Dentist",
    },
    {
      main: "/Dentist2.png",
      name: "Dr. Julia Barbara",
      title: "General Dentist",
    },
    {
      main: "/Dentist3.png",
      name: "Dr. Natasha Smith",
      title: "General Dentist",
    },
  ];

  const socials = [
    { src: "/INSTAGRAM.png", alt: "Instagram" },
    { src: "/FACEBOOK.png", alt: "Facebook" },
    { src: "/LINKDLN.png", alt: "LinkedIn" },
    { src: "/TWITTER.png", alt: "Twitter" },
  ];

  const [current, setCurrent] = useState(1);

  const nextSlide = () => {
    setCurrent((prev) => (prev === dentists.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? dentists.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full bg-white py-5 px-5 sm:px-8 lg:px-20 text-center overflow-hidden mt-5">
      {/* العنوان */}
      <p className="text-[#FF9140] font-semibold tracking-wider text-sm sm:text-base">
        OUR BEST DENTIST
      </p>

      <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Dentist For Specialized And{" "}
        <span className="block text-[#0047FF]">Experienced Dentistry</span>
      </h2>

      {/* السلايدر */}
      <div className="hidden md:flex relative mt-16 flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-10 transition-all duration-500">
          {dentists.map((item, index) => {
            const isActive = index === current;

            return (
              <div
                key={index}
                className={`relative transition-all duration-500 flex flex-col items-center ${
                  isActive
                    ? "scale-110 opacity-100 z-10"
                    : "scale-90 opacity-60 z-0"
                }`}
              >
                {/* الصورة */}
                <div className="relative flex flex-col items-center">
                  <Image
                    src={item.main}
                    alt={item.name}
                    width={isActive ? 300 : 230}
                    height={isActive ? 300 : 230}
                    className="rounded-2xl shadow-lg"
                  />

                  {/* الكارت التعريفي */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 ${
                      isActive ? "translate-y-[220%]" : "translate-y-[220%]"
                    } bg-white rounded-2xl shadow-lg flex flex-col items-center transition-all duration-500`}
                    style={{
                      width: isActive ? "240px" : "210px",
                      padding: "20px 15px 20px 15px",
                    }}
                  >
                    <h3
                      className="font-semibold text-lg mt-[-20px]"
                      style={{ color: "#3366FF" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.title}</p>

                    {isActive && (
                      <div className="flex justify-center gap-4 mt-3 mb-1">
                        {socials.map((s, i) => (
                          <Image
                            key={i}
                            src={s.src}
                            alt={s.alt}
                            width={22}
                            height={22}
                            className="cursor-pointer hover:opacity-80 transition"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
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

      {/* النقاط */}
      <div className="mt-6 flex justify-center gap-4">
        {dentists.map((_, index) => (
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
