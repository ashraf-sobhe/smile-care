"use client";
import Image from "next/image";

export default function ConfidenceSection() {
  return (
    <section className="bg-[#EFF6FF] py-20 px-5 sm:px-10 lg:px-16">
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
        <div className="flex-1 flex flex-col gap-6 transform translate-y-[90px] -translate-x-[100px] lg:-translate-x-[40px]">
          {/* الصف العلوي */}
          <div className="flex justify-center gap-2">
            <div className="translate-y-[-10px]">
              <Image
                src="/right1.png"
                alt="Right Image 1"
                width={400}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="translate-y-[-40px]">
              <Image
                src="/right2.png"
                alt="Right Image 2"
                width={400}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* الصف السفلي */}
          <div className="flex justify-center gap-6">
            <div className="translate-y-[-10px]">
              <Image
                src="/right3.png"
                alt="Right Image 3"
                width={400}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="translate-y-[-40px]">
              <Image
                src="/right4.png"
                alt="Right Image 4"
                width={400}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ====== نسخة الموبايل ====== */}
      <div className="flex flex-col items-center text-center md:hidden">
        {/* العنوان الصغير */}
        <p className="text-[#FF9140] font-semibold tracking-[0.1em] mb-3 text-sm">
          TESTIMONIAL
        </p>

        {/* العنوان الكبير */}
        <h2 className="text-3xl font-bold leading-tight font-[var(--font-jakarta)] mb-6">
          <span className="text-black block">Enhancing Your Smile</span>
          <span className="text-[#3366FF] block">& Your Confidence</span>
        </h2>

        {/* الصورة اليسار */}
        <div className="mb-10 w-screen mx-[-1rem] sm:mx-0">
          <Image
            src="/left.png"
            alt="Smiling person"
            width={500}
            height={500}
            className="object-contain w-full rounded-2xl"
          />
        </div>

        {/* الأربع صور تحت بعض */}
        <div className="w-screen flex flex-col items-center gap-4 mx-[-1rem] sm:mx-0">
          <Image
            src="/right1.png"
            alt="Right Image 1"
            width={400}
            height={400}
            className="rounded-2xl object-cover w-full"
          />
          <Image
            src="/right2.png"
            alt="Right Image 2"
            width={400}
            height={400}
            className="rounded-2xl object-cover w-full"
          />
          <Image
            src="/right3.png"
            alt="Right Image 3"
            width={400}
            height={400}
            className="rounded-2xl object-cover w-full"
          />
          <Image
            src="/right4.png"
            alt="Right Image 4"
            width={400}
            height={400}
            className="rounded-2xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
