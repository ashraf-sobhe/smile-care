"use client";
import Image from "next/image";

export default function ConfidenceSection() {
  const testimonials = [
    {
      id: 1,
      smallImg: "/small1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      name: "John Doe",
    },
    {
      id: 2,
      smallImg: "/small2.png",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Jane Smith",
    },
    {
      id: 3,
      smallImg: "/small3.png",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "Mark Wilson",
    },
    {
      id: 4,
      smallImg: "/small4.png",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Sara Johnson",
    },
  ];

  return (
    <section className="bg-[#EFF6FF] py-10 md:py-30 px-5 sm:px-10 lg:px-16">
      {/* ====== نسخة الديسكتوب ====== */}
      <div className="max-w-7xl mx-auto hidden md:flex flex-row items-center justify-between gap-10">
        {/* ====== Left Side (Text + Image) ====== */}
        <div className="flex-1 text-left">
          <p className="text-[#FF9140] font-semibold tracking-[0.1em] mb-3 text-sm sm:text-base">
            TESTIMONIAL
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[var(--font-jakarta)] mb-6">
            <span className="text-black block">Enhancing Your Smile</span>
            <span className="text-[#3366FF] block">& Your Confidence</span>
          </h2>

          <div className="mt-6">
            <Image
              src="/left.png"
              alt="Smiling person"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* ====== Right Side (Images Grid) ====== */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-13 transform translate-y-[90px] -translate-x-[100px] lg:-translate-x-[40px]">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`relative bg-white shadow-md rounded-2xl p-6 pt-14 transition-transform duration-500 ${
                index % 2 === 1
                  ? "-translate-y-10 md:-translate-y-10"
                  : "translate-y-0"
              }`}
            >
              {/* الصورة الصغيرة */}
              <div className="absolute -top-8 left-6">
                <Image
                  src={item.smallImg}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>

              {/* النجوم */}
              <Image
                src="/star.png"
                alt="Stars"
                width={100}
                height={20}
                className="mb-4"
              />

              {/* النص */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.text}
              </p>

              {/* الاسم */}
              <h3 className="font-semibold text-lg text-[#3366FF]">
                {item.name}
              </h3>

              {/* كلمة patient */}
              <p className="text-gray-500 text-sm font-medium">Patient</p>
            </div>
          ))}
        </div>
      </div>

      {/* ====== نسخة الموبايل ====== */}
      <div className="flex flex-col items-center text-center  md:hidden ">
        {/* العنوان الصغير */}
        <p className="text-[#FF9140] font-semibold tracking-[0.1em] mb-3 pt-0 text-sm">
          TESTIMONIAL
        </p>

        {/* العنوان الكبير */}
        <h2 className="text-3xl font-bold leading-tight font-[var(--font-jakarta)] mb-6">
          <span className="text-black block">Enhancing Your Smile</span>
          <span className="text-[#3366FF] block">& Your Confidence</span>
        </h2>

        {/* الصورة اليسار */}
        <div className="mb-10 w-screen flex justify-center mx-[-1rem] sm:mx-0">
          <Image
            src="/left.png"
            alt="Smiling person"
            width={550}
            height={550}
            className="object-contain w-full max-w-[500px] rounded-2xl"
          />
        </div>

        {/* الأربع صور تحت بعض */}
        <div className="w-screen flex flex-col items-center gap-4 mx-[-1rem] sm:mx-0 -mt-6">
          <Image
            src="/right1.png"
            alt="Right Image 1"
            width={400}
            height={400}
            className="rounded-2xl object-cover w-full max-w-[500px]"
          />
          <Image
            src="/right2.png"
            alt="Right Image 2"
            width={400}
            height={400}
            className="rounded-2xl object-cover w-full max-w-[500px]"
          />
          <Image
            src="/right3.png"
            alt="Right Image 3"
            width={400}
            height={400}
            className="rounded-2xl object-cover w-full max-w-[500px]"
          />
          <Image
            src="/right4.png"
            alt="Right Image 4"
            width={400}
            height={400}
            className="rounded-2xl object-cover w-full max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
