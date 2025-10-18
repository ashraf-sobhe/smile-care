"use client";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="bg-white py-20 px-5 sm:px-10 lg:px-16">
      {/* ====== Desktop Version ====== */}
      <div className="hidden md:flex flex-col">
        {/* العنوان + زرار */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="text-left">
            <p className="text-[#FF9140] font-semibold tracking-[0.1em] mb-2 text-sm sm:text-base lg:pl-14">
              OUR BLOG
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3366FF] lg:pl-14">
              Our latest blog & news
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <button className="flex items-center justify-center gap-3 bg-[#3366FF] text-white px-5 py-2 rounded-full text-[14px] md:text-[15px] font-[var(--font-jakarta)] font-semibold tracking-[0.15em] hover:bg-blue-600 transition">
              FIND MORE
              <Image
                src="/Right.png"
                alt="Arrow Right"
                width={18}
                height={18}
                className="invert brightness-0 contrast-100 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* المحتوى */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* ====== Left Image (Big) ====== */}
          <div className="relative flex-1 rounded-2xl overflow-hidden">
            <Image
              src="/blog1.png"
              alt="Blog 1"
              width={500}
              height={500}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#45CDF7] opacity-20"></div>
            <div className="absolute bottom-4 left-4 z-10">
              <p className="text-[#3366FF] font-semibold text-sm md:text-base md:pb-5">
                December 15, 2024
              </p>
              <h3 className="text-white font-bold text-sm md:text-base max-w-xs md:pb-5">
                Highlight: benefits of routine dental check-ups in children under 12 years old
              </h3>
              <div className="flex items-center gap-2 text-[#5C85FF] font-semibold cursor-pointer text-sm md:text-base mt-1 md:pb-5">
                <span>Read More</span>
                <Image src="/Right.png" alt="arrow" width={14} height={14} />
              </div>
            </div>
          </div>

          {/* ====== Right Images (Small) ====== */}
          <div className="flex-1 flex flex-col gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden">
                <Image
                  src={`/blog${i + 1}.png`}
                  alt={`Blog ${i + 1}`}
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#45CDF7] opacity-20"></div>
                <div className="absolute bottom-4 left-4 z-10">
                  <p className="text-[#3366FF] font-semibold text-sm md:text-base md:pb-5">
                    December 15, 2024
                  </p>
                  <h3 className="text-white font-bold text-sm md:text-base max-w-xs md:pb-5">
                    Highlight: benefits of routine dental check-ups in children under 12 years old
                  </h3>
                  <div className="flex items-center gap-2 text-[#5C85FF] font-semibold cursor-pointer text-sm md:text-base mt-1 md:pb-5">
                    <span>Read More</span>
                    <Image
                      src="/Right.png"
                      alt="arrow"
                      width={14}
                      height={14}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====== Mobile Version ====== */}
      <div className="flex flex-col md:hidden">
        {/* العنوان الصغير */}
        <p className="text-[#FF9140] font-semibold tracking-[0.1em] mb-2 pb-2 text-sm text-left">
          OUR BLOG
        </p>

        {/* العنوان الكبير على سطرين */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#3366FF] pb-3 mb-4 leading-snug">
          Our latest <br /> blog & news
        </h2>

        {/* الزرار */}
        <div className="mb-6">
          <button className="flex items-center justify-center gap-3 bg-[#3366FF] text-white px-5 py-2 mb-3 rounded-full text-[14px] sm:text-[15px] font-semibold tracking-[0.15em] hover:bg-blue-600 transition">
            FIND MORE
            <Image
              src="/Right.png"
              alt="Arrow Right"
              width={18}
              height={18}
              className="invert brightness-0 contrast-100"
            />
          </button>
        </div>

        {/* الصورة الكبيرة */}
        <div className="relative mb-6 rounded-2xl overflow-hidden">
          <Image
            src="/blog1.png"
            alt="Blog 1"
            width={500}
            height={500}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#45CDF7] opacity-20"></div>
          <div className="absolute bottom-4 left-4 z-10">
            <p className="text-[#3366FF] font-semibold text-sm mb-1">
              December 15, 2024
            </p>
            <h3 className="text-white font-bold text-sm max-w-xs mb-2">
              Highlight: benefits of routine dental check-ups in children under
              12 years old
            </h3>
            <div className="flex items-center gap-2 text-[#5C85FF] font-semibold cursor-pointer text-sm">
              <span>Read More</span>
              <Image src="/Right.png" alt="arrow" width={14} height={14} />
            </div>
          </div>
        </div>

        {/* الصورتين الصغيرتين */}
        <div className="flex flex-col gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden">
              <Image
                src={`/blog${i + 1}.png`}
                alt={`Blog ${i + 1}`}
                width={500}
                height={500}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#45CDF7] opacity-20"></div>
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-[#3366FF] font-semibold text-sm mb-1">
                  December 15, 2024
                </p>
                <h3 className="text-white font-bold text-sm max-w-xs mb-2">
                  Highlight: benefits of routine dental check-ups in children
                  under 12 years old
                </h3>
                <div className="flex items-center gap-2 text-[#5C85FF] font-semibold cursor-pointer text-sm">
                  <span>Read More</span>
                  <Image src="/Right.png" alt="arrow" width={14} height={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
