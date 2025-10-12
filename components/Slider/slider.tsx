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

  const [current, setCurrent] = useState(0);
  const [activeSocial, setActiveSocial] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % dentists.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + dentists.length) % dentists.length);
  };

  const getVisibleDentists = () => {
    const prevIndex = (current - 1 + dentists.length) % dentists.length;
    const nextIndex = (current + 1) % dentists.length;
    return [dentists[prevIndex], dentists[current], dentists[nextIndex]];
  };

  const visibleDentists = getVisibleDentists();

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

      {/* ===== نسخة الديسكتوب ===== */}
      <div className="hidden md:flex relative mt-16 items-center justify-center overflow-visible">
        <div className="flex items-center justify-center gap-14 transition-all duration-500">
          {visibleDentists.map((item, index) => {
            const isCenter = index === 1;
            return (
              <div
                key={index}
                className={`relative flex flex-col items-center transition-all duration-500 ${
                  isCenter
                    ? "scale-110 -translate-y-4 z-10"
                    : "scale-95 opacity-90"
                }`}
              >
                {/* الصورة داخل بوكس خلفيته E3F7FE */}
                <div
                  className="relative flex flex-col items-center overflow-visible bg-[#E3F7FE] rounded-2xl"
                  style={{
                    padding: isCenter ? "25px" : "20px",
                    minHeight: "360px",
                  }}
                >
                  <Image
                    src={item.main}
                    alt={item.name}
                    width={isCenter ? 270 : 260}
                    height={isCenter ? 270 : 260}
                    className="rounded-2xl shadow-lg transition-all duration-500"
                  />
                </div>

                {/* الكارت */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 ${
                    isCenter ? "translate-y-[220%]" : "translate-y-[350%]"
                  } bg-white rounded-2xl shadow-lg flex flex-col items-center transition-all duration-500`}
                  style={{
                    width: isCenter ? "240px" : "225px",
                    padding: isCenter
                      ? "20px 15px 20px 15px"
                      : "22px 18px 22px 18px",
                  }}
                >
                  <h3
                    className="font-semibold text-lg mt-[-20px]"
                    style={{ color: "#3366FF" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.title}</p>

                  {isCenter && (
                    <div className="flex justify-center gap-4 mt-3 mb-1">
                      {socials.map((s, i) => (
                        <Image
                          key={i}
                          src={s.src}
                          alt={s.alt}
                          width={22}
                          height={22}
                          onClick={() => setActiveSocial(s.alt)}
                          className={`cursor-pointer transition duration-300 ${
                            activeSocial === s.alt
                              ? "opacity-100 scale-110"
                              : "opacity-40 hover:opacity-100"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* الأسهم */}
        <button
          onClick={prevSlide}
          className="absolute z-10 p-2 sm:p-3 left-[120px]"
        >
          <Image src="/denl.png" alt="Previous" width={40} height={40} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-10 p-2 sm:p-3 right-[120px]"
        >
          <Image src="/denr.png" alt="Next" width={40} height={40} />
        </button>
      </div>

      {/* ===== نسخة الموبايل ===== */}
      <div className="flex flex-col items-center justify-center mt-10 relative md:hidden">
        <div
          key={current}
          className="flex flex-col items-center mb-10 bg-[#E3F7FE] rounded-2xl p-6 w-[85%] mx-auto shadow-md transition-all duration-500"
        >
          {/* الصورة */}
          <Image
            src={dentists[current].main}
            alt={dentists[current].name}
            width={260}
            height={260}
            className="rounded-2xl shadow-lg"
          />

          {/* الكارت الأبيض */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center mt-[-20px] p-5 w-[90%] mx-auto transition-all duration-500">
            <h3 className="font-semibold text-lg text-[#3366FF]">
              {dentists[current].name}
            </h3>
            <p className="text-gray-500 text-sm">{dentists[current].title}</p>

            <div className="flex justify-center gap-4 mt-3 mb-1">
              {socials.map((s, i) => (
                <Image
                  key={i}
                  src={s.src}
                  alt={s.alt}
                  width={22}
                  height={22}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeSocial === s.alt
                      ? "opacity-100"
                      : "opacity-40 grayscale"
                  }`}
                  onClick={() => setActiveSocial(s.alt)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* الأسهم في الموبايل */}
        <button
          onClick={prevSlide}
          className="absolute left-[-10px] top-1/2 transform -translate-y-1/2"
        >
          <Image src="/denl.png" alt="Previous" width={35} height={35} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[-10px] top-1/2 transform -translate-y-1/2"
        >
          <Image src="/denr.png" alt="Next" width={35} height={35} />
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
