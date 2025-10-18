"use client";
import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#EFF6FF]">
      {/* خلفية منقسمة للديسكتوب */}
      <div className="absolute inset-0 hidden md:flex">
        <div className="w-[72%] bg-[#EFF6FF]" />
        <div className="w-[28%] bg-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 md:pl-48 flex flex-col md:flex-row items-start md:items-center">
        {/* المحتوى اليسار */}
        <div className="relative flex flex-col md:flex-1 mt-14 md:mt-0 md:mb-20 md:pr-10 w-full">
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

          {/* الأزرار */}
          <div className="mt-6 flex flex-row flex-wrap items-center gap-4 md:gap-12 pb-8 md:pb-10 w-full justify-center md:justify-start">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#3366FF] text-white px-5 py-2 rounded-full text-[14px] md:text-[15px] font-[var(--font-jakarta)] font-semibold tracking-[0.15em] hover:bg-blue-600 transition"
            >
              CONTACT US
            </button>

            <div
              className="flex items-center space-x-2 cursor-pointer mt-2 md:mt-0"
              onClick={() =>
                window.open(
                  "https://cdn.yourvideo.com/clinic-video.mp4",
                  "_blank"
                )
              }
            >
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

        {/* صورة الديسكتوب */}
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

      {/* صورة الموبايل */}
      <div className="md:hidden w-full flex justify-center mt-5 px-0">
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

      {/* Popup الفورم */}
      {showForm && (
        <div
          onClick={() => setShowForm(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md relative"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>

            <h3 className="text-[#142349] font-semibold text-lg mb-4 text-center">
              Book an Appointment
            </h3>

            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:border-[#3366FF]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:border-[#3366FF]"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:border-[#3366FF]"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:border-[#3366FF]"
                rows={4}
              ></textarea>

              <button className="bg-[#3366FF] text-white w-full py-2 rounded-md hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
