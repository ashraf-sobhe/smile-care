"use client";
import Image from "next/image";

export default function AboutAboutSection() {
  return (
    <section id="about" className="w-full bg-white px-6 sm:px-12 lg:px-20 py-16">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">

        {/* الصورة */}
        <div className="w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[500px] relative">
          <Image
            src="/About.png"
            alt="About"
            fill
            className="object-contain"
          />
        </div>

        {/* المحتوى النصي */}
        <div className="w-full md:w-1/2 flex flex-col justify-start pt-4 md:pt-15 px-2 md:px-0">

          {/* نص صغير */}
          <p className="text-[#FF9140] text-xs md:text-sm font-semibold mb-2 pb-3">
            About us
          </p>

          {/* العنوان */}
          <h2 className="text-[28px] sm:text-[32px] md:text-[48px] font-bold mb-3 leading-[36px] md:leading-[58px] font-serif">
            Your <span className="text-[#5C85FF]">trusted partner</span> for dental health
          </h2>

          {/* الباراجراف */}
          <p className="text-sm md:text-base text-gray-700 mb-4 pb-3 pt-3">
            Our team is dedicated to providing the best possible dental care for you.
            A healthy smile is a happy smile – we help you achieve both!
          </p>

          {/* الأربع نقاط */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 mb-4 pb-3">
            {["Modern Equipment", "Comfortable Clinic", "Easy Online Appointment", "Always Monitored"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 md:w-4 h-5 md:h-4 bg-[#3366FF] rounded-full">
                  <Image src="/checkmark.png" alt="check" width={12} height={12} />
                </div>
                <span className="text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* Read More */}
          <div className="flex items-center gap-2 text-[#5C85FF] font-semibold cursor-pointer text-sm md:text-base">
            <span>Read More</span>
            <Image src="/Right.png" alt="arrow" width={14} height={14} />
          </div>

        </div>

      </div>
    </section>
  );
}
