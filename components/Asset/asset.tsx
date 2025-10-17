"use client";
import Image from "next/image";

export default function AssetSection() {
  return (
    <section className="relative max-w-[1400px] mx-4 sm:mx-auto bg-[#C7F0FD] rounded-2xl mt-10 md:mt-32 mb-20 overflow-visible">
      {/* نسخة الموبايل */}
      <div className="block md:hidden px-8 py-10 text-center flex flex-col items-center relative overflow-hidden">
        <p className="text-[#FF9140] text-sm font-semibold mb-2">
          Book Dental Appointment
        </p>

        <h2 className="text-3xl font-bold leading-tight text-gray-900 mb-4">
          Get <span className="text-[#0047FF]">10%-Off</span> Your <br />
          First Visit
        </h2>

        <p className="text-gray-700 text-base mb-6 max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>

         <button className="flex items-center justify-center gap-3 bg-[#3366FF] text-white px-5 py-2 rounded-full text-[14px] md:text-[15px] font-[var(--font-jakarta)] font-semibold tracking-[0.15em] hover:bg-blue-600 transition">
            BOOK NOW
            <Image
              src="/Right.png"
              alt="Arrow Right"
              width={18}
              height={18}
              className="invert brightness-0 contrast-100 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

        {/* الصور فوق بعض */}
        <div className="relative mt-10 w-[320px] h-[420px] flex justify-center items-end">
          {/* البيضاوية (الخلفية) */}
          <div className="absolute inset-0 flex justify-center">
            <Image
              src="/Oval.png"
              alt="Background Oval"
              width={600}
              height={600}
              className="object-contain opacity-90 translate-y-[40px] translate-x-[-30px] scale-110"
            />
          </div>

          {/* الصورة الكبيرة */}
          <Image
            src="/Asset.png"
            alt="Dental Appointment"
            width={260}
            height={260}
            className="object-contain z-10 relative translate-y-[40px]"
          />
        </div>
      </div>

      {/* نسخة الديسكتوب */}
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between gap-10 px-20 sm:px-16 py-11 relative">
        {/* الجزء النصي */}
        <div className="flex-1 text-left">
          <p className="text-[#FF9140] text-base font-semibold mb-2 pb-5 ">
            Book Dental Appointment
          </p>

          <h2 className="text-6xl font-bold leading-tight text-gray-900 mb-4">
            Get <span className="text-[#0047FF]">10%-Off</span> Your <br />
            First Visit
          </h2>

          <p className="text-gray-700 text-lg max-w-md mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>

          <button className="flex items-center justify-center gap-3 bg-[#3366FF] text-white px-5 py-2 rounded-full text-[14px] md:text-[15px] font-[var(--font-jakarta)] font-semibold tracking-[0.15em] hover:bg-blue-600 transition">
            BOOK NOW
            <Image
              src="/Right.png"
              alt="Arrow Right"
              width={18}
              height={18}
              className="invert brightness-0 contrast-100 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* الصورة + الشكل البيضاوي */}
        <div className="absolute top-[-20px] right-[-5px]">
          <div className="relative">
            <Image
              src="/Asset.png"
              alt="Dental Appointment"
              width={290}
              height={290}
              className="object-contain relative z-10"
              priority
            />
            <div className="absolute bottom-[-300px] left-[100px] transform -translate-x-1/2 w-[580px] h-[1000px] z-0">
              <Image
                src="/Oval.png"
                alt="Background Oval"
                fill
                className="object-contain opacity-95 drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
